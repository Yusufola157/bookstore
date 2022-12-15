import mongoose from "mongoose";

interface Books {
  arthur: string;
  arthurImage: string;
  coverImage: string;
  tittle: string;
  views: [];
  summary: string;
  ISBN: string;
}
interface iBooks extends Books, mongoose.Document {}
const BookSch = new mongoose.Schema(
  {
    arthur: String,
    arthurImage: String,
    coverImage: String,
    tittle: String,
    views: [],
    summary: String,
    ISBN: String,
  },
  { timestamps: true }
);
export default mongoose.model<iBooks>("modelBook", BookSch);
