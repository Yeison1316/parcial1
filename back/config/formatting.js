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