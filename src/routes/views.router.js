import { Router } from "express";
import productDao from "../daos/dbManager/product.dao.js";
const router = Router();

router.get('/',async (req,res)=>{
  const { limit,page,query,sort } = req.query
  const productos = await productDao.findProduct(limit, page, query, sort);

  res.render("products",{productos})
})

router.get("/realtimeproducts",(req,res)=>{
  res.render("products.hbs")
});

router.get("/chat",(req,res)=>{
  res.render("chat.hbs");
});

export default router