import ViewImage from "../config/multer";
import { Router } from "express";
import { Getall, postBook } from "../Controller/controller";
const router = Router();

router.route("/postBook").post(ViewImage, postBook);
router.route("/getall").get(Getall);
export default router;
