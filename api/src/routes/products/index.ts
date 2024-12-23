import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("All Products");
});

router.get("/:id", (req, res) => {
  res.send("Single Product");
});

router.post("/", (req, res) => {
  res.send("Create Product");
});

export default router;
