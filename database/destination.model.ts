import { Schema, model, Document, models } from "mongoose";

export interface IDestination extends Document {
  judul: string;
  deskripsi: string;
  gambar: string;
  tags: string[];
}

const DestinationSchema = new Schema<IDestination>({
  judul: { required: true, type: String },
  deskripsi: { required: true, type: String },
  gambar: { required: true, type: String },
  tags: [{ type: String }],
});

const Destination =
  models.Destination || model<IDestination>("Destination", DestinationSchema);

export default Destination;
