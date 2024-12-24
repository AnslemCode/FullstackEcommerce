import { Request, Response } from "express";
import { db } from "../db/index";
import { productsTable } from "../db/productsSchema";
import { eq } from "drizzle-orm";
export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await db.select().from(productsTable);
    res.json(products);
  } catch (e) {
    res.status(500).send(e);
  }
};

export const getProductById = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const [product] = await db
      .select()
      .from(productsTable)
      .where(eq(productsTable.id, id));
    if (!product) {
      res.status(404).send("Product not found");
    } else {
      res.status(201).json(product);
    }
  } catch (e) {
    res.status(500).send(e);
  }
};

export const createProduct = async (req: Request, res: Response) => {
  try {
    const [product] = await db
      .insert(productsTable)
      .values(req.body)
      .returning();
    res.status(201).json(product);
  } catch (e) {
    res.status(500).send(e);
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const updatedFields = req.body;
    const [product] = await db
      .update(productsTable)
      .set(updatedFields)
      .where(eq(productsTable.id, id))
      .returning();

    if (product) {
      res.json(product);
    } else {
      res.status(404).send({ message: "Product not found" });
    }
  } catch (e) {
    res.status(500).send(e);
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const [deletedProduct] = await db
      .delete(productsTable)
      .where(eq(productsTable.id, id))
      .returning();
    if (!deletedProduct) {
      res.status(404).send("Product not found");
    }
    res.status(201).json(deletedProduct);
  } catch (e) {
    res.status(500).send(e);
  }
};
