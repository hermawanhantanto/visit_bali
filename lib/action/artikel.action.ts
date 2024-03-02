"use server";
import {
  CreateArtikelParams,
  GetAllArtikelParams,
  UpvoteArtikelParams,
  ViewArtikelParams,
} from "@/types";
import { connectToDatabase } from "../mongoose";
import Artikel from "@/database/artikel.model";
import User from "@/database/user.model";
import { FilterQuery } from "mongoose";
import { revalidatePath } from "next/cache";
import Komentar from "@/database/komentar.model";

export async function createArtikel(params: CreateArtikelParams) {
  try {
    await connectToDatabase();
    const { judul, penulis, deskripsi, gambar } = params;
    const artikel = Artikel.create({ judul, penulis, deskripsi, gambar });
    return artikel;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getAllArtikel(params: GetAllArtikelParams) {
  try {
    await connectToDatabase();
    const { page = 1, filter, q } = params;

    const query: FilterQuery<typeof Artikel> = {};
    let sort = {};
    const skipAmount = (page - 1) * 10;

    switch (filter) {
      case "terbaru":
        sort = { createdAt: -1 };
        break;
      case "terpopuler":
        sort = { views: -1 };
        break;
      case "terfavorit":
        sort = { likes: -1 };
        break;
      default:
        break;
    }

    const sumArtikel = await Artikel.countDocuments(query);

    const artikel = await Artikel.find()
      .populate({
        path: "penulis",
        model: User,
      })
      .sort(sort)
      .limit(8)
      .skip(skipAmount);

    return { artikel, sumArtikel };
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getArtikelById(id: string, page: number) {
  try {
    await connectToDatabase();
    const artikel = await Artikel.findById(id)
      .populate({
        path: "penulis",
        model: User,
      })
      .populate({
        path: "komentar",
        model: "Komentar",
        populate: {
          path: "penulis",
          model: User,
        },
        options: {
          limit: 5,
          skip: (page - 1) * 5,
        },
      });
    if (!artikel) throw new Error("Artikel tidak ditemukan");

    const countKomentar = await Komentar.countDocuments({ artikel: id });

    return { artikel, countKomentar };
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function upvoteArtikel(params: UpvoteArtikelParams) {
  try {
    await connectToDatabase();
    const { artikelId, userId, path } = params;
    const artikel = await Artikel.findById(artikelId);
    if (!artikel) throw new Error("Artikel tidak ditemukan");
    if (artikel.likes.includes(userId)) {
      await Artikel.findByIdAndUpdate(artikelId, {
        $pull: { likes: userId },
      });
    } else {
      await Artikel.findByIdAndUpdate(artikelId, {
        $push: { likes: userId },
      });
    }
    revalidatePath(path);
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function viewArtikel(params: ViewArtikelParams) {
  try {
    await connectToDatabase();
    const { artikelId } = params;
    await Artikel.findByIdAndUpdate(artikelId, {
      $inc: { views: 1 },
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
}
