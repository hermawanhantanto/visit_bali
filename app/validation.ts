import { z } from "zod";

export const artikelSchema = z.object({
  judul: z.string().min(5, "Judul minimal 5 karakter"),
  deskripsi: z.string().min(10, "Deskripsi minimal 10 karakter"),
  gambar: z.string().min(1, "Masukkan gambar"),
});

export const komentarSchema = z.object({
  komentar: z.string().min(5, "Komentar minimal 5 karakter"),
});
