import views from "../config/multer";
import { Router } from "express";
const router = Router();
import {
  getAll,
  getOne,
  postBooks,
  UploadView,
} from "../Controller/controller";

router.route("/postBook").post(views, postBooks);
router.route("/getBook").get(getAll);
router.route("/getOneBook/:id").get(getOne);
router.route("/updateViews/:id").patch(UploadView);
export default router;
