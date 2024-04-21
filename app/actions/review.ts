"use server";

import { db } from "@/lib/db";
import { Review } from "@prisma/client";

type ReviewToCreate = Omit<Review, "createdAt" | "updatedAt" | "id">;

/**
 * Creates a review in the database.
 * @param review - The review object to create.
 */
export const createReview = async (review: ReviewToCreate) => {
  await db.review.create({
    data: review,
  });
};

/**
 * Updates a review in the database.
 * @param review - The review object to update.
 */
export const deleteReview = async (id: string) => {
  await db.review.delete({
    where: { id },
  });
};

type ReviewToEdit = Omit<Review, "createdAt" | "updatedAt" | "matchId">;

/**
 * Updates a review in the database.
 * @param review - The review object to update.
 */
export const updateReview = async (review: ReviewToEdit) => {
  await db.review.update({
    where: { id: review.id },
    data: review,
  });
};
