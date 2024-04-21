"use server";

import { db } from "@/lib/db";
import { Match } from "@prisma/client";
import { revalidatePath } from "next/cache";

type MatchToCreate = Omit<Match, "createdAt" | "updatedAt" | "result" | "id">;

/**
 * Creates a match in the database.
 * @param match - The match object to create.
 */
export const createMatch = async (match: MatchToCreate) => {
  await db.match
    .create({
      data: match,
    })
    .then(() => {
      revalidatePath("/");
    })
    .catch((error) => {
      console.error("Error creating match:", error);
    });
};
