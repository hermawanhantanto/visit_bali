import { Schema, model, models } from "mongoose";

export interface IKomentar extends Document {
  artikel: Schema.Types.ObjectId;
  penulis: Schema.Types.ObjectId;
  komentar: string;
  createdAt: Date;
}

const KomentarSchema = new Schema<IKomentar>({
  artikel: { required: true, type: Schema.Types.ObjectId, ref: "Artikel" },
  penulis: { required: true, type: Schema.Types.ObjectId, ref: "User" },
  komentar: { required: true, type: String },
  createdAt: { required: true, type: Date, default: Date.now },
});

const Komentar = models.Komentar || model<IKomentar>("Komentar", KomentarSchema);

export default KomentarSchema;