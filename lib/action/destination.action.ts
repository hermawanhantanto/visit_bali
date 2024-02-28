"use server";
import Destination from "@/database/destination.model";
import { connectToDatabase } from "../mongoose";
import { GetAllDestinationParams } from "@/types";
import { FilterQuery } from "mongoose";

export async function getAllDestinations(params: GetAllDestinationParams) {
  try {
    await connectToDatabase();

    const { filter, page, q } = params;

    const query: FilterQuery<typeof Destination> = {};

    if (filter && filter !== "Semua") {
      query.$or = [{ tags: filter }];
    }
    const size = await Destination.countDocuments();
    const destinations = await Destination.find(query).limit(8);
    return { destinations, size };
  } catch (error) {
    console.log(error);
    throw error;
  }
}
