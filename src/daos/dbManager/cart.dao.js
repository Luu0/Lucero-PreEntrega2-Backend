import { CartModel } from "../../models/cart.model.js";

class CartDao {
  async findCart() {
    return await CartModel.find();
  }

  async findById(_id) {
    return await CartModel.findById(_id);
  }

  async createCart(cart) {
    return await CartModel.create(cart);
  }

  async updateProducts(cid,cart){
    return await CartModel.findByIdAndUpdate(cid, cart)
}
  
  async deleteCart(_id) {
    return await CartModel.deleteOne({ _id });
  }
}

export default new CartDao();