import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

const port = 3000;

const ProductsSchema = new mongoose.Schema({
  title: String,
  image: String,
  price: Number,
});

const ProductsModel = mongoose.model("Products", ProductsSchema);

app.get("/app",async (req, res) => {
    const products = await ProductsModel.find()
    res.send(products)
  res.send(products);
});

app.get("/app/:id",async (req, res) => {
    const {id} = req.params
    const products = await ProductsModel.findById(id)
    res.send(products)
});


app.post("/app",async (req, res) => {
    const obj = req.body
    const product = new ProductsModel(obj)
    await product.save()
    res.send(product)
});


app.put("/app/:id",async (req, res) => {
    const {id} = req.params
    const obj = req.body
    const products = await ProductsModel.findByIdAndUpdate(id,obj)
    res.send(products)
});

app.delete("/app/:id",async (req, res) => {
    const {id} = req.params
    const products = await ProductsModel.findByIdAndDelete(id)
    res.send(products)
});

mongoose
  .connect("mongodb+srv://yusif:yusif@yusif.5usnncq.mongodb.net/")
  .then(() => console.log("Connected!"))
  .catch(() => console.log("Baglanmadi"));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
