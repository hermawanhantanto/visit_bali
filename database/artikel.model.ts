import { Schema, model, Document, models } from "mongoose";

export interface IArtikel extends Document {
  judul: string;
  deskripsi: string;
  gambar: string;
  views: number;
  likes: Schema.Types.ObjectId[];
  komentar: Schema.Types.ObjectId[];
  penulis: Schema.Types.ObjectId;
  createdAt: Date;
}

const ArtikelSchema = new Schema<IArtikel>({
  judul: { required: true, type: String },
  deskripsi: { required: true, type: String },
  gambar: { required: true, type: String },
  penulis: { required: true, type: Schema.Types.ObjectId, ref: "User" },
  views: { required: true, type: Number, default: 0 },
  likes: [{ type: Schema.Types.ObjectId, ref: "User" }],
  komentar: [{ type: Schema.Types.ObjectId, ref: "Komentar" }],
  createdAt: { required: true, type: Date, default: Date.now },
});

const Artikel = models.Artikel || model<IArtikel>("Artikel", ArtikelSchema);

export default Artikel;
