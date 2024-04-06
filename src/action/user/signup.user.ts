"use server";
import { z } from "zod";
import user from "@/models/user";
import { lucia } from "@/utils/auth";
import { connectToDB } from "@/utils/db";
import bcrypt from 'bcrypt';

export const signUp = async ({ password, username, email }: { password: string, username: string, email: string }) => {
    try {
        await connectToDB();
        const SignupParamsSchema = z.object({
            password: z.string().min(6),
            username: z.string(),
            email: z.string().email()
        });

        const existingUser = await user.findOne({ email: email });
        if (existingUser) {
            throw new Error("Email already exists");
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        SignupParamsSchema.parse({ password, username, email });
        const userData = await user.create({
            username,
            password: hashedPassword,
            email
        });

        // const session = await lucia.createSession(userData._id, {});
        // const sessionCookie = lucia.createSessionCookie(session.id);
        // cookies().set(
        //     sessionCookie.name,
        //     sessionCookie.value,
        //     sessionCookie.attributes
        // );
        return { message: "Account created successfully!" };
    } catch (error:any) {
        console.log(error.message);
        throw new Error(error.message);
    }
}