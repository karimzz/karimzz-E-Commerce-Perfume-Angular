import { NavItem } from '../models/Navigation.model';

export const NAV_ITEMS: NavItem[] = [
  // ============================================================
  // PERFUMES
  // ============================================================
  {
    label: 'PERFUMES',
    children: [
      {
        label: 'WOMEN',
        children: [
          {
            label: 'Perfume',
            route: '/perfumes/women/perfume',
          },
          {
            label: 'Eau de Parfum',
            route: '/perfumes/women/eau-de-parfum',
          },
          {
            label: 'Eau de Toilette',
            route: '/perfumes/women/eau-de-toilette',
          },
          {
            label: 'Body Mist',
            route: '/perfumes/women/body-mist',
          },
          {
            label: 'Perfume Oils',
            route: '/perfumes/women/perfume-oils',
          },
          {
            label: 'Perfume Samples',
            route: '/perfumes/women/samples',
          },
          {
            label: 'Gift Sets',
            route: '/perfumes/women/gift-sets',
          },
          {
            label: 'Unboxed / Testers',
            route: '/perfumes/women/testers',
          },
        ],
      },

      {
        label: 'MEN',
        children: [
          {
            label: 'Cologne',
            route: '/perfumes/men/cologne',
          },
          {
            label: 'Eau de Parfum',
            route: '/perfumes/men/eau-de-parfum',
          },
          {
            label: 'Eau de Toilette',
            route: '/perfumes/men/eau-de-toilette',
          },
          {
            label: 'Aftershave',
            route: '/perfumes/men/aftershave',
          },
          {
            label: 'Body Spray',
            route: '/perfumes/men/body-spray',
          },
          {
            label: 'Cologne Samples',
            route: '/perfumes/men/samples',
          },
          {
            label: 'Gift Sets',
            route: '/perfumes/men/gift-sets',
          },
          {
            label: 'Unboxed / Testers',
            route: '/perfumes/men/testers',
          },
        ],
      },

      {
        label: 'SHOP BY TYPE',
        children: [
          {
            label: 'Eau de Parfum',
            route: '/perfumes/type/eau-de-parfum',
          },
          {
            label: 'Eau de Toilette',
            route: '/perfumes/type/eau-de-toilette',
          },
          {
            label: 'Body Mist',
            route: '/perfumes/type/body-mist',
          },
          {
            label: 'Perfume Oils',
            route: '/perfumes/type/perfume-oils',
          },
          {
            label: 'Discovery Sets',
            route: '/perfumes/type/discovery-sets',
          },
          {
            label: 'Travel Size',
            route: '/perfumes/type/travel-size',
          },
        ],
      },

      {
        label: 'SHOP BY FRAGRANCE',
        children: [
          {
            label: 'Floral',
            route: '/perfumes/fragrance/floral',
          },
          {
            label: 'Woody',
            route: '/perfumes/fragrance/woody',
          },
          {
            label: 'Oriental',
            route: '/perfumes/fragrance/oriental',
          },
          {
            label: 'Fresh',
            route: '/perfumes/fragrance/fresh',
          },
          {
            label: 'Citrus',
            route: '/perfumes/fragrance/citrus',
          },
          {
            label: 'Fruity',
            route: '/perfumes/fragrance/fruity',
          },
          {
            label: 'Vanilla',
            route: '/perfumes/fragrance/vanilla',
          },
          {
            label: 'Musk',
            route: '/perfumes/fragrance/musk',
          },
        ],
      },
    ],
  },

  // ============================================================
  // BRANDS
  // ============================================================
  {
    label: 'BRANDS',
    children: [
      {
        label: 'POPULAR BRANDS',
        children: [
          {
            label: 'Dior',
            route: '/brands/dior',
          },
          {
            label: 'Chanel',
            route: '/brands/chanel',
          },
          {
            label: 'Tom Ford',
            route: '/brands/tom-ford',
          },
          {
            label: 'Yves Saint Laurent',
            route: '/brands/yves-saint-laurent',
          },
          {
            label: 'Gucci',
            route: '/brands/gucci',
          },
          {
            label: 'Carolina Herrera',
            route: '/brands/carolina-herrera',
          },
        ],
      },

      {
        label: 'DESIGNER',
        children: [
          {
            label: 'Armani',
            route: '/brands/armani',
          },
          {
            label: 'Burberry',
            route: '/brands/burberry',
          },
          {
            label: 'Dolce & Gabbana',
            route: '/brands/dolce-gabbana',
          },
          {
            label: 'Givenchy',
            route: '/brands/givenchy',
          },
          {
            label: 'Versace',
            route: '/brands/versace',
          },
        ],
      },

      {
        label: 'NICHE',
        children: [
          {
            label: 'Jo Malone',
            route: '/brands/jo-malone',
          },
          {
            label: 'Maison Margiela',
            route: '/brands/maison-margiela',
          },
          {
            label: 'Byredo',
            route: '/brands/byredo',
          },
          {
            label: 'Le Labo',
            route: '/brands/le-labo',
          },
        ],
      },
    ],
  },

  // ============================================================
  // SKINCARE
  // ============================================================
  {
    label: 'SKINCARE',
    children: [
      {
        label: 'FACE',
        children: [
          {
            label: 'Cleansers',
            route: '/skincare/face/cleansers',
          },
          {
            label: 'Moisturizers',
            route: '/skincare/face/moisturizers',
          },
          {
            label: 'Serums',
            route: '/skincare/face/serums',
          },
          {
            label: 'Face Masks',
            route: '/skincare/face/masks',
          },
          {
            label: 'Toners',
            route: '/skincare/face/toners',
          },
          {
            label: 'Eye Care',
            route: '/skincare/face/eye-care',
          },
        ],
      },

      {
        label: 'BODY',
        children: [
          {
            label: 'Body Wash',
            route: '/skincare/body/body-wash',
          },
          {
            label: 'Body Lotion',
            route: '/skincare/body/body-lotion',
          },
          {
            label: 'Body Scrubs',
            route: '/skincare/body/body-scrubs',
          },
          {
            label: 'Hand Care',
            route: '/skincare/body/hand-care',
          },
        ],
      },

      {
        label: 'BY CONCERN',
        children: [
          {
            label: 'Dry Skin',
            route: '/skincare/concern/dry-skin',
          },
          {
            label: 'Oily Skin',
            route: '/skincare/concern/oily-skin',
          },
          {
            label: 'Sensitive Skin',
            route: '/skincare/concern/sensitive-skin',
          },
          {
            label: 'Anti-Aging',
            route: '/skincare/concern/anti-aging',
          },
          {
            label: 'Acne Care',
            route: '/skincare/concern/acne-care',
          },
        ],
      },
    ],
  },

  // ============================================================
  // MAKEUP
  // ============================================================
  {
    label: 'MAKEUP',
    children: [
      {
        label: 'FACE',
        children: [
          {
            label: 'Foundation',
            route: '/makeup/face/foundation',
          },
          {
            label: 'Concealer',
            route: '/makeup/face/concealer',
          },
          {
            label: 'Blush',
            route: '/makeup/face/blush',
          },
          {
            label: 'Bronzer',
            route: '/makeup/face/bronzer',
          },
          {
            label: 'Highlighter',
            route: '/makeup/face/highlighter',
          },
          {
            label: 'Setting Powder',
            route: '/makeup/face/setting-powder',
          },
        ],
      },

      {
        label: 'EYES',
        children: [
          {
            label: 'Mascara',
            route: '/makeup/eyes/mascara',
          },
          {
            label: 'Eyeliner',
            route: '/makeup/eyes/eyeliner',
          },
          {
            label: 'Eyeshadow',
            route: '/makeup/eyes/eyeshadow',
          },
          {
            label: 'Eyebrow',
            route: '/makeup/eyes/eyebrow',
          },
        ],
      },

      {
        label: 'LIPS',
        children: [
          {
            label: 'Lipstick',
            route: '/makeup/lips/lipstick',
          },
          {
            label: 'Lip Gloss',
            route: '/makeup/lips/lip-gloss',
          },
          {
            label: 'Lip Liner',
            route: '/makeup/lips/lip-liner',
          },
          {
            label: 'Lip Balm',
            route: '/makeup/lips/lip-balm',
          },
        ],
      },
    ],
  },

  // ============================================================
  // HAIRCARE
  // ============================================================
  {
    label: 'HAIRCARE',
    children: [
      {
        label: 'HAIR PRODUCTS',
        children: [
          {
            label: 'Shampoo',
            route: '/haircare/products/shampoo',
          },
          {
            label: 'Conditioner',
            route: '/haircare/products/conditioner',
          },
          {
            label: 'Hair Masks',
            route: '/haircare/products/masks',
          },
          {
            label: 'Hair Oils',
            route: '/haircare/products/oils',
          },
          {
            label: 'Hair Serum',
            route: '/haircare/products/serum',
          },
        ],
      },

      {
        label: 'STYLING',
        children: [
          {
            label: 'Hair Spray',
            route: '/haircare/styling/hair-spray',
          },
          {
            label: 'Hair Gel',
            route: '/haircare/styling/hair-gel',
          },
          {
            label: 'Hair Wax',
            route: '/haircare/styling/hair-wax',
          },
          {
            label: 'Heat Protection',
            route: '/haircare/styling/heat-protection',
          },
        ],
      },

      {
        label: 'BY CONCERN',
        children: [
          {
            label: 'Dry Hair',
            route: '/haircare/concern/dry-hair',
          },
          {
            label: 'Damaged Hair',
            route: '/haircare/concern/damaged-hair',
          },
          {
            label: 'Hair Loss',
            route: '/haircare/concern/hair-loss',
          },
          {
            label: 'Frizzy Hair',
            route: '/haircare/concern/frizzy-hair',
          },
        ],
      },
    ],
  },

  // ============================================================
  // AROMATHERAPY
  // ============================================================
  {
    label: 'AROMATHERAPY',
    children: [
      {
        label: 'ESSENTIAL OILS',
        children: [
          {
            label: 'Lavender',
            route: '/aromatherapy/essential-oils/lavender',
          },
          {
            label: 'Rose',
            route: '/aromatherapy/essential-oils/rose',
          },
          {
            label: 'Peppermint',
            route: '/aromatherapy/essential-oils/peppermint',
          },
          {
            label: 'Eucalyptus',
            route: '/aromatherapy/essential-oils/eucalyptus',
          },
          {
            label: 'Tea Tree',
            route: '/aromatherapy/essential-oils/tea-tree',
          },
        ],
      },

      {
        label: 'DIFFUSERS',
        children: [
          {
            label: 'Reed Diffusers',
            route: '/aromatherapy/diffusers/reed',
          },
          {
            label: 'Electric Diffusers',
            route: '/aromatherapy/diffusers/electric',
          },
          {
            label: 'Diffuser Oils',
            route: '/aromatherapy/diffusers/oils',
          },
        ],
      },
    ],
  },

  // ============================================================
  // CANDLES
  // ============================================================
  {
    label: 'CANDLES',
    children: [
      {
        label: 'SHOP CANDLES',
        children: [
          {
            label: 'Scented Candles',
            route: '/candles/scented',
          },
          {
            label: 'Luxury Candles',
            route: '/candles/luxury',
          },
          {
            label: 'Soy Candles',
            route: '/candles/soy',
          },
          {
            label: 'Gift Candles',
            route: '/candles/gifts',
          },
        ],
      },

      {
        label: 'BY SCENT',
        children: [
          {
            label: 'Vanilla',
            route: '/candles/scent/vanilla',
          },
          {
            label: 'Rose',
            route: '/candles/scent/rose',
          },
          {
            label: 'Sandalwood',
            route: '/candles/scent/sandalwood',
          },
          {
            label: 'Citrus',
            route: '/candles/scent/citrus',
          },
        ],
      },
    ],
  },

  // ============================================================
  // GIFTS
  // ============================================================
  {
    label: 'GIFTS',
    children: [
      {
        label: 'GIFT IDEAS',
        children: [
          {
            label: 'Gifts for Her',
            route: '/gifts/for-her',
          },
          {
            label: 'Gifts for Him',
            route: '/gifts/for-him',
          },
          {
            label: 'Gifts for Couples',
            route: '/gifts/for-couples',
          },
          {
            label: 'Birthday Gifts',
            route: '/gifts/birthday',
          },
          {
            label: 'Anniversary Gifts',
            route: '/gifts/anniversary',
          },
        ],
      },

      {
        label: 'GIFT SETS',
        children: [
          {
            label: 'Perfume Gift Sets',
            route: '/gifts/sets/perfume',
          },
          {
            label: 'Skincare Gift Sets',
            route: '/gifts/sets/skincare',
          },
          {
            label: 'Makeup Gift Sets',
            route: '/gifts/sets/makeup',
          },
          {
            label: 'Luxury Gift Sets',
            route: '/gifts/sets/luxury',
          },
        ],
      },

      {
        label: 'PRICE',
        children: [
          {
            label: 'Under $50',
            route: '/gifts/price/under-50',
          },
          {
            label: '$50 - $100',
            route: '/gifts/price/50-100',
          },
          {
            label: '$100 - $200',
            route: '/gifts/price/100-200',
          },
          {
            label: 'Luxury Gifts',
            route: '/gifts/price/luxury',
          },
        ],
      },
    ],
  },
];