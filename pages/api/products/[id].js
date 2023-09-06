import { getProductById } from "@/services/productServices";

export default function handler(request, response) {
  const product = getProductById(request.query.id);
  //  console.log(getAllProducts());
  response.status(200).json(product);
}
