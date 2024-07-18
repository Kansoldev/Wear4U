"use server";

export async function getAllProducts() {
  try {
    const res = await fetch(
      ` https://timbu-get-all-products.reavdev.workers.dev?organization_id=732bbf6844ae44d38f267592f5fc24a8&Apikey=${process.env.TIMBU_API_KEY}&Appid=02XVAXBXJIHEHKA`,
      {
        next: {
          revalidate: 3600,
        },
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
    return error;
  }
}
