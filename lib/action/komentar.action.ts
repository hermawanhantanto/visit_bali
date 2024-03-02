"use server";

import { CreateKomentarParams } from "@/types";
import { connectToDatabase } from "../mongoose";
import Komentar from "@/database/komentar.model";
import { revalidatePath } from "next/cache";
import Artikel from "@/database/artikel.model";

export async function createKomentar(params: CreateKomentarParams) {
  try {
    await connectToDatabase();
    const { komentar, artikelId, userId, path } = params;
    const komen = await Komentar.create({
      komentar,
      artikel: artikelId,
      penulis: userId,
    });
    if (!komen) throw new Error("Komentar gagal dibuat");
    await Artikel.findByIdAndUpdate(artikelId, {
      $push: { komentar: komen._id },
    });
    revalidatePath(path);
  } catch (error) {
    console.log(error);
    throw error;
  }
}
