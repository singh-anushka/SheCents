"use server";

import db from "@/db/drizzle";
import { getCourseById, getUserProgress } from "@/db/queries";
import { userProgress } from "@/db/schema";
import { auth, currentUser } from "@clerk/nextjs";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

/**
 * Server action to create or update userProgress and will throw an error
 * if there is no userId, currentUser, or course
 * @param courseId accepts a courseId of type number
 */
export const upsertUserProgress = async (courseId: number) => {
  const { userId } = await auth();
  const user = await currentUser();

  if (!userId || !user) {
    throw new Error("Unauthorized");
  }

  const course = await getCourseById(courseId);

  if (!course) {
    throw new Error("Course not found");
  }

  // TODO: Enable once units and lessons are added
  // if (!course.units.length || !course.units[0].lessons.length) {
  //   throw new Error("Course is empty");
  // }

  const existingUserProgress = await getUserProgress();

  if (existingUserProgress) {
    await db.update(userProgress).set({
      activeCourseId: courseId,
      // Update the user's name and image when there is a change in user progress
      // Since we are using Third Party authentication service and do not have
      // webhook set up to synchronize the change in username and image for this
      // project, we will change them when we update the user progress.
      userName: user.firstName || "User",
      userImageSrc: user.imageUrl || "/mascot.svg",
    });

    // Since we are using cache in our db queries,
    // we need to revalidate every time there is a change
    revalidatePath("/courses");
    revalidatePath("/learn");
    redirect("/learn");
  }

  await db.insert(userProgress).values({
    userId,
    activeCourseId: courseId,
    // Update the user's name and image when we create a new user progress
    // Since we are using Third Party authentication service and do not have
    // webhook set up to synchronize the change in username and image for this
    // project, we will change them when we create the user progress.
    userName: user.firstName || "User",
    userImageSrc: user.imageUrl || "/mascot.svg",
  });

  // Since we are using cache in our db queries,
  // we need to revalidate every time there is a change
  revalidatePath("/courses");
  revalidatePath("/learn");
  redirect("/learn");
};
