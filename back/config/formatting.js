export const formatProductData = (data) => {
    return data.map((product) => ({
      id: product.id,
      title: product.title,
      price: product.price,
      description: product.description,
      category: {
        id: product.category_id,
        name: product.category_name,
        image: product.category_image,
      },
      images: product.images,
    }));
  };
  export const baseProductQuery = `
  SELECT
    p.id,
    p.title,
    p.price,
    p.description,
    c.id AS category_id,
    c.name AS category_name,
    c.image_url AS category_image,
    p.images
  FROM
    products p
  JOIN
    categories c ON p.category_id = c.id
`;