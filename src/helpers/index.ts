export const getData = async () => {
  const res = await fetch("http://localhost:3333/products");
  if (!res.ok) {
    throw new Error("Falha ao buscar os dados");
  }
  return res.json();
};

export const getSingleProduct = async (id: number) => {
  const items = await getData();
  const singleItem = items.find((product: any) => product.id === id);
  return singleItem;
};