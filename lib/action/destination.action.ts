"use server";
import Destination from "@/database/destination.model";
import { connectToDatabase } from "../mongoose";
import { GetAllDestinationParams, GetDestinationByIdParams } from "@/types";
import { FilterQuery } from "mongoose";

export async function getAllDestinations(params: GetAllDestinationParams) {
  try {
    await connectToDatabase();

    const { filter, page = 1, q } = params;

    const query: FilterQuery<typeof Destination> = {};
    const skipAmount = (page - 1) * 8;

    if (filter && filter !== "Semua") {
      query.$or = [{ tags: filter }];
    }
    const size = await Destination.countDocuments(query);
    const destinations = await Destination.find(query)
      .limit(8)
      .skip(skipAmount);
    return { destinations, size };
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getDestinationById(params: GetDestinationByIdParams) {
  try {
    await connectToDatabase();
    const { id } = params;
    const destination = await Destination.findById(id);
    if (!destination) {
      throw new Error("Destinasi tidak ditemukan!");
    }
    return { destination };
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getCarouselDestination() {
  try {
    await connectToDatabase();
    const destinations = await Destination.aggregate([
      { $project: { _id: -1, judul: 1, gambar: 1, deskripsi: 1, tags: 1 } },
      { $limit: 8 },
    ]);
    return destinations;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
