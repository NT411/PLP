
export const INITIAL_PRODUCT_COUNT = 8

const APPAREL_SIZE_ORDER = ['xs', 's', 'm', 'l', 'xl', 'xxl']

const CATEGORY_COLORS = {
  bags: ['Black', 'Graphite', 'Stone', 'Ivory'],
  jackets: ['Black', 'Graphite', 'Olive', 'Brown'],
  shirts: ['Black', 'Grey', 'Navy', 'Brown'],
  hoodies: ['Black', 'Brown', 'Grey', 'Stone'],
  sweatshirts: ['Brown', 'Black', 'Stone', 'Grey'],
  pants: ['Black', 'Grey', 'Dark Blue', 'Brown'],
  shorts: ['Black', 'Brown', 'Grey', 'Stone'],
  hats: ['Black', 'Grey', 'Stone', 'Brown'],
  footwear: ['Black', 'White', 'Graphite', 'Ivory'],
  socks: ['Black', 'Grey', 'White', 'Stone'],
}

const COLOR_SWATCH_MAP = {
  black: '#101010',
  graphite: '#2a2a2a',
  stone: '#c2beb3',
  ivory: '#f1eee7',
  olive: '#4c5842',
  brown: '#705742',
  grey: '#8a8a8a',
  navy: '#223449',
  'dark blue': '#1f3554',
  white: '#f5f5f5',
}

// Source asset paths used to generate the entire product catalog programmatically.
const PRODUCT_IMAGE_PATHS = [
  'imgs/jackets/LongJackets/jacket-black-core.png',
  'imgs/jackets/LongJackets/jacket-black-long-windbreaker.png',
  'imgs/jackets/LongJackets/jacket-black-long-winter.png',
  'imgs/jackets/LongJackets/parka-brown-utility.png',
  'imgs/jackets/LongJackets/parka-grey-hooded.png',
  'imgs/jackets/LongJackets/puffer-black-long.png',
  'imgs/jackets/PufferJackets/jacket-black-bomber.png',
  'imgs/jackets/PufferJackets/jacket-black-hooded-shell.png',
  'imgs/jackets/PufferJackets/jacket-black-hooded.png',
  'imgs/jackets/PufferJackets/jacket-black-puffer-core.png',
  'imgs/jackets/PufferJackets/jacket-black-structured.png',
  'imgs/jackets/PufferJackets/puffer-black-short.png',
  'imgs/jackets/PufferJackets/puffer-brown-short.png',
  'imgs/jackets/PufferJackets/puffer-green-short.png',
  'imgs/jackets/WindBreakerJackets/black-wind-jacket.png',
  'imgs/jackets/WindBreakerJackets/jacket-black-windbreaker-2.png',
  'imgs/jackets/WindBreakerJackets/jacket-brown-windbreaker.png',
  'imgs/jackets/WindBreakerJackets/jacket-red-windbreaker.png',
  'imgs/jackets/WindBreakerJackets/jacket-white-windbreaker.png',
  'imgs/jackets/WindBreakerJackets/puffer-black-long-2.png',
  'imgs/jackets/WindBreakerJackets/puffer-black-short-2.png',
  'imgs/bags/backpack-black-classic.png',
  'imgs/bags/bag-black-shoulder.png',
  'imgs/bags/bag-black-tote.png',
  'imgs/footwear/boots-black-lug.png',
  'imgs/footwear/shoes-black-essential.png',
  'imgs/footwear/shoes-black-low.png',
  'imgs/footwear/slip-on-black-contrast.png',
  'imgs/hats/cap-black.png',
  'imgs/hats/winter-hat-black.png',
  'imgs/hats/winter-hat-grey.png',
  'imgs/hoodies/hoodie-black-classic.png',
  'imgs/hoodies/hoodie-brown-classic.png',
  'imgs/pants/Jeans/jeans-black.png',
  'imgs/pants/Jeans/jeans-blue-dark.png',
  'imgs/pants/Jeans/jeans-blue-light.png',
  'imgs/pants/Jeans/jeans-grey.png',
  'imgs/pants/Joggers/joggers-black.png',
  'imgs/pants/Joggers/joggers-brown-dark.png',
  'imgs/pants/Joggers/joggers-brown-red.png',
  'imgs/pants/Joggers/joggers-white-relaxed.png',
  'imgs/pants/Joggers/pants-black-relaxed.png',
  'imgs/pants/Joggers/pants-white-relaxed.png',
  'imgs/pants/Pants/pants-black-tailored.png',
  'imgs/shirts/NormalTishrts/t-shirt-black-basic.png',
  'imgs/shirts/NormalTishrts/t-shirt-black-elbow-sleeve.png',
  'imgs/shirts/NormalTishrts/t-shirt-brown-basic.png',
  'imgs/shirts/NormalTishrts/t-shirt-grey-basic.png',
  'imgs/shirts/OverSizedTshirts/t-shirt-black-oversized.png',
  'imgs/shirts/OverSizedTshirts/t-shirt-white-oversized.png',
  'imgs/shorts/shorts-black-relaxed.png',
  'imgs/shorts/shorts-black-sweat.png',
  'imgs/shorts/shorts-brown-sweat.png',
  'imgs/socks/dark-blue-socks.png',
  'imgs/socks/socks-black-crew.png',
  'imgs/socks/socks-black.png',
  'imgs/socks/socks-blue-crew.png',
  'imgs/socks/socks-red-crew.png',
  'imgs/socks/socks-white-long.png',
  'imgs/socks/socks.png',
  'imgs/sweatshirts/NormalSwetshirts/sweatshirt-black-classic.png',
  'imgs/sweatshirts/NormalSwetshirts/sweatshirt-black-structured.png',
  'imgs/sweatshirts/NormalSwetshirts/sweatshirt-blue-classic.png',
  'imgs/sweatshirts/NormalSwetshirts/sweatshirt-grey-classic.png',
  'imgs/sweatshirts/NormalSwetshirts/sweatshirt-white-structured.png',
  'imgs/sweatshirts/OversizedSwetshirts/sweatshirt-black-oversized.png',
  'imgs/sweatshirts/OversizedSwetshirts/sweatshirt-brown-oversized.png',
  'imgs/sweatshirts/OversizedSwetshirts/sweatshirt-dark-blue-oversized.png',
]

const CATEGORY_LABELS = {
  bags: 'Bags',
  footwear: 'Footwear',
  hats: 'Hats',
  hoodies: 'Hoodies',
  jackets: 'Jackets',
  pants: 'Pants',
  shirts: 'Shirts',
  shorts: 'Shorts',
  socks: 'Socks',
  sweatshirts: 'Sweatshirts',
}

const CATEGORY_BASE_PRICES = {
  bags: 68,
  footwear: 104,
  hats: 26,
  hoodies: 58,
  jackets: 132,
  pants: 72,
  shirts: 34,
  shorts: 38,
  socks: 12,
  sweatshirts: 52,
}

const PRODUCT_NAME_OVERRIDES = {
  'imgs/bags/backpack-black-classic.png': 'Classic Backpack',
  'imgs/bags/bag-black-shoulder.png': 'Shoulder Bag',
  'imgs/bags/bag-black-tote.png': 'Tote Bag',
  'imgs/footwear/boots-black-lug.png': 'Lug Boots',
  'imgs/footwear/shoes-black-essential.png': 'Essential Sneakers',
  'imgs/footwear/shoes-black-low.png': 'Low Shoes',
  'imgs/footwear/slip-on-black-contrast.png': 'Contrast Slip-On',
  'imgs/hats/cap-black.png': 'Black Cap',
  'imgs/hats/winter-hat-black.png': 'Winter Hat Black',
  'imgs/hats/winter-hat-grey.png': 'Winter Hat Grey',
  'imgs/hoodies/hoodie-black-classic.png': 'Black Hoodie',
  'imgs/hoodies/hoodie-brown-classic.png': 'Brown Hoodie',
  'imgs/jackets/LongJackets/jacket-black-core.png': 'Core Jacket',
  'imgs/jackets/LongJackets/jacket-black-long-windbreaker.png': 'Long Windbreaker Jacket',
  'imgs/jackets/LongJackets/jacket-black-long-winter.png': 'Long Winter Jacket',
  'imgs/jackets/LongJackets/parka-brown-utility.png': 'Utility Parka',
  'imgs/jackets/LongJackets/parka-grey-hooded.png': 'Grey Hooded Parka',
  'imgs/jackets/LongJackets/puffer-black-long.png': 'Long Puffer Black',
  'imgs/jackets/PufferJackets/jacket-black-bomber.png': 'Black Bomber Jacket',
  'imgs/jackets/PufferJackets/jacket-black-hooded-shell.png': 'Black Hooded Shell Jacket',
  'imgs/jackets/PufferJackets/jacket-black-hooded.png': 'Black Hooded Jacket',
  'imgs/jackets/PufferJackets/jacket-black-puffer-core.png': 'Core Puffer Jacket',
  'imgs/jackets/PufferJackets/jacket-black-structured.png': 'Structured Black Jacket',
  'imgs/jackets/PufferJackets/puffer-black-short.png': 'Short Puffer Black',
  'imgs/jackets/PufferJackets/puffer-brown-short.png': 'Short Puffer Brown',
  'imgs/jackets/PufferJackets/puffer-green-short.png': 'Short Puffer Green',
  'imgs/jackets/WindBreakerJackets/black-wind-jacket.png': 'Black Wind Jacket',
  'imgs/jackets/WindBreakerJackets/jacket-black-windbreaker-2.png': 'Windbreaker Jacket',
  'imgs/jackets/WindBreakerJackets/jacket-brown-windbreaker.png': 'Brown Windbreaker Jacket',
  'imgs/jackets/WindBreakerJackets/jacket-red-windbreaker.png': 'Red Windbreaker Jacket',
  'imgs/jackets/WindBreakerJackets/jacket-white-windbreaker.png': 'White Windbreaker Jacket',
  'imgs/jackets/WindBreakerJackets/puffer-black-long-2.png': 'Long Puffer Black Alt',
  'imgs/jackets/WindBreakerJackets/puffer-black-short-2.png': 'Short Puffer Black Alt',
  'imgs/pants/Jeans/jeans-black.png': 'Black Jeans',
  'imgs/pants/Jeans/jeans-blue-dark.png': 'Dark Blue Jeans',
  'imgs/pants/Jeans/jeans-blue-light.png': 'Light Blue Jeans',
  'imgs/pants/Jeans/jeans-grey.png': 'Grey Jeans',
  'imgs/pants/Joggers/joggers-black.png': 'Black Joggers',
  'imgs/pants/Joggers/joggers-brown-dark.png': 'Dark Brown Joggers',
  'imgs/pants/Joggers/joggers-brown-red.png': 'Brown Red Joggers',
  'imgs/pants/Joggers/joggers-white-relaxed.png': 'Relaxed White Joggers',
  'imgs/pants/Joggers/pants-black-relaxed.png': 'Relaxed Black Pants',
  'imgs/pants/Joggers/pants-white-relaxed.png': 'Relaxed White Pants',
  'imgs/pants/Pants/pants-black-tailored.png': 'Tailored Pants',
  'imgs/shirts/NormalTishrts/t-shirt-black-basic.png': 'Black Tee',
  'imgs/shirts/NormalTishrts/t-shirt-black-elbow-sleeve.png': 'Black Elbow Sleeve Tee',
  'imgs/shirts/NormalTishrts/t-shirt-brown-basic.png': 'Brown Tee',
  'imgs/shirts/NormalTishrts/t-shirt-grey-basic.png': 'Grey Tee',
  'imgs/shirts/OverSizedTshirts/t-shirt-black-oversized.png': 'Black Oversized Tee',
  'imgs/shirts/OverSizedTshirts/t-shirt-white-oversized.png': 'White Oversized Tee',
  'imgs/shorts/shorts-black-relaxed.png': 'Relaxed Shorts',
  'imgs/shorts/shorts-black-sweat.png': 'Black Sweat Shorts',
  'imgs/shorts/shorts-brown-sweat.png': 'Brown Sweat Shorts',
  'imgs/socks/dark-blue-socks.png': 'Dark Blue Socks',
  'imgs/socks/socks-black-crew.png': 'Black Crew Socks',
  'imgs/socks/socks-black.png': 'Black Socks',
  'imgs/socks/socks-blue-crew.png': 'Blue Crew Socks',
  'imgs/socks/socks-red-crew.png': 'Red Crew Socks',
  'imgs/socks/socks-white-long.png': 'White Long Socks',
  'imgs/socks/socks.png': 'Essential Socks',
  'imgs/sweatshirts/NormalSwetshirts/sweatshirt-black-classic.png': 'Classic Black Sweatshirt',
  'imgs/sweatshirts/NormalSwetshirts/sweatshirt-black-structured.png': 'Structured Black Sweatshirt',
  'imgs/sweatshirts/NormalSwetshirts/sweatshirt-blue-classic.png': 'Classic Blue Sweatshirt',
  'imgs/sweatshirts/NormalSwetshirts/sweatshirt-grey-classic.png': 'Classic Grey Sweatshirt',
  'imgs/sweatshirts/NormalSwetshirts/sweatshirt-white-structured.png': 'Structured White Sweatshirt',
  'imgs/sweatshirts/OversizedSwetshirts/sweatshirt-black-oversized.png': 'Oversized Black Sweatshirt',
  'imgs/sweatshirts/OversizedSwetshirts/sweatshirt-brown-oversized.png': 'Oversized Brown Sweatshirt',
  'imgs/sweatshirts/OversizedSwetshirts/sweatshirt-dark-blue-oversized.png': 'Oversized Dark Blue Sweatshirt',
}

const CATEGORY_DESCRIPTIONS = {
  bags: 'Daily carry built around a reduced silhouette and functional compartments for essentials.',
  jackets: 'Outerwear cut for structure, warmth, and a sharper monochrome profile.',
  shirts: 'Essential tops with clean lines and an everyday fit that layers easily.',
  hoodies: 'Relaxed fleece staples focused on comfort, volume, and understated detail.',
  sweatshirts: 'Easy midweight layers with a stripped-back finish and soft structure.',
  pants: 'Versatile bottoms with straightforward tailoring and neutral styling.',
  shorts: 'Minimal shorts shaped for lighter seasonal rotation and easy movement.',
  hats: 'Quiet accessories that complete the uniform without adding noise.',
  footwear: 'Low-noise footwear with durable materials and a clean outline.',
  socks: 'Everyday finishing pieces designed to stay simple and dependable.',
}

const CATEGORY_MATERIALS = {
  bags: 'Dense woven shell, reinforced seams, and a durable lining for daily use.',
  jackets: 'Structured shell fabric, tonal lining, and insulated layering where needed.',
  shirts: 'Soft cotton jersey with a clean finish and easy everyday feel.',
  hoodies: 'Heavy brushed fleece with rib trims and a relaxed body.',
  sweatshirts: 'Midweight cotton blend with a soft interior and clean neckline.',
  pants: 'Durable twill or denim selected for structure and repeat wear.',
  shorts: 'Comfort-weight fabric with a lighter hand for warmer days.',
  hats: 'Knits and cotton blends chosen for comfort and simple shape retention.',
  footwear: 'Leather or coated uppers paired with durable rubber soles.',
  socks: 'Ribbed stretch knit designed for all-day comfort.',
}

export const formatCurrency = (value) => `$${value}`

// Normalizes labels that come from slug-like values into display text.
const toTitleCase = (value) => value.replace(/\b\w/g, (letter) => letter.toUpperCase())

export function getProductSizesForCategory(category) {
  // Returns numeric sizes for footwear and letter sizes for apparel.
  if (category === 'footwear') {
    return ['40', '41', '42', '43']
  }

  return ['S', 'M', 'L', 'XL']
}

export function getProductColorsForCategory(category) {
  return CATEGORY_COLORS[category] || ['Black', 'Grey', 'Stone', 'White']
}

export function getCategoryMeta(category) {
  if (!category) {
    return {
      label: 'All Products',
      description: 'Explore the full collection across every category in the store.',
    }
  }

  return {
    label: CATEGORY_LABELS[category] || toTitleCase(category),
    description: CATEGORY_DESCRIPTIONS[category] || 'Category description coming soon.',
  }
}

export function getSwatchColor(colorName) {
  // Maps a display color name to a swatch hex, with gray as the fallback.
  return COLOR_SWATCH_MAP[colorName.toLowerCase()] || '#808080'
}

function inferCategoryFromPath(imagePath) {
  // Derives the product category from the second path segment in the asset location.
  return imagePath.split('/')[1].toLowerCase()
}

function formatProductName(imagePath) {
  const override = PRODUCT_NAME_OVERRIDES[imagePath]
  if (override) {
    return override
  }

  const fileName = imagePath.split('/').pop().replace(/\.png$/i, '')
  return fileName
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase())
    .replace(/\bT Shirt\b/g, 'T-Shirt')
}

function getPriceForProduct(name, category) {
  // Builds a simple pricing model by starting with a category base and adjusting for keywords.
  let price = CATEGORY_BASE_PRICES[category] || 40
  const lowerName = name.toLowerCase()

  if (lowerName.includes('puffer') || lowerName.includes('parka')) {
    price += 24
  } else if (lowerName.includes('jacket')) {
    price += 12
  } else if (lowerName.includes('boots')) {
    price += 28
  } else if (lowerName.includes('sneakers') || lowerName.includes('shoes')) {
    price += 8
  } else if (lowerName.includes('oversized')) {
    price += 6
  } else if (lowerName.includes('crew socks') || lowerName.includes('long socks')) {
    price += 2
  }

  return price
}

function getProductColorsFromName(name) {
  // Extracts any known color keywords embedded in the generated product name.
  const text = name.toLowerCase()
  const colors = []

  for (const color of ['black', 'brown', 'grey', 'blue', 'green', 'white']) {
    if (text.includes(color)) {
      colors.push(color)
    }
  }

  return colors.length > 0 ? colors : ['black']
}

function createProductFromImage(imagePath) {
  // Expands one asset path into the normalized product shape used everywhere in the UI.
  const category = inferCategoryFromPath(imagePath)
  const name = formatProductName(imagePath)
  const anchorId = `product-${imagePath.replace(/^imgs\//, '').replace(/\.png$/i, '').replace(/[^a-zA-Z0-9]+/g, '-').toLowerCase()}`
  const originalPriceValue = getPriceForProduct(name, category)

  return {
    anchorId,
    name,
    description: CATEGORY_DESCRIPTIONS[category] || `${name} added to the collection.`,
    image: `/${imagePath}`,
    alt: name,
    category,
    label: CATEGORY_LABELS[category] || 'Products',
    colors: getProductColorsFromName(name),
    sizes: getProductSizesForCategory(category),
    materialDetails: CATEGORY_MATERIALS[category] || 'Material details will be added with the full product logic.',
    originalPriceValue,
  }
}

// Generates the full catalog and decorates each product with synthetic rating and pricing metadata.
export const PRODUCTS = PRODUCT_IMAGE_PATHS.map(createProductFromImage).map((product, index) => {
  const rating = 5 - (index % 3)
  const onDiscount = index % 4 === 0
  const discountPercent = onDiscount ? 15 : 0
  const priceValue = onDiscount
    ? Math.round(product.originalPriceValue * (1 - (discountPercent / 100)))
    : product.originalPriceValue

  return {
    ...product,
    rating,
    onDiscount,
    discountPercent,
    priceValue,
    price: formatCurrency(priceValue),
    originalPrice: formatCurrency(product.originalPriceValue),
  }
})

function compareFilterSizes(left, right) {
  const leftIndex = APPAREL_SIZE_ORDER.indexOf(left)
  const rightIndex = APPAREL_SIZE_ORDER.indexOf(right)

  const leftIsApparel = leftIndex !== -1
  const rightIsApparel = rightIndex !== -1

  if (leftIsApparel && rightIsApparel) {
    return leftIndex - rightIndex
  }

  if (leftIsApparel) {
    return -1
  }

  if (rightIsApparel) {
    return 1
  }

  return left.localeCompare(right, undefined, { numeric: true })
}

export const FILTER_OPTIONS = {
  type: [...new Set(PRODUCTS.map((product) => product.category))],
  color: [...new Set(PRODUCTS.flatMap((product) => product.colors))],
  size: [...new Set(PRODUCTS.flatMap((product) => product.sizes.map((size) => size.toLowerCase())))].sort(compareFilterSizes),
}

function matchesGroup(productValue, filterValues) {
  // An empty filter group is treated as a pass so unused groups do not exclude products.
  if (filterValues.length === 0) {
    return true
  }

  // Supports both scalar fields and array fields such as colors or sizes.
  if (Array.isArray(productValue)) {
    return productValue.some((value) => filterValues.includes(value))
  }

  return filterValues.includes(productValue)
}

export function getVisibleProducts(products, filters) {
  // Applies all active filter groups.
  const filtered = products.filter((product) => (
    matchesGroup(product.category, filters.type) &&
    matchesGroup(product.colors, filters.color) &&
    matchesGroup(product.sizes.map((size) => size.toLowerCase()), filters.size)
  ))

  return filtered
}

export function getSortedProducts(products, sortOption) {
  if (sortOption === 'on-discount') {
    return products.filter((product) => product.onDiscount)
  }

  if (sortOption === 'new-in') {
    return [...products].reverse()
  }

  if (sortOption === 'price-low-high') {
    return [...products].sort((left, right) => left.priceValue - right.priceValue)
  }

  if (sortOption === 'price-high-low') {
    return [...products].sort((left, right) => right.priceValue - left.priceValue)
  }

  if (sortOption === 'brand-a-z') {
    return [...products].sort((left, right) => left.label.localeCompare(right.label) || left.name.localeCompare(right.name))
  }

  if (sortOption === 'brand-z-a') {
    return [...products].sort((left, right) => right.label.localeCompare(left.label) || right.name.localeCompare(left.name))
  }

  if (sortOption === 'text-relevance') {
    return [...products].sort((left, right) => left.name.length - right.name.length)
  }

  return products
}
