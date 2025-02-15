import { z } from "zod";

export const employeeSchema = z.object({
  id: z.number().optional(),
  name: z.string().min(3, "Nama User harus minimal 3 karakter").max(100),
  unit: z.string().min(3, "Nama Unit harus minimal 3 karakter").max(100),
  site: z.enum(["Bintaro", "Puri", "Pondok Indah"]),
});

export type EmployeeAccess = z.infer<typeof employeeSchema>;



// Schema validasi menggunakan Zod
export const employeeAccessSchema = z.object({
  id: z.number(), // ID unik untuk setiap karyawan
  unit: z.string().min(3, "Nama Unit harus minimal 3 karakter").max(100),
  employeeName: z.string().min(3, "Nama User harus minimal 3 karakter").max(100),
  site: z.enum(["Bintaro", "Puri", "Pondok Indah"]), // Enum untuk pilihan site
});

// TypeScript Type Inference dari Schema
export type EmployeeAccessRequest = z.infer<typeof employeeAccessSchema>;
