export const mappedProduct = (products = []) =>
  products.map(
    ({
      id,
      image,
      brand,
      model,
      price,
      cpu,
      ram,
      os,
      screen_size,
      battery,
      cameras,
      dimensions,
      weight
    }) => ({
      id,
      brand,
      model,
      image,
      price,
      details: {
        cpu,
        ram,
        os,
        screen_size,
        battery,
        cameras,
        dimensions,
        weight
      }
    })
  )
