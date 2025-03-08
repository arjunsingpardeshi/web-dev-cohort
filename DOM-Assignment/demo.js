const products = [
    { name: "sports car" },
    { name: "laptop" },
    { name: "phone" },
  ];
  
  
  const productsWithPrice = products.map((product) => {
    return { ...product, price: 100 };
  });
  console.log(productsWithPrice);
  