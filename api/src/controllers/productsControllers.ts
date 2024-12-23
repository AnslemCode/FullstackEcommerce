import { Request, Response } from "express";
export const getProducts = (req: Request, res: Response) => {
  res.send("All Products");
};

export const getProductById = (req: Request, res: Response) => {
  res.send("getProductById");
};

export const createProduct = (req: Request, res: Response) => {
  res.send("createProduct");
};

export const updateProduct = (req: Request, res: Response) => {
  res.send("updateProduct");
};

export const deleteProduct = (req: Request, res: Response) => {
  res.send("deleteProduct");
};
