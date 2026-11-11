// Product catalogue for Beauty by MI&I.
// Every page reads from this single array, so adding a product here
// automatically adds it to the shop, the search and its own details page.

import hydratingCream from "../assets/images/hydrating-cream.jpg";
import vitaminC from "../assets/images/vitamin-c-serum.jpg";
import mattLipstick from "../assets/images/matte-lipstick.jpg";
import palette from "../assets/images/eyeshadow-palette.jpg";
import nightCream from "../assets/images/night-repair-cream.jpg";
import glowDrops from "../assets/images/glow-drops.jpg";
import lipGloss from "../assets/images/lip-gloss.jpg";
import brushSet from "../assets/images/pro-brush-set.jpg";

export const categories = ["All", "Skincare", "Makeup"];

const products = [
  {
    id: 1,
    slug: "hydrating-cream",
    name: "Hydrating Cream",
    category: "Skincare",
    price: 25,
    image: hydratingCream,
    bestSeller: true,
    tagline: "48-hour moisture for every skin type",
    description:
      "A rich but non-greasy daily moisturiser that locks in hydration and restores the skin barrier. Ideal for dry or dehydrated skin that needs comfort all day.",
    ingredients: ["Hyaluronic acid", "Shea butter", "Ceramides", "Aloe vera"],
    howToUse:
      "Apply a small amount to clean face and neck every morning and evening. Massage gently in upward circles.",
    size: "50 ml",
  },
  {
    id: 2,
    slug: "vitamin-c-serum",
    name: "Vitamin C Serum",
    category: "Skincare",
    price: 35,
    image: vitaminC,
    bestSeller: true,
    tagline: "Brighten dull skin in two weeks",
    description:
      "A lightweight brightening serum with 15% stabilised vitamin C that evens out skin tone, fades dark spots and protects against daily pollution.",
    ingredients: ["Vitamin C (15%)", "Vitamin E", "Ferulic acid", "Green tea"],
    howToUse:
      "Use 3–4 drops each morning after cleansing and before moisturiser. Always follow with sunscreen.",
    size: "30 ml",
  },
  {
    id: 3,
    slug: "matte-lipstick",
    name: "Matte Lipstick",
    category: "Makeup",
    price: 15,
    image: mattLipstick,
    bestSeller: true,
    tagline: "Bold colour, smooth velvet finish",
    description:
      "A long-wearing matte lipstick in a vivid red shade. The creamy formula glides on in one stroke and stays comfortable for up to eight hours.",
    ingredients: ["Jojoba oil", "Vitamin E", "Beeswax", "Mineral pigments"],
    howToUse:
      "Line the lips first, then apply from the centre outward. Blot once for an extra-matte look.",
    size: "3.5 g",
  },
  {
    id: 4,
    slug: "eyeshadow-palette",
    name: "Eyeshadow Palette",
    category: "Makeup",
    price: 40,
    image: palette,
    bestSeller: true,
    tagline: "120 shades from nude to night-out",
    description:
      "A professional palette with matte, shimmer and metallic shades. Highly pigmented and easy to blend for both everyday and evening looks.",
    ingredients: ["Mica", "Talc-free base", "Silica", "Vitamin E"],
    howToUse:
      "Apply a light shade on the lid, a medium shade in the crease and a deep shade on the outer corner. Blend well.",
    size: "120 × 0.8 g",
  },
  {
    id: 5,
    slug: "night-repair-cream",
    name: "Night Repair Cream",
    category: "Skincare",
    price: 32,
    image: nightCream,
    bestSeller: false,
    tagline: "Wake up to softer, renewed skin",
    description:
      "An overnight cream that works while you sleep to smooth fine lines and refresh tired skin, so you wake up with a rested glow.",
    ingredients: ["Retinol (gentle)", "Peptides", "Squalane", "Chamomile"],
    howToUse:
      "Apply in the evening on clean skin. Start with three nights a week and increase as your skin gets used to it.",
    size: "50 ml",
  },
  {
    id: 6,
    slug: "glow-drops",
    name: "Glow Drops",
    category: "Skincare",
    price: 28,
    image: glowDrops,
    bestSeller: false,
    tagline: "Instant dewy glow, no glitter",
    description:
      "A few drops of liquid radiance that you can wear alone or mix into your moisturiser or foundation for a healthy, natural-looking glow.",
    ingredients: ["Niacinamide", "Rosehip oil", "Pearl extract", "Glycerin"],
    howToUse:
      "Mix 1–2 drops with your moisturiser, or pat onto cheekbones after foundation.",
    size: "30 ml",
  },
  {
    id: 7,
    slug: "lip-gloss",
    name: "Cherry Lip Gloss",
    category: "Makeup",
    price: 12,
    image: lipGloss,
    bestSeller: false,
    tagline: "High shine without the stickiness",
    description:
      "A juicy, high-shine gloss that adds colour and moisture in one step. Wear it alone or on top of lipstick.",
    ingredients: ["Coconut oil", "Shea butter", "Vitamin E", "Cherry extract"],
    howToUse:
      "Apply to the centre of the lips with the doe-foot applicator and press lips together.",
    size: "6 ml",
  },
  {
    id: 8,
    slug: "pro-brush-set",
    name: "Pro Brush Set",
    category: "Makeup",
    price: 22,
    image: brushSet,
    bestSeller: false,
    tagline: "Soft, cruelty-free synthetic bristles",
    description:
      "Five essential brushes for blending eyeshadow, defining the crease and placing shimmer precisely. Vegan and easy to clean.",
    ingredients: ["Synthetic vegan bristles", "Bamboo handles"],
    howToUse:
      "Use the fluffy brush for blending and the flat brush for packing colour. Wash weekly with mild soap.",
    size: "5 brushes",
  },
];

export default products;

export function getProductById(id) {
  return products.find((p) => p.id === Number(id));
}

export function formatPrice(value) {
  return `$${value.toFixed(2)}`;
}
