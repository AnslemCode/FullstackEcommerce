import express from "express";
import productsRoutes from "./routes/productsRoutes";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/products", productsRoutes);

app.listen(PORT, () => {
  console.log(`Server is listening on PORT ${PORT}`);
});
