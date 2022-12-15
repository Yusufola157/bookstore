import cloudinary from "../config/cloudinary";
import { Request, Response } from "express";
import bookModel from "../model/bookModel";

const postBooks = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { arthur, tittle, summary } = req.body;
    const cloudImage = await cloudinary.uploader.upload(req?.file!.path);
    const isbn1 = Math.floor(Math.random() * 10000);
    const isbn2 = Math.floor(Math.random() * 10000);
    const isbn3 = Math.floor(Math.random() * 10000);
    const isbn4 = Math.floor(Math.random() * 10000);
    const postB = await bookModel.create({
      arthur,
      arthurImage: arthur.charAt(0).toUpperCase(),
      coverImage: cloudImage.secure_url,
      tittle,
      views: [],
      summary,
      ISBN: `${isbn1}-${isbn2}-${isbn3}-${isbn4}`,
    });
    return res.status(201).json({
      message: "here is the data",
      data: postB,
    });
  } catch (error) {
    return res.status(400).json({
      message: "error",
    });
  }
};
const UploadView = async (req: Request, res: Response): Promise<Response> => {
  try {
    const UploadsV = await bookModel.findByIdAndUpdate(req.params.id, {
      $push: { views: req.body.ip },
    });
    return res.status(201).json({
      message: "here is the data",
    });
  } catch (error) {
    return res.status(401).json({
      message: "no data",
    });
  }
};
const getAll = async (req: Request, res: Response): Promise<Response> => {
  try {
    const getAl = await bookModel.find();
    return res.status(201).json({
      message: "here is the data",
      data: getAl,
    });
  } catch (error) {
    return res.status(201).json({
      message: "erro",
      data: error,
    });
  }
};
const getOne = async (req: Request, res: Response): Promise<Response> => {
  try {
    const getAl = await bookModel.findById(req.params.id);
    return res.status(201).json({
      message: "here is the one",
      data: getAl,
    });
  } catch (error) {
    return res.status(201).json({
      message: "erro",
      data: error,
    });
  }
};
export { getAll, getOne, postBooks, UploadView };
