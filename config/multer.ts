import multer from "multer";
import { Request } from "express";
type DestinationCallaBack = (error: Error | null, destination: string) => void;
type FilenameCallBack = (error: Error | null, filename: string) => void;
const storage = multer.diskStorage({
  destination: (
    req: Request,
    file: Express.Multer.File,
    cb: DestinationCallaBack
  ) => {
    cb(null, "uploads");
  },
  filename: (req: Request, file: Express.Multer.File, cb: FilenameCallBack) => {
    cb(null, file.originalname);
  },
});
const ViewImage = multer({
  storage: storage,
}).single("coverImage");
export default ViewImage;
