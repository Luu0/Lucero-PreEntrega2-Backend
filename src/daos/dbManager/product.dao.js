import { query } from "express";
import { postModel } from "../../models/product.model.js";

class ProductDao {
  async findProduct(limit=10, page =1, query, sort) {
    let consulta={}
    if(query!=undefined){
      consulta[query.split(":")[0]]=query.split(":")[1]
    }
    return await postModel.paginate(consulta,{limit:limit,page:page,sort:sort==undefined?{}:{price:Number(sort)}})
    
    
   // return await postModel.find();
  }

  async createProduct(post) {
    return await postModel.create(post);
  }

  async updateProduct(_id, post) {
    return await postModel.findOneAndUpdate({ _id }, post);
  }

  async deleteProduct(_id) {
    return await postModel.findByIdAndDelete({ _id });
  }

  async getProductById(id){
    return await postModel.findById(id)
}
}

export default new ProductDao;