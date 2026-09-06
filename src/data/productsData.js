/**
 * ============================================================================
 *                          PARADISE OPTICS DATABASE
 * ============================================================================
 * 
 * This file contains all the static data for the store, including products,
 * brand logs, services, client testimonials, and FAQs.
 * 
 * 💡 TIPS FOR EDITING:
 * - Press "Ctrl + F" in your editor to search.
 * - Search for the exact SECTION TAGS below to jump to that section instantly.
 * 
 * ----------------------------------------------------------------------------
 *  SECTION SEARCH TAGS                      | DESCRIPTION
 * ----------------------------------------------------------------------------
 *  [SECTION: EYEGLASSES]                     | Eyeglasses products list
 *  [SECTION: SUNGLASSES]                     | Sunglasses products list
 *  [SECTION: CONTACT-LENSES]                 | Contact lenses products list
 *  [SECTION: BRANDS]                         | Brand names and logo emojis
 *  [SECTION: SERVICES]                       | Showroom service details
 *  [SECTION: TESTIMONIALS]                   | Customer review block quotes
 *  [SECTION: FAQS]                           | Frequently Asked Questions
 * ============================================================================
 */

export const PRODUCTS = [

  // ========================================== 
  //   [SECTION: EYEGLASSES] 
  // ==========================================
  {
    "id": "eye-01",
    "name": "Ray-Ban Clubmaster Optics",
    "brand": "Ray-Ban",
    "category": "eyeglasses",
    "subCategory": "Clubmaster",
    "price": 14790,
    "discountPrice": 12571,
    "rating": 4.9,
    "reviewsCount": 88,
    "gender": "Men",
    "frameShape": "Browline",
    "frameColor": "Black Gold",
    "frameMaterial": "Acetate",
    "lensCompatibility": "Single Vision, Bifocal, Progressive",
    "size": "Medium",
    "sizeInfo": "Lens Width: 51mm, Bridge: 21mm, Temple: 145mm",
    "description": "Retro and timeless, the Ray-Ban Clubmaster Optics are inspired by the 50s. The unmistakable design is worn by intellectuals and cultural leaders alike. Crafted with acetate browline and gold metal details.",
    "inStock": true,
    "images": [
      "/products/rm1.webp"
    ],
    "features": [
      "Classic browline silhouette",
      "Premium acetate frames",
      "Adjustable silicon pads"
    ]
  },
  {
    "id": "eye-02",
    "name": "Ray-Ban RX5154 Clubmaster",
    "brand": "Ray-Ban",
    "category": "eyeglasses",
    "subCategory": "Retro Specs",
    "price": 8400,
    "discountPrice": 7600,
    "rating": 4.8,
    "reviewsCount": 65,
    "gender": "men",
    "frameShape": "Browline",
    "frameColor": "Tortoise Gold",
    "frameMaterial": "Acetate & Metal",
    "lensCompatibility": "Single Vision & Progressives",
    "size": "Medium",
    "sizeInfo": "Lens Width: 49mm, Bridge: 21mm, Temple: 140mm",
    "description": "The Ray-Ban Clubmaster Optical eyeglasses are retro and timeless. Inspired by the 1950s, the unmistakable design of the Clubmaster Optics is worn by intellectuals who lead the change of tomorrow.",
    "inStock": true,
    "images": [
      "/products/rm2.webp"
    ],
    "features": [
      "Classic tortoise shell browlines",
      "Polished gold metal rim wireframes",
      "Adjustable soft nose pads"
    ]
  },
  {
    "id": "eye-03",
    "name": "Burberry 4474U",
    "brand": "Burberry",
    "category": "eyeglasses",
    "subCategory": "Computer Protection",
    "price": 20590,
    "discountPrice": 16472,
    "rating": 4.7,
    "reviewsCount": 310,
    "gender": "Men",
    "frameShape": "Rectangle",
    "frameColor": "Matte Blue",
    "frameMaterial": "TR90 Flexible",
    "lensCompatibility": "Blue Cut Lenses Pre-fitted",
    "size": "Large",
    "sizeInfo": "Lens Width: 54mm, Bridge: 17mm, Temple: 142mm",
    "description": "Designed for digital screen users, these Burberry+ glasses are equipped with advanced blue light protection lenses. The ultra-flexible TR90 frame ensures high flexibility and shock-resistance.",
    "inStock": true,
    "images": [
      "/products/Burberrym1.webp"
    ],
    "features": [
      "TR90 memory-flex technology",
      "Pre-fitted blue cut lens",
      "Extremely flexible & durable"
    ]
  },
  {
    "id": "eye-04",
    "name": "Burberry 3167",
    "brand": "Burberry",
    "category": "eyeglasses",
    "subCategory": "Classic Square",
    "price": 24490,
    "discountPrice": 19592,
    "rating": 4.8,
    "reviewsCount": 36,
    "gender": "Men",
    "frameShape": "Square",
    "frameColor": "Classic Tortoise Check",
    "frameMaterial": "Acetate",
    "lensCompatibility": "Single Vision, Bifocal, Progressive, Blue Cut",
    "size": "Medium",
    "sizeInfo": "Lens Width: 52mm, Bridge: 19mm, Temple: 140mm",
    "description": "Luxurious acetate frame detailed with the signature Burberry House Check pattern along the temples. Features a heavy-duty 5-barrel hinge design.",
    "inStock": true,
    "images": [
      "/products/Burberrym2.webp"
    ],
    "features": [
      "Signature house check detailing",
      "Handcrafted Italian acetate",
      "Premium flex temples"
    ]
  },
  {
    "id": "eye-05",
    "name": "Burberry 4468",
    "brand": "Burberry",
    "category": "eyeglasses",
    "subCategory": "Chic Round",
    "price": 19490,
    "discountPrice": 15592,
    "rating": 4.7,
    "reviewsCount": 24,
    "gender": "Women",
    "frameShape": "Round",
    "frameColor": "Honey Gold Check",
    "frameMaterial": "Titanium",
    "lensCompatibility": "Single Vision, Bifocal, Progressive, Blue Cut",
    "size": "Medium",
    "sizeInfo": "Lens Width: 50mm, Bridge: 20mm, Temple: 140mm",
    "description": "Ultra-lightweight gold titanium round eyeglasses. Features slim temples with a subtle honey check enamel inlay.",
    "inStock": true,
    "images": [
      "/products/Burberry1.webp"
    ],
    "features": [
      "Ultralight pure titanium rim",
      "Enamel inlay design",
      "Corrosion-resistant gold polish"
    ]
  },
  {
    "id": "eye-06",
    "name": "Michael Kors 4134U Spectacle",
    "brand": "Michael Kors",
    "category": "eyeglasses",
    "subCategory": "Classic Square",
    "price": 10390,
    "discountPrice": 8312,
    "rating": 4.6,
    "reviewsCount": 154,
    "gender": "Women",
    "frameShape": "Square",
    "frameColor": "Tortoise",
    "frameMaterial": "Acetate",
    "lensCompatibility": "Single Vision, Bifocal, Progressive",
    "size": "Large",
    "sizeInfo": "Lens Width: 53mm, Bridge: 18mm, Temple: 145mm",
    "description": "A bold frame with vintage roots. The Michael Kors Supreme Square features a timeless tortoise acetate design with metal pins on the wingtips, adding instant character to your profile.",
    "inStock": true,
    "images": [
      "/products/59.png"
    ],
    "features": [
      "Classic tortoise shell look",
      "Durable five-barrel hinges",
      "Eco-friendly premium acetate"
    ]
  },
  {
    "id": "eye-07",
    "name": "Michael Kors 4172U",
    "brand": "Michael Kors",
    "category": "eyeglasses",
    "subCategory": "Classic Rectangle",
    "price": 12390,
    "discountPrice": 10531,
    "rating": 4.8,
    "reviewsCount": 27,
    "gender": "Men",
    "frameShape": "Rectangle",
    "frameColor": "Gunmetal",
    "frameMaterial": "Acetate",
    "lensCompatibility": "Single Vision, Bifocal, Progressive, Blue Cut",
    "size": "Medium",
    "sizeInfo": "Lens Width: 52mm, Bridge: 18mm, Temple: 140mm",
    "description": "Experience luxury design by Michael Kors. Featuring premium build quality and classic styling suited for daily use.",
    "inStock": true,
    "images": [
      "/products/37.png"
    ],
    "features": [
      "Premium brand detailing",
      "Lightweight comfortable nose pads",
      "High-durability hinges"
    ]
  },
  {
    "id": "eye-08",
    "name": "Dolce & Gabbana 0DG4423",
    "brand": "Dolce & Gabbana",
    "category": "eyeglasses",
    "subCategory": "Classic Rectangle",
    "price": 18690,
    "discountPrice": 14950,
    "rating": 4.8,
    "reviewsCount": 27,
    "gender": "Men",
    "frameShape": "Rectangle",
    "frameColor": "Gunmetal",
    "frameMaterial": "Acetate",
    "lensCompatibility": "Single Vision, Bifocal, Progressive, Blue Cut",
    "size": "Medium",
    "sizeInfo": "Lens Width: 52mm, Bridge: 18mm, Temple: 140mm",
    "description": "Experience luxury design by Dolce & Gabbana. Featuring premium build quality and classic styling suited for daily use.",
    "inStock": true,
    "images": [
      "/products/dgm1.webp"
    ],
    "features": [
      "Premium brand detailing",
      "Lightweight comfortable nose pads",
      "High-durability hinges"
    ]
  },
  {
    "id": "eye-09",
    "name": "Dolce & Gabbana 0DG4417",
    "brand": "Dolce & Gabbana",
    "category": "eyeglasses",
    "subCategory": "Geometric Metal",
    "price": 22290,
    "discountPrice": 17830,
    "rating": 4.9,
    "reviewsCount": 42,
    "gender": "Women",
    "frameShape": "Geometric",
    "frameColor": "Matte Silver",
    "frameMaterial": "Titanium",
    "lensCompatibility": "Single Vision, Progressive, Blue Cut",
    "size": "Medium",
    "sizeInfo": "Lens Width: 53mm, Bridge: 17mm, Temple: 140mm",
    "description": "Ultra-modern geometric silhouette crafted from premium Japanese titanium. Exceptionally lightweight and corrosion-resistant.",
    "inStock": true,
    "images": [
      "/products/dgw1.webp"
    ],
    "features": [
      "100% Pure Titanium",
      "Flexible spring hinges",
      "Hypoallergenic titanium nose pads"
    ]
  },
  {
    "id": "eye-10",
    "name": "Tory Burch Elegant Cat-Eye",
    "brand": "Tory Burch",
    "category": "eyeglasses",
    "subCategory": "Cat Eye",
    "price": 4900,
    "discountPrice": 4200,
    "rating": 4.6,
    "reviewsCount": 64,
    "gender": "Women",
    "frameShape": "Cat Eye",
    "frameColor": "Transparent Pink",
    "frameMaterial": "Acetate",
    "lensCompatibility": "Single Vision, Bifocal, Progressive",
    "size": "Medium",
    "sizeInfo": "Lens Width: 52mm, Bridge: 18mm, Temple: 138mm",
    "description": "Add a pop of color to your style with Tory Burch's transparent pink cat eye frame. Crafted from high-density premium acetate, it offers gloss longevity and lightweight feel.",
    "inStock": true,
    "images": [
      "/products/61.png"
    ],
    "features": [
      "Trend-setting cat eye shape",
      "Premium translucent acetate",
      "Bold temple logo detailing"
    ]
  },
  {
    "id": "eye-11",
    "name": "Tory Burch Premium Rectangle Frames",
    "brand": "Tory Burch",
    "category": "eyeglasses",
    "subCategory": "Classic Rectangle",
    "price": 17890,
    "discountPrice": 14312,
    "rating": 4.8,
    "reviewsCount": 27,
    "gender": "Men",
    "frameShape": "Rectangle",
    "frameColor": "Gunmetal",
    "frameMaterial": "Acetate",
    "lensCompatibility": "Single Vision, Bifocal, Progressive, Blue Cut",
    "size": "Medium",
    "sizeInfo": "Lens Width: 52mm, Bridge: 18mm, Temple: 140mm",
    "description": "Experience luxury design by Tory Burch. Featuring premium build quality and classic styling suited for daily use.",
    "inStock": true,
    "images": [
      "/products/56.png"
    ],
    "features": [
      "Premium brand detailing",
      "Lightweight comfortable nose pads",
      "High-durability hinges"
    ]
  },
  {
    "id": "eye-12",
    "name": "Emporio Armani 4199U",
    "brand": "Emporio Armani",
    "category": "eyeglasses",
    "subCategory": "Kids Special",
    "price": 11890,
    "discountPrice": 10106,
    "rating": 4.8,
    "reviewsCount": 145,
    "gender": "men",
    "frameShape": "Oval",
    "frameColor": "Vibrant Cyan-Yellow",
    "frameMaterial": "Medical Silicone",
    "lensCompatibility": "Single Vision, Blue Cut",
    "size": "Small",
    "sizeInfo": "Lens Width: 44mm, Bridge: 15mm, Temple: 125mm",
    "description": "An incredibly robust, 100% bendable, medical-grade silicone frame for children. It has no metal screws or sharp edges, making it highly secure for play and learning.",
    "inStock": true,
    "images": [
      "/products/eam1.webp"
    ],
    "features": [
      "100% bendable medical silicone",
      "Screw-less elastic hinges",
      "Comes with an adjustable head strap"
    ]
  },
  {
    "id": "eye-13",
    "name": "Emporio Armani 2156",
    "brand": "Emporio Armani",
    "category": "eyeglasses",
    "subCategory": "Classic Rectangle",
    "price": 16590,
    "discountPrice": 14101,
    "rating": 4.8,
    "reviewsCount": 27,
    "gender": "Men",
    "frameShape": "Rectangle",
    "frameColor": "Gunmetal",
    "frameMaterial": "Acetate",
    "lensCompatibility": "Single Vision, Bifocal, Progressive, Blue Cut",
    "size": "Medium",
    "sizeInfo": "Lens Width: 52mm, Bridge: 18mm, Temple: 140mm",
    "description": "Experience luxury design by Emporio Armani. Featuring premium build quality and classic styling suited for daily use.",
    "inStock": true,
    "images": [
      "/products/eam2.webp"
    ],
    "features": [
      "Premium brand detailing",
      "Lightweight comfortable nose pads",
      "High-durability hinges"
    ]
  },
  {
    "id": "eye-14",
    "name": "Versace OVE2275",
    "brand": "Versace",
    "category": "eyeglasses",
    "subCategory": "Urban Style",
    "price": 37690,
    "discountPrice": 30152,
    "rating": 4.6,
    "reviewsCount": 39,
    "gender": "Men",
    "frameShape": "Square",
    "frameColor": "Matte Gunmetal Blue",
    "frameMaterial": "Stainless Steel",
    "lensCompatibility": "Single Vision, Progressive",
    "size": "Large",
    "sizeInfo": "Lens Width: 54mm, Bridge: 18mm, Temple: 145mm",
    "description": "The Versace Boulevard eyeglasses boast a contemporary matte gunmetal finish with dark blue rubber inserts along the temples, representing masculine, street-smart urban styling.",
    "inStock": true,
    "images": [
      "/products/vm1.webp"
    ],
    "features": [
      "Rugged urban styling",
      "Comfortable dual-injected rubber temples",
      "Durable spring-loaded frame"
    ]
  },
  {
    "id": "eye-15",
    "name": "Versace 0VE2262",
    "brand": "Versace",
    "category": "eyeglasses",
    "subCategory": "Classic Rectangle",
    "price": 29090,
    "discountPrice": 23272,
    "rating": 4.8,
    "reviewsCount": 27,
    "gender": "Men",
    "frameShape": "Rectangle",
    "frameColor": "Gunmetal",
    "frameMaterial": "Acetate",
    "lensCompatibility": "Single Vision, Bifocal, Progressive, Blue Cut",
    "size": "Medium",
    "sizeInfo": "Lens Width: 52mm, Bridge: 18mm, Temple: 140mm",
    "description": "Experience luxury design by Versace. Featuring premium build quality and classic styling suited for daily use.",
    "inStock": true,
    "images": [
      "/products/vm2.webp"
    ],
    "features": [
      "Premium brand detailing",
      "Lightweight comfortable nose pads",
      "High-durability hinges"
    ]
  },
  {
    "id": "eye-16",
    "name": "Coach Heritage Signature Frame",
    "brand": "Coach",
    "category": "eyeglasses",
    "subCategory": "Coach Fashion",
    "price": 6800,
    "discountPrice": 5800,
    "rating": 4.7,
    "reviewsCount": 72,
    "gender": "Women",
    "frameShape": "Cat Eye",
    "frameColor": "Champagne Gold Tortoise",
    "frameMaterial": "Premium Acetate",
    "lensCompatibility": "Single Vision, Progressive, Blue Cut",
    "size": "Small",
    "sizeInfo": "Lens Width: 50mm, Bridge: 17mm, Temple: 138mm",
    "description": "Exquisite and bold. This Coach optical frame features a flattering champagne gold tortoise acetate build with retro cat-eye styling. Extremely chic for high-fashion executive aesthetics.",
    "inStock": true,
    "images": [
      "/products/cw1.webp"
    ],
    "features": [
      "Vintage cat-eye profile",
      "Polished cellulose acetate",
      "Comfort saddle bridge"
    ]
  },
  {
    "id": "eye-17",
    "name": "Coach Premium Rectangle Frames",
    "brand": "Coach",
    "category": "eyeglasses",
    "subCategory": "Classic Rectangle",
    "price": 14000,
    "discountPrice": 11000,
    "rating": 4.8,
    "reviewsCount": 27,
    "gender": "Men",
    "frameShape": "Rectangle",
    "frameColor": "Gunmetal",
    "frameMaterial": "Acetate",
    "lensCompatibility": "Single Vision, Bifocal, Progressive, Blue Cut",
    "size": "Medium",
    "sizeInfo": "Lens Width: 52mm, Bridge: 18mm, Temple: 140mm",
    "description": "Experience luxury design by Coach. Featuring premium build quality and classic styling suited for daily use.",
    "inStock": true,
    "images": [
      "/products/cm1.webp"
    ],
    "features": [
      "Premium brand detailing",
      "Lightweight comfortable nose pads",
      "High-durability hinges"
    ]
  },
  {
    "id": "eye-18",
    "name": "Marc Jacobs Premium Rectangle Frames",
    "brand": "Marc Jacobs",
    "category": "eyeglasses",
    "subCategory": "Classic Rectangle",
    "price": 20200,
    "discountPrice": 15150,
    "rating": 4.8,
    "reviewsCount": 27,
    "gender": "Men",
    "frameShape": "Rectangle",
    "frameColor": "Gunmetal",
    "frameMaterial": "Acetate",
    "lensCompatibility": "Single Vision, Bifocal, Progressive, Blue Cut",
    "size": "Medium",
    "sizeInfo": "Lens Width: 52mm, Bridge: 18mm, Temple: 140mm",
    "description": "Experience luxury design by Marc Jacobs. Featuring premium build quality and classic styling suited for daily use.",
    "inStock": true,
    "images": [
      "/products/mjm1.webp"
    ],
    "features": [
      "Premium brand detailing",
      "Lightweight comfortable nose pads",
      "High-durability hinges"
    ]
  },
  {
    "id": "eye-19",
    "name": "Tommy Hilfiger Executive Club",
    "brand": "Tommy Hilfiger",
    "category": "eyeglasses",
    "subCategory": "Classic Wire",
    "price": 6800,
    "discountPrice": 5900,
    "rating": 4.7,
    "reviewsCount": 51,
    "gender": "women",
    "frameShape": "Aviator",
    "frameColor": "Gold Red-Blue Accent",
    "frameMaterial": "Monel Metal",
    "lensCompatibility": "Single Vision, Bifocal, Progressive",
    "size": "Large",
    "sizeInfo": "Lens Width: 56mm, Bridge: 16mm, Temple: 145mm",
    "description": "Premium aviator optical frame featuring Tommy's classic red-white-blue striping on the temple tips. The thin gold monel frame offers a classic, highly professional appearance.",
    "inStock": true,
    "images": [
      "/products/50.png"
    ],
    "features": [
      "Classic metal aviator frame",
      "Signature brand colors on temple tips",
      "Adjustable soft PVC pads"
    ]
  },
  {
    "id": "eye-20",
    "name": "Calvin Klein Premium Rectangle Frames",
    "brand": "Calvin Klein",
    "category": "eyeglasses",
    "subCategory": "Classic Rectangle",
    "price": 14000,
    "discountPrice": 11000,
    "rating": 4.8,
    "reviewsCount": 27,
    "gender": "Men",
    "frameShape": "Rectangle",
    "frameColor": "Gunmetal",
    "frameMaterial": "Acetate",
    "lensCompatibility": "Single Vision, Bifocal, Progressive, Blue Cut",
    "size": "Medium",
    "sizeInfo": "Lens Width: 52mm, Bridge: 18mm, Temple: 140mm",
    "description": "Experience luxury design by Calvin Klein. Featuring premium build quality and classic styling suited for daily use.",
    "inStock": true,
    "images": [
      "/products/54.png"
    ],
    "features": [
      "Premium brand detailing",
      "Lightweight comfortable nose pads",
      "High-durability hinges"
    ]
  },
  {
    "id": "eye-21",
    "name": "Guess Active Sport Geometric",
    "brand": "Guess",
    "category": "eyeglasses",
    "subCategory": "Computer Protection",
    "price": 1599,
    "discountPrice": 1199,
    "rating": 4.4,
    "reviewsCount": 389,
    "gender": "Unisex",
    "frameShape": "Square",
    "frameColor": "Crystal Clear",
    "frameMaterial": "Polycarbonate",
    "lensCompatibility": "Single Vision, Blue Cut",
    "size": "Medium",
    "sizeInfo": "Lens Width: 51mm, Bridge: 18mm, Temple: 140mm",
    "description": "Stay stylish during late-night study and screen sessions. This transparent polycarbonate frame from Guess includes blue light filtering properties, decreasing digital fatigue.",
    "inStock": true,
    "images": [
      "/products/39.png"
    ],
    "features": [
      "Modern clear crystal design",
      "Integrated nose bridges",
      "Blue light block barrier"
    ]
  },
  {
    "id": "eye-22",
    "name": "Guess Premium Rectangle Frames",
    "brand": "Guess",
    "category": "eyeglasses",
    "subCategory": "Classic Rectangle",
    "price": 14000,
    "discountPrice": 11000,
    "rating": 4.8,
    "reviewsCount": 27,
    "gender": "Men",
    "frameShape": "Rectangle",
    "frameColor": "Gunmetal",
    "frameMaterial": "Acetate",
    "lensCompatibility": "Single Vision, Bifocal, Progressive, Blue Cut",
    "size": "Medium",
    "sizeInfo": "Lens Width: 52mm, Bridge: 18mm, Temple: 140mm",
    "description": "Experience luxury design by Guess. Featuring premium build quality and classic styling suited for daily use.",
    "inStock": true,
    "images": [
      "/products/38.png"
    ],
    "features": [
      "Premium brand detailing",
      "Lightweight comfortable nose pads",
      "High-durability hinges"
    ]
  },
  {
    "id": "eye-23",
    "name": "Carrera Semi-Rimless Titan",
    "brand": "Carrera",
    "category": "eyeglasses",
    "subCategory": "Semi-Rimless",
    "price": 8500,
    "discountPrice": 7200,
    "rating": 4.7,
    "reviewsCount": 42,
    "gender": "Men",
    "frameShape": "Rectangle",
    "frameColor": "Gunmetal",
    "frameMaterial": "Titanium & Carbon",
    "lensCompatibility": "Single Vision, Progressive",
    "size": "Large",
    "sizeInfo": "Lens Width: 55mm, Bridge: 18mm, Temple: 145mm",
    "description": "The Carrera Semi-Rimless pairs a lightweight gunmetal titanium front with carbon fiber temples for ultimate strength and comfort. Exudes a sophisticated sporty charm.",
    "inStock": true,
    "images": [
      "/products/cm1.webp"
    ],
    "features": [
      "Ultralight titanium rim",
      "Real carbon fiber temples",
      "Flex hinges for tailored fit"
    ]
  },
  {
    "id": "eye-24",
    "name": "Oakley Steel Plate Rectangular",
    "brand": "Oakley",
    "category": "eyeglasses",
    "subCategory": "Sport Optical",
    "price": 9500,
    "discountPrice": 8500,
    "rating": 4.8,
    "reviewsCount": 46,
    "gender": "Men",
    "frameShape": "Rectangle",
    "frameColor": "Matte Dark Carbon",
    "frameMaterial": "Titanium Alloy",
    "lensCompatibility": "Single Vision, Progressive, Blue Cut",
    "size": "Medium",
    "sizeInfo": "Lens Width: 53mm, Bridge: 18mm, Temple: 140mm",
    "description": "Built for active lifestyles. The Oakley Steel Plate optical frames are crafted from premium heat-treated titanium alloy, featuring low-profile temples covered in signature Unobtainium ear socks for non-slip grip.",
    "inStock": true,
    "images": [
      "/products/om1.webp"
    ],
    "features": [
      "Heat-treated titanium build",
      "Non-slip Unobtainium ear socks",
      "Ultralight aerodynamic profile"
    ]
  },
  {
    "id": "eye-25",
    "name": "Oakley Pitchman R Active Frame",
    "brand": "Oakley",
    "category": "eyeglasses",
    "subCategory": "Sport Round",
    "price": 6500,
    "discountPrice": 5500,
    "rating": 4.8,
    "reviewsCount": 94,
    "gender": "Men",
    "frameShape": "Round",
    "frameColor": "Satin Black",
    "frameMaterial": "O-Matter & Steel",
    "lensCompatibility": "Single Vision, Progressive, Blue Cut",
    "size": "Medium",
    "sizeInfo": "Lens Width: 50mm, Bridge: 19mm, Temple: 140mm",
    "description": "Oakley Pitchman R pairs a lightweight O-Matter front with stainless steel temples and no-slip Unobtainium earsocks for pure sport elegance.",
    "inStock": true,
    "images": [
      "/products/om2.webp"
    ],
    "features": [
      "Lightweight O-Matter face",
      "No-slip Unobtainium earsocks",
      "Screwless hollowpoint hinge tech"
    ]
  },
  {
    "id": "eye-26",
    "name": "IDEE Minimalist Square",
    "brand": "IDEE",
    "category": "eyeglasses",
    "subCategory": "Square",
    "price": 4320,
    "discountPrice": 3672,
    "rating": 4.5,
    "reviewsCount": 24,
    "gender": "Men",
    "frameShape": "Square",
    "frameColor": "Matte Navy",
    "frameMaterial": "TR90",
    "lensCompatibility": "Single Vision, Bifocal, Progressive, Blue Cut",
    "size": "Medium",
    "sizeInfo": "Lens Width: 52mm, Bridge: 18mm, Temple: 140mm",
    "description": "A clean, basic square eyeglass frame in a sophisticated matte navy color. Made from flexible, lightweight TR90 material.",
    "inStock": true,
    "images": [
      "/products/17.png",
      "/products/21.png"
    ],
    "features": [
      "Flexible TR90",
      "Comfortable nose rest",
      "Highly durable"
    ]
  },
  {
    "id": "eye-27",
    "name": "IDEE Chic Round",
    "brand": "IDEE",
    "category": "eyeglasses",
    "subCategory": "Round",
    "price": 3240,
    "discountPrice": 2754,
    "rating": 4.8,
    "reviewsCount": 35,
    "gender": "Women",
    "frameShape": "Round",
    "frameColor": "Crystal Pink",
    "frameMaterial": "Acetate",
    "lensCompatibility": "Single Vision, Bifocal, Progressive, Blue Cut",
    "size": "Medium",
    "sizeInfo": "Lens Width: 49mm, Bridge: 20mm, Temple: 140mm",
    "description": "Fashionable round eyeglasses crafted in glossy crystal pink acetate. Adds a soft touch of color and youthful style to any look.",
    "inStock": true,
    "images": [
      "/products/12.png",
      "/products/21.png"
    ],
    "features": [
      "Glossy crystal acetate",
      "Flexible core wire temples",
      "Hypoallergenic nose-bridge"
    ]
  },
  {
    "id": "eye-28",
    "name": "IDEE Classic Rectangle",
    "brand": "IDEE",
    "category": "eyeglasses",
    "subCategory": "Rectangle",
    "price": 3240,
    "discountPrice": 2754,
    "rating": 4.6,
    "reviewsCount": 59,
    "gender": "Men",
    "frameShape": "Rectangle",
    "frameColor": "Polished Black",
    "frameMaterial": "Acetate",
    "lensCompatibility": "Single Vision, Bifocal, Progressive, Blue Cut",
    "size": "Large",
    "sizeInfo": "Lens Width: 54mm, Bridge: 17mm, Temple: 145mm",
    "description": "Standard rectangular eyeglass frame in high-grade polished black acetate. A smart choice for professional executive styling.",
    "inStock": true,
    "images": [
      "/products/8.png",
      "/products/21.png"
    ],
    "features": [
      "Professional rectangle profile",
      "Sturdy acetate construction",
      "Spring hinges"
    ]
  },
  {
    "id": "eye-29",
    "name": "IDEE Smart Aviator",
    "brand": "IDEE",
    "category": "eyeglasses",
    "subCategory": "Aviator",
    "price": 4320,
    "discountPrice": 3672,
    "rating": 4.7,
    "reviewsCount": 16,
    "gender": "women",
    "frameShape": "Aviator",
    "frameColor": "Thin Silver",
    "frameMaterial": "Stainless Steel",
    "lensCompatibility": "Single Vision, Bifocal, Progressive, Blue Cut",
    "size": "Large",
    "sizeInfo": "Lens Width: 56mm, Bridge: 16mm, Temple: 140mm",
    "description": "Ultra-thin stainless steel Aviator eyeglasses. Offers a lightweight fit and retro aesthetic suited for all face shapes.",
    "inStock": true,
    "images": [
      "/products/10.png",
      "/products/21.png"
    ],
    "features": [
      "Stainless steel frame",
      "Anti-slip temple tips",
      "Sleek double-bar bridge"
    ]
  },
  {
    "id": "eye-30",
    "name": "IDEE Modern Hexagon",
    "brand": "IDEE",
    "category": "eyeglasses",
    "subCategory": "Hexagonal",
    "price": 3240,
    "discountPrice": 2754,
    "rating": 4.7,
    "reviewsCount": 41,
    "gender": "Women",
    "frameShape": "Hexagonal",
    "frameColor": "Champagne Gold",
    "frameMaterial": "Metal Alloy",
    "lensCompatibility": "Single Vision, Bifocal, Progressive, Blue Cut",
    "size": "Medium",
    "sizeInfo": "Lens Width: 51mm, Bridge: 19mm, Temple: 140mm",
    "description": "Dainty geometric hexagonal eyeglasses in champagne gold. Features soft-touch nose pads for a weightless, premium fit.",
    "inStock": true,
    "images": [
      "/products/11.png",
      "/products/21.png"
    ],
    "features": [
      "Champagne gold alloy",
      "Geometric frame rim",
      "Silicone comfort cushions"
    ]
  },
  {
    "id": "eye-31",
    "name": "IDEE Bold Browline",
    "brand": "IDEE",
    "category": "eyeglasses",
    "subCategory": "Browline",
    "price": 3240,
    "discountPrice": 2754,
    "rating": 4.8,
    "reviewsCount": 27,
    "gender": "Men",
    "frameShape": "Browline",
    "frameColor": "Dark Walnut",
    "frameMaterial": "Acetate & Metal",
    "lensCompatibility": "Single Vision, Bifocal, Progressive, Blue Cut",
    "size": "Medium",
    "sizeInfo": "Lens Width: 52mm, Bridge: 20mm, Temple: 145mm",
    "description": "Bold walnut acetate browline with matching gold-finished lower eye wires. Delivers a sophisticated academic style.",
    "inStock": true,
    "images": [
      "/products/9.png",
      "/products/21.png"
    ],
    "features": [
      "Handcrafted dark wood look",
      "Sturdy structural support",
      "Elegant nose-pads"
    ]
  },
  {
    "id": "eye-32",
    "name": "IDEE Cat-Eye Silhouette",
    "brand": "IDEE",
    "category": "eyeglasses",
    "subCategory": "Cat-Eye",
    "price": 4320,
    "discountPrice": 3672,
    "rating": 4.6,
    "reviewsCount": 33,
    "gender": "Women",
    "frameShape": "Cat-Eye",
    "frameColor": "Crimson Plum",
    "frameMaterial": "TR90",
    "lensCompatibility": "Single Vision, Bifocal, Progressive, Blue Cut",
    "size": "Medium",
    "sizeInfo": "Lens Width: 51mm, Bridge: 18mm, Temple: 140mm",
    "description": "Plum crimson TR90 cat-eye eyeglass frame. Offers durable flexibility and a flattering upswept profile.",
    "inStock": true,
    "images": [
      "/products/16.png",
      "/products/21.png"
    ],
    "features": [
      "Flexible plum finish",
      "Lightweight design",
      "Feminine cat-eye cut"
    ]
  },
  {
    "id": "eye-33",
    "name": "OPIUM Bold Square",
    "brand": "OPIUM",
    "category": "eyeglasses",
    "subCategory": "Square",
    "price": 2900,
    "discountPrice": 2400,
    "rating": 4.6,
    "reviewsCount": 21,
    "gender": "women",
    "frameShape": "Square",
    "frameColor": "Glossy Midnight Black",
    "frameMaterial": "Acetate",
    "lensCompatibility": "Single Vision, Bifocal, Progressive, Blue Cut",
    "size": "Medium",
    "sizeInfo": "Lens Width: 52mm, Bridge: 18mm, Temple: 140mm",
    "description": "A thick-rimmed square frame that adds structural character and contrast to your look. High-strength Italian acetate build.",
    "inStock": true,
    "images": [
      "/products/p1.png"
    ],
    "features": [
      "Thick profile design",
      "Durable acetate construction",
      "Spring tension temples"
    ]
  },
  {
    "id": "eye-34",
    "name": "OPIUM Active Grip Rectangle",
    "brand": "OPIUM",
    "category": "eyeglasses",
    "subCategory": "Rectangle",
    "price": 3100,
    "discountPrice": 2600,
    "rating": 4.7,
    "reviewsCount": 32,
    "gender": "women",
    "frameShape": "Rectangle",
    "frameColor": "Matte Olive / Orange",
    "frameMaterial": "TR90",
    "lensCompatibility": "Single Vision, Bifocal, Progressive, Blue Cut",
    "size": "Large",
    "sizeInfo": "Lens Width: 55mm, Bridge: 17mm, Temple: 145mm",
    "description": "Ergonomic active rectangular frames with soft slip-resistant rubber temple sleeves in warning orange accents.",
    "inStock": true,
    "images": [
      "/products/p10.png"
    ],
    "features": [
      "Non-slip rubber sleeves",
      "Flex-core temple wires",
      "Ultralight TR90 build"
    ]
  },
  {
    "id": "eye-35",
    "name": "OPIUM Cat-Eye Enigma",
    "brand": "OPIUM",
    "category": "eyeglasses",
    "subCategory": "Cat-Eye",
    "price": 3300,
    "discountPrice": 2800,
    "rating": 4.8,
    "reviewsCount": 27,
    "gender": "Women",
    "frameShape": "Cat-Eye",
    "frameColor": "Amber Tortoise Shell",
    "frameMaterial": "Acetate",
    "lensCompatibility": "Single Vision, Bifocal, Progressive, Blue Cut",
    "size": "Medium",
    "sizeInfo": "Lens Width: 50mm, Bridge: 20mm, Temple: 140mm",
    "description": "A vintage upswept cat-eye frame in premium hand-polished amber tortoise. Delivers a sophisticated scholarly profile.",
    "inStock": true,
    "images": [
      "/products/p2.png"
    ],
    "features": [
      "Retro upswept shape",
      "Hand-polished gloss coating",
      "Hypoallergenic nose rest"
    ]
  },
  {
    "id": "eye-36",
    "name": "OPIUM Chic Hexagon",
    "brand": "OPIUM",
    "category": "eyeglasses",
    "subCategory": "Hexagonal",
    "price": 3400,
    "discountPrice": 2900,
    "rating": 4.7,
    "reviewsCount": 19,
    "gender": "Women",
    "frameShape": "Hexagonal",
    "frameColor": "Rose Gold / Black",
    "frameMaterial": "Stainless Steel",
    "lensCompatibility": "Single Vision, Bifocal, Progressive, Blue Cut",
    "size": "Medium",
    "sizeInfo": "Lens Width: 51mm, Bridge: 19mm, Temple: 140mm",
    "description": "Dainty wire-frame geometric hexagonal glasses in premium dual-tone rose gold and black plating. Weighs less than 15g.",
    "inStock": true,
    "images": [
      "/products/p5.png"
    ],
    "features": [
      "Geometric wireframe rims",
      "Anti-allergy steel alloy",
      "Comfort-flex nose brackets"
    ]
  },
  {
    "id": "eye-37",
    "name": "OPIUM Minimalist Round",
    "brand": "OPIUM",
    "category": "eyeglasses",
    "subCategory": "Round",
    "price": 3200,
    "discountPrice": 2700,
    "rating": 4.5,
    "reviewsCount": 14,
    "gender": "Unisex",
    "frameShape": "Round",
    "frameColor": "Gunmetal Gray",
    "frameMaterial": "Stainless Steel",
    "lensCompatibility": "Single Vision, Bifocal, Progressive, Blue Cut",
    "size": "Medium",
    "sizeInfo": "Lens Width: 49mm, Bridge: 21mm, Temple: 140mm",
    "description": "A classic thin round metal frame in gunmetal coating. Perfect, smart everyday option for study, office, or leisure.",
    "inStock": true,
    "images": [
      "/products/p6.png"
    ],
    "features": [
      "Retro thin wire round",
      "Coated spring hinge sockets",
      "Ergonomic ear bend tips"
    ]
  },
  {
    "id": "eye-38",
    "name": "IDEE Lightweight",
    "brand": "IDEE",
    "category": "eyeglasses",
    "subCategory": "Rectangle",
    "price": 4390,
    "discountPrice": 3730,
    "rating": 4.5,
    "reviewsCount": 19,
    "gender": "Unisex",
    "frameShape": "Rectangle",
    "frameColor": "Titanium Gray",
    "frameMaterial": "Titanium",
    "lensCompatibility": "Single Vision, Progressive, Blue Cut",
    "size": "Medium",
    "sizeInfo": "Lens Width: 53mm, Bridge: 17mm, Temple: 140mm",
    "description": "Premium rimless eyeglasses constructed with memory-flex titanium bridges and temples. Offers maximum comfort and zero visual obstruction.",
    "inStock": true,
    "images": [
      "/products/25.png",
      "/products/36.png"
    ],
    "features": [
      "Rimless minimalist fit",
      "Memory-flex titanium",
      "Screwed compression mount"
    ]
  },
  {
    "id": "eye-39",
    "name": "IDEE Urban Tech Square",
    "brand": "IDEE",
    "category": "eyeglasses",
    "subCategory": "Classic Square",
    "price": 2600,
    "discountPrice": 2200,
    "rating": 4.6,
    "reviewsCount": 18,
    "gender": "Men",
    "frameShape": "Square",
    "frameColor": "Crystal Gray",
    "frameMaterial": "TR90",
    "lensCompatibility": "Single Vision, Bifocal, Progressive, Blue Cut",
    "size": "Medium",
    "sizeInfo": "Lens Width: 53mm, Bridge: 18mm, Temple: 140mm",
    "description": "Tech-forward square clear gray frames by IDEE. Made from flexible, lightweight TR90 material for a weightless daily fit.",
    "inStock": true,
    "images": [
      "/products/38.png",
      "/products/36.png"
    ],
    "features": [
      "Flexible TR90 construction",
      "Stray-light reduction coating",
      "Robust keyhole bridge design"
    ]
  },
  {
    "id": "eye-40",
    "name": "IDEE sheet ",
    "brand": "IDEE",
    "category": "eyeglasses",
    "subCategory": "Chic Round",
    "price": 3550,
    "discountPrice": 3017,
    "rating": 4.8,
    "reviewsCount": 22,
    "gender": "Women",
    "frameShape": "Round",
    "frameColor": "Rose Gold",
    "frameMaterial": "Titanium",
    "lensCompatibility": "Single Vision, Bifocal, Progressive, Blue Cut",
    "size": "Medium",
    "sizeInfo": "Lens Width: 49mm, Bridge: 20mm, Temple: 140mm",
    "description": "Feminine, wire-rimmed round spectacles detailed with a polished rose gold titanium finish. Resists corrosion and daily wear.",
    "inStock": true,
    "images": [
      "/products/29.png",
      "/products/36.png"
    ],
    "features": [
      "Pure lightweight titanium rim",
      "Flexible spring temples",
      "Hypoallergenic nose rest pads"
    ]
  },
  {
    "id": "eye-41",
    "name": "IDEE Flex-Fit Rectangle",
    "brand": "IDEE",
    "category": "eyeglasses",
    "subCategory": "Classic Rectangle",
    "price": 4200,
    "discountPrice": 3570,
    "rating": 4.5,
    "reviewsCount": 31,
    "gender": "Men",
    "frameShape": "Rectangle",
    "frameColor": "Matte Blue",
    "frameMaterial": "TR90",
    "lensCompatibility": "Single Vision, Bifocal, Progressive, Blue Cut",
    "size": "Large",
    "sizeInfo": "Lens Width: 54mm, Bridge: 17mm, Temple: 145mm",
    "description": "Durable, everyday rectangular frames in a rich matte blue color. Fits comfortably with built-in flex hinges.",
    "inStock": true,
    "images": [
      "/products/idee-men.png",
      "/products/36.png"
    ],
    "features": [
      "Ergonomic temple bend tips",
      "Slip-free matte texture",
      "Extremely flexible & durable"
    ]
  },
  {
    "id": "eye-42",
    "name": "IDEE Vintage Double-Bar",
    "brand": "IDEE",
    "category": "eyeglasses",
    "subCategory": "Aviator",
    "price": 4200,
    "discountPrice": 3570,
    "rating": 4.7,
    "reviewsCount": 15,
    "gender": "Women",
    "frameShape": "Aviator",
    "frameColor": "Gold Tortoise",
    "frameMaterial": "Metal Alloy",
    "lensCompatibility": "Single Vision, Bifocal, Progressive, Blue Cut",
    "size": "Large",
    "sizeInfo": "Lens Width: 56mm, Bridge: 16mm, Temple: 140mm",
    "description": "Retro double-bar Aviator frame styled with tortoise acetate overlays. Perfect statement accessory for vintage lookbooks.",
    "inStock": true,
    "images": [
      "/products/ideec4.png",
      "/products/36.png"
    ],
    "features": [
      "Gold-tone alloy double-bar bridge",
      "Soft silicone comfort nose pads",
      "Vintage acetate temple sleeves"
    ]
  },
  {
    "id": "eye-43",
    "name": "IDEE Geometric Edge",
    "brand": "IDEE",
    "category": "eyeglasses",
    "subCategory": "Hexagonal",
    "price": 4320,
    "discountPrice": 3672,
    "rating": 4.7,
    "reviewsCount": 27,
    "gender": "Women",
    "frameShape": "Hexagonal",
    "frameColor": "Champagne Gold",
    "frameMaterial": "Metal Alloy",
    "lensCompatibility": "Single Vision, Bifocal, Progressive, Blue Cut",
    "size": "Medium",
    "sizeInfo": "Lens Width: 51mm, Bridge: 19mm, Temple: 140mm",
    "description": "Dainty geometric hexagonal eyeglasses in champagne gold. Features soft-touch nose pads for a weightless, premium fit.",
    "inStock": true,
    "images": [
      "/products/41.png",
      "/products/36.png"
    ],
    "features": [
      "Champagne gold alloy rim",
      "Geometric style profile",
      "Silicone comfort cushions"
    ]
  },
  {
    "id": "eye-44",
    "name": "IDEE Ultra-Light Browline",
    "brand": "IDEE",
    "category": "eyeglasses",
    "subCategory": "Browline",
    "price": 4080,
    "discountPrice": 3468,
    "rating": 4.8,
    "reviewsCount": 19,
    "gender": "Men",
    "frameShape": "Browline",
    "frameColor": "Demi Amber Gold",
    "frameMaterial": "Acetate & Metal",
    "lensCompatibility": "Single Vision, Bifocal, Progressive, Blue Cut",
    "size": "Medium",
    "sizeInfo": "Lens Width: 52mm, Bridge: 20mm, Temple: 145mm",
    "description": "A refined mid-century style browline in rich amber acetate detailed with gold metallic under-rim wires.",
    "inStock": true,
    "images": [
      "/products/7.png",
      "/products/36.png"
    ],
    "features": [
      "Sturdy acetate brow bar",
      "Spring hinges for comfort",
      "Detailed filigree bridges"
    ]
  },
  {
    "id": "eye-45",
    "name": "IDEE Rimless Silhouette",
    "brand": "IDEE",
    "category": "eyeglasses",
    "subCategory": "Rectangle",
    "price": 3100,
    "discountPrice": 2700,
    "rating": 4.6,
    "reviewsCount": 12,
    "gender": "Unisex",
    "frameShape": "Rectangle",
    "frameColor": "Gunmetal",
    "frameMaterial": "Titanium",
    "lensCompatibility": "Single Vision, Progressive, Blue Cut",
    "size": "Medium",
    "sizeInfo": "Lens Width: 53mm, Bridge: 17mm, Temple: 140mm",
    "description": "Minimalist rimless eyeglasses crafted with memory titanium bridges and temples. Provides weightless comfort and clean visibility.",
    "inStock": true,
    "images": [
      "/products/14.png",
      "/products/36.png"
    ],
    "features": [
      "Minimalist rimless structure",
      "Tough compression mount studs",
      "Ultra-flexible titanium temples"
    ]
  },
  {
    "id": "eye-46",
    "name": "Tommy Hilfiger Kids Flexible Round",
    "brand": "Tommy Hilfiger",
    "category": "eyeglasses",
    "subCategory": "Kids 's Collection",
    "price": 2200,
    "discountPrice": 1800,
    "rating": 4.8,
    "reviewsCount": 35,
    "gender": "Kids",
    "frameShape": "Round",
    "frameColor": "Vibrant Red-Blue",
    "frameMaterial": "Medical Silicone",
    "lensCompatibility": "Single Vision, Blue Cut",
    "size": "Small",
    "sizeInfo": "Lens Width: 45mm, Bridge: 15mm, Temple: 125mm",
    "description": "100% bendable, medical-grade silicone frame for children. Features screw-less elastic hinges and comes with an adjustable head strap to secure play and learning.",
    "inStock": true,
    "images": [
      "/products/new3.png"
    ],
    "features": [
      "100% bendable medical silicone",
      "Screw-less elastic hinges",
      "Includes adjustable head strap"
    ]
  },
  {
    "id": "eye-47",
    "name": "Guess Kids Square Smart",
    "brand": "Guess",
    "category": "eyeglasses",
    "subCategory": "Kids 's Collection",
    "price": 2400,
    "discountPrice": 2000,
    "rating": 4.7,
    "reviewsCount": 24,
    "gender": "Kids",
    "frameShape": "Square",
    "frameColor": "Teal Green",
    "frameMaterial": "TR90",
    "lensCompatibility": "Single Vision, Blue Cut",
    "size": "Small",
    "sizeInfo": "Lens Width: 46mm, Bridge: 16mm, Temple: 130mm",
    "description": "Vibrant and durable square frame for school and play. Built with memory-flex temples that withstand rough daily handling by children.",
    "inStock": true,
    "images": [
      "/products/new3.png"
    ],
    "features": [
      "Memory-flex TR90 temples",
      "Ergonomic nose rest fit",
      "Bright dual-tone coloring"
    ]
  },
  {
    "id": "eye-48",
    "name": "Oakley Kids Active Rectangle",
    "brand": "Oakley",
    "category": "eyeglasses",
    "subCategory": "Kids 's Collection",
    "price": 3200,
    "discountPrice": 2700,
    "rating": 4.8,
    "reviewsCount": 19,
    "gender": "Kids",
    "frameShape": "Rectangle",
    "frameColor": "Acid Green-Black",
    "frameMaterial": "O-Matter",
    "lensCompatibility": "Single Vision, Blue Cut",
    "size": "Small",
    "sizeInfo": "Lens Width: 47mm, Bridge: 15mm, Temple: 130mm",
    "description": "High-impact Oakley Kids frame constructed from stress-resistant O-Matter. Equipped with non-slip earsocks and wrap-around active support.",
    "inStock": true,
    "images": [
      "/products/new3.png"
    ],
    "features": [
      "Stress-resistant O-Matter frame",
      "Non-slip Unobtainium grip",
      "Sports-ready temples profile"
    ]
  },
  {
    "id": "eye-49",
    "name": "IDEE Young Flex Round",
    "brand": "IDEE",
    "category": "eyeglasses",
    "subCategory": "Kids 's Collection",
    "price": 2740,
    "discountPrice": 2450,
    "rating": 4.6,
    "reviewsCount": 42,
    "gender": "Kids",
    "frameShape": "Round",
    "frameColor": "Pink Crystal",
    "frameMaterial": "TR90",
    "lensCompatibility": "Single Vision, Blue Cut",
    "size": "Small",
    "sizeInfo": "Lens Width: 46mm, Bridge: 15mm, Temple: 130mm",
    "description": "Ultra-flexible, candy-colored round frames designed for active kids and pre-teens.",
    "inStock": true,
    "images": [
      "/products/y1.png",
      "/products/yc1.png",
      "/products/yb.png"
    ],
    "features": [
      "Shatter-proof TR90 build",
      "Lightweight comfortable wear",
      "Safe metal-free hinges"
    ]
  },
  {
    "id": "eye-50",
    "name": "IDEE Young Retro Square",
    "brand": "IDEE",
    "category": "eyeglasses",
    "subCategory": "Kids 's Collection",
    "price": 2100,
    "discountPrice": 1890,
    "rating": 4.7,
    "reviewsCount": 29,
    "gender": "Kids",
    "frameShape": "Square",
    "frameColor": "Clear Teal",
    "frameMaterial": "Acetate",
    "lensCompatibility": "Single Vision, Blue Cut",
    "size": "Medium",
    "sizeInfo": "Lens Width: 49mm, Bridge: 17mm, Temple: 135mm",
    "description": "Edgy clear-teal retro square eyeglasses perfect for tech-savvy youngsters.",
    "inStock": true,
    "images": [
      "/products/y2.png",
      "/products/yc2.png",
      "/products/yb.png"
    ],
    "features": [
      "Handcrafted acetate finish",
      "Durable flex spring hinges",
      "Vibrant youthful clear colors"
    ]
  },
  {
    "id": "eye-51",
    "name": "IDEE Young Neo-Aviator",
    "brand": "IDEE",
    "category": "eyeglasses",
    "subCategory": "Kids 's Collection",
    "price": 2100,
    "discountPrice": 1890,
    "rating": 4.5,
    "reviewsCount": 18,
    "gender": "Kids",
    "frameShape": "Aviator",
    "frameColor": "Matte Silver",
    "frameMaterial": "Stainless Steel",
    "lensCompatibility": "Single Vision, Blue Cut",
    "size": "Medium",
    "sizeInfo": "Lens Width: 52mm, Bridge: 16mm, Temple: 140mm",
    "description": "Contemporary double-bar aviator frames with a modern geometric lens cut for teenagers.",
    "inStock": true,
    "images": [
      "/products/y3.png",
      "/products/yc3.png",
      "/products/yb.png"
    ],
    "features": [
      "Sleek geometric rim profile",
      "Corrosion-resistant steel alloy",
      "Adjustable silicone nose pad clips"
    ]
  },
  {
    "id": "eye-52",
    "name": "IDEE Young Geometric Hexagon",
    "brand": "IDEE",
    "category": "eyeglasses",
    "subCategory": "Kids 's Collection",
    "price": 2400,
    "discountPrice": 2000,
    "rating": 4.7,
    "reviewsCount": 33,
    "gender": "Kids",
    "frameShape": "Hexagonal",
    "frameColor": "Rose Gold Plated",
    "frameMaterial": "Metal Alloy",
    "lensCompatibility": "Single Vision, Blue Cut",
    "size": "Medium",
    "sizeInfo": "Lens Width: 48mm, Bridge: 18mm, Temple: 138mm",
    "description": "Dainty hexagonal metal wire frames. Light as a feather and perfect for teenage study wear.",
    "inStock": true,
    "images": [
      "/products/y4.png",
      "/products/yc4.png",
      "/products/yb.png"
    ],
    "features": [
      "Lightweight metal structure",
      "Trendy hexagonal wire layout",
      "Skin-friendly anti-slip sleeves"
    ]
  },
  {
    "id": "eye-53",
    "name": "IDEE Young Bold Browline",
    "brand": "IDEE",
    "category": "eyeglasses",
    "subCategory": "Kids 's Collection",
    "price": 2500,
    "discountPrice": 2100,
    "rating": 4.8,
    "reviewsCount": 21,
    "gender": "Kids",
    "frameShape": "Browline",
    "frameColor": "Matte Black-Gold",
    "frameMaterial": "Acetate & Metal",
    "lensCompatibility": "Single Vision, Blue Cut",
    "size": "Medium",
    "sizeInfo": "Lens Width: 50mm, Bridge: 19mm, Temple: 140mm",
    "description": "Classic mid-century browline glasses scaled down for younger faces and student styling.",
    "inStock": true,
    "images": [
      "/products/y5.png",
      "/products/yc5.png",
      "/products/yb.png"
    ],
    "features": [
      "Sturdy composite brow block",
      "Reinforced three-barrel hinge support",
      "Clean sophisticated gold accents"
    ]
  },
  {
    "id": "eye-54",
    "name": "IDEE Young Chic Cat-Eye",
    "brand": "IDEE",
    "category": "eyeglasses",
    "subCategory": "Kids 's Collection",
    "price": 2300,
    "discountPrice": 1900,
    "rating": 4.7,
    "reviewsCount": 38,
    "gender": "Kids",
    "frameShape": "Cat-Eye",
    "frameColor": "Pastel Lilac",
    "frameMaterial": "TR90",
    "lensCompatibility": "Single Vision, Blue Cut",
    "size": "Small",
    "sizeInfo": "Lens Width: 48mm, Bridge: 16mm, Temple: 130mm",
    "description": "Playful pastel lilac cat-eye eyeglasses offering high durability and style for young girls.",
    "inStock": true,
    "images": [
      "/products/y6.png",
      "/products/yc6.png",
      "/products/yb.png"
    ],
    "features": [
      "Vibrant lilac design",
      "Lightweight flexible temples",
      "Soft integrated nose saddle"
    ]
  },
  {
    "id": "eye-55",
    "name": "IDEE Young Minimalist Round",
    "brand": "IDEE",
    "category": "eyeglasses",
    "subCategory": "Kids 's Collection",
    "price": 2100,
    "discountPrice": 1700,
    "rating": 4.5,
    "reviewsCount": 12,
    "gender": "Kids",
    "frameShape": "Round",
    "frameColor": "Matte Gunmetal",
    "frameMaterial": "Stainless Steel",
    "lensCompatibility": "Single Vision, Blue Cut",
    "size": "Medium",
    "sizeInfo": "Lens Width: 47mm, Bridge: 18mm, Temple: 135mm",
    "description": "Simple round metallic glasses with soft silicone nose pads. Extremely comfortable for all-day use.",
    "inStock": true,
    "images": [
      "/products/y7.png",
      "/products/yc7.png",
      "/products/yb.png"
    ],
    "features": [
      "Minimalist wire round shape",
      "Comes with flexible spring logic",
      "Highly durable paint finish"
    ]
  },
  {
    "id": "eye-56",
    "name": "IDEE Young Urban Wayfarer",
    "brand": "IDEE",
    "category": "eyeglasses",
    "subCategory": "Kids 's Collection",
    "price": 2200,
    "discountPrice": 1800,
    "rating": 4.8,
    "reviewsCount": 26,
    "gender": "Kids",
    "frameShape": "Wayfarer",
    "frameColor": "Matte Crystal Blue",
    "frameMaterial": "Polycarbonate",
    "lensCompatibility": "Single Vision, Blue Cut",
    "size": "Medium",
    "sizeInfo": "Lens Width: 50mm, Bridge: 18mm, Temple: 140mm",
    "description": "Sleek wayfarer glasses built with heavy-duty drop-resistant polycarbonate for teens.",
    "inStock": true,
    "images": [
      "/products/y8.png",
      "/products/yc8.png",
      "/products/yb.png"
    ],
    "features": [
      "Robust drop-resistant structure",
      "Comfortable bridge fit",
      "Contemporary clear colors"
    ]
  },
  {
    "id": "eye-57",
    "name": "Hopper Kids Playproof Round",
    "brand": "Hopper",
    "category": "eyeglasses",
    "subCategory": "Kids 's Collection",
    "price": 1900,
    "discountPrice": 1500,
    "rating": 4.8,
    "reviewsCount": 24,
    "gender": "Kids",
    "frameShape": "Round",
    "frameColor": "Cherry Red-Orange",
    "frameMaterial": "Medical Silicone",
    "lensCompatibility": "Single Vision, Blue Cut",
    "size": "Small",
    "sizeInfo": "Lens Width: 44mm, Bridge: 15mm, Temple: 125mm",
    "description": "100% bendable, medical-grade silicone frame for children. Extremely durable, screw-less hinges made for active playtime.",
    "inStock": true,
    "images": [
      "/products/k1.png",
      "/products/k11.png"
    ],
    "features": [
      "100% twistable silicone design",
      "Screw-free lock joints",
      "Includes head strap headband"
    ]
  },
  {
    "id": "eye-58",
    "name": "Hopper Kids Smart Square",
    "brand": "Hopper",
    "category": "eyeglasses",
    "subCategory": "Kids 's Collection",
    "price": 2100,
    "discountPrice": 1700,
    "rating": 4.7,
    "reviewsCount": 18,
    "gender": "Kids",
    "frameShape": "Square",
    "frameColor": "Vibrant Teal-Lime",
    "frameMaterial": "TR90",
    "lensCompatibility": "Single Vision, Blue Cut",
    "size": "Small",
    "sizeInfo": "Lens Width: 46mm, Bridge: 16mm, Temple: 130mm",
    "description": "Super lightweight TR90 square frame featuring memory-flex temples. Impact-resistant and designed for school-going children.",
    "inStock": true,
    "images": [
      "/products/k2.png",
      "/products/k22.png"
    ],
    "features": [
      "Memory-flex TR90 material",
      "Comfort saddle nose bridge",
      "Cool dual-tone green shading"
    ]
  },
  {
    "id": "eye-59",
    "name": "Hopper Kids Sports Active",
    "brand": "Hopper",
    "category": "eyeglasses",
    "subCategory": "Kids 's Collection",
    "price": 2500,
    "discountPrice": 2100,
    "rating": 4.9,
    "reviewsCount": 12,
    "gender": "Kids",
    "frameShape": "Rectangle",
    "frameColor": "Warning Yellow-Black",
    "frameMaterial": "TR90",
    "lensCompatibility": "Single Vision, Blue Cut",
    "size": "Small",
    "sizeInfo": "Lens Width: 47mm, Bridge: 15mm, Temple: 130mm",
    "description": "High-durability active frame with integrated sweat-wicking rubber nose pads. Stays secure during sports, cycling, and running.",
    "inStock": true,
    "images": [
      "/products/k3.png",
      "/products/k33.png"
    ],
    "features": [
      "Anti-slip temple sleeve grips",
      "Flexible core temple wires",
      "Shock-absorbing structure"
    ]
  },
  {
    "id": "eye-60",
    "name": "Hopper Kids Oval Dreamer",
    "brand": "Hopper",
    "category": "eyeglasses",
    "subCategory": "Kids 's Collection",
    "price": 1800,
    "discountPrice": 1400,
    "rating": 4.6,
    "reviewsCount": 29,
    "gender": "Kids",
    "frameShape": "Oval",
    "frameColor": "Pastel Pink-Purple",
    "frameMaterial": "Medical Silicone",
    "lensCompatibility": "Single Vision, Blue Cut",
    "size": "Small",
    "sizeInfo": "Lens Width: 43mm, Bridge: 15mm, Temple: 120mm",
    "description": "Ultra-comfy pastel oval silicone frames scaled down for preschoolers and toddlers. No sharp edges or metallic screws.",
    "inStock": true,
    "images": [
      "/products/k4.png",
      "/products/k44.png"
    ],
    "features": [
      "Soft skin-friendly silicone",
      "Completely screw-free build",
      "Includes case and lens cloth"
    ]
  },
  {
    "id": "eye-61",
    "name": "Hopper Kids Classic Wayfarer",
    "brand": "Hopper",
    "category": "eyeglasses",
    "subCategory": "Kids 's Collection",
    "price": 2200,
    "discountPrice": 1800,
    "rating": 4.7,
    "reviewsCount": 16,
    "gender": "Kids",
    "frameShape": "Wayfarer",
    "frameColor": "Matte Royal Blue",
    "frameMaterial": "TR90",
    "lensCompatibility": "Single Vision, Blue Cut",
    "size": "Small",
    "sizeInfo": "Lens Width: 45mm, Bridge: 16mm, Temple: 130mm",
    "description": "Classic wayfarer eyeglasses scaled for junior profiles. Extremely tough and scratch-resistant matte blue finish.",
    "inStock": true,
    "images": [
      "/products/k5.png",
      "/products/k55.png"
    ],
    "features": [
      "High-durability matte coating",
      "Impact-resistant TR90 core",
      "Classic stylish visual profile"
    ]
  },
  {
    "id": "eye-62",
    "name": "Hopper Kids Polarized Shield",
    "brand": "Hopper",
    "category": "eyeglasses",
    "subCategory": "Kids 's Collection",
    "price": 2400,
    "discountPrice": 1900,
    "rating": 4.7,
    "reviewsCount": 38,
    "gender": "Kids",
    "frameShape": "Shield",
    "frameColor": "Matte Neon Lime",
    "frameMaterial": "TR90",
    "lensCompatibility": "Polarised Sunglasses Lenses Only",
    "size": "Small",
    "sizeInfo": "Lens Width: 120mm, Bridge: 0mm, Temple: 115mm",
    "description": "Vibrant sports shield sunglasses for children. Polarized glare-blocking lenses block strong solar glare and protect young retinas.",
    "inStock": true,
    "images": [
      "/products/k10.png",
      "/products/k1010.png"
    ],
    "features": [
      "100% UV400 polarized lens",
      "Lightweight wrap-around shield",
      "Unbreakable TR90 frame body"
    ]
  },
  {
    "id": "eye-63",
    "name": "Hopper Kids Junior Wayfarer",
    "brand": "Hopper",
    "category": "eyeglasses",
    "subCategory": "Kids 's Collection",
    "price": 1600,
    "discountPrice": 1200,
    "rating": 4.6,
    "reviewsCount": 42,
    "gender": "Kids",
    "frameShape": "Wayfarer",
    "frameColor": "Candy Pink-Yellow",
    "frameMaterial": "Polycarbonate",
    "lensCompatibility": "Polarised Sunglasses Lenses Only",
    "size": "Small",
    "sizeInfo": "Lens Width: 45mm, Bridge: 15mm, Temple: 120mm",
    "description": "Vibrant polarized lifestyle sunglasses for kids. Featuring highly scratch-resistant lenses and a glossy candy color finish.",
    "inStock": true,
    "images": [
      "/products/k6.png",
      "/products/k66.png"
    ],
    "features": [
      "Polarized sun protection",
      "Impact-resistant polymer",
      "Glossy colorful double shade"
    ]
  },
  {
    "id": "eye-64",
    "name": "Hopper Kids Retro Round",
    "brand": "Hopper",
    "category": "eyeglasses",
    "subCategory": "Kids 's Collection",
    "price": 1800,
    "discountPrice": 1400,
    "rating": 4.7,
    "reviewsCount": 21,
    "gender": "Kids",
    "frameShape": "Round",
    "frameColor": "Crystal Amber",
    "frameMaterial": "Acetate",
    "lensCompatibility": "Polarised Sunglasses Lenses Only",
    "size": "Small",
    "sizeInfo": "Lens Width: 44mm, Bridge: 17mm, Temple: 125mm",
    "description": "Retro chic round kids sunglasses in warm crystal amber acetate with dark green protective lenses.",
    "inStock": true,
    "images": [
      "/products/k7.png",
      "/products/k77.png"
    ],
    "features": [
      "Premium crystal resin look",
      "Polarized glare blocking",
      "Five-barrel sturdy hinge hinges"
    ]
  },
  {
    "id": "eye-65",
    "name": "Hopper Kids Aviator Classic",
    "brand": "Hopper",
    "category": "eyeglasses",
    "subCategory": "Kids 's Collection",
    "price": 2600,
    "discountPrice": 2200,
    "rating": 4.8,
    "reviewsCount": 15,
    "gender": "Kids",
    "frameShape": "Aviator",
    "frameColor": "Chrome Silver",
    "frameMaterial": "Metal Alloy",
    "lensCompatibility": "Polarised Sunglasses Lenses Only",
    "size": "Small",
    "sizeInfo": "Lens Width: 47mm, Bridge: 14mm, Temple: 125mm",
    "description": "Chrome silver double-bar Aviator sunglasses scaled down for small profiles. UV400 polarized mirrored lenses.",
    "inStock": true,
    "images": [
      "/products/k8.png",
      "/products/k88.png"
    ],
    "features": [
      "Chrome silver metallic finish",
      "Silver mirrored polarized filter",
      "Soft silicone temple covers"
    ]
  },
  {
    "id": "eye-66",
    "name": "Hopper Kids Cat-Eye Chic",
    "brand": "Hopper",
    "category": "eyeglasses",
    "subCategory": "Kids 's Collection",
    "price": 2000,
    "discountPrice": 1600,
    "rating": 4.5,
    "reviewsCount": 19,
    "gender": "Kids",
    "frameShape": "Cat-Eye",
    "frameColor": "Plum Lavender",
    "frameMaterial": "TR90",
    "lensCompatibility": "Polarised Sunglasses Lenses Only",
    "size": "Small",
    "sizeInfo": "Lens Width: 46mm, Bridge: 15mm, Temple: 125mm",
    "description": "Sassy lavender cat-eye sunglasses for young girls. Made with break-resistant TR90 frame structures.",
    "inStock": true,
    "images": [
      "/products/k9.png",
      "/products/k99.png"
    ],
    "features": [
      "Cat-eye upswept frame edges",
      "Flexible lightweight fit",
      "Polarized tinted lenses"
    ]
  },
  {
    "id": "eye-67",
    "name": "IDEE Young Flex-Square",
    "brand": "IDEE",
    "category": "eyeglasses",
    "subCategory": "Kids 's Collection",
    "price": 2200,
    "discountPrice": 1800,
    "rating": 4.7,
    "reviewsCount": 21,
    "gender": "Kids",
    "frameShape": "Square",
    "frameColor": "Matte Translucent Teal",
    "frameMaterial": "TR90",
    "lensCompatibility": "Single Vision, Blue Cut",
    "size": "Medium",
    "sizeInfo": "Lens Width: 49mm, Bridge: 17mm, Temple: 135mm",
    "description": "Flexible, drop-resistant square frames styled in a cool translucent teal. Tailored for pre-teens and teenage lifestyles.",
    "inStock": true,
    "images": [
      "/products/y9.png",
      "/products/yc9.png",
      "/products/yb.png"
    ],
    "features": [
      "Ultra-flexible TR90 frame",
      "Matte translucent coloring",
      "Ergonomic bridge pressure relief"
    ]
  },
  {
    "id": "eye-68",
    "name": "IDEE Young Slim Round",
    "brand": "IDEE",
    "category": "eyeglasses",
    "subCategory": "Kids 's Collection",
    "price": 2400,
    "discountPrice": 2000,
    "rating": 4.8,
    "reviewsCount": 19,
    "gender": "Kids",
    "frameShape": "Round",
    "frameColor": "Polished Rose Gold",
    "frameMaterial": "Metal Alloy",
    "lensCompatibility": "Single Vision, Blue Cut",
    "size": "Medium",
    "sizeInfo": "Lens Width: 48mm, Bridge: 19mm, Temple: 138mm",
    "description": "Dainty, polished rose gold slim round glasses. Super lightweight metal structure designed for students and long study hours.",
    "inStock": true,
    "images": [
      "/products/y10.png",
      "/products/yc10.png",
      "/products/yb.png"
    ],
    "features": [
      "Rose gold alloy plating",
      "Lightweight wear profile",
      "Skin-friendly temple tip guards"
    ]
  },
  {
    "id": "eye-69",
    "name": "IDEE Young Retro Rectangle",
    "brand": "IDEE",
    "category": "eyeglasses",
    "subCategory": "Kids 's Collection",
    "price": 2300,
    "discountPrice": 1900,
    "rating": 4.6,
    "reviewsCount": 32,
    "gender": "Kids",
    "frameShape": "Rectangle",
    "frameColor": "Crystal Amber",
    "frameMaterial": "Acetate",
    "lensCompatibility": "Single Vision, Blue Cut",
    "size": "Medium",
    "sizeInfo": "Lens Width: 50mm, Bridge: 18mm, Temple: 140mm",
    "description": "Retro rectangular frames in a glowing amber crystal finish. Perfect balance between vintage vibes and modern design.",
    "inStock": true,
    "images": [
      "/products/y11.png",
      "/products/yc11.png",
      "/products/yb.png"
    ],
    "features": [
      "Crystal amber resin gloss",
      "Metal-reinforced inner core temples",
      "Durable spring flex hinges"
    ]
  },
  {
    "id": "eye-70",
    "name": "OPIUM Young Urban Square",
    "brand": "OPIUM",
    "category": "eyeglasses",
    "subCategory": "Kids 's Collection",
    "price": 3100,
    "discountPrice": 2600,
    "rating": 4.7,
    "reviewsCount": 26,
    "gender": "Kids",
    "frameShape": "Square",
    "frameColor": "Glossy Charcoal Black",
    "frameMaterial": "Acetate",
    "lensCompatibility": "Single Vision, Blue Cut",
    "size": "Medium",
    "sizeInfo": "Lens Width: 51mm, Bridge: 18mm, Temple: 140mm",
    "description": "Bold, thick-rimmed square frames in gloss charcoal black. Delivers high contrast and classic styling for youth lookbooks.",
    "inStock": true,
    "images": [
      "/products/y12.png",
      "/products/yc12.png",
      "/products/yb.png"
    ],
    "features": [
      "Premium Italian acetate",
      "Glossy wear protection coat",
      "Durable five-barrel hinges"
    ]
  },
  {
    "id": "eye-71",
    "name": "OPIUM Young Chic Hexagon",
    "brand": "OPIUM",
    "category": "eyeglasses",
    "subCategory": "Kids 's Collection",
    "price": 3300,
    "discountPrice": 2800,
    "rating": 4.8,
    "reviewsCount": 15,
    "gender": "Kids",
    "frameShape": "Hexagonal",
    "frameColor": "Rose Gold / Black Duo-Tone",
    "frameMaterial": "Stainless Steel",
    "lensCompatibility": "Single Vision, Blue Cut",
    "size": "Medium",
    "sizeInfo": "Lens Width: 50mm, Bridge: 20mm, Temple: 140mm",
    "description": "Edgy hexagonal wire frames plated in rose gold and offset with black eye rims. Fits comfortably under 15g.",
    "inStock": true,
    "images": [
      "/products/y13.png",
      "/products/yc13.png",
      "/products/yb.png"
    ],
    "features": [
      "Dual-tone plating contrast",
      "Thin stainless steel rims",
      "Silicone soft nose brackets"
    ]
  },
  {
    "id": "eye-72",
    "name": "OPIUM Young Minimalist Round",
    "brand": "OPIUM",
    "category": "eyeglasses",
    "subCategory": "Kids 's Collection",
    "price": 3200,
    "discountPrice": 2700,
    "rating": 4.5,
    "reviewsCount": 18,
    "gender": "Kids",
    "frameShape": "Round",
    "frameColor": "Matte Gunmetal",
    "frameMaterial": "Stainless Steel",
    "lensCompatibility": "Single Vision, Blue Cut",
    "size": "Medium",
    "sizeInfo": "Lens Width: 48mm, Bridge: 21mm, Temple: 140mm",
    "description": "Minimalist metallic round eyeglasses. Simple, timeless profile built to resist bending and daily stress.",
    "inStock": true,
    "images": [
      "/products/y14.png",
      "/products/yc14.png",
      "/products/yb.png"
    ],
    "features": [
      "Thin round gunmetal frame",
      "Robust double bridge links",
      "Flex-fit temple mechanics"
    ]
  },
  {
    "id": "eye-73",
    "name": "IDEE Young Trend Setter",
    "brand": "IDEE",
    "category": "eyeglasses",
    "subCategory": "Kids 's Collection",
    "price": 2021,
    "discountPrice": 1721,
    "rating": 4.7,
    "reviewsCount": 24,
    "gender": "Kids",
    "frameShape": "Round",
    "frameColor": "Matte Translucent Pink",
    "frameMaterial": "TR90",
    "lensCompatibility": "Single Vision, Blue Cut",
    "size": "Medium",
    "sizeInfo": "Lens Width: 48mm, Bridge: 17mm, Temple: 135mm",
    "description": "Sweet candy-colored translucent round frames for young girls. Made with durable, drop-resistant memory TR90.",
    "inStock": true,
    "images": [
      "/products/n1.png",
      "/products/nc1.png",
      "/products/nby.png"
    ],
    "features": [
      "Ultra-flexible TR90 material",
      "Soft integrated nose rest",
      "Playproof hinge lock"
    ]
  },
  {
    "id": "eye-74",
    "name": "IDEE Young Flex Temples",
    "brand": "IDEE",
    "category": "eyeglasses",
    "subCategory": "Kids 's Collection",
    "price": 2025,
    "discountPrice": 1721,
    "rating": 4.8,
    "reviewsCount": 16,
    "gender": "Kids",
    "frameShape": "Square",
    "frameColor": "Polished Clear Blue",
    "frameMaterial": "TR90",
    "lensCompatibility": "Single Vision, Blue Cut",
    "size": "Medium",
    "sizeInfo": "Lens Width: 49mm, Bridge: 18mm, Temple: 138mm",
    "description": "Vibrant crystal-blue square frames detailed with flexible temples designed to stay snug during sports and active play.",
    "inStock": true,
    "images": [
      "/products/n2.png",
      "/products/nc2.png",
      "/products/nby.png"
    ],
    "features": [
      "Slip-resistant temple sleeves",
      "Unbreakable TR90 frame body",
      "High comfort saddle bridge"
    ]
  },
  {
    "id": "eye-75",
    "name": "IDEE Young Retro Club",
    "brand": "IDEE",
    "category": "eyeglasses",
    "subCategory": "Kids 's Collection",
    "price": 2025,
    "discountPrice": 1721,
    "rating": 4.6,
    "reviewsCount": 29,
    "gender": "Kids",
    "frameShape": "Rectangle",
    "frameColor": "Crystal Gray Tortoise",
    "frameMaterial": "Acetate",
    "lensCompatibility": "Single Vision, Blue Cut",
    "size": "Medium",
    "sizeInfo": "Lens Width: 50mm, Bridge: 18mm, Temple: 140mm",
    "description": "Fashion-forward retro rectangle glasses in a beautiful crystal-gray tortoise spot finish. Elegant scholarly styling for students.",
    "inStock": true,
    "images": [
      "/products/n3.png",
      "/products/nc3.png",
      "/products/nby.png"
    ],
    "features": [
      "High-gloss acetate finish",
      "Spring flex hinge sockets",
      "Hypoallergenic nose rest"
    ]
  },
  {
    "id": "eye-76",
    "name": "IDEE Young Smart Shape",
    "brand": "IDEE",
    "category": "eyeglasses",
    "subCategory": "Kids 's Collection",
    "price": 2025,
    "discountPrice": 1721,
    "rating": 4.7,
    "reviewsCount": 18,
    "gender": "Kids",
    "frameShape": "Square",
    "frameColor": "Translucent Mint",
    "frameMaterial": "TR90",
    "lensCompatibility": "Single Vision, Blue Cut",
    "size": "Medium",
    "sizeInfo": "Lens Width: 50mm, Bridge: 17mm, Temple: 140mm",
    "description": "Fresh translucent mint green square spectacles. Offers a modern minimalist aesthetic for classroom study and computer hours.",
    "inStock": true,
    "images": [
      "/products/n4.png",
      "/products/nc4.png",
      "/products/nby.png"
    ],
    "features": [
      "Lightweight clear pastel",
      "Excellent frame flex range",
      "Keyhole classic bridge cut"
    ]
  },
  {
    "id": "eye-77",
    "name": "IDEE Young Geometric Wire",
    "brand": "IDEE",
    "category": "eyeglasses",
    "subCategory": "Kids 's Collection",
    "price": 2025,
    "discountPrice": 1721,
    "rating": 4.8,
    "reviewsCount": 22,
    "gender": "Kids",
    "frameShape": "Hexagonal",
    "frameColor": "Shiny Silver Black",
    "frameMaterial": "Stainless Steel",
    "lensCompatibility": "Single Vision, Blue Cut",
    "size": "Medium",
    "sizeInfo": "Lens Width: 51mm, Bridge: 20mm, Temple: 140mm",
    "description": "Slim metallic hexagonal eyeglasses finished in dual shiny silver and black plating. Highly lightweight design weighing under 12g.",
    "inStock": true,
    "images": [
      "/products/n5.png",
      "/products/nc5.png",
      "/products/nby.png"
    ],
    "features": [
      "Double-plating color contrast",
      "Memory stainless steel core",
      "Soft silicone nose pads"
    ]
  },
  {
    "id": "eye-78",
    "name": "IDEE Young Active Fit",
    "brand": "IDEE",
    "category": "eyeglasses",
    "subCategory": "Kids 's Collection",
    "price": 2025,
    "discountPrice": 1721,
    "rating": 4.5,
    "reviewsCount": 14,
    "gender": "Kids",
    "frameShape": "Rectangle",
    "frameColor": "Matte Grey / Neon Green",
    "frameMaterial": "TR90",
    "lensCompatibility": "Single Vision, Blue Cut",
    "size": "Medium",
    "sizeInfo": "Lens Width: 52mm, Bridge: 16mm, Temple: 142mm",
    "description": "High-durability rectangular eyeglasses detailed with warn neon green rubber active grips along the temple arms.",
    "inStock": true,
    "images": [
      "/products/n7.png",
      "/products/nc7.png",
      "/products/nby.png"
    ],
    "features": [
      "Neon green non-slip rubber",
      "Sweat-resistant matte finish",
      "Sports-ready active temples"
    ]
  },
  {
    "id": "eye-79",
    "name": "IDEE Young Active Fit",
    "brand": "IDEE",
    "category": "eyeglasses",
    "subCategory": "Kids 's Collection",
    "price": 2025,
    "discountPrice": 1721,
    "rating": 4.5,
    "reviewsCount": 14,
    "gender": "Kids",
    "frameShape": "Rectangle",
    "frameColor": "Matte Grey / Neon Green",
    "frameMaterial": "TR90",
    "lensCompatibility": "Single Vision, Blue Cut",
    "size": "Medium",
    "sizeInfo": "Lens Width: 52mm, Bridge: 16mm, Temple: 142mm",
    "description": "High-durability rectangular eyeglasses detailed with warn neon green rubber active grips along the temple arms.",
    "inStock": true,
    "images": [
      "/products/n6.png",
      "/products/nc6.png",
      "/products/nby.png"
    ],
    "features": [
      "Neon green non-slip rubber",
      "Sweat-resistant matte finish",
      "Sports-ready active temples"
    ]
  },
  {
    "id": "eye-80",
    "name": "Ownspecs Kids Flexi-Soft Round",
    "brand": "Ownspecs",
    "category": "eyeglasses",
    "subCategory": "Kids 's Collection",
    "price": 1800,
    "discountPrice": 1400,
    "rating": 4.8,
    "reviewsCount": 21,
    "gender": "Kids",
    "frameShape": "Round",
    "frameColor": "Pastel Mint-Yellow",
    "frameMaterial": "Medical Silicone",
    "lensCompatibility": "Single Vision, Blue Cut",
    "size": "Small",
    "sizeInfo": "Lens Width: 43mm, Bridge: 15mm, Temple: 120mm",
    "description": "100% bendable, skin-friendly silicone frame. Highly safe construction with no metallic components or screws.",
    "inStock": true,
    "images": [
      "/products/kn7.png",
      "/products/kn01.png",
      "/products/kn02.png",
      "/products/kn03.png"
    ],
    "features": [
      "100% bendable medical silicone",
      "Completely screw-free joints",
      "Includes head strap headband"
    ]
  },
  {
    "id": "eye-81",
    "name": "Ownspecs Kids Memory-Flex Square",
    "brand": "Ownspecs",
    "category": "eyeglasses",
    "subCategory": "Kids 's Collection",
    "price": 2000,
    "discountPrice": 1600,
    "rating": 4.7,
    "reviewsCount": 14,
    "gender": "Kids",
    "frameShape": "Square",
    "frameColor": "Electric Purple",
    "frameMaterial": "TR90",
    "lensCompatibility": "Single Vision, Blue Cut",
    "size": "Small",
    "sizeInfo": "Lens Width: 45mm, Bridge: 16mm, Temple: 125mm",
    "description": "Lightweight and durable square frame constructed from high-flex TR90. Withstands drops, impacts, and rough play.",
    "inStock": true,
    "images": [
      "/products/kn1.png",
      "/products/kn01.png",
      "/products/kn02.png",
      "/products/kn03.png"
    ],
    "features": [
      "High-durability TR90 frame core",
      "Soft-touch nose saddle rest",
      "Modern vibrant color tone"
    ]
  },
  {
    "id": "eye-82",
    "name": "Ownspecs Kids active Rectangle",
    "brand": "Ownspecs",
    "category": "eyeglasses",
    "subCategory": "Kids 's Collection",
    "price": 2400,
    "discountPrice": 1900,
    "rating": 4.9,
    "reviewsCount": 9,
    "gender": "Kids",
    "frameShape": "Rectangle",
    "frameColor": "Cyber Orange-Blue",
    "frameMaterial": "TR90",
    "lensCompatibility": "Single Vision, Blue Cut",
    "size": "Small",
    "sizeInfo": "Lens Width: 46mm, Bridge: 15mm, Temple: 130mm",
    "description": "Ergonomic active rectangular frame. Equipped with non-slip warning-orange rubber temple sleeves to stay secure during school sports.",
    "inStock": true,
    "images": [
      "/products/kn2.png",
      "/products/kn01.png",
      "/products/kn02.png",
      "/products/kn03.png"
    ],
    "features": [
      "Non-slip rubber temple locks",
      "Flexible frame structure",
      "Active play support core"
    ]
  },

  // ========================================== 
  //   [SECTION: SUNGLASSES] 
  // ==========================================
  {
    "id": "sun-01",
    "name": "Ray-Ban Classic Aviator Polarized",
    "brand": "Ray-Ban",
    "category": "sunglasses",
    "subCategory": "Polarized Aviator",
    "price": 12500,
    "discountPrice": 10900,
    "rating": 4.9,
    "reviewsCount": 420,
    "gender": "men",
    "frameShape": "Aviator",
    "frameColor": "Polished Gold",
    "frameMaterial": "Metal",
    "lensCompatibility": "Pre-fitted Polarized Green Classic G-15",
    "size": "Large",
    "sizeInfo": "Lens Width: 58mm, Bridge: 14mm, Temple: 135mm",
    "description": "Originally designed for US aviators in 1937, the Ray-Ban Classic Aviator Polarized is a timeless legend. Featuring standard gold framing and polar-green G-15 lenses that eliminate glare.",
    "inStock": true,
    "images": [
      "/products/rm2.webp"
    ],
    "features": [
      "100% UV400 Protection",
      "Premium Polarized G-15 lens",
      "Extremely thin gold framing"
    ]
  },
  {
    "id": "sun-02",
    "name": "Michael Kors MK2237U",
    "brand": "Michael Kors",
    "category": "sunglasses",
    "subCategory": "Aviator",
    "price": 15490,
    "discountPrice": 12392,
    "rating": 4.7,
    "reviewsCount": 15,
    "gender": "Unisex",
    "frameShape": "Aviator",
    "frameColor": "Matte Black",
    "frameMaterial": "Metal Alloy",
    "lensCompatibility": "Polarised Sunglasses Lenses Only",
    "size": "Medium",
    "sizeInfo": "Lens Width: 52mm, Bridge: 18mm, Temple: 140mm",
    "description": "Experience luxury design by Michael Kors. Featuring premium build quality and classic styling suited for daily use.",
    "inStock": true,
    "images": [
      "/products/42.png"
    ],
    "features": [
      "Premium brand detailing",
      "Lightweight comfortable nose pads",
      "High-durability hinges"
    ]
  },
  {
    "id": "sun-03",
    "name": "Dolce & Gabbana 0DG2288",
    "brand": "Dolce & Gabbana",
    "category": "sunglasses",
    "subCategory": "Aviator",
    "price": 28790,
    "discountPrice": 23032,
    "rating": 4.7,
    "reviewsCount": 15,
    "gender": "men",
    "frameShape": "Aviator",
    "frameColor": "Matte Black",
    "frameMaterial": "Metal Alloy",
    "lensCompatibility": "Polarised Sunglasses Lenses Only",
    "size": "Medium",
    "sizeInfo": "Lens Width: 52mm, Bridge: 18mm, Temple: 140mm",
    "description": "Experience luxury design by Dolce & Gabbana. Featuring premium build quality and classic styling suited for daily use.",
    "inStock": true,
    "images": [
      "/products/dgm2.webp"
    ],
    "features": [
      "Premium brand detailing",
      "Lightweight comfortable nose pads",
      "High-durability hinges"
    ]
  },
  {
    "id": "sun-04",
    "name": "Dolce & Gabbana 0DG4414",
    "brand": "Dolce & Gabbana",
    "category": "sunglasses",
    "subCategory": "Aviator",
    "price": 24790,
    "discountPrice": 19830,
    "rating": 4.9,
    "reviewsCount": 39,
    "gender": "Women",
    "frameShape": "Aviator",
    "frameColor": "Honey Gold",
    "frameMaterial": "Metal Alloy",
    "lensCompatibility": "Polarised Sunglasses Lenses Only",
    "size": "Medium",
    "sizeInfo": "Lens Width: 52mm, Bridge: 18mm, Temple: 140mm",
    "description": "Experience luxury design by Dolce & Gabbana. Featuring premium build quality and classic styling suited for daily use.",
    "inStock": true,
    "images": [
      "/products/dgw2.webp"
    ],
    "features": [
      "Premium brand detailing",
      "Lightweight comfortable nose pads",
      "High-durability hinges"
    ]
  },
  {
    "id": "sun-05",
    "name": "Prada 19WS 10J/80Q",
    "brand": "Prada",
    "category": "sunglasses",
    "subCategory": "Active Shield",
    "price": 38490,
    "discountPrice": 30790,
    "rating": 4.7,
    "reviewsCount": 55,
    "gender": "Men",
    "frameShape": "Shield",
    "frameColor": "Rubberized Black",
    "frameMaterial": "TR90",
    "lensCompatibility": "Pre-fitted Polarized Dark Grey Shield",
    "size": "Large",
    "sizeInfo": "Lens Width: 138mm (Shield), Bridge: 0mm, Temple: 130mm",
    "description": "High-performance wrapped shield sunglass from Prada Linea Rossa. Lightweight TR90 frame with a polarized mask lens and signature red-stripe temple branding.",
    "inStock": true,
    "images": [
      "/products/pm2.webp"
    ],
    "features": [
      "Polarized wrap shield lens",
      "Signature red line active logo",
      "Ultra-durable TR90 composition"
    ]
  },
  {
    "id": "sun-06",
    "name": "Prada Premium  Sunglasses",
    "brand": "Prada",
    "category": "sunglasses",
    "subCategory": "Aviator",
    "price": 36290,
    "discountPrice": 29032,
    "rating": 4.7,
    "reviewsCount": 15,
    "gender": "women",
    "frameShape": "Aviator",
    "frameColor": "Matte Black",
    "frameMaterial": "Metal Alloy",
    "lensCompatibility": "Polarised Sunglasses Lenses Only",
    "size": "Medium",
    "sizeInfo": "Lens Width: 52mm, Bridge: 18mm, Temple: 140mm",
    "description": "Experience luxury design by Prada. Featuring premium build quality and classic styling suited for daily use.",
    "inStock": true,
    "images": [
      "/products/pw1.webp"
    ],
    "features": [
      "Premium brand detailing",
      "Lightweight comfortable nose pads",
      "High-durability hinges"
    ]
  },
  {
    "id": "sun-07",
    "name": "Tory Burch Premium Aviator Sunglasses",
    "brand": "Tory Burch",
    "category": "sunglasses",
    "subCategory": "Aviator",
    "price": 20490,
    "discountPrice": 16392,
    "rating": 4.7,
    "reviewsCount": 15,
    "gender": "Unisex",
    "frameShape": "Aviator",
    "frameColor": "Matte Black",
    "frameMaterial": "Metal Alloy",
    "lensCompatibility": "Polarised Sunglasses Lenses Only",
    "size": "Medium",
    "sizeInfo": "Lens Width: 52mm, Bridge: 18mm, Temple: 140mm",
    "description": "Experience luxury design by Tory Burch. Featuring premium build quality and classic styling suited for daily use.",
    "inStock": true,
    "images": [
      "/products/60.png"
    ],
    "features": [
      "Premium brand detailing",
      "Lightweight comfortable nose pads",
      "High-durability hinges"
    ]
  },
  {
    "id": "sun-08",
    "name": "Emporio Armani Premium Aviator Sunglasses",
    "brand": "Emporio Armani",
    "category": "sunglasses",
    "subCategory": "Aviator",
    "price": 12000,
    "discountPrice": 9500,
    "rating": 4.7,
    "reviewsCount": 15,
    "gender": "men",
    "frameShape": "Aviator",
    "frameColor": "Matte Black",
    "frameMaterial": "Metal Alloy",
    "lensCompatibility": "Polarised Sunglasses Lenses Only",
    "size": "Medium",
    "sizeInfo": "Lens Width: 52mm, Bridge: 18mm, Temple: 140mm",
    "description": "Experience luxury design by Emporio Armani. Featuring premium build quality and classic styling suited for daily use.",
    "inStock": true,
    "images": [
      "/products/eam1.webp"
    ],
    "features": [
      "Premium brand detailing",
      "Lightweight comfortable nose pads",
      "High-durability hinges"
    ]
  },
  {
    "id": "sun-09",
    "name": "Versace Premium Aviator Sunglasses",
    "brand": "Versace",
    "category": "sunglasses",
    "subCategory": "Aviator",
    "price": 12000,
    "discountPrice": 9500,
    "rating": 4.7,
    "reviewsCount": 15,
    "gender": "men",
    "frameShape": "Aviator",
    "frameColor": "Matte Black",
    "frameMaterial": "Metal Alloy",
    "lensCompatibility": "Polarised Sunglasses Lenses Only",
    "size": "Medium",
    "sizeInfo": "Lens Width: 52mm, Bridge: 18mm, Temple: 140mm",
    "description": "Experience luxury design by Versace. Featuring premium build quality and classic styling suited for daily use.",
    "inStock": true,
    "images": [
      "/products/vm1.webp"
    ],
    "features": [
      "Premium brand detailing",
      "Lightweight comfortable nose pads",
      "High-durability hinges"
    ]
  },
  {
    "id": "sun-10",
    "name": "Coach Premium Aviator Sunglasses",
    "brand": "Coach",
    "category": "sunglasses",
    "subCategory": "Aviator",
    "price": 12000,
    "discountPrice": 9500,
    "rating": 4.7,
    "reviewsCount": 15,
    "gender": "women",
    "frameShape": "Aviator",
    "frameColor": "Matte Black",
    "frameMaterial": "Metal Alloy",
    "lensCompatibility": "Polarised Sunglasses Lenses Only",
    "size": "Medium",
    "sizeInfo": "Lens Width: 52mm, Bridge: 18mm, Temple: 140mm",
    "description": "Experience luxury design by Coach. Featuring premium build quality and classic styling suited for daily use.",
    "inStock": true,
    "images": [
      "/products/cw1.webp"
    ],
    "features": [
      "Premium brand detailing",
      "Lightweight comfortable nose pads",
      "High-durability hinges"
    ]
  },
  {
    "id": "sun-11",
    "name": "Marc Jacobs Hexagonal Gold Sun",
    "brand": "Marc Jacobs",
    "category": "sunglasses",
    "subCategory": "Luxury Fashion",
    "price": 15000,
    "discountPrice": 11250,
    "rating": 4.7,
    "reviewsCount": 95,
    "gender": "Women",
    "frameShape": "Cat Eye",
    "frameColor": "Tortoise Gold",
    "frameMaterial": "Acetate",
    "lensCompatibility": "Brown Gradient UV Lens",
    "size": "Medium",
    "sizeInfo": "Lens Width: 54mm, Bridge: 17mm, Temple: 140mm",
    "description": "Channel high fashion with Marc Jacobs Summer Cat Eye sunglasses. Featuring thick tortoise-shell frame borders, slim gold temple joints, and shaded brown UV400 lenses perfect for summer getaways.",
    "inStock": true,
    "images": [
      "/products/62.png"
    ],
    "features": [
      "Elegant summer retro look",
      "100% UV400 protection coating",
      "Acetate frame with gold signature line"
    ]
  },
  {
    "id": "sun-12",
    "name": "Marc Jacobs Premium Aviator Sunglasses",
    "brand": "Marc Jacobs",
    "category": "sunglasses",
    "subCategory": "Aviator",
    "price": 13500,
    "discountPrice": 10125,
    "rating": 4.7,
    "reviewsCount": 15,
    "gender": "Unisex",
    "frameShape": "Aviator",
    "frameColor": "Matte Black",
    "frameMaterial": "Metal Alloy",
    "lensCompatibility": "Polarised Sunglasses Lenses Only",
    "size": "Medium",
    "sizeInfo": "Lens Width: 52mm, Bridge: 18mm, Temple: 140mm",
    "description": "Experience luxury design by Marc Jacobs. Featuring premium build quality and classic styling suited for daily use.",
    "inStock": true,
    "images": [
      "/products/mjm2.png"
    ],
    "features": [
      "Premium brand detailing",
      "Lightweight comfortable nose pads",
      "High-durability hinges"
    ]
  },
  {
    "id": "sun-13",
    "name": "Tommy Hilfiger Sport Aviator",
    "brand": "Tommy Hilfiger",
    "category": "sunglasses",
    "subCategory": "Driving Sunglasses",
    "price": 7900,
    "discountPrice": 6500,
    "rating": 4.5,
    "reviewsCount": 68,
    "gender": "Unisex",
    "frameShape": "Round Wayfarer",
    "frameColor": "Gloss Black",
    "frameMaterial": "Bio-Acetate",
    "lensCompatibility": "Dark Grey Lens UV400",
    "size": "Medium",
    "sizeInfo": "Lens Width: 51mm, Bridge: 20mm, Temple: 140mm",
    "description": "Classy meets casual. This round wayfarer from Tommy Hilfiger features an eco-conscious bio-acetate structure, glossy finish, and dark tinted lenses. Ideal for city driving.",
    "inStock": true,
    "images": [
      "/products/49.png"
    ],
    "features": [
      "Bio-degradable acetate frame",
      "Urban dark tint style",
      "Premium logo detailing"
    ]
  },
  {
    "id": "sun-14",
    "name": "Tommy Hilfiger Premium Aviator Sunglasses",
    "brand": "Tommy Hilfiger",
    "category": "sunglasses",
    "subCategory": "Aviator",
    "price": 12000,
    "discountPrice": 9500,
    "rating": 4.7,
    "reviewsCount": 15,
    "gender": "Unisex",
    "frameShape": "Aviator",
    "frameColor": "Matte Black",
    "frameMaterial": "Metal Alloy",
    "lensCompatibility": "Polarised Sunglasses Lenses Only",
    "size": "Medium",
    "sizeInfo": "Lens Width: 52mm, Bridge: 18mm, Temple: 140mm",
    "description": "Experience luxury design by Tommy Hilfiger. Featuring premium build quality and classic styling suited for daily use.",
    "inStock": true,
    "images": [
      "/products/48.png"
    ],
    "features": [
      "Premium brand detailing",
      "Lightweight comfortable nose pads",
      "High-durability hinges"
    ]
  },
  {
    "id": "sun-15",
    "name": "Calvin Klein Wayfarer Classic",
    "brand": "Calvin Klein",
    "category": "sunglasses",
    "subCategory": "Luxury Fashion",
    "price": 5500,
    "discountPrice": 4200,
    "rating": 4.8,
    "reviewsCount": 154,
    "gender": "Women",
    "frameShape": "Hexagonal",
    "frameColor": "Champagne Gold",
    "frameMaterial": "Stainless Steel",
    "lensCompatibility": "Pink-Gold Gradient Mirror",
    "size": "Medium",
    "sizeInfo": "Lens Width: 53mm, Bridge: 19mm, Temple: 140mm",
    "description": "Make heads turn with these stunning champagne-gold metal sunglasses from Calvin Klein. Fitted with high-contrast, pink-gold gradient mirror lenses, they offer ultimate glamour and UV defense.",
    "inStock": true,
    "images": [
      "/products/53.png"
    ],
    "features": [
      "Sleek thin-metal profile",
      "Reflective mirror coating",
      "Adjustable nose clips"
    ]
  },
  {
    "id": "sun-16",
    "name": "Calvin Klein Premium Aviator Sunglasses",
    "brand": "Calvin Klein",
    "category": "sunglasses",
    "subCategory": "Aviator",
    "price": 12000,
    "discountPrice": 9500,
    "rating": 4.7,
    "reviewsCount": 15,
    "gender": "Unisex",
    "frameShape": "Aviator",
    "frameColor": "Matte Black",
    "frameMaterial": "Metal Alloy",
    "lensCompatibility": "Polarised Sunglasses Lenses Only",
    "size": "Medium",
    "sizeInfo": "Lens Width: 52mm, Bridge: 18mm, Temple: 140mm",
    "description": "Experience luxury design by Calvin Klein. Featuring premium build quality and classic styling suited for daily use.",
    "inStock": true,
    "images": [
      "/products/51.png"
    ],
    "features": [
      "Premium brand detailing",
      "Lightweight comfortable nose pads",
      "High-durability hinges"
    ]
  },
  {
    "id": "sun-17",
    "name": "Guess Premium Aviator Sunglasses",
    "brand": "Guess",
    "category": "sunglasses",
    "subCategory": "Aviator",
    "price": 12000,
    "discountPrice": 9500,
    "rating": 4.7,
    "reviewsCount": 15,
    "gender": "Unisex",
    "frameShape": "Aviator",
    "frameColor": "Matte Black",
    "frameMaterial": "Metal Alloy",
    "lensCompatibility": "Polarised Sunglasses Lenses Only",
    "size": "Medium",
    "sizeInfo": "Lens Width: 52mm, Bridge: 18mm, Temple: 140mm",
    "description": "Experience luxury design by Guess. Featuring premium build quality and classic styling suited for daily use.",
    "inStock": true,
    "images": [
      "/products/7.png"
    ],
    "features": [
      "Premium brand detailing",
      "Lightweight comfortable nose pads",
      "High-durability hinges"
    ]
  },
  {
    "id": "sun-18",
    "name": "Carrera Hyperfit Active Sport",
    "brand": "Carrera",
    "category": "sunglasses",
    "subCategory": "Sports & Riding",
    "price": 9900,
    "discountPrice": 8400,
    "rating": 4.6,
    "reviewsCount": 47,
    "gender": "Men",
    "frameShape": "Wrap",
    "frameColor": "Matte Dark Blue Red",
    "frameMaterial": "Rubberized Polyamide",
    "lensCompatibility": "Grey Red Mirror UV Lens",
    "size": "Large",
    "sizeInfo": "Lens Width: 62mm, Bridge: 15mm, Temple: 135mm",
    "description": "Carrera Hyperfit utilizes innovative hinge engineering that flexes to hug the contours of your face. Ideal for cycling, running, and active driving with zero slippage.",
    "inStock": true,
    "images": [
      "/products/cm22.avif"
    ],
    "features": [
      "Hyperfit custom hinge technology",
      "Impact-resistant polycarbonate lenses",
      "Double injected rubber frame"
    ]
  },
  {
    "id": "sun-19",
    "name": "Carrera Active Carbon Sun",
    "brand": "Carrera",
    "category": "sunglasses",
    "subCategory": "Sports Sunglasses",
    "price": 15500,
    "discountPrice": 13500,
    "rating": 4.9,
    "reviewsCount": 29,
    "gender": "Men",
    "frameShape": "Aviator",
    "frameColor": "Glossy Black Red",
    "frameMaterial": "Carbon Fiber & Metal",
    "lensCompatibility": "Red Mirror Polarized Lenses",
    "size": "Large",
    "sizeInfo": "Lens Width: 61mm, Bridge: 14mm, Temple: 145mm",
    "description": "Carrera sports aviator featuring high-tech carbon fiber temple arms and matte black metal rims. Fitted with high-contrast red polarized mirror lenses to block extreme road glare.",
    "inStock": true,
    "images": [
      "/products/cm23.avif"
    ],
    "features": [
      "Aerodynamic carbon fiber temples",
      "100% UV polarized lenses",
      "Sleek red racing strip accents"
    ]
  },
  {
    "id": "sun-20",
    "name": "Hugo Modern Geometric Sun",
    "brand": "Hugo Boss",
    "category": "sunglasses",
    "subCategory": "Sports & Riding",
    "price": 1999,
    "discountPrice": 1599,
    "rating": 4.3,
    "reviewsCount": 320,
    "gender": "Men",
    "frameShape": "Wrap",
    "frameColor": "Gloss Neon Green Black",
    "frameMaterial": "Polycarbonate",
    "lensCompatibility": "Polarized Dark Smoke",
    "size": "Large",
    "sizeInfo": "Lens Width: 65mm, Bridge: 16mm, Temple: 130mm",
    "description": "Get maximum eye coverage from wind and solar glare with the Hugo Wrap-Around sunglasses. Made with sturdy polycarbonate, they are built to withstand rugged biking trips.",
    "inStock": true,
    "images": [
      "/products/hbm1.webp"
    ],
    "features": [
      "Wind and glare block wrap",
      "Polarized sports lenses",
      "Ultra durable polycarbonate build"
    ]
  },
  {
    "id": "sun-21",
    "name": "Boss Professional Square Sun",
    "brand": "Hugo Boss",
    "category": "sunglasses",
    "subCategory": "Luxury Fashion",
    "price": 14500,
    "discountPrice": 12500,
    "rating": 4.9,
    "reviewsCount": 35,
    "gender": "women",
    "frameShape": "Aviator",
    "frameColor": "Matte Black Silver",
    "frameMaterial": "Super-elastic Alloy",
    "lensCompatibility": "Blue Mirror Polarized Lenses",
    "size": "Large",
    "sizeInfo": "Lens Width: 59mm, Bridge: 15mm, Temple: 145mm",
    "description": "The peak of luxury styling. The Boss Highway Aviator showcases a bold double-bridge black bar, silver metal borders, and high contrast blue-polarized mirror lenses that redefine luxury status.",
    "inStock": true,
    "images": [
      "/products/hbw1.webp"
    ],
    "features": [
      "Double bridge aviator styling",
      "Blue mirror glare cutting filter",
      "Embossed winged Boss logo"
    ]
  },
  {
    "id": "sun-22",
    "name": "Hugo Boss Premium Aviator Sunglasses",
    "brand": "Hugo Boss",
    "category": "sunglasses",
    "subCategory": "Aviator",
    "price": 12000,
    "discountPrice": 9500,
    "rating": 4.7,
    "reviewsCount": 15,
    "gender": "men",
    "frameShape": "Aviator",
    "frameColor": "Matte Black",
    "frameMaterial": "Metal Alloy",
    "lensCompatibility": "Polarised Sunglasses Lenses Only",
    "size": "Medium",
    "sizeInfo": "Lens Width: 52mm, Bridge: 18mm, Temple: 140mm",
    "description": "Experience luxury design by Hugo Boss. Featuring premium build quality and classic styling suited for daily use.",
    "inStock": true,
    "images": [
      "/products/hbm2.webp"
    ],
    "features": [
      "Premium brand detailing",
      "Lightweight comfortable nose pads",
      "High-durability hinges"
    ]
  },
  {
    "id": "sun-23",
    "name": "Oakley Holbrook Woodgrain Polarized",
    "brand": "Oakley",
    "category": "sunglasses",
    "subCategory": "Sports Polarized",
    "price": 13900,
    "discountPrice": 11999,
    "rating": 4.8,
    "reviewsCount": 110,
    "gender": "unisex",
    "frameShape": "Square",
    "frameColor": "Woodgrain Brown",
    "frameMaterial": "O-Matter",
    "lensCompatibility": "Prizm Daily Polarized Lenses",
    "size": "Large",
    "sizeInfo": "Lens Width: 57mm, Bridge: 18mm, Temple: 137mm",
    "description": "Oakley Holbrook has a classic look combined with modern Oakley technology. Styled with metal rivets and keyhole bridge, and woodgrain frames featuring Prizm Polarized contrast-enhancing lenses.",
    "inStock": true,
    "images": [
      "/products/os1.webp"
    ],
    "features": [
      "Prizm™ color and contrast tuning",
      "HDPolarized glare filter",
      "Plutonite lens with full UV block"
    ]
  },
  {
    "id": "sun-24",
    "name": "OPIUM Renegade Aviator",
    "brand": "OPIUM",
    "category": "sunglasses",
    "subCategory": "Aviator",
    "price": 3800,
    "discountPrice": 3200,
    "rating": 4.7,
    "reviewsCount": 24,
    "gender": "Men",
    "frameShape": "Aviator",
    "frameColor": "Matte Charcoal",
    "frameMaterial": "Metal Alloy",
    "lensCompatibility": "Polarised Sunglasses Lenses Only",
    "size": "Large",
    "sizeInfo": "Lens Width: 58mm, Bridge: 15mm, Temple: 142mm",
    "description": "Edgy active Aviator sunglasses by OPIUM. Engineered with lightweight metal frames and high-performance UV400 polarized lenses.",
    "inStock": true,
    "images": [
      "/products/p4.png"
    ],
    "features": [
      "100% UV Protection",
      "Sweat-resistant nose-bridge grip",
      "Polarized filter coating"
    ]
  },
  {
    "id": "sun-25",
    "name": "OPIUM Sleek Shield",
    "brand": "OPIUM",
    "category": "sunglasses",
    "subCategory": "Shield",
    "price": 4200,
    "discountPrice": 3600,
    "rating": 4.8,
    "reviewsCount": 18,
    "gender": "women",
    "frameShape": "Shield",
    "frameColor": "Carbon Black",
    "frameMaterial": "TR90",
    "lensCompatibility": "Polarised Sunglasses Lenses Only",
    "size": "Large",
    "sizeInfo": "Lens Width: 132mm, Bridge: 0mm, Temple: 130mm",
    "description": "Bold futuristic shield wrap-around design with matte carbon framing and mirrored amber sun-blocking lenses.",
    "inStock": true,
    "images": [
      "/products/p7.png"
    ],
    "features": [
      "Wrap-around coverage",
      "Unbreakable TR90 frame",
      "High-impact lens engineering"
    ]
  },
  {
    "id": "sun-26",
    "name": "OPIUM Cat-Eye Vixen",
    "brand": "OPIUM",
    "category": "sunglasses",
    "subCategory": "Cat-Eye",
    "price": 3900,
    "discountPrice": 3300,
    "rating": 4.6,
    "reviewsCount": 29,
    "gender": "Women",
    "frameShape": "Cat-Eye",
    "frameColor": "Glossy Leopard",
    "frameMaterial": "Acetate",
    "lensCompatibility": "Polarised Sunglasses Lenses Only",
    "size": "Medium",
    "sizeInfo": "Lens Width: 53mm, Bridge: 18mm, Temple: 140mm",
    "description": "High-street cat-eye sunglasses with custom leopard spot gloss patterns and protective gradient bronze lenses.",
    "inStock": true,
    "images": [
      "/products/p9.png"
    ],
    "features": [
      "Chic upswept corners",
      "Scratch-resistant lenses",
      "Robust metallic hinges"
    ]
  },
  {
    "id": "sun-27",
    "name": "OPIUM Glamour Butterfly",
    "brand": "OPIUM",
    "category": "sunglasses",
    "subCategory": "Butterfly",
    "price": 4400,
    "discountPrice": 3800,
    "rating": 4.8,
    "reviewsCount": 15,
    "gender": "unisex",
    "frameShape": "Oversized",
    "frameColor": "Bordeaux Fade",
    "frameMaterial": "Polycarbonate",
    "lensCompatibility": "Polarised Sunglasses Lenses Only",
    "size": "Large",
    "sizeInfo": "Lens Width: 59mm, Bridge: 17mm, Temple: 140mm",
    "description": "Oversized bordeaux red butterfly sunglasses designed to filter out reflections while delivering absolute glamour.",
    "inStock": true,
    "images": [
      "/products/p8.png"
    ],
    "features": [
      "Oversized sun protection",
      "Premium polycarbonate frame",
      "Gradient lens tinting"
    ]
  },
  {
    "id": "sun-28",
    "name": "OPIUM Wayfarer Edge",
    "brand": "OPIUM",
    "category": "sunglasses",
    "subCategory": "Wayfarer",
    "price": 3500,
    "discountPrice": 2900,
    "rating": 4.5,
    "reviewsCount": 38,
    "gender": "Unisex",
    "frameShape": "Wayfarer",
    "frameColor": "Crystal Slate Gray",
    "frameMaterial": "Acetate",
    "lensCompatibility": "Polarised Sunglasses Lenses Only",
    "size": "Medium",
    "sizeInfo": "Lens Width: 54mm, Bridge: 19mm, Temple: 145mm",
    "description": "Modern crystal-slate square sunglasses with polarized smoke lenses. A versatile go-to frame for all-day active wear.",
    "inStock": true,
    "images": [
      "/products/p3.png"
    ],
    "features": [
      "Crystal clear resin",
      "Polarized glare reduction",
      "Spring-hinge comfort fit"
    ]
  },
  {
    "id": "sun-29",
    "name": "IDEE Sportive Aviator",
    "brand": "IDEE",
    "category": "sunglasses",
    "subCategory": "Aviator",
    "price": 2600,
    "discountPrice": 2200,
    "rating": 4.6,
    "reviewsCount": 42,
    "gender": "Men",
    "frameShape": "Aviator",
    "frameColor": "Matte Black",
    "frameMaterial": "Metal Alloy",
    "lensCompatibility": "Polarised Sunglasses Lenses Only",
    "size": "Large",
    "sizeInfo": "Lens Width: 58mm, Bridge: 15mm, Temple: 140mm",
    "description": "High-street active Aviator sunglasses by IDEE. Made with high-tensile metal alloy frame and UV400 protective polarized lenses.",
    "inStock": true,
    "images": [
      "/products/15.png",
      "/products/36.png"
    ],
    "features": [
      "100% UV Protection",
      "Corrosion resistant hinges",
      "Polarized glare reduction"
    ]
  },
  {
    "id": "sun-30",
    "name": "IDEE Classic Wayfarer",
    "brand": "IDEE",
    "category": "sunglasses",
    "subCategory": "Wayfarer",
    "price": 2400,
    "discountPrice": 2000,
    "rating": 4.7,
    "reviewsCount": 65,
    "gender": "Unisex",
    "frameShape": "Wayfarer",
    "frameColor": "Tortoise Shell",
    "frameMaterial": "Polycarbonate",
    "lensCompatibility": "Polarised Sunglasses Lenses Only",
    "size": "Medium",
    "sizeInfo": "Lens Width: 54mm, Bridge: 18mm, Temple: 145mm",
    "description": "Urban classic Wayfarer sunglasses with deep tortoise finish. Designed to pair with casual outfits and provide absolute sun comfort.",
    "inStock": true,
    "images": [
      "/products/idee.png",
      "/products/36.png"
    ],
    "features": [
      "Lightweight polycarbonate",
      "Scratch-resistant lenses",
      "Ergonomic temple bend"
    ]
  },
  {
    "id": "sun-31",
    "name": "IDEE Glamour Butterfly",
    "brand": "IDEE",
    "category": "sunglasses",
    "subCategory": "Butterfly",
    "price": 2800,
    "discountPrice": 2400,
    "rating": 4.8,
    "reviewsCount": 29,
    "gender": "Women",
    "frameShape": "Oversized",
    "frameColor": "Rose Gold Fade",
    "frameMaterial": "Titanium",
    "lensCompatibility": "Polarised Sunglasses Lenses Only",
    "size": "Large",
    "sizeInfo": "Lens Width: 60mm, Bridge: 16mm, Temple: 140mm",
    "description": "Oversized butterfly sunglasses styled with a beautiful rose gold metallic fade. Perfect for vacations and statement styling.",
    "inStock": true,
    "images": [
      "/products/ideec1.png",
      "/products/36.png"
    ],
    "features": [
      "Oversized coverage",
      "Hypoallergenic metallic frame",
      "Gradient lens shading"
    ]
  },
  {
    "id": "sun-32",
    "name": "IDEE Urban Hexagonal",
    "brand": "IDEE",
    "category": "sunglasses",
    "subCategory": "Hexagonal",
    "price": 2700,
    "discountPrice": 2300,
    "rating": 4.5,
    "reviewsCount": 51,
    "gender": "Unisex",
    "frameShape": "Hexagonal",
    "frameColor": "Gold Green",
    "frameMaterial": "Metal Alloy",
    "lensCompatibility": "Polarised Sunglasses Lenses Only",
    "size": "Medium",
    "sizeInfo": "Lens Width: 52mm, Bridge: 20mm, Temple: 145mm",
    "description": "Modern hexagonal geometric design in gold alloy with bottle-green protective lenses. A staple piece for city lookbooks.",
    "inStock": true,
    "images": [
      "/products/ideec1p.png"
    ],
    "features": [
      "Geometric style profile",
      "Soft silicon nose pads",
      "Impact-resistant lenses"
    ]
  },
  {
    "id": "sun-33",
    "name": "IDEE Active Shield",
    "brand": "IDEE",
    "category": "sunglasses",
    "subCategory": "Shield",
    "price": 2900,
    "discountPrice": 2500,
    "rating": 4.4,
    "reviewsCount": 18,
    "gender": "Men",
    "frameShape": "Shield",
    "frameColor": "Matte Neon Yellow",
    "frameMaterial": "TR90",
    "lensCompatibility": "Polarised Sunglasses Lenses Only",
    "size": "Large",
    "sizeInfo": "Lens Width: 135mm, Bridge: 0mm, Temple: 125mm",
    "description": "High-wrap sports shield sunglasses designed for runners and cyclists. Delivers panoramic field of vision and zero wind resistance.",
    "inStock": true,
    "images": [
      "/products/13.png",
      "/products/21.png"
    ],
    "features": [
      "Wrap-around shield design",
      "Flexible TR90 frame",
      "Sweat-wicking grip pads"
    ]
  },
  {
    "id": "sun-34",
    "name": "Ray-Ban Junior Aviator",
    "brand": "Ray-Ban",
    "category": "sunglasses",
    "subCategory": "Kids 's Collection",
    "price": 3800,
    "discountPrice": 3200,
    "rating": 4.7,
    "reviewsCount": 42,
    "gender": "Kids",
    "frameShape": "Aviator",
    "frameColor": "Classic Gold-Green",
    "frameMaterial": "Metal Alloy",
    "lensCompatibility": "Polarised Sunglasses Lenses Only",
    "size": "Small",
    "sizeInfo": "Lens Width: 48mm, Bridge: 14mm, Temple: 125mm",
    "description": "Premium junior aviator sunglasses offering 100% UV protection. Durable double-bar metallic bridge scaled down for small profiles.",
    "inStock": true,
    "images": [
      "/products/7.png"
    ],
    "features": [
      "100% UV400 protection",
      "Adjustable silicone nose cushions",
      "Sturdy alloy double bridge"
    ]
  },
  {
    "id": "sun-35",
    "name": "IDEE metallic ",
    "brand": "IDEE",
    "category": "sunglasses",
    "subCategory": "Kids 's Collection",
    "price": 4960,
    "discountPrice": 3363,
    "rating": 4.6,
    "reviewsCount": 51,
    "gender": "Kids",
    "frameShape": "Wayfarer",
    "frameColor": "Neon Yellow-Blue",
    "frameMaterial": "Polycarbonate",
    "lensCompatibility": "Polarised Sunglasses Lenses Only",
    "size": "Small",
    "sizeInfo": "Lens Width: 46mm, Bridge: 15mm, Temple: 120mm",
    "description": "Vibrant, daily polarized sunglasses for children. Polarized glare-blocking lenses guard developing eyes against bright solar reflections.",
    "inStock": true,
    "images": [
      "/products/idee.png"
    ],
    "features": [
      "Impact-resistant polycarbonate",
      "Polarized glare blocking",
      "Lightweight wear profile"
    ]
  },
  {
    "id": "sun-36",
    "name": "IDEE Young Active Shield",
    "brand": "IDEE",
    "category": "sunglasses",
    "subCategory": "Kids 's Collection",
    "price": 2800,
    "discountPrice": 2400,
    "rating": 4.6,
    "reviewsCount": 15,
    "gender": "Kids",
    "frameShape": "Shield",
    "frameColor": "Neon Lime",
    "frameMaterial": "TR90",
    "lensCompatibility": "Polarised Sunglasses Lenses Only",
    "size": "Medium",
    "sizeInfo": "Lens Width: 125mm, Bridge: 0mm, Temple: 120mm",
    "description": "Wrap-around sports shield sunglasses for young athletes. Polarized lens blocks intense sun glare.",
    "inStock": true,
    "images": [
      "/products/y5.png",
      "/products/yc15.png",
      "/products/yb.png"
    ],
    "features": [
      "High UV protection shield",
      "Secure rubber grip temple arms",
      "Impact-resistant lens guard"
    ]
  },
  {
    "id": "sun-37",
    "name": "IDEE Young Sports Wayfarer",
    "brand": "IDEE",
    "category": "sunglasses",
    "subCategory": "Kids 's Collection",
    "price": 2400,
    "discountPrice": 2000,
    "rating": 4.7,
    "reviewsCount": 19,
    "gender": "Kids",
    "frameShape": "Wayfarer",
    "frameColor": "Carbon Fiber Look",
    "frameMaterial": "TR90",
    "lensCompatibility": "Single Vision, Blue Cut",
    "size": "Medium",
    "sizeInfo": "Lens Width: 51mm, Bridge: 17mm, Temple: 140mm",
    "description": "Ultra-tough carbon-finish wayfarer frames designed to stay secure during active play and sports.",
    "inStock": true,
    "images": [
      "/products/y16.png",
      "/products/yc16.png",
      "/products/yb.png"
    ],
    "features": [
      "Carbon fiber printed finish",
      "Sweat-resistant ear bends",
      "Active play support flex"
    ]
  },
  {
    "id": "sun-38",
    "name": "Ownspecs Kids Polarized Shield",
    "brand": "Ownspecs",
    "category": "sunglasses",
    "subCategory": "Kids 's Collection",
    "price": 2200,
    "discountPrice": 1700,
    "rating": 4.7,
    "reviewsCount": 35,
    "gender": "Kids",
    "frameShape": "Shield",
    "frameColor": "Neon Orange",
    "frameMaterial": "TR90",
    "lensCompatibility": "Polarised Sunglasses Lenses Only",
    "size": "Small",
    "sizeInfo": "Lens Width: 118mm, Bridge: 0mm, Temple: 115mm",
    "description": "Panoramic active shield kids sunglasses. Polarized mirrored lenses block solar glare and screen retinas from UV radiation.",
    "inStock": true,
    "images": [
      "/products/kn4.png",
      "/products/kn01.png",
      "/products/kn02.png",
      "/products/kn03.png"
    ],
    "features": [
      "100% UV400 polarized lens",
      "Lightweight wrap-around shield",
      "Flexible drop-resistant frame"
    ]
  },
  {
    "id": "sun-39",
    "name": "Ownspecs Kids Junior Wayfarer",
    "brand": "Ownspecs",
    "category": "sunglasses",
    "subCategory": "Kids 's Collection",
    "price": 1500,
    "discountPrice": 1100,
    "rating": 4.6,
    "reviewsCount": 26,
    "gender": "Kids",
    "frameShape": "Wayfarer",
    "frameColor": "Sky Blue-White",
    "frameMaterial": "Polycarbonate",
    "lensCompatibility": "Polarised Sunglasses Lenses Only",
    "size": "Small",
    "sizeInfo": "Lens Width: 44mm, Bridge: 15mm, Temple: 120mm",
    "description": "Colorful polarized wayfarer glasses scaled down for small profiles. Highly durable frame resists scratching and drops.",
    "inStock": true,
    "images": [
      "/products/kn6.png",
      "/products/kn01.png",
      "/products/kn02.png",
      "/products/kn03.png"
    ],
    "features": [
      "Glare-blocking polarized filter",
      "Scratch-resistant lenses",
      "Vibrant matte sky-blue design"
    ]
  },
  {
    "id": "sun-40",
    "name": "Ownspecs Kids Retro Round",
    "brand": "Ownspecs",
    "category": "sunglasses",
    "subCategory": "Kids 's Collection",
    "price": 1700,
    "discountPrice": 1300,
    "rating": 4.7,
    "reviewsCount": 18,
    "gender": "Kids",
    "frameShape": "Round",
    "frameColor": "Cherry Gloss",
    "frameMaterial": "Acetate",
    "lensCompatibility": "Polarised Sunglasses Lenses Only",
    "size": "Small",
    "sizeInfo": "Lens Width: 43mm, Bridge: 16mm, Temple: 120mm",
    "description": "Vintage round kids sunglasses styled in glossy cherry red acetate with deep tinted polarized green lenses.",
    "inStock": true,
    "images": [
      "/products/kn3.png",
      "/products/kn01.png",
      "/products/kn02.png",
      "/products/kn03.png"
    ],
    "features": [
      "Handcrafted resin texture",
      "Comfort bridge nose fit",
      "UV400 protective polarized lenses"
    ]
  },

  // ========================================== 
  //   [SECTION: CONTACT-LENSES] 
  // ==========================================
  {
    "id": "cnt-01",
    "name": "Acuvue Oasys 1-Day with HydraLuxe",
    "brand": "Acuvue",
    "category": "contact-lenses",
    "subCategory": "Daily Disposables",
    "price": 3200,
    "discountPrice": 2800,
    "rating": 4.8,
    "reviewsCount": 94,
    "gender": "Unisex",
    "frameShape": "Round",
    "frameColor": "Clear",
    "frameMaterial": "Senofilcon A (Silicone Hydrogel)",
    "lensCompatibility": "Spherical Power Correction",
    "size": "Medium",
    "sizeInfo": "Base Curve: 8.5mm, Diameter: 14.3mm",
    "description": "Daily disposable contact lenses featuring HydraLuxe technology, designed to keep eyes feeling moisturized and comfortable during long screen hours.",
    "inStock": true,
    "images": [
      "/products/acuvue.png"
    ],
    "features": [
      "HydraLuxe tear-like properties",
      "Class 1 UV blocking protection",
      "High oxygen breathability"
    ]
  },
  {
    "id": "cnt-02",
    "name": "Acuvue Moist Daily Disposables",
    "brand": "Acuvue",
    "category": "contact-lenses",
    "subCategory": "Daily Disposables",
    "price": 5400,
    "discountPrice": 4800,
    "rating": 4.7,
    "reviewsCount": 142,
    "gender": "Unisex",
    "frameShape": "Round",
    "frameColor": "Clear",
    "frameMaterial": "Etafilcon A (Hydrogel)",
    "lensCompatibility": "Spherical Power Correction",
    "size": "Medium",
    "sizeInfo": "Base Curve: 8.5mm, Diameter: 14.2mm",
    "description": "Classic daily lenses built with LACREON technology. Retains moisture for fresh eyes from morning to night.",
    "inStock": true,
    "images": [
      "/products/lacreon.png"
    ],
    "features": [
      "LACREON moisture cushion",
      "UV-absorbing daily lenses",
      "Easy visibility tinting"
    ]
  },
  {
    "id": "cnt-03",
    "name": "Alcon Dailies Total1 Water Gradient",
    "brand": "Alcon",
    "category": "contact-lenses",
    "subCategory": "Daily Disposables",
    "price": 3800,
    "discountPrice": 3400,
    "rating": 4.9,
    "reviewsCount": 115,
    "gender": "Unisex",
    "frameShape": "Round",
    "frameColor": "Clear",
    "frameMaterial": "Delefilcon A (Water Gradient)",
    "lensCompatibility": "Spherical Power Correction",
    "size": "Medium",
    "sizeInfo": "Base Curve: 8.5mm, Diameter: 14.1mm",
    "description": "The world's first water gradient lenses. Possesses almost 100% water content at the outer surface for a feeling of wearing nothing.",
    "inStock": true,
    "images": [
      "/products/aclon1.png"
    ],
    "features": [
      "Water gradient structure",
      "High oxygen core comfort",
      "Zero surface friction feel"
    ]
  },
  {
    "id": "cnt-04",
    "name": "Air Optix Plus HydraGlyde Monthly",
    "brand": "Alcon",
    "category": "contact-lenses",
    "subCategory": "Monthly Disposables",
    "price": 2600,
    "discountPrice": 2200,
    "rating": 4.7,
    "reviewsCount": 83,
    "gender": "Unisex",
    "frameShape": "Round",
    "frameColor": "Clear",
    "frameMaterial": "Lotrafilcon B (Silicone Hydrogel)",
    "lensCompatibility": "Spherical Power Correction",
    "size": "Medium",
    "sizeInfo": "Base Curve: 8.6mm, Diameter: 14.2mm",
    "description": "Monthly lenses with HydraGlyde Moisture Matrix and SmartShield protective technology to defend against lipid deposits.",
    "inStock": true,
    "images": [
      "/products/aclon2.png"
    ],
    "features": [
      "SmartShield deposit shield",
      "HydraGlyde moisture matrix",
      "Long-lasting lens wetness"
    ]
  },
  {
    "id": "cnt-05",
    "name": "Bausch & Lomb Ultra Monthly Lenses",
    "brand": "Bausch & Lomb",
    "category": "contact-lenses",
    "subCategory": "Monthly Disposables",
    "price": 2200,
    "discountPrice": 1900,
    "rating": 4.6,
    "reviewsCount": 68,
    "gender": "Unisex",
    "frameShape": "Round",
    "frameColor": "Clear",
    "frameMaterial": "Samfilcon A (Silicone Hydrogel)",
    "lensCompatibility": "Spherical Power Correction",
    "size": "Medium",
    "sizeInfo": "Base Curve: 8.5mm, Diameter: 14.2mm",
    "description": "Monthly lenses with MoistureSeal technology. Retains 95% of moisture for a full 16 hours of comfortable wear.",
    "inStock": true,
    "images": [
      "/products/baush1.png"
    ],
    "features": [
      "MoistureSeal technology",
      "High oxygen transmissibility",
      "Excellent deposit resistance"
    ]
  },
  {
    "id": "cnt-06",
    "name": "Air Optix Colors monthly",
    "brand": "Alcon",
    "category": "contact-lenses",
    "subCategory": "Monthly Colored Disposables",
    "price": 2000,
    "discountPrice": 1600,
    "rating": 4.5,
    "reviewsCount": 54,
    "gender": "Unisex",
    "frameShape": "Round",
    "frameColor": "Clear Base (Colored)",
    "frameMaterial": "Lotrafilcon B (Silicone Hydrogel)",
    "lensCompatibility": "Spherical Power & Cosmetic Correction",
    "size": "Medium",
    "sizeInfo": "Base Curve: 8.6mm, Diameter: 14.2mm",
    "description": "Monthly color contact lenses designed with 3-in-1 color technology to blend with your eye color for a natural look.",
    "inStock": true,
    "images": [
      "/products/aclon3.png"
    ],
    "features": [
      "Natural-looking color blend",
      "HydraGlyde moisture shield",
      "High oxygen transmissibility"
    ]
  },
  {
    "id": "cnt-07",
    "name": "Bausch & Lomb Biotrue ONEday",
    "brand": "Bausch & Lomb",
    "category": "contact-lenses",
    "subCategory": "Daily Disposables",
    "price": 3400,
    "discountPrice": 3000,
    "rating": 4.8,
    "reviewsCount": 85,
    "gender": "Unisex",
    "frameShape": "Round",
    "frameColor": "Clear",
    "frameMaterial": "Nesofilcon A (HyperGel)",
    "lensCompatibility": "Spherical Power Correction",
    "size": "Medium",
    "sizeInfo": "Base Curve: 8.6mm, Diameter: 14.2mm",
    "description": "Daily disposable lenses made from a bio-inspired HyperGel material that matches the water content of the cornea.",
    "inStock": true,
    "images": [
      "/products/baush2.png"
    ],
    "features": [
      "78% water content matches cornea",
      "UV barrier sun blocking",
      "High Definition optics clarity"
    ]
  },
  {
    "id": "cnt-08",
    "name": "Bausch & Lomb PureVision 2",
    "brand": "Bausch & Lomb",
    "category": "contact-lenses",
    "subCategory": "Monthly Disposables",
    "price": 2600,
    "discountPrice": 2200,
    "rating": 4.7,
    "reviewsCount": 71,
    "gender": "Unisex",
    "frameShape": "Round",
    "frameColor": "Clear",
    "frameMaterial": "Balafilcon A (Silicone Hydrogel)",
    "lensCompatibility": "Spherical Power Correction",
    "size": "Medium",
    "sizeInfo": "Base Curve: 8.6mm, Diameter: 14.0mm",
    "description": "Monthly lenses with High Definition Optics designed to reduce haloing and glare, especially in low light conditions.",
    "inStock": true,
    "images": [
      "/products/baush3.png"
    ],
    "features": [
      "High Definition glare control",
      "Ultra-thin profile comfort",
      "Approved for extended wear"
    ]
  },
  {
    "id": "cnt-09",
    "name": "Bausch & Lomb SofLens 59",
    "brand": "Bausch & Lomb",
    "category": "contact-lenses",
    "subCategory": "Monthly Disposables",
    "price": 1500,
    "discountPrice": 1200,
    "rating": 4.4,
    "reviewsCount": 112,
    "gender": "Unisex",
    "frameShape": "Round",
    "frameColor": "Clear",
    "frameMaterial": "Hilafilcon B (Hydrogel)",
    "lensCompatibility": "Spherical Power Correction",
    "size": "Medium",
    "sizeInfo": "Base Curve: 8.6mm, Diameter: 14.2mm",
    "description": "Time-tested monthly replacement contact lenses offering clear vision and easy handling for everyday wear.",
    "inStock": true,
    "images": [
      "/products/baush4.png"
    ],
    "features": [
      "Protein deposit resistant",
      "High water content comfort",
      "Extremely easy handling"
    ]
  },
  {
    "id": "cnt-10",
    "name": "Bausch & Lomb SofLens Daily Disposables",
    "brand": "Bausch & Lomb",
    "category": "contact-lenses",
    "subCategory": "Daily Disposables",
    "price": 2800,
    "discountPrice": 2400,
    "rating": 4.6,
    "reviewsCount": 93,
    "gender": "Unisex",
    "frameShape": "Round",
    "frameColor": "Clear",
    "frameMaterial": "Hilafilcon B (Hydrogel)",
    "lensCompatibility": "Spherical Power Correction",
    "size": "Medium",
    "sizeInfo": "Base Curve: 8.6mm, Diameter: 14.2mm",
    "description": "Daily disposable contact lenses featuring ComfortMoist technology to keep eyes fresh and hydrated all day long.",
    "inStock": true,
    "images": [
      "/products/baush5.png"
    ],
    "features": [
      "ComfortMoist slow release",
      "High Definition optics design",
      "Ergonomic blister packaging"
    ]
  },
  {
    "id": "cnt-11",
    "name": "Bausch & Lomb PureVision 2 Toric",
    "brand": "Bausch & Lomb",
    "category": "contact-lenses",
    "subCategory": "Monthly Disposables",
    "price": 3800,
    "discountPrice": 3400,
    "rating": 4.7,
    "reviewsCount": 42,
    "gender": "Unisex",
    "frameShape": "Round",
    "frameColor": "Clear",
    "frameMaterial": "Balafilcon A (Silicone Hydrogel)",
    "lensCompatibility": "Toric Astigmatism Correction",
    "size": "Medium",
    "sizeInfo": "Base Curve: 8.9mm, Diameter: 14.5mm",
    "description": "Monthly toric contact lenses for astigmatism. Offers exceptional rotation stability and crisp visual quality.",
    "inStock": true,
    "images": [
      "/products/baush6.png"
    ],
    "features": [
      "Auto Align Design stability",
      "High oxygen breathability",
      "Moist lens surface feel"
    ]
  },
  {
    "id": "cnt-12",
    "name": "Bausch & Lomb Biotrue ONEday Presbyopia",
    "brand": "Bausch & Lomb",
    "category": "contact-lenses",
    "subCategory": "Daily Disposables",
    "price": 4200,
    "discountPrice": 3800,
    "rating": 4.8,
    "reviewsCount": 29,
    "gender": "Unisex",
    "frameShape": "Round",
    "frameColor": "Clear",
    "frameMaterial": "Nesofilcon A (HyperGel)",
    "lensCompatibility": "Multifocal Presbyopia Correction",
    "size": "Medium",
    "sizeInfo": "Base Curve: 8.6mm, Diameter: 14.2mm",
    "description": "Multifocal daily contact lenses designed for presbyopia, delivering clear sight at all focal distances.",
    "inStock": true,
    "images": [
      "/products/baush7.png"
    ],
    "features": [
      "3-Zone Progressive Design",
      "Exceptional all-day hydration",
      "UV radiation screen protection"
    ]
  },
  {
    "id": "cnt-13",
    "name": "CooperVision Biofinity monthly",
    "brand": "CooperVision",
    "category": "contact-lenses",
    "subCategory": "Monthly Disposables",
    "price": 2800,
    "discountPrice": 2400,
    "rating": 4.8,
    "reviewsCount": 89,
    "gender": "Unisex",
    "frameShape": "Round",
    "frameColor": "Clear",
    "frameMaterial": "Comfilcon A (Silicone Hydrogel)",
    "lensCompatibility": "Spherical Power Correction",
    "size": "Medium",
    "sizeInfo": "Base Curve: 8.6mm, Diameter: 14.0mm",
    "description": "Premium monthly silicone hydrogel lenses with Aquaform Technology for natural wettability and comfort.",
    "inStock": true,
    "images": [
      "/products/copper1.png"
    ],
    "features": [
      "Aquaform natural hydration",
      "High oxygen breathability core",
      "Soft flexible material fit"
    ]
  },
  {
    "id": "cnt-14",
    "name": "CooperVision MyDay Dailies",
    "brand": "CooperVision",
    "category": "contact-lenses",
    "subCategory": "Daily Disposables",
    "price": 3600,
    "discountPrice": 3200,
    "rating": 4.7,
    "reviewsCount": 64,
    "gender": "Unisex",
    "frameShape": "Round",
    "frameColor": "Clear",
    "frameMaterial": "Stenfilcon A (Silicone Hydrogel)",
    "lensCompatibility": "Spherical Power Correction",
    "size": "Medium",
    "sizeInfo": "Base Curve: 8.4mm, Diameter: 14.2mm",
    "description": "Daily disposable lenses featuring Smart Silicone chemistry for exceptional oxygen delivery and soft comfort.",
    "inStock": true,
    "images": [
      "/products/copper2.png"
    ],
    "features": [
      "Smart Silicone chemistry",
      "Built-in UV filter protection",
      "Ultra-soft daily disposable feel"
    ]
  },
  {
    "id": "cnt-15",
    "name": "CooperVision Avaira Vitality",
    "brand": "CooperVision",
    "category": "contact-lenses",
    "subCategory": "Two-Week Disposables",
    "price": 2200,
    "discountPrice": 1850,
    "rating": 4.6,
    "reviewsCount": 57,
    "gender": "Unisex",
    "frameShape": "Round",
    "frameColor": "Clear",
    "frameMaterial": "Fanfilcon A (Silicone Hydrogel)",
    "lensCompatibility": "Spherical Power Correction",
    "size": "Medium",
    "sizeInfo": "Base Curve: 8.4mm, Diameter: 14.2mm",
    "description": "Two-week replacement silicone hydrogel lenses offering Class 1 UV blocking and long-lasting comfort.",
    "inStock": true,
    "images": [
      "/products/copper3.png"
    ],
    "features": [
      "Class 1 UV solar filter",
      "Two-week clean replacement",
      "Aquaform moisture lock"
    ]
  },
  {
    "id": "cnt-16",
    "name": "CooperVision Proclear 1-Day",
    "brand": "CooperVision",
    "category": "contact-lenses",
    "subCategory": "Daily Disposables",
    "price": 3000,
    "discountPrice": 2600,
    "rating": 4.5,
    "reviewsCount": 42,
    "gender": "Unisex",
    "frameShape": "Round",
    "frameColor": "Clear",
    "frameMaterial": "Omafilcon A (Hydrogel)",
    "lensCompatibility": "Spherical Power Correction",
    "size": "Medium",
    "sizeInfo": "Base Curve: 8.7mm, Diameter: 14.2mm",
    "description": "Daily contact lenses utilizing PC Technology that binds water to keep lenses hydrated and comfortable all day.",
    "inStock": true,
    "images": [
      "/products/copper4.png"
    ],
    "features": [
      "PC Technology water binding",
      "Ideal for dry-eye users",
      "96% hydration over 12h"
    ]
  },

];

export const BRANDS = [
  {
    "name": "Ray-Ban",
    "logo": "🕶️ Ray-Ban"
  },
  {
    "name": "Burberry",
    "logo": "🧥 Burberry"
  },
  {
    "name": "Michael Kors",
    "logo": "👜 MK"
  },
  {
    "name": "Dolce & Gabbana",
    "logo": "⚜️ D&G"
  },
  {
    "name": "Prada",
    "logo": "💎 Prada"
  },
  {
    "name": "Tory Burch",
    "logo": "🏵️ Tory Burch"
  },
  {
    "name": "Emporio Armani",
    "logo": "🦅 Armani"
  },
  {
    "name": "Versace",
    "logo": "🐍 Versace"
  },
  {
    "name": "Coach",
    "logo": "🎒 Coach"
  },
  {
    "name": "Marc Jacobs",
    "logo": "👜 Marc Jacobs"
  },
  {
    "name": "Tommy Hilfiger",
    "logo": "🇺🇸 Tommy"
  },
  {
    "name": "Calvin Klein",
    "logo": "👖 CK"
  },
  {
    "name": "Guess",
    "logo": "❓ Guess"
  },
  {
    "name": "Carrera",
    "logo": "🏁 Carrera"
  },
  {
    "name": "Hugo Boss",
    "logo": "💼 Hugo Boss"
  },
  {
    "name": "Oakley",
    "logo": "🚴 Oakley"
  },
  {
    "name": "IDEE",
    "logo": "🕶️ IDEE"
  },
  {
    "name": "OPIUM",
    "logo": "🕶️ OPIUM"
  },
  {
    "name": "Acuvue",
    "logo": "👁️ Acuvue"
  },
  {
    "name": "Bausch & Lomb",
    "logo": "👁️ Bausch & Lomb"
  },
  {
    "name": "Alcon",
    "logo": "👁️ Alcon"
  },
  {
    "name": "Hopper",
    "logo": "🕶️ Hopper"
  },
  {
    "name": "Ownspecs",
    "logo": "🕶️ Ownspecs"
  },
  {
    "name": "CooperVision",
    "logo": "👁️ CooperVision"
  }
];


// ============================================================================ 
//   [SECTION: TESTIMONIALS] 
// ============================================================================
export const TESTIMONIALS = [
  {
    id: "tst-01",
    name: "Yuvraj H.",
    review: "Very clean and nicely organized store. Extremely friendly staff, they were very helpful with getting me the perfect eyeglasses. Would recommend!",
    rating: 5
  },
  {
    id: "tst-02",
    name: "Taran K.",
    review: "This is my second time coming to this place and I am always amazed by their customer service. They have a very good prices for frame and lenses.",
    rating: 5
  },
  {
    id: "tst-03",
    name: "Baljit S.",
    review: "The service provided by parmeet over there is really wonderful. The way doctor checked eyes for vision is good. Also, whole staff is helpful.",
    rating: 5
  },
  {
    id: "tst-04",
    name: "Dr. Sahil M.",
    review: "Great experience. The optometrist was very knowledgeable and took the time to explain all lens options clearly. Got my progressive lenses with perfect vision clarity.",
    rating: 5
  },
  {
    id: "tst-05",
    name: "Harpreet K.",
    review: "Highly recommended! Excellent experience with Paradise Optics. The dealing is very good and the service is super fast. Authentic international designer frames.",
    rating: 5
  }
];


// ============================================================================ 
//   [SECTION: FAQS] 
// ============================================================================
export const FAQS = [
  {
    "id": "faq-01",
    "question": "Do you provide eye testing?",
    "answer": "Yes, we provide advanced, computerized eye testing led by certified optometrists. Our comprehensive eye checkup includes a visual acuity test, refractive power check, and binocular vision audit."
  },
  {
    "id": "faq-02",
    "question": "Do you offer prescription lenses?",
    "answer": "Yes, we specialize in advanced prescription lenses, including Single Vision, Bifocal, and Progressive lenses, with options for Blue Cut protection, Anti-Reflective coatings, and Transitions (photochromic) technology."
  },
  {
    "id": "faq-03",
    "question": "What types of sunglasses are available?",
    "answer": "We offer an extensive selection of premium sunglasses, including Polarized, UV Protection, Sports, Luxury Fashion, and specialized Driving sunglasses from top brands like Ray-Ban, Oakley, and Carrera."
  },
  {
    "id": "faq-04",
    "question": "Do you provide contact lenses?",
    "answer": "Yes. We supply Daily Disposable, Monthly Disposable, Toric (for Astigmatism), Multifocal, and cosmetic Colored contact lenses from market-leading brands like Acuvue, Bausch & Lomb, and Alcon."
  },
  {
    "id": "faq-05",
    "question": "Can I replace my existing lenses?",
    "answer": "Absolutely! If your prescription has changed but you love your current frames, you can bring them to us. We will precisely cut and fit your new prescription lenses into your existing frame."
  },
  {
    "id": "faq-06",
    "question": "Do you provide frame adjustments?",
    "answer": "Yes, we offer complimentary frame fitting and adjustments (nose-pad tweaks, temple alignment, and tightening hinges) to ensure your glasses sit comfortably on your face without sliding or squeezing."
  },
  {
    "id": "faq-07",
    "question": "How long does it take to prepare prescription glasses?",
    "answer": "Single vision glasses are typically prepared within 24 to 48 hours. Complex prescriptions, bifocals, or customized progressive lenses with specialized coatings can take 3 to 5 business days."
  },
  {
    "id": "faq-08",
    "question": "Do you offer home delivery?",
    "answer": "Yes, we offer free home delivery across the city for all eyeglasses, sunglasses, and contact lenses orders. We also ship prescription glasses securely to your address once prepared."
  },
  {
    "id": "faq-09",
    "question": "How can I book an eye test?",
    "answer": "You can book an appointment easily by clicking the 'Book Appointment' button in the navigation or on our services page, choosing your preferred date, time, and service, or by sending us a WhatsApp message."
  }
];


// ============================================================================ 
//   [SECTION: SERVICES] 
// ============================================================================
export const SERVICES = [
  {
    id: "srv-01",
    title: "Comprehensive Eye Testing",
    tagline: "Your eyes deserve more than a quick vision check.",
    description: "Our comprehensive eye examination helps assess your visual requirements and determine the appropriate prescription for your everyday needs.",
    actionPrompt: "Book your eye examination today.",
    icon: "FaEye",
    image: "/eye-testing.jpeg"
  },
  {
    id: "srv-02",
    title: "Prescription Eyewear",
    tagline: "Clear vision and great style should go together.",
    description: "Choose from a wide range of prescription frames and lenses selected to suit different face shapes, lifestyles, prescriptions and budgets.",
    icon: "FaGlasses",
    image: "/Frame-Fitting.png"
  },
  {
    id: "srv-03",
    title: "Progressive Lenses",
    tagline: "Enjoy clear vision across different distances without constantly changing glasses.",
    description: "Our progressive lens solutions are designed for people who need vision correction for distance, intermediate and near activities. We help you choose the appropriate progressive design based on your prescription, lifestyle and visual requirements.",
    icon: "FaCertificate",
    image: "/Lens-Replacement-Service.png"
  },
  {
    id: "srv-04",
    title: "Computer & Occupational Lenses",
    tagline: "Spend long hours working on computers?",
    description: "Specialised occupational lenses can provide comfortable vision at intermediate and near distances and are designed around your working environment. Ask us about the right solution for your workplace and daily activities.",
    icon: "FaLaptop",
    image: "/Prescription-Audit.png"
  },
  {
    id: "srv-05",
    title: "Contact Lenses",
    tagline: "Experience the freedom of clear vision without spectacles.",
    description: "We offer prescription contact lenses, including options for different visual requirements and lifestyles.",
    icon: "FaRegCircle",
    image: "/Contact-Lens-Consultation.png"
  },
  {
    id: "srv-06",
    title: "Contact Lens Trial",
    tagline: "Not sure whether contact lenses are right for you?",
    description: "Ask about our contact lens trial and experience the convenience before making your decision.",
    icon: "FaEye",
    image: "/Ophthalmology-Testing-Lab.png"
  },
  {
    id: "srv-07",
    title: "Multifocal Contact Lenses",
    tagline: "Multifocal contact lenses may be an option for you.",
    description: "If you are over 40 and want to enjoy occasions, functions or everyday activities without spectacles, multifocal contact lenses may be an option. Our team can assess your requirements and guide you through suitable options.",
    actionPrompt: "Ask about your contact lens trial today.",
    icon: "FaRegCircle",
    image: "/Contact-Lens-Consultation.png"
  }
];

export const LENSES_COMPARISON = [
  {
    type: "Single Vision",
    description: "Corrects a single focal distance (either reading or distance). Fitted standard for myopia or hyperopia.",
    features: ["Edge-to-edge clarity", "Perfect for general reading/driving", "Highly affordable"],
    blueCut: "Available",
    photochromic: "Available",
    rating: "⭐⭐⭐⭐⭐"
  },
  {
    type: "Bifocal",
    description: "Traditional dual-power lens with a visible dividing line separating near vision and distance vision.",
    features: ["Distinct reading segment", "Reliable dual distance shift", "No swim distortion effect"],
    blueCut: "Available",
    photochromic: "Available",
    rating: "⭐⭐⭐⭐"
  },
  {
    type: "Progressive",
    description: "No-line multifocal lenses with smooth graduation from distance, to intermediate computer, to reading views.",
    features: ["No visible partition lines", "Natural look and visual range", "Covers computer + reading distances"],
    blueCut: "Highly Recommended",
    photochromic: "Available",
    rating: "⭐⭐⭐⭐⭐"
  },
  {
    type: "Blue Cut Lenses",
    description: "Specialized coating blocks harmful blue-violet light emitted by computer screens, laptops, and smartphones.",
    features: ["Reduces visual fatigue", "Improves sleep cycle", "Includes anti-glare coatings"],
    blueCut: "Standard Included",
    photochromic: "Available (Transitions)",
    rating: "⭐⭐⭐⭐⭐"
  },
  {
    type: "Photochromic (Transitions)",
    description: "Smart lenses that stay crystal clear indoors and automatically darken when exposed to solar UV light.",
    features: ["Glasses and sunglasses in one", "Adapts to light intensity", "100% UV rays block built-in"],
    blueCut: "Available",
    photochromic: "Standard Included",
    rating: "⭐⭐⭐⭐⭐"
  }
];
