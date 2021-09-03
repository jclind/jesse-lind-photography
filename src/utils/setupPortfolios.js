const setupPortfolios = nodes => {
  const allPortfolios = {}

  nodes.forEach(node => {
    const portfolio = node.portfolio
    const image = node.image
    if (portfolio && !allPortfolios[portfolio]) {
      allPortfolios[portfolio] = image
    }
  })

  const newPortfolios = Object.entries(allPortfolios).sort((a, b) => {
    const [first] = a
    const [second] = b
    return first.localeCompare(second)
  })
  console.log(allPortfolios, newPortfolios)
  return newPortfolios
}

export default setupPortfolios
