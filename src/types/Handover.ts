import { z } from "zod";

// Schema validasi menggunakan Zod
export const handoverSchema = z.object({
  id: z.number(), // ID unik untuk setiap request, opsional karena bisa auto-generate
  requestId: z.string().min(5, "Request ID harus minimal 5 karakter").max(20),
  user: z.string().min(3, "Nama User harus minimal 3 karakter").max(100),
  assignTo: z.string().min(3, "Nama Assign To harus minimal 3 karakter").max(100),
});

// TypeScript Type Inference dari Schema
export type HandoverRequest = z.infer<typeof handoverSchema>;
