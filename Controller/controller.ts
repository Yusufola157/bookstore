import cloudinary from "../config/cloudinary";
import { Request, Response } from "express";
import { request } from "http";
import bookModel from "../model/bookModel";

const postBook = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { tittle, category, summary, author } = req.body;
    const cloudImage = await cloudinary.uploader.upload(req?.file!.path);
    const isbn = Math.floor(Math.random() * 10000);
    const PostB = await bookModel.create({
      tittle,
      category,
      summary,
      author,
      ISBN: `${isbn}-${isbn}-${isbn}`,
      coverImage: cloudImage.secure_url,
      authorImage: author.charAt(0).toUpperCase(),
    });
    return res.status(201).json({
      message: "posted successfully",
    });
  } catch (error) {
    return res.status(400).json({
      message: "error occured",
    });
  }
};
const Getall = async (req: Request, res: Response): Promise<Response> => {
  try {
    const Getall = await bookModel.find();
    return res.status(201).json({
      message: "here are them",
      data: Getall,
    });
  } catch (error) {
    return res.status(400).json({
      message: "error occc",
      data: error,
    });
  }
};
export { Getall, postBook };
