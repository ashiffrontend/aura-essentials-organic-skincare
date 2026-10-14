/**
 * @license
 * AURA ESSENTIALS ORGANIC SKINCARE
 * Designed & Developed by Mohammad Ashif | Ashif Web Studio
 * Portfolio: https://ashif-web-studio.vercel.app/
 * Pure Vanilla JavaScript ES6 - Production Ready
 */

// ==========================================
// 1. DATA CATALOGS
// ==========================================

const PRODUCTS_DATA = [
  {
    id: 1,
    name: "Rose & Hibiscus Luminous Dew Serum",
    category: "Face Care",
    skinType: "Sensitive",
    price: 38.00,
    oldPrice: 48.00,
    discount: "-20%",
    rating: 4.9,
    reviewsCount: 168,
    isOrganic: true,
    isBestSeller: true,
    isNew: false,
    shortDesc: "Potent cold-pressed botanical infusion delivering 72-hour deep moisture and youthful petal-soft glow.",
    description: "An ethereal elixir handcrafted with pure Damask Rose hydrosol, hibiscus flower acids, and multi-molecular hyaluronic acid. It instantly revitalizes tired skin, strengthens the moisture barrier, and visibly softens fine dry lines while imparting a radiant, naturally illuminated complexion.",
    ingredients: "Organic Rosa Damascena (Rose) Flower Water, Hibiscus Sabdariffa Flower Extract, Sodium Hyaluronate, Botanical Glycerin, Camellia Sinensis (Green Tea) Leaf Extract, Aloe Barbadensis Leaf Juice.",
    benefits: "72-Hour Cellular Hydration, Gentle Natural Exfoliation, Calms Redness, Boosts Skin Elasticity",
    howToUse: "Dispense 3-4 drops onto cleansed damp skin. Gently press into face, neck, and décolletage every morning and evening before face creams.",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1608248597359-58b16954fb3a?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=800&auto=format&fit=crop&q=80"
    ]
  },
  {
    id: 2,
    name: "Kakadu Plum & Vitamin C Radiance Nectar",
    category: "Face Care",
    skinType: "All Skin Types",
    price: 45.00,
    oldPrice: 56.00,
    discount: "-20%",
    rating: 5.0,
    reviewsCount: 214,
    isOrganic: true,
    isBestSeller: true,
    isNew: false,
    shortDesc: "Wild-harvested super-fruit concentrate for intense spot correction and lit-from-within radiance.",
    description: "Formulated with Australian Kakadu Plum—nature's richest botanical source of Vitamin C containing 100x more Vitamin C than oranges. Synergized with ferulic acid and Indian gooseberry to brighten stubborn hyperpigmentation, protect against blue light pollution, and firm the dermal matrix.",
    ingredients: "Organic Terminalia Ferdinandiana (Kakadu Plum) Fruit Extract, Phyllanthus Emblica (Amla) Extract, Ferulic Acid, Ascorbyl Glucoside, Tocopherol (Vitamin E), Citrus Aurantium Dulcis Peel Oil.",
    benefits: "Fades Sun Spots & Blemishes, Neutralizes Free Radicals, Boosts Collagen Synthesis, Evens Tone",
    howToUse: "Warm 3 drops between clean palms and gently pat onto face each morning. Follow with SPF 50 sunscreen.",
    image: "https://images.unsplash.com/photo-1608248597359-58b16954fb3a?w=800&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1608248597359-58b16954fb3a?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop&q=80"
    ]
  },
  {
    id: 3,
    name: "Raw African Shea & Golden Jojoba Body Butter",
    category: "Body Care",
    skinType: "Dry",
    price: 28.00,
    oldPrice: 35.00,
    discount: "-20%",
    rating: 4.8,
    reviewsCount: 95,
    isOrganic: true,
    isBestSeller: false,
    isNew: true,
    shortDesc: "Whipped velvety soufflé enriched with unrefined fair-trade Nilotica shea for supreme body velvetness.",
    description: "An opulent, cloud-whipped body moisture treatment made from Grade-A unrefined fair-trade Shea butter, organic cold-pressed Jojoba, and cold-extracted Sweet Almond oil. Melts upon skin contact without any greasy residue, healing cracked elbows, rough knees, and dry winter skin.",
    ingredients: "Certified Organic Butyrospermum Parkii (Shea Butter), Simmondsia Chinensis (Jojoba) Seed Oil, Prunus Amygdalus Dulcis (Sweet Almond) Oil, Maranta Arundinacea (Arrowroot) Root Powder, Lavandula Angustifolia Oil.",
    benefits: "Heals Parched Dry Skin, Replenishes Lipid Barrier, Soothes Eczema Tendencies, All-Day Softness",
    howToUse: "Massage generously all over the body, paying special care to rough areas like elbows, heels, and knees, immediately post-shower while skin is warm.",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=800&auto=format&fit=crop&q=80"
    ]
  },
  {
    id: 4,
    name: "Clarifying Tea Tree & Neem Purifying Cleanser",
    category: "Face Care",
    skinType: "Acne-Prone",
    price: 24.00,
    oldPrice: 30.00,
    discount: "-20%",
    rating: 4.9,
    reviewsCount: 182,
    isOrganic: true,
    isBestSeller: true,
    isNew: false,
    shortDesc: "Balancing botanical foaming wash clearing congested pores without stripping essential moisture.",
    description: "Engineered specifically for blemished, oily, and acne-prone skin types. Infused with organic Australian Tea Tree essential oil, wild-harvested Indian Neem leaves, and willow bark salicylic extract to purify congestion, unclog pores, and restore harmonious sebum levels.",
    ingredients: "Aloe Barbadensis Leaf Juice, Melaleuca Alternifolia (Tea Tree) Leaf Oil, Azadirachta Indica (Neem) Leaf Extract, Salix Alba (Willow) Bark Extract, Coco-Glucoside, Vegetable Glycerin.",
    benefits: "Eliminates Acne-Causing Bacteria, Controls T-Zone Shine, Clears Blackheads, Non-Stripping",
    howToUse: "Lather 1-2 pumps with warm water and gently massage over face in circular motions for 60 seconds. Rinse thoroughly with cool water.",
    image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=800&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1608248597359-58b16954fb3a?w=800&auto=format&fit=crop&q=80"
    ]
  },
  {
    id: 5,
    name: "Kashmiri Turmeric & Saffron Illuminating Mask",
    category: "Face Care",
    skinType: "All Skin Types",
    price: 42.00,
    oldPrice: 52.00,
    discount: "-19%",
    rating: 4.9,
    reviewsCount: 88,
    isOrganic: true,
    isBestSeller: false,
    isNew: true,
    shortDesc: "Ancient Ayurvedic bridal formulation with pure golden saffron strands and healing wild turmeric.",
    description: "An artisanal weekly ritual inspired by thousands of years of Vedic beauty secrets. Combines wild Kasturi Manjal (non-staining therapeutic turmeric) with authentic Grade-1 Kashmiri Mongra saffron and sandalwood water to instantly banish dullness and reveal immaculate porcelain clarity.",
    ingredients: "Curcuma Aromatica (Wild Turmeric) Powder, Crocus Sativus (Saffron) Stigma Extract, Santalum Album (Sandalwood) Water, Kaolin Clay, Honey Extract, Prunus Armeniaca (Apricot) Kernel Oil.",
    benefits: "Instant Party Glow, Fades Dark Spots, Soothes Chronic Inflammation, Smoothes Texture",
    howToUse: "Apply an even layer across face and neck avoiding eyes. Leave on for 15-20 minutes until almost dry. Rinse gently using lukewarm water with soft circular buffing.",
    image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=800&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop&q=80"
    ]
  },
  {
    id: 6,
    name: "Botanical Scalp Nectar & Rosemary Growth Oil",
    category: "Hair Care",
    skinType: "All Skin Types",
    price: 32.00,
    oldPrice: 40.00,
    discount: "-20%",
    rating: 4.8,
    reviewsCount: 147,
    isOrganic: true,
    isBestSeller: true,
    isNew: false,
    shortDesc: "Cold-pressed herbal scalp therapy stimulated with rosemary verbenone and bhringraj roots.",
    description: "A potent root-stimulating elixir featuring rosemary essential oil, bhringraj, fenugreek, and cold-pressed castor oil. Strengthens thinning hair follicles, relieves dry itchy scalp flaking, and promotes luxuriant growth with diamond-like shine.",
    ingredients: "Rosmarinus Officinalis (Rosemary) Leaf Oil, Eclipta Prostrata (Bhringraj) Oil, Trigonella Foenum-Graecum (Fenugreek) Extract, Ricinus Communis (Castor) Seed Oil, Nigella Sativa (Black Seed) Oil.",
    benefits: "Stimulates Dormant Follicles, Calms Dandruff & Itch, Fortifies Root Strength, Restores Sheen",
    howToUse: "Part dry hair into sections. Apply 10-15 drops directly to scalp and massage with fingertips for 5 minutes. Leave overnight or at least 1 hour before washing.",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=800&auto=format&fit=crop&q=80"
    ]
  },
  {
    id: 7,
    name: "Bamboo Charcoal & Green Tea Detox Scrub",
    category: "Body Care",
    skinType: "Oily",
    price: 26.00,
    oldPrice: 32.00,
    discount: "-18%",
    rating: 4.7,
    reviewsCount: 76,
    isOrganic: true,
    isBestSeller: false,
    isNew: false,
    shortDesc: "Micro-buffing natural body polish drawing out impurities and banishing strawberry skin.",
    description: "Ultra-fine activated bamboo charcoal combined with antioxidant-dense matcha green tea and mineral-rich pink Himalayan salt. Gently buffs away dead keratinized skin cells, clears ingrown hairs, and detoxifies urban pollutants.",
    ingredients: "Activated Bamboo Charcoal Powder, Camellia Sinensis (Matcha Green Tea) Leaf, Sodium Chloride (Himalayan Pink Salt), Cocos Nucifera (Coconut) Oil, Mentha Piperita (Peppermint) Leaf Oil.",
    benefits: "Removes Rough Keratin, Purifies Toxins, Smooths Strawberry Skin, Energizing Aroma",
    howToUse: "Scoop a generous dollop and buff in gentle upward circular motions onto damp skin in the bath or shower. Rinse thoroughly.",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop&q=80"
    ]
  },
  {
    id: 8,
    name: "Cedarwood & Vetiver Mattifying Face Balm",
    category: "Men's Grooming",
    skinType: "Combination",
    price: 34.00,
    oldPrice: 42.00,
    discount: "-19%",
    rating: 4.9,
    reviewsCount: 63,
    isOrganic: true,
    isBestSeller: false,
    isNew: true,
    shortDesc: "Non-greasy post-shave botanical hydrator with crisp earthy forest notes and instant pore tightening.",
    description: "Crafted specifically for men's thicker, stress-prone skin. Infused with Himalayan Cedarwood, wild Vetiver root extract, and organic Aloe to soothe razor burn, tighten pores, and deliver a zero-shine velvety matte finish that lasts all day.",
    ingredients: "Cedrus Deodara (Cedarwood) Wood Oil, Chrysopogon Zizanioides (Vetiver) Root Extract, Aloe Barbadensis Leaf Juice, Hamamelis Virginiana (Witch Hazel) Extract, Silica, Tocopherol.",
    benefits: "Immediately Relieves Razor Irritation, Absorbs Excess Sebum, Deeply Calming Woody Aroma",
    howToUse: "Apply a nickel-sized amount onto freshly shaved or cleansed face and neck morning and evening.",
    image: "https://images.unsplash.com/photo-1617897903246-719242758050?w=800&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1617897903246-719242758050?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&auto=format&fit=crop&q=80"
    ]
  },
  {
    id: 9,
    name: "Aura Royal Glow Botanical Sanctuary Box",
    category: "Gift Boxes",
    skinType: "All Skin Types",
    price: 89.00,
    oldPrice: 115.00,
    discount: "-22%",
    rating: 5.0,
    reviewsCount: 52,
    isOrganic: true,
    isBestSeller: true,
    isNew: false,
    shortDesc: "The ultimate luxury ritual set featuring 4 full-sized botanical masterworks in hand-carved packaging.",
    description: "An unforgettable gift of pure organic self-care. Includes the Rose Luminous Serum (50ml), Kashmiri Saffron Mask (50g), Nilotica Shea Butter (100ml), and a natural jade face roller, presented in an eco-friendly gold-embossed keepsake bamboo box.",
    ingredients: "Full artisan collection of certified organic serums, cold-pressed balms, and authentic Ayurvedic herbal infusions.",
    benefits: "Complete 4-Step Restorative Ritual, Includes Authentic Jade Stone Roller, Luxury Gift Ready",
    howToUse: "Follow the enclosed ritual guide: Cleanse, Mask, Serum infusion with Jade roller, and lock in with whipped butter.",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=800&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1544816155-12df9643f363?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&auto=format&fit=crop&q=80"
    ]
  },
  {
    id: 10,
    name: "Damask Rose Hydrosol Facial Mist",
    category: "Face Care",
    skinType: "Sensitive",
    price: 22.00,
    oldPrice: 28.00,
    discount: "-21%",
    rating: 4.8,
    reviewsCount: 139,
    isOrganic: true,
    isBestSeller: false,
    isNew: false,
    shortDesc: "Steam-distilled pure floral water setting makeup and drenching skin in soothing moisture.",
    description: "100% single-origin distilled floral water harvested at dawn in Kannauj. Contains no added water, synthetic fragrance, or alcohol. Replenishes instant hydration whenever skin feels parched during travel, air conditioning, or heat.",
    ingredients: "100% Steam Distilled Rosa Damascena (Damask Rose) Hydrosol Water.",
    benefits: "Balances Skin pH, Sets Mineral Makeup, Instantly Refreshes, Calms Sensitive Flushes",
    howToUse: "Hold bottle 8-10 inches away from face with eyes closed. Mist liberally throughout the day or after cleansing.",
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=800&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&auto=format&fit=crop&q=80"
    ]
  },
  {
    id: 11,
    name: "Herbal Forest Botanical Shampoo Bar",
    category: "Hair Care",
    skinType: "All Skin Types",
    price: 18.00,
    oldPrice: 24.00,
    discount: "-25%",
    rating: 4.9,
    reviewsCount: 84,
    isOrganic: true,
    isBestSeller: false,
    isNew: true,
    shortDesc: "Zero-plastic solid concentrated cleanser with shikakai, reetha, and organic amla fruit.",
    description: "Equivalent to 3 plastic bottles of liquid shampoo. Made with traditional Ayurvedic hair-cleansing herbs that build a creamy, dense lather to remove oil and buildup while leaving tresses bouncy, shiny, and tangle-free.",
    ingredients: "Sodium Cocoyl Isethionate, Acacia Concinna (Shikakai) Fruit Powder, Sapindus Mukorossi (Reetha) Extract, Phyllanthus Emblica Powder, Theobroma Cacao Seed Butter.",
    benefits: "Zero Waste & Plastic Free, Color Safe, Eliminates Product Buildup, Long-Lasting 70+ Washes",
    howToUse: "Wet hair thoroughly. Rub the bar directly onto roots until a rich lather forms. Massage scalp and rinse clean.",
    image: "https://images.unsplash.com/photo-1607006314187-57ff7491cf15?w=800&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1607006314187-57ff7491cf15?w=800&auto=format&fit=crop&q=80"
    ]
  },
  {
    id: 12,
    name: "Wild Lavender & Chamomile Night Sleep Oil",
    category: "Face Care",
    skinType: "Dry",
    price: 46.00,
    oldPrice: 58.00,
    discount: "-20%",
    rating: 4.9,
    reviewsCount: 118,
    isOrganic: true,
    isBestSeller: true,
    isNew: false,
    shortDesc: "Overnight cellular restorative oil with blue tansy and Himalayan lavender for peaceful skin repair.",
    description: "Transformative night treatment designed to work in synergy with the circadian rhythm of skin cell regeneration. Packed with omega 3-6-9 fatty acids and azulene-rich blue tansy to calm inflammation and smooth texture while you sleep.",
    ingredients: "Simmondsia Chinensis Seed Oil, Rosa Canina (Rosehip) Seed Oil, Tanacetum Annuum (Blue Tansy) Flower Oil, Lavandula Angustifolia Oil, Chamomilla Recutita Flower Extract, Squalane.",
    benefits: "Intense Overnight Repair, Enhances Natural Glow, Promotes Deep Restful Sleep, Plumps Texture",
    howToUse: "Gently press 3 to 5 drops onto face and neck as the final ritual step before sleeping.",
    image: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=800&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1608248597359-58b16954fb3a?w=800&auto=format&fit=crop&q=80"
    ]
  }
];

const INGREDIENTS_DATA = [
  {
    name: "Aloe Vera",
    botanical: "Aloe Barbadensis Miller",
    origin: "Rajasthan Organic Farms, India",
    skinType: "All Skin Types & Sensitive",
    benefits: "Deep non-greasy cellular hydration, cooling anti-inflammatory relief, accelerates skin repair and collagen regeneration.",
    image: "https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?w=400&auto=format&fit=crop&q=80"
  },
  {
    name: "Tea Tree",
    botanical: "Melaleuca Alternifolia",
    origin: "Ethical Plantations, New South Wales",
    skinType: "Acne-Prone & Oily Skin",
    benefits: "Clinically proven natural antimicrobial action, clears stubborn blackheads, unclogs congested pores, balances sebum.",
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&auto=format&fit=crop&q=80"
  },
  {
    name: "Vitamin C (Kakadu)",
    botanical: "Terminalia Ferdinandiana",
    origin: "Wild Harvested, Kimberley Australia",
    skinType: "Dull, Uneven & Mature Skin",
    benefits: "World's most concentrated botanical Vitamin C source. Fades hyperpigmentation, neutralizes free radicals, illuminates skin.",
    image: "https://images.unsplash.com/photo-1582979512210-99b6a53386f9?w=400&auto=format&fit=crop&q=80"
  },
  {
    name: "Turmeric",
    botanical: "Curcuma Longa (Kasturi)",
    origin: "Wayanad Hills, Kerala, India",
    skinType: "All Skin Types & Hyperpigmented",
    benefits: "High curcuminoid bio-activity combats oxidation, imparts royal glow, soothes inflamed flare-ups without yellow staining.",
    image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=400&auto=format&fit=crop&q=80"
  },
  {
    name: "Rose Water",
    botanical: "Damask Rose Hydrosol",
    origin: "Kannauj Ancient Stills, India",
    skinType: "Sensitive, Dehydrated Skin",
    benefits: "Pure copper-distilled floral essence balancing epidermal pH, tightening pores, reducing redness, and setting makeup.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400&auto=format&fit=crop&q=80"
  },
  {
    name: "Charcoal",
    botanical: "Bamboo Activated Carbon",
    origin: "Sustainably Harvested Bamboo Forests",
    skinType: "Oily & Urban-Exposed Skin",
    benefits: "Micro-porous structure magnetic to toxic micro-particles, heavy metals, excess sebum, and blackhead sebum plugs.",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400&auto=format&fit=crop&q=80"
  },
  {
    name: "Green Tea",
    botanical: "Camellia Sinensis (Organic Matcha)",
    origin: "Munnar High-Altitude Estates, Kerala",
    skinType: "Combination & Stressed Skin",
    benefits: "Abundant in EGCG catechins that combat photo-aging, tighten capillary fragility, and relieve chronic redness.",
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=400&auto=format&fit=crop&q=80"
  },
  {
    name: "Shea Butter",
    botanical: "Butyrospermum Parkii Nilotica",
    origin: "Fair-Trade Women's Cooperative, Uganda",
    skinType: "Dry, Flaky & Compromised Skin",
    benefits: "Unrefined cold-pressed butter rich in vitamins A, E, and essential oleic acids providing protective moisture seal.",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&auto=format&fit=crop&q=80"
  },
  {
    name: "Jojoba Oil",
    botanical: "Simmondsia Chinensis Seed",
    origin: "Organic Deserts of Rajasthan",
    skinType: "All Skin Types & Sensitive",
    benefits: "Biocompatible wax ester mimicking natural human sebum, dissolving pore blockages while moisturizing without heaviness.",
    image: "https://images.unsplash.com/photo-1608248597359-58b16954fb3a?w=400&auto=format&fit=crop&q=80"
  }
];

const TESTIMONIALS_DATA = [
  {
    name: "Ananya Sharma",
    location: "Mumbai, India",
    rating: 5,
    verified: true,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80",
    quote: "“The Rose & Hibiscus Luminous Serum completely transformed my stubborn dullness within 10 days. My dermatologist even asked what I changed in my skincare regimen. Aura Essentials is pure botanical magic!”",
    product: "Rose & Hibiscus Luminous Dew Serum"
  },
  {
    name: "Dr. Evelyn Reed",
    location: "London, UK",
    rating: 5,
    verified: true,
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&auto=format&fit=crop&q=80",
    quote: "“As someone with hypersensitive rosacea-prone skin, finding zero-irritation organic skincare that actually delivers clinical results was nearly impossible. The Kakadu Plum nectar is unmatched in purity and efficacy.”",
    product: "Kakadu Plum & Vitamin C Radiance Nectar"
  },
  {
    name: "Rohan Varma",
    location: "Bangalore, India",
    rating: 5,
    verified: true,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80",
    quote: "“The Cedarwood & Vetiver Balm is the only moisturizer that doesn't leave my face looking greasy by noon. Fresh natural scent, absorbs in seconds, and my razor irritation has vanished completely.”",
    product: "Cedarwood & Vetiver Mattifying Face Balm"
  },
  {
    name: "Priya Nair",
    location: "Kochi, Kerala",
    rating: 5,
    verified: true,
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&auto=format&fit=crop&q=80",
    quote: "“The Kashmiri Saffron Mask feels like an authentic temple ritual at home. After 20 minutes, my skin had this incandescent golden glow. Plus, ordering through WhatsApp was so effortless and warm!”",
    product: "Kashmiri Turmeric & Saffron Mask"
  }
];

// ==========================================
// 2. STATE MANAGEMENT (LocalStorage)
// ==========================================

const STATE = {
  cart: JSON.parse(localStorage.getItem('aura_cart') || '[]'),
  wishlist: JSON.parse(localStorage.getItem('aura_wishlist') || '[]'),
  activeCategory: 'All',
  activeSkinType: 'All',
  searchQuery: '',
  maxPrice: 120,
  sortBy: 'popularity',
  activeCoupon: localStorage.getItem('aura_coupon') || null,
  currentTestimonialIndex: 0
};

function saveCart() {
  localStorage.setItem('aura_cart', JSON.stringify(STATE.cart));
  updateCartUI();
}

function saveWishlist() {
  localStorage.setItem('aura_wishlist', JSON.stringify(STATE.wishlist));
  updateWishlistUI();
}

// ==========================================
// 3. TOAST NOTIFICATIONS
// ==========================================

function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  
  let iconSvg = '';
  if (type === 'gold') {
    iconSvg = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`;
  } else {
    iconSvg = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>`;
  }

  toast.innerHTML = `
    <span style="color: ${type === 'gold' ? '#C8A96A' : '#2E7D32'};">${iconSvg}</span>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.animation = 'toastOut 0.3s ease forwards';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// ==========================================
// 4. CART LOGIC & WHATSAPP CHECKOUT
// ==========================================

function addToCart(productId, quantity = 1) {
  const item = STATE.cart.find(i => i.id === productId);
  if (item) {
    item.quantity += quantity;
  } else {
    STATE.cart.push({ id: productId, quantity });
  }
  saveCart();
  
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  showToast(`Added "${product ? product.name : 'Item'}" to your cart!`);

  // Animate cart button
  const cartBtn = document.getElementById('cart-toggle-btn');
  if (cartBtn) {
    cartBtn.style.transform = 'scale(1.2)';
    setTimeout(() => cartBtn.style.transform = '', 200);
  }
}

function removeFromCart(productId) {
  STATE.cart = STATE.cart.filter(i => i.id !== productId);
  saveCart();
  showToast("Item removed from cart");
}

function updateCartQuantity(productId, delta) {
  const item = STATE.cart.find(i => i.id === productId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    removeFromCart(productId);
  } else {
    saveCart();
  }
}

function clearCart() {
  STATE.cart = [];
  saveCart();
  showToast("Your shopping cart has been cleared");
}

function getCartCalculations() {
  let subtotal = 0;
  let totalItems = 0;

  STATE.cart.forEach(item => {
    const prod = PRODUCTS_DATA.find(p => p.id === item.id);
    if (prod) {
      subtotal += prod.price * item.quantity;
      totalItems += item.quantity;
    }
  });

  let discountAmount = 0;
  if (STATE.activeCoupon === 'AURA20') {
    discountAmount = subtotal * 0.20;
  }

  const freeShippingThreshold = 60.00;
  const shipping = subtotal > 0 && (subtotal - discountAmount) >= freeShippingThreshold ? 0.00 : (subtotal > 0 ? 5.00 : 0.00);
  const total = Math.max(0, subtotal - discountAmount + shipping);

  return { subtotal, totalItems, discountAmount, shipping, total, freeShippingThreshold };
}

function updateCartUI() {
  const { subtotal, totalItems, discountAmount, shipping, total, freeShippingThreshold } = getCartCalculations();

  // Badges
  const badge = document.getElementById('cart-badge');
  if (badge) {
    badge.textContent = totalItems;
    badge.style.display = totalItems > 0 ? 'flex' : 'none';
  }

  // Cart Drawer Elements
  const cartItemsList = document.getElementById('cart-items-list');
  const cartEmptyState = document.getElementById('cart-empty-state');
  const cartFooter = document.getElementById('cart-drawer-footer');
  const cartSubtotalEl = document.getElementById('cart-subtotal');
  const cartDiscountEl = document.getElementById('cart-discount-row');
  const cartDiscountVal = document.getElementById('cart-discount-value');
  const cartShippingEl = document.getElementById('cart-shipping');
  const cartTotalEl = document.getElementById('cart-total');
  const freeShippingText = document.getElementById('shipping-progress-text');
  const freeShippingFill = document.getElementById('shipping-progress-fill');

  if (!cartItemsList) return;

  if (STATE.cart.length === 0) {
    cartItemsList.style.display = 'none';
    if (cartEmptyState) cartEmptyState.style.display = 'flex';
    if (cartFooter) cartFooter.style.display = 'none';
    if (freeShippingText) freeShippingText.textContent = "Add items to unlock Free Express Shipping";
    if (freeShippingFill) freeShippingFill.style.width = '0%';
    return;
  }

  cartItemsList.style.display = 'flex';
  if (cartEmptyState) cartEmptyState.style.display = 'none';
  if (cartFooter) cartFooter.style.display = 'block';

  // Render items
  cartItemsList.innerHTML = STATE.cart.map(item => {
    const prod = PRODUCTS_DATA.find(p => p.id === item.id);
    if (!prod) return '';
    return `
      <div class="cart-item">
        <img src="${prod.image}" alt="${prod.name}" class="cart-item-img" loading="lazy">
        <div class="cart-item-info">
          <h4 class="cart-item-name">${prod.name}</h4>
          <div class="cart-item-price">$${prod.price.toFixed(2)}</div>
          <div class="cart-item-controls">
            <div class="qty-stepper">
              <button class="qty-btn" onclick="window.updateCartQuantity(${prod.id}, -1)" aria-label="Decrease quantity">−</button>
              <span class="qty-number">${item.quantity}</span>
              <button class="qty-btn" onclick="window.updateCartQuantity(${prod.id}, 1)" aria-label="Increase quantity">+</button>
            </div>
            <button class="cart-item-remove" onclick="window.removeFromCart(${prod.id})" aria-label="Remove item">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
              Remove
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  // Update summary numbers
  if (cartSubtotalEl) cartSubtotalEl.textContent = `$${subtotal.toFixed(2)}`;
  
  if (cartDiscountEl && cartDiscountVal) {
    if (discountAmount > 0) {
      cartDiscountEl.style.display = 'flex';
      cartDiscountVal.textContent = `-$${discountAmount.toFixed(2)} (AURA20)`;
    } else {
      cartDiscountEl.style.display = 'none';
    }
  }

  if (cartShippingEl) {
    cartShippingEl.textContent = shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`;
  }

  if (cartTotalEl) cartTotalEl.textContent = `$${total.toFixed(2)}`;

  // Free shipping bar
  const currentAfterDiscount = subtotal - discountAmount;
  const progressPercent = Math.min(100, (currentAfterDiscount / freeShippingThreshold) * 100);
  if (freeShippingFill) freeShippingFill.style.width = `${progressPercent}%`;

  if (freeShippingText) {
    if (currentAfterDiscount >= freeShippingThreshold) {
      freeShippingText.innerHTML = `<span>🎉 You've unlocked <strong>Free Express Shipping!</strong></span>`;
    } else {
      const needed = freeShippingThreshold - currentAfterDiscount;
      freeShippingText.innerHTML = `<span>Add <strong>$${needed.toFixed(2)}</strong> more for Free Shipping</span> <span>${Math.round(progressPercent)}%</span>`;
    }
  }
}

// WhatsApp Checkout Modal & Formatter
function openWhatsAppCheckoutModal() {
  const { subtotal, discountAmount, shipping, total } = getCartCalculations();
  if (STATE.cart.length === 0) {
    showToast("Your cart is empty!", "gold");
    return;
  }

  const modal = document.getElementById('whatsapp-modal-overlay');
  const previewBox = document.getElementById('whatsapp-msg-preview');
  const nameInput = document.getElementById('whatsapp-customer-name');
  const notesInput = document.getElementById('whatsapp-special-notes');

  const customerName = (nameInput && nameInput.value.trim()) || "Valued Botanical Guest";
  const specialNotes = (notesInput && notesInput.value.trim()) || "None";

  // Build formatted message
  const formattedMessage = generateWhatsAppMessage(customerName, specialNotes, subtotal, discountAmount, shipping, total);
  if (previewBox) {
    previewBox.textContent = formattedMessage;
  }

  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function generateWhatsAppMessage(customerName, notes, subtotal, discount, shipping, total) {
  let msg = `🌿 *ORDER INQUIRY - AURA ESSENTIALS ORGANIC SKINCARE* 🌿\n`;
  msg += `---------------------------------\n`;
  msg += `*Customer Name:* ${customerName}\n`;
  msg += `*Order Date:* ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}\n`;
  msg += `---------------------------------\n`;
  msg += `*Selected Products:*\n`;

  STATE.cart.forEach(item => {
    const prod = PRODUCTS_DATA.find(p => p.id === item.id);
    if (prod) {
      const lineTotal = (prod.price * item.quantity).toFixed(2);
      msg += `• ${item.quantity}x ${prod.name} ($${prod.price.toFixed(2)} ea) = $${lineTotal}\n`;
    }
  });

  msg += `---------------------------------\n`;
  msg += `*Subtotal:* $${subtotal.toFixed(2)}\n`;
  if (discount > 0) {
    msg += `*Discount Applied:* -$${discount.toFixed(2)} (Code: AURA20)\n`;
  }
  msg += `*Shipping:* ${shipping === 0 ? "FREE" : '$' + shipping.toFixed(2)}\n`;
  msg += `*Estimated Total:* $${total.toFixed(2)}\n`;
  msg += `---------------------------------\n`;
  msg += `*Special Delivery Notes:* ${notes}\n`;
  msg += `---------------------------------\n`;
  msg += `✨ Hello Aura Essentials Team! I would love to confirm this organic skincare order. Please share availability & delivery timeline. Thank you!`;

  return msg;
}

function sendWhatsAppOrder() {
  const { subtotal, discountAmount, shipping, total } = getCartCalculations();
  const nameInput = document.getElementById('whatsapp-customer-name');
  const notesInput = document.getElementById('whatsapp-special-notes');

  const customerName = (nameInput && nameInput.value.trim()) || "Valued Botanical Guest";
  const specialNotes = (notesInput && notesInput.value.trim()) || "Please handle with care";

  const message = generateWhatsAppMessage(customerName, specialNotes, subtotal, discountAmount, shipping, total);
  const encoded = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/919999999999?text=${encoded}`;

  window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  closeWhatsAppModal();
  showToast("Opening WhatsApp with your formatted order!", "gold");
}

function closeWhatsAppModal() {
  const modal = document.getElementById('whatsapp-modal-overlay');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// ==========================================
// 5. WISHLIST MANAGEMENT
// ==========================================

function toggleWishlist(productId) {
  const index = STATE.wishlist.indexOf(productId);
  const prod = PRODUCTS_DATA.find(p => p.id === productId);
  if (index > -1) {
    STATE.wishlist.splice(index, 1);
    showToast(`Removed "${prod ? prod.name : 'Item'}" from wishlist`);
  } else {
    STATE.wishlist.push(productId);
    showToast(`Saved "${prod ? prod.name : 'Item'}" to your wishlist!`, 'gold');
  }
  saveWishlist();
  renderProducts();
}

function updateWishlistUI() {
  const badge = document.getElementById('wishlist-badge');
  if (badge) {
    badge.textContent = STATE.wishlist.length;
    badge.style.display = STATE.wishlist.length > 0 ? 'flex' : 'none';
  }

  const wishlistBody = document.getElementById('wishlist-items-body');
  if (!wishlistBody) return;

  if (STATE.wishlist.length === 0) {
    wishlistBody.innerHTML = `
      <div style="text-align: center; padding: 3rem 1rem; color: var(--text-muted);">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="margin-inline: auto; margin-bottom: 1rem; color: var(--text-light);"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
        <h4 style="font-family: var(--font-heading); font-size: 1.35rem; color: var(--text-main); margin-bottom: 0.5rem;">Your Wishlist is Empty</h4>
        <p style="font-size: 0.875rem;">Explore our handcrafted creations and save your favorites here.</p>
      </div>
    `;
    return;
  }

  wishlistBody.innerHTML = STATE.wishlist.map(id => {
    const prod = PRODUCTS_DATA.find(p => p.id === id);
    if (!prod) return '';
    return `
      <div class="cart-item">
        <img src="${prod.image}" alt="${prod.name}" class="cart-item-img" loading="lazy">
        <div class="cart-item-info">
          <h4 class="cart-item-name">${prod.name}</h4>
          <div class="cart-item-price">$${prod.price.toFixed(2)}</div>
          <div style="display: flex; gap: 0.75rem; margin-top: 0.5rem;">
            <button class="btn btn-primary btn-sm" onclick="window.addToCart(${prod.id}); window.toggleWishlist(${prod.id});">
              Add to Cart
            </button>
            <button class="cart-item-remove" onclick="window.toggleWishlist(${prod.id})">
              Remove
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function openWishlistModal() {
  updateWishlistUI();
  const modal = document.getElementById('wishlist-modal-overlay');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeWishlistModal() {
  const modal = document.getElementById('wishlist-modal-overlay');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// ==========================================
// 6. PRODUCT RENDERING & FILTERING
// ==========================================

function filterAndSortProducts() {
  return PRODUCTS_DATA.filter(prod => {
    // Category Filter
    if (STATE.activeCategory !== 'All' && prod.category !== STATE.activeCategory) {
      return false;
    }
    // Skin Type Filter
    if (STATE.activeSkinType !== 'All' && prod.skinType !== STATE.activeSkinType && prod.skinType !== 'All Skin Types') {
      return false;
    }
    // Max Price Filter
    if (prod.price > STATE.maxPrice) {
      return false;
    }
    // Search Query
    if (STATE.searchQuery.trim() !== '') {
      const q = STATE.searchQuery.toLowerCase().trim();
      const matchName = prod.name.toLowerCase().includes(q);
      const matchDesc = prod.shortDesc.toLowerCase().includes(q);
      const matchIng = prod.ingredients.toLowerCase().includes(q);
      const matchCat = prod.category.toLowerCase().includes(q);
      if (!matchName && !matchDesc && !matchIng && !matchCat) return false;
    }
    return true;
  }).sort((a, b) => {
    if (STATE.sortBy === 'price-low') return a.price - b.price;
    if (STATE.sortBy === 'price-high') return b.price - a.price;
    if (STATE.sortBy === 'newest') return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
    // Default: popularity / best sellers first
    return (b.isBestSeller ? 1 : 0) - (a.isBestSeller ? 1 : 0) || b.reviewsCount - a.reviewsCount;
  });
}

function renderProducts() {
  const grid = document.getElementById('products-grid');
  const countEl = document.getElementById('product-count-display');
  if (!grid) return;

  const filtered = filterAndSortProducts();

  if (countEl) {
    countEl.textContent = `Showing ${filtered.length} of ${PRODUCTS_DATA.length} organic creations`;
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="no-results">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
        <h3 style="font-family: var(--font-heading); font-size: 1.65rem; margin-bottom: 0.5rem;">No Formulations Found</h3>
        <p style="color: var(--text-muted); font-size: 0.95rem; margin-bottom: 1.5rem;">Try adjusting your search criteria, price range, or category filter.</p>
        <button class="btn btn-primary btn-sm" onclick="window.resetFilters()">Reset All Filters</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(prod => {
    const isWished = STATE.wishlist.includes(prod.id);
    return `
      <div class="product-card" data-product-id="${prod.id}">
        <div class="product-img-box">
          <img src="${prod.image}" alt="${prod.name}" class="product-img" loading="lazy">
          
          <div class="product-badges">
            ${prod.isOrganic ? `<span class="badge-pill badge-organic">🌱 100% Organic</span>` : ''}
            ${prod.isBestSeller ? `<span class="badge-pill badge-bestseller">★ Best Seller</span>` : ''}
            ${prod.isNew ? `<span class="badge-pill badge-new">New</span>` : ''}
            ${prod.discount ? `<span class="badge-pill badge-discount">${prod.discount}</span>` : ''}
          </div>

          <button class="product-wishlist-btn ${isWished ? 'active' : ''}" 
                  onclick="window.toggleWishlist(${prod.id})" 
                  aria-label="${isWished ? 'Remove from Wishlist' : 'Add to Wishlist'}">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="${isWished ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
          </button>

          <button class="product-quick-view-btn" onclick="window.openProductModal(${prod.id})">
            Quick View
          </button>
        </div>

        <div class="product-info">
          <span class="product-category">${prod.category} • ${prod.skinType}</span>
          <h3 class="product-title" onclick="window.openProductModal(${prod.id})" style="cursor: pointer;">${prod.name}</h3>
          <p class="product-desc">${prod.shortDesc}</p>

          <div class="product-rating">
            <span class="rating-stars">★★★★★</span>
            <span style="font-weight: 700; color: var(--text-main); font-size: 0.8125rem;">${prod.rating.toFixed(1)}</span>
            <span class="rating-count">(${prod.reviewsCount})</span>
          </div>

          <div class="product-bottom-row">
            <div class="price-box">
              <span class="product-price">$${prod.price.toFixed(2)}</span>
              ${prod.oldPrice ? `<span class="product-old-price">$${prod.oldPrice.toFixed(2)}</span>` : ''}
            </div>

            <button class="btn-add-cart" onclick="window.addToCart(${prod.id})" aria-label="Add ${prod.name} to Cart">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function resetFilters() {
  STATE.activeCategory = 'All';
  STATE.activeSkinType = 'All';
  STATE.searchQuery = '';
  STATE.maxPrice = 120;
  STATE.sortBy = 'popularity';

  const searchInput = document.getElementById('product-search-input');
  if (searchInput) searchInput.value = '';

  const skinSelect = document.getElementById('skin-type-select');
  if (skinSelect) skinSelect.value = 'All';

  const sortSelect = document.getElementById('sort-by-select');
  if (sortSelect) sortSelect.value = 'popularity';

  const priceSlider = document.getElementById('price-range-slider');
  const priceVal = document.getElementById('price-slider-value');
  if (priceSlider) priceSlider.value = 120;
  if (priceVal) priceVal.textContent = '$120';

  // Update category pills
  document.querySelectorAll('.cat-pill').forEach(pill => {
    pill.classList.toggle('active', pill.dataset.cat === 'All');
  });

  renderProducts();
  showToast("Filters reset to default");
}

// Quick ingredient filter
function filterByIngredient(ingredientName) {
  STATE.searchQuery = ingredientName;
  const searchInput = document.getElementById('product-search-input');
  if (searchInput) searchInput.value = ingredientName;

  renderProducts();

  const shopSection = document.getElementById('shop');
  if (shopSection) {
    shopSection.scrollIntoView({ behavior: 'smooth' });
  }

  showToast(`Filtered formulations featuring ${ingredientName}`, 'gold');
}

// ==========================================
// 7. INGREDIENTS TRANSPARENCY SECTION
// ==========================================

function renderIngredients() {
  const container = document.getElementById('ingredients-grid');
  if (!container) return;

  container.innerHTML = INGREDIENTS_DATA.map(ing => `
    <div class="ingredient-card">
      <div class="ingredient-card-header">
        <img src="${ing.image}" alt="${ing.name}" class="ingredient-avatar" loading="lazy">
        <div class="ingredient-meta">
          <h3 class="ingredient-name">${ing.name}</h3>
          <span class="ingredient-botanical">${ing.botanical}</span>
          <span class="ingredient-origin">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
            ${ing.origin}
          </span>
        </div>
      </div>

      <div class="ingredient-details">
        <p class="ingredient-prop">
          <strong>Key Benefits:</strong> ${ing.benefits}
        </p>
        <div>
          <span class="ingredient-badge-skin">Suitable for: ${ing.skinType}</span>
        </div>
      </div>

      <button class="btn-filter-ingredient" onclick="window.filterByIngredient('${ing.name}')">
        <span>View formulations with this ingredient</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
      </button>
    </div>
  `).join('');
}

// ==========================================
// 8. PRODUCT DETAILS MODAL (QUICK VIEW)
// ==========================================

let modalCurrentQuantity = 1;

function openProductModal(productId) {
  const prod = PRODUCTS_DATA.find(p => p.id === productId);
  if (!prod) return;

  modalCurrentQuantity = 1;

  const modal = document.getElementById('product-modal-overlay');
  const mainImg = document.getElementById('modal-main-image');
  const thumbsRow = document.getElementById('modal-thumbs-row');
  const catEl = document.getElementById('modal-category');
  const titleEl = document.getElementById('modal-title');
  const currentPriceEl = document.getElementById('modal-current-price');
  const oldPriceEl = document.getElementById('modal-old-price');
  const descEl = document.getElementById('modal-description');
  const ingredientsEl = document.getElementById('modal-ingredients');
  const benefitsEl = document.getElementById('modal-benefits');
  const howToUseEl = document.getElementById('modal-how-to-use');
  const skinTypeEl = document.getElementById('modal-skin-type');
  const ratingEl = document.getElementById('modal-rating-score');
  const reviewsCountEl = document.getElementById('modal-reviews-count');
  const qtyNumEl = document.getElementById('modal-qty-number');
  const addBtn = document.getElementById('modal-add-cart-btn');
  const whatsappInquireBtn = document.getElementById('modal-whatsapp-inquire-btn');

  if (mainImg) mainImg.src = prod.image;
  if (mainImg) mainImg.alt = prod.name;

  if (thumbsRow) {
    thumbsRow.innerHTML = prod.gallery.map((imgUrl, idx) => `
      <div class="modal-thumb ${idx === 0 ? 'active' : ''}" onclick="window.changeModalImage('${imgUrl}', this)">
        <img src="${imgUrl}" alt="${prod.name} thumbnail" loading="lazy">
      </div>
    `).join('');
  }

  if (catEl) catEl.textContent = `${prod.category} • Certified 100% Organic`;
  if (titleEl) titleEl.textContent = prod.name;
  if (currentPriceEl) currentPriceEl.textContent = `$${prod.price.toFixed(2)}`;
  if (oldPriceEl) oldPriceEl.textContent = prod.oldPrice ? `$${prod.oldPrice.toFixed(2)}` : '';
  if (descEl) descEl.textContent = prod.description;
  if (ingredientsEl) ingredientsEl.textContent = prod.ingredients;
  if (benefitsEl) benefitsEl.textContent = prod.benefits;
  if (howToUseEl) howToUseEl.textContent = prod.howToUse;
  if (skinTypeEl) skinTypeEl.textContent = prod.skinType;
  if (ratingEl) ratingEl.textContent = prod.rating.toFixed(1);
  if (reviewsCountEl) reviewsCountEl.textContent = `(${prod.reviewsCount} verified reviews)`;
  if (qtyNumEl) qtyNumEl.textContent = '1';

  if (addBtn) {
    addBtn.onclick = () => {
      addToCart(prod.id, modalCurrentQuantity);
      closeProductModal();
    };
  }

  if (whatsappInquireBtn) {
    whatsappInquireBtn.onclick = () => {
      const text = encodeURIComponent(`🌿 Hello Aura Essentials! I am inquiring about the "${prod.name}" ($${prod.price.toFixed(2)}). Could you tell me more about its availability & shipping?`);
      window.open(`https://wa.me/919999999999?text=${text}`, '_blank');
    };
  }

  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function changeModalImage(src, thumbElement) {
  const mainImg = document.getElementById('modal-main-image');
  if (mainImg) mainImg.src = src;

  document.querySelectorAll('.modal-thumb').forEach(t => t.classList.remove('active'));
  if (thumbElement) thumbElement.classList.add('active');
}

function updateModalQuantity(delta) {
  modalCurrentQuantity = Math.max(1, modalCurrentQuantity + delta);
  const qtyEl = document.getElementById('modal-qty-number');
  if (qtyEl) qtyEl.textContent = modalCurrentQuantity;
}

function closeProductModal() {
  const modal = document.getElementById('product-modal-overlay');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// ==========================================
// 9. TESTIMONIALS CAROUSEL
// ==========================================

let testimonialInterval = null;

function renderTestimonials() {
  const slider = document.getElementById('testimonial-slider');
  const dotsContainer = document.getElementById('carousel-dots');
  if (!slider) return;

  slider.innerHTML = TESTIMONIALS_DATA.map(t => `
    <div class="testimonial-slide">
      <div class="testimonial-card">
        <div class="testimonial-stars">★★★★★</div>
        <p class="testimonial-quote">${t.quote}</p>
        <div class="testimonial-author-box">
          <img src="${t.avatar}" alt="${t.name}" class="author-avatar" loading="lazy">
          <div class="author-info">
            <h4 class="author-name">${t.name}</h4>
            <span style="font-size: 0.78rem; color: var(--text-light);">${t.location}</span>
            <div>
              <span class="author-badge">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                Verified Buyer • ${t.product}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `).join('');

  if (dotsContainer) {
    dotsContainer.innerHTML = TESTIMONIALS_DATA.map((_, idx) => `
      <span class="dot ${idx === 0 ? 'active' : ''}" onclick="window.goToTestimonial(${idx})" aria-label="Slide ${idx + 1}"></span>
    `).join('');
  }

  startTestimonialAutoSlide();
}

function goToTestimonial(index) {
  STATE.currentTestimonialIndex = (index + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length;
  const slider = document.getElementById('testimonial-slider');
  if (slider) {
    slider.style.transform = `translateX(-${STATE.currentTestimonialIndex * 100}%)`;
  }
  document.querySelectorAll('.carousel-dots .dot').forEach((d, idx) => {
    d.classList.toggle('active', idx === STATE.currentTestimonialIndex);
  });
}

function nextTestimonial() {
  goToTestimonial(STATE.currentTestimonialIndex + 1);
}

function prevTestimonial() {
  goToTestimonial(STATE.currentTestimonialIndex - 1);
}

function startTestimonialAutoSlide() {
  if (testimonialInterval) clearInterval(testimonialInterval);
  testimonialInterval = setInterval(nextTestimonial, 6000);
}

// ==========================================
// 10. FAQ ACCORDION LOGIC
// ==========================================

const FAQ_DATA = [
  {
    category: "Ingredients",
    question: "Are Aura Essentials formulations 100% natural and certified organic?",
    answer: "Yes, absolutely. Every formulation is crafted using certified organic, cold-pressed plant extracts and Ayurvedic herbs ethically sourced from family-owned organic farms in Kerala and Rajasthan. We never use parabens, sulfates, phthalates, synthetic perfumes, or mineral oils."
  },
  {
    category: "Skin Types",
    question: "How do I know which formulation is best for my skin type?",
    answer: "We formulate with biocompatible botanical actives designed to adapt to specific skin conditions. You can use our interactive skin type filter in the Shop section, or reach out to our licensed botanical advisor via WhatsApp for a tailored personal consultation."
  },
  {
    category: "Shipping",
    question: "How long does shipping take and is carbon-neutral delivery guaranteed?",
    answer: "Domestic orders ship within 24-48 hours and arrive in 3-5 business days. International orders typically arrive in 6-10 business days. We partner exclusively with green logistics couriers and use 100% biodegradable glass, aluminum, and FSC-certified bamboo packaging."
  },
  {
    category: "Orders",
    question: "How does the WhatsApp Checkout work?",
    answer: "When you click 'Checkout via WhatsApp', our system automatically formats your entire shopping cart into a clean, itemized order invoice with your name and delivery instructions. It launches WhatsApp directly with our support team, who will confirm your address and share tracking."
  },
  {
    category: "Returns",
    question: "What is your satisfaction guarantee and return policy?",
    answer: "We stand behind our organic formulations with a 30-Day Radiant Skin Guarantee. If any product does not agree with your skin, contact our team for an effortless exchange or full refund."
  },
  {
    category: "Payments",
    question: "What payment methods are supported?",
    answer: "In this showcase frontend demo, transactions are coordinated directly via WhatsApp with our boutique concierge. In live retail deployments, all major cards, UPI, Apple Pay, and Net Banking are supported."
  }
];

function renderFAQ(activeCategory = 'All') {
  const container = document.getElementById('faq-accordion-wrap');
  if (!container) return;

  const filtered = activeCategory === 'All' ? FAQ_DATA : FAQ_DATA.filter(f => f.category === activeCategory);

  container.innerHTML = filtered.map((item, idx) => `
    <div class="faq-item ${idx === 0 ? 'active' : ''}">
      <button class="faq-question-btn" onclick="window.toggleFAQ(this)" aria-expanded="${idx === 0 ? 'true' : 'false'}">
        <span>${item.question}</span>
        <svg class="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
      </button>
      <div class="faq-answer">
        <p>${item.answer}</p>
      </div>
    </div>
  `).join('');
}

function toggleFAQ(button) {
  const item = button.closest('.faq-item');
  const wasActive = item.classList.contains('active');

  document.querySelectorAll('.faq-item').forEach(i => {
    i.classList.remove('active');
    const btn = i.querySelector('.faq-question-btn');
    if (btn) btn.setAttribute('aria-expanded', 'false');
  });

  if (!wasActive) {
    item.classList.add('active');
    button.setAttribute('aria-expanded', 'true');
  }
}

// ==========================================
// 11. THEME TOGGLE (DARK MODE)
// ==========================================

function initTheme() {
  const savedTheme = localStorage.getItem('aura_theme');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    document.body.classList.add('dark-mode');
    updateThemeIcon(true);
  } else {
    document.body.classList.remove('dark-mode');
    updateThemeIcon(false);
  }
}

function toggleTheme() {
  const isDark = document.body.classList.toggle('dark-mode');
  localStorage.setItem('aura_theme', isDark ? 'dark' : 'light');
  updateThemeIcon(isDark);
  showToast(isDark ? "Switched to Dark Sanctuary Theme" : "Switched to Natural Light Theme");
}

function updateThemeIcon(isDark) {
  const btn = document.getElementById('theme-toggle-btn');
  if (!btn) return;

  if (isDark) {
    btn.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>`;
    btn.setAttribute('aria-label', 'Switch to Light Mode');
  } else {
    btn.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`;
    btn.setAttribute('aria-label', 'Switch to Dark Mode');
  }
}

// ==========================================
// 12. SCROLL PROGRESS & ANIMATED COUNTERS
// ==========================================

function initScrollEffects() {
  const progressBar = document.getElementById('scroll-progress');
  const header = document.querySelector('.site-header');
  const backToTop = document.getElementById('back-to-top-btn');

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;

    if (progressBar) progressBar.style.width = `${scrollPercent}%`;

    if (header) {
      if (scrollTop > 50) header.classList.add('scrolled');
      else header.classList.remove('scrolled');
    }

    if (backToTop) {
      if (scrollTop > 400) backToTop.classList.add('visible');
      else backToTop.classList.remove('visible');
    }
  });

  // Scroll reveal observer
  const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealElements.forEach(el => revealObserver.observe(el));

  // Animated counters
  const counters = document.querySelectorAll('.counter-val');
  let countersAnimated = false;

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !countersAnimated) {
        countersAnimated = true;
        animateCounters();
      }
    });
  }, { threshold: 0.3 });

  const statsSection = document.getElementById('stats');
  if (statsSection) counterObserver.observe(statsSection);
}

function animateCounters() {
  const counters = [
    { id: 'counter-products', target: 50, suffix: '+' },
    { id: 'counter-customers', target: 25, suffix: 'K+' },
    { id: 'counter-natural', target: 100, suffix: '%' },
    { id: 'counter-rating', target: 4.9, suffix: ' ★', isDecimal: true }
  ];

  counters.forEach(item => {
    const el = document.getElementById(item.id);
    if (!el) return;

    let current = 0;
    const duration = 1800;
    const steps = 40;
    const increment = item.target / steps;
    const stepTime = duration / steps;

    const timer = setInterval(() => {
      current += increment;
      if (current >= item.target) {
        current = item.target;
        clearInterval(timer);
      }
      el.textContent = (item.isDecimal ? current.toFixed(1) : Math.floor(current)) + item.suffix;
    }, stepTime);
  });
}

// ==========================================
// 13. NEWSLETTER POPUP & PROMO CODE
// ==========================================

function initNewsletterPopup() {
  const isDismissed = localStorage.getItem('aura_newsletter_dismissed');
  if (isDismissed) return;

  setTimeout(() => {
    const overlay = document.getElementById('newsletter-popup-overlay');
    if (overlay && !document.querySelector('.cart-drawer-overlay.active') && !document.querySelector('.product-modal-overlay.active')) {
      overlay.classList.add('active');
    }
  }, 6000);
}

function closeNewsletterPopup(neverShowAgain = false) {
  const overlay = document.getElementById('newsletter-popup-overlay');
  if (overlay) overlay.classList.remove('active');

  const check = document.getElementById('newsletter-dont-show');
  if (neverShowAgain || (check && check.checked)) {
    localStorage.setItem('aura_newsletter_dismissed', 'true');
  }
}

function handleNewsletterSubmit(e) {
  e.preventDefault();
  const input = e.target.querySelector('input[type="email"]');
  if (input && input.value) {
    showToast(`Welcome! Use code AURA20 for 20% off your order.`, 'gold');
    closeNewsletterPopup(true);
    e.target.reset();
  }
}

function applyCouponCode() {
  const input = document.getElementById('coupon-input');
  if (!input) return;

  const code = input.value.trim().toUpperCase();
  if (code === 'AURA20') {
    STATE.activeCoupon = 'AURA20';
    localStorage.setItem('aura_coupon', 'AURA20');
    updateCartUI();
    showToast("Success! 20% Discount applied to your cart.", "gold");
  } else {
    showToast("Invalid code. Try using AURA20 for 20% off!", "gold");
  }
}

// ==========================================
// 14. CONTACT FORM HANDLING
// ==========================================

function handleContactSubmit(e) {
  e.preventDefault();
  const nameInput = document.getElementById('contact-name');
  const emailInput = document.getElementById('contact-email');
  const messageInput = document.getElementById('contact-message');

  if (!nameInput.value || !emailInput.value || !messageInput.value) {
    showToast("Please complete all required fields", "gold");
    return;
  }

  showToast(`Thank you, ${nameInput.value}! Our botanical team will respond within 24 hours.`, 'success');
  e.target.reset();
}

// ==========================================
// 15. GLOBAL EVENT LISTENERS & INITIALIZATION
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Theme
  initTheme();

  // 2. Render Components
  renderProducts();
  renderIngredients();
  renderTestimonials();
  renderFAQ();
  updateCartUI();
  updateWishlistUI();

  // 3. Scroll and Effects
  initScrollEffects();
  initNewsletterPopup();

  // 4. Cart Drawer Toggle Listeners
  const cartToggleBtn = document.getElementById('cart-toggle-btn');
  const cartCloseBtn = document.getElementById('cart-close-btn');
  const cartOverlay = document.getElementById('cart-drawer-overlay');
  const continueShoppingBtn = document.getElementById('continue-shopping-btn');

  if (cartToggleBtn) {
    cartToggleBtn.addEventListener('click', () => {
      cartOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  }

  const closeCart = () => {
    cartOverlay.classList.remove('active');
    document.body.style.overflow = '';
  };

  if (cartCloseBtn) cartCloseBtn.addEventListener('click', closeCart);
  if (continueShoppingBtn) continueShoppingBtn.addEventListener('click', closeCart);
  if (cartOverlay) {
    cartOverlay.addEventListener('click', (e) => {
      if (e.target === cartOverlay) closeCart();
    });
  }

  // 5. Wishlist Modal Listeners
  const wishlistToggleBtn = document.getElementById('wishlist-toggle-btn');
  const wishlistCloseBtn = document.getElementById('wishlist-close-btn');
  const wishlistOverlay = document.getElementById('wishlist-modal-overlay');

  if (wishlistToggleBtn) wishlistToggleBtn.addEventListener('click', openWishlistModal);
  if (wishlistCloseBtn) wishlistCloseBtn.addEventListener('click', closeWishlistModal);
  if (wishlistOverlay) {
    wishlistOverlay.addEventListener('click', (e) => {
      if (e.target === wishlistOverlay) closeWishlistModal();
    });
  }

  // 6. Mobile Drawer Listeners
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const mobileCloseBtn = document.getElementById('mobile-drawer-close');

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      mobileDrawer.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  }

  const closeMobileNav = () => {
    if (mobileDrawer) {
      mobileDrawer.classList.remove('active');
      document.body.style.overflow = '';
    }
  };

  if (mobileCloseBtn) mobileCloseBtn.addEventListener('click', closeMobileNav);
  if (mobileDrawer) {
    mobileDrawer.addEventListener('click', (e) => {
      if (e.target === mobileDrawer) closeMobileNav();
    });
  }

  // Close mobile drawer on link click
  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', closeMobileNav);
  });

  // 7. Filter Listeners
  const searchInput = document.getElementById('product-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      STATE.searchQuery = e.target.value;
      renderProducts();
    });
  }

  const skinSelect = document.getElementById('skin-type-select');
  if (skinSelect) {
    skinSelect.addEventListener('change', (e) => {
      STATE.activeSkinType = e.target.value;
      renderProducts();
    });
  }

  const sortSelect = document.getElementById('sort-by-select');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      STATE.sortBy = e.target.value;
      renderProducts();
    });
  }

  const priceSlider = document.getElementById('price-range-slider');
  const priceVal = document.getElementById('price-slider-value');
  if (priceSlider && priceVal) {
    priceSlider.addEventListener('input', (e) => {
      STATE.maxPrice = Number(e.target.value);
      priceVal.textContent = `$${STATE.maxPrice}`;
      renderProducts();
    });
  }

  // Category Pills
  document.querySelectorAll('.cat-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('.cat-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      STATE.activeCategory = pill.dataset.cat;
      renderProducts();
    });
  });

  // FAQ Category Buttons
  document.querySelectorAll('.faq-cat-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.faq-cat-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderFAQ(btn.dataset.faqCat);
    });
  });

  // Back to Top Button
  const backToTopBtn = document.getElementById('back-to-top-btn');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Keyboard accessibility (Escape key closes modals)
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeCart();
      closeWishlistModal();
      closeProductModal();
      closeWhatsAppModal();
      closeNewsletterPopup();
      closeMobileNav();
    }
  });
});

// Expose necessary functions to window for inline onclick handlers
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateCartQuantity = updateCartQuantity;
window.clearCart = clearCart;
window.toggleWishlist = toggleWishlist;
window.openWishlistModal = openWishlistModal;
window.closeWishlistModal = closeWishlistModal;
window.openProductModal = openProductModal;
window.closeProductModal = closeProductModal;
window.changeModalImage = changeModalImage;
window.updateModalQuantity = updateModalQuantity;
window.openWhatsAppCheckoutModal = openWhatsAppCheckoutModal;
window.closeWhatsAppModal = closeWhatsAppModal;
window.sendWhatsAppOrder = sendWhatsAppOrder;
window.filterByIngredient = filterByIngredient;
window.resetFilters = resetFilters;
window.toggleTheme = toggleTheme;
window.toggleFAQ = toggleFAQ;
window.goToTestimonial = goToTestimonial;
window.nextTestimonial = nextTestimonial;
window.prevTestimonial = prevTestimonial;
window.closeNewsletterPopup = closeNewsletterPopup;
window.handleNewsletterSubmit = handleNewsletterSubmit;
window.handleContactSubmit = handleContactSubmit;
window.applyCouponCode = applyCouponCode;
