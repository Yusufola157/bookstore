import multer from "multer";
import { Request } from "express";
type DestinationCallBack = (error: Error | null, destination: string) => void;
type FilenameCllBack = (error: Error | null, filename: string) => void;

const storage = multer.diskStorage({
  destination: (
    req: Request,
    file: Express.Multer.File,
    cb: DestinationCallBack
  ) => {
    cb(null, "uploads");
  },
  filename: (req: Request, file: Express.Multer.File, cb: FilenameCllBack) => {
    cb(null, file.originalname);
  },
});
const views = multer({
  storage: storage,
}).single("coverImage");
export default views;
