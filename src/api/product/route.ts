"use server";

export async function getAllProducts() {
  try {
    const res = await fetch(
      `https://api.timbu.cloud/products?organization_id=732bbf6844ae44d38f267592f5fc24a8&Apikey=9cff8f503a9a4d5aa28f6ddbe265416320240712174819475966&Appid=02XVAXBXJIHEHKA`,
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
