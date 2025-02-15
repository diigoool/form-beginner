import { z } from "zod";

export const registerFormSchema = z
  .object({
    username: z.string().min(3, { message: "Username Tidak Valid" }),
    password: z
      .string()
      .min(8, { message: "Password harus lebih dari 8 karakter" })
      .regex(/[A-Z]/, "Harus mengandung huruf besar")
      .regex(/[0-9]/, "Harus mengandung angka"),
    email: z.string().email({ message: "Email Tidak Valid" }),
    confirmPassword: z
      .string()
      .min(8, { message: "Konfirmasi Password harus lebih dari 8 karakter" })
      .regex(/[A-Z]/, "Harus mengandung huruf besar")
      .regex(/[0-9]/, "Harus mengandung angka"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password Tidak Cocok",
    path: ["confirmPassword"],
  });

export type RegisterFormSchema = z.infer<typeof registerFormSchema>;