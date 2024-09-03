"use server";

import { SignUpShchema, SignUpValues } from "@/lib/validation";
import { isRedirectError } from "next/dist/client/components/redirect";
import bcrypt from "bcrypt";
import { generateIdFromEntropySize } from "lucia";
import db from "@/lib/db";
import { redirect } from "next/navigation";
import { lucia } from "@/auth";
import { cookies } from "next/headers";

export async function signUp(
  credentials: SignUpValues
): Promise<{ error: string }> {
  try {
    const { username, email, password } = SignUpShchema.parse(credentials);

    const passwordHash = await bcrypt.hash(password, 10);

    const userId = generateIdFromEntropySize(10);

    const exisitingUsername = await db.user.findFirst({
      where: {
        username: {
          equals: username,
          mode: "insensitive",
        },
      },
    });

    if (exisitingUsername) {
      return {
        error: "username is already taken.",
      };
    }

    const exisitingEmail = await db.user.findFirst({
      where: {
        email: {
          equals: email,
          mode: "insensitive",
        },
      },
    });

    if (exisitingEmail) {
      return {
        error: "Email is already taken.",
      };
    }

    await db.user.create({
      data: {
        id: userId,
        username,
        displayName: username,
        email,
        passwordHash,
      },
    });

    const session = await lucia.createSession(userId, {});
    const sessionCookie = lucia.createSessionCookie(session.id);
    cookies().set(
      sessionCookie.name,
      sessionCookie.value,
      sessionCookie.attributes
    );

    return redirect("/");
  } catch (error) {
    if (isRedirectError(error)) throw error;
    console.log(error);
    return {
      error: "Somthing went Wrong Please try again.",
    };
  }
}
