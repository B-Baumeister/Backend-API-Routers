import { getAllProducts } from "@/services/productServices";

export default function handler(request, response) {
  console.log(getAllProducts());
  response.status(200).json(getAllProducts());
}
