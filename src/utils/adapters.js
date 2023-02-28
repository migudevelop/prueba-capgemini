export const mappedProduct = (products = []) =>
  products.map(
    ({
      id,
      thumbnail,
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
      image: thumbnail,
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
