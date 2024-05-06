import { IProducts } from "..";

export const URL = "https://fakestoreapi.com/products";

export const fetchProducts = async () => {
  "use server";
  try {
    const data = await fetch(URL);
    const res = await data.json();
    return res as IProducts[];
  } catch (e) {
    console.log(e, "actionRow");
  }
};

export const fetchProductDetail = async (slug: string) => {
  "use server";
  try {
    const URL_PARAMS = URL + `?slug=${slug}`;
    const data = await fetch(URL_PARAMS);
    const res = await data.json();
    return res as IProducts;
  } catch (e) {
    console.log(e, "actionRow");
  }
};
