const TODAY_LABEL = "2026-04-26 12:00 WEST";
const REM_POP_IMAGE =
  "https://imgs1.goodsmileus.com/image/cache/data/productimages/POP/Rem_LSize/01_2410221501429729-1200x1200.jpg";
const FIGURE_PLACEHOLDER_IMAGE = "./assets/figure-placeholder.svg";

const providers = [
  {
    id: "goodsmile",
    name: "Good Smile Company",
    country: "Japan / US",
    domains: ["goodsmile.com", "www.goodsmile.com", "goodsmileus.com", "www.goodsmileus.com"],
    method: "Official store pages, product catalog, partner shop metadata",
    update: "Every 6 hours",
    shipping: "Europe shipping is listed separately by Good Smile; customs and import taxes vary.",
    confidence: "Official",
    note: "Best canonical source for product identity, manufacturer, release date, and official price."
  },
  {
    id: "amiami",
    name: "AmiAmi",
    country: "Japan",
    domains: ["amiami.com", "www.amiami.com"],
    method: "Affiliate/feed integration preferred; crawler only if terms allow it",
    update: "Every 4 hours",
    shipping: "Final shipping is usually confirmed at payment request.",
    confidence: "Recognized",
    note: "Strong marketplace signal, but shipping can change and must not be guessed."
  },
  {
    id: "solaris",
    name: "Solaris Japan",
    country: "Japan",
    domains: ["solarisjapan.com", "www.solarisjapan.com"],
    method: "Partner feed or permission-aware parser",
    update: "Every 6 hours",
    shipping: "Estimate by destination and service when available.",
    confidence: "Recognized",
    note: "Useful for new and pre-owned listings; condition must be stored separately."
  },
  {
    id: "hlj",
    name: "HobbyLink Japan",
    country: "Japan",
    domains: ["hlj.com", "www.hlj.com"],
    method: "Affiliate feed and cart-estimate checks",
    update: "Every 4 hours",
    shipping: "Private Warehouse can change timing and shipment totals.",
    confidence: "Recognized",
    note: "Keep warehouse and backorder status explicit."
  },
  {
    id: "bbts",
    name: "BigBadToyStore",
    country: "US",
    domains: ["bigbadtoystore.com", "www.bigbadtoystore.com"],
    method: "Affiliate feed or approved crawler",
    update: "Every 8 hours",
    shipping: "Destination-based shipping at checkout.",
    confidence: "Recognized",
    note: "Good stock signal for US listings; international totals need checkout-safe estimates."
  },
  {
    id: "tom",
    name: "Tokyo Otaku Mode",
    country: "US / Japan",
    domains: ["otakumode.com", "www.otakumode.com"],
    method: "Affiliate feed, product API where available",
    update: "Every 8 hours",
    shipping: "Shipping, points, and discounts must be itemized.",
    confidence: "Recognized",
    note: "Rewards can affect checkout cost, so show them separately from product price."
  },
  {
    id: "ninningame",
    name: "Nin-Nin Game",
    country: "Japan",
    domains: ["nin-nin-game.com", "www.nin-nin-game.com"],
    method: "Partner agreement or permitted parser",
    update: "Every 6 hours",
    shipping: "Destination and carrier dependent.",
    confidence: "Recognized",
    note: "Useful for Japan exclusives; verify exact edition and bonus status."
  },
  {
    id: "hypertoys",
    name: "HyperToys",
    country: "Portugal",
    domains: ["hyper-toys.com", "www.hyper-toys.com"],
    method: "Store pages, WooCommerce feed, or direct partner feed",
    update: "Every 4 hours",
    shipping: "Portugal and Spain: EUR 3.90 up to EUR 60, free above EUR 60 except large items.",
    confidence: "Recognized",
    note: "Useful for Portugal totals because VAT and domestic shipping rules can be explicit."
  },
  {
    id: "dekai",
    name: "Dekai Anime",
    country: "UK",
    domains: ["dekaianime.com", "www.dekaianime.com"],
    method: "Affiliate feed or permitted parser",
    update: "Every 8 hours",
    shipping: "International shipping and taxes must be estimated by destination.",
    confidence: "Recognized",
    note: "Separate UK VAT-inclusive prices from EU import duties."
  },
  {
    id: "crunchyroll",
    name: "Crunchyroll Store",
    country: "US / EU",
    domains: ["crunchyroll.com", "www.crunchyroll.com", "store.crunchyroll.com"],
    method: "Affiliate feed or store listing parser with rate limits",
    update: "Every 6 hours",
    shipping: "Checkout-dependent for international buyers.",
    confidence: "Recognized",
    note: "Good direct retail signal; region and membership discounts must stay separate."
  },
  {
    id: "meccha",
    name: "Meccha Japan",
    country: "Japan",
    domains: ["meccha-japan.com", "www.meccha-japan.com"],
    method: "Partner feed or permitted parser",
    update: "Every 8 hours",
    shipping: "Destination and carrier dependent.",
    confidence: "Recognized",
    note: "Useful for Japan items and limited releases; condition and bonus checks matter."
  },
  {
    id: "hobbygenki",
    name: "Hobby Genki",
    country: "Japan",
    domains: ["hobby-genki.com", "www.hobby-genki.com"],
    method: "Partner feed or permitted parser",
    update: "Every 6 hours",
    shipping: "Destination and carrier dependent.",
    confidence: "Recognized",
    note: "Strong for imports; exact SKU and release-month matching are required."
  }
];

const products = [
  {
    id: "rem-monster-motions",
    title: "Banpresto ESPRESTO Re:ZERO Rem Monster Motions",
    character: "Rem",
    series: "Re:ZERO -Starting Life in Another World-",
    manufacturer: "Banpresto",
    line: "ESPRESTO",
    type: "Prize figure",
    scale: "Prize figure",
    version: "Monster Motions",
    size: "Approx. 20 cm",
    sku: "4983164183580",
    releaseDate: "2026-01-01",
    status: "In stock",
    image: FIGURE_PLACEHOLDER_IMAGE,
    description:
      "Prize figure record kept separate from Rem Nendoroid, scale, bunny, wedding, and POP UP PARADE versions.",
    requiredTokens: ["rem", "espresto", "monster", "motions"],
    aliases: ["banpresto rem monster motions", "espresto rem"],
    history: [
      { date: "2026-01-18", amount: 35.8, currency: "EUR" },
      { date: "2026-04-26", amount: 35.8, currency: "EUR" }
    ],
    normalization: [
      "Exact signature: Rem + Banpresto + ESPRESTO + Monster Motions + prize figure.",
      "Do not group with Coreful, Nendoroid, POP UP PARADE, bunny, wedding, or Thunder God versions.",
      "JAN/EAN is stored when available, but title and version tokens are still required."
    ],
    offers: [
      {
        providerId: "hypertoys",
        listingTitle: "Banpresto ESPRESTO Re:ZERO Rem Monster Motions",
        url: "https://hyper-toys.com/en/shop/banpresto-espresto-rezero-rem-monster-motions/",
        image: FIGURE_PLACEHOLDER_IMAGE,
        priceAmount: 31.9,
        priceCurrency: "EUR",
        shippingAmount: 3.9,
        shippingCurrency: "EUR",
        feesAmount: 0,
        feesCurrency: "EUR",
        feesLabel: "VAT included",
        availability: "In stock",
        shipsToPortugal: true,
        lastUpdated: TODAY_LABEL,
        sourceNote: "Store listing plus published Portugal shipping rule."
      }
    ]
  },
  {
    id: "rem-pop-up-parade-l-size",
    title: "POP UP PARADE Rem L Size",
    character: "Rem",
    series: "Re:ZERO -Starting Life in Another World-",
    manufacturer: "Good Smile Company",
    line: "POP UP PARADE L",
    type: "Non-scale figure",
    scale: "Non-scale",
    version: "L Size",
    size: "Approx. 22 cm",
    sku: "4580590201286",
    releaseDate: "2025-05-01",
    status: "Released",
    image: REM_POP_IMAGE,
    description:
      "Good Smile Company POP UP PARADE L record. This is not the Nendoroid, bunny, wedding, or prize figure version of Rem.",
    requiredTokens: ["rem", "pop", "up", "parade", "l", "size"],
    aliases: ["pop up parade rem l", "gsc20128", "4580590201286"],
    history: [],
    normalization: [
      "Strong identity: Rem + POP UP PARADE + L Size + Good Smile Company + non-scale.",
      "Separated from Nendoroid Rem by line, height, release month, and product title.",
      "Provider rows without confirmed shipping or fees cannot create a total estimate."
    ],
    offers: [
      {
        providerId: "goodsmile",
        listingTitle: "POP UP PARADE Rem L Size",
        url: "https://www.goodsmile.com/en/product/56932/POP+UP+PARADE+Rem+L+Size",
        image: REM_POP_IMAGE,
        priceAmount: 8800,
        priceCurrency: "JPY",
        shippingAmount: 15,
        shippingCurrency: "USD",
        shippingLabel: "Europe flat shipping",
        feesAmount: null,
        feesCurrency: "EUR",
        feesLabel: "Import taxes not available",
        availability: "Released",
        shipsToPortugal: true,
        lastUpdated: TODAY_LABEL,
        sourceNote: "Official product page and Good Smile Europe shipping guide; tax estimate unavailable."
      },
      {
        providerId: "goodsmile",
        listingTitle: "POP UP PARADE Rem L Size Good Smile US",
        url: "https://www.goodsmileus.com/product/pop-up-parade-rem-l-size-14036",
        image: REM_POP_IMAGE,
        priceAmount: 57.99,
        priceCurrency: "USD",
        shippingAmount: null,
        shippingCurrency: "USD",
        shippingLabel: "Checkout quote required",
        feesAmount: null,
        feesCurrency: "USD",
        feesLabel: "Duties not available",
        availability: "Region-dependent",
        shipsToPortugal: null,
        lastUpdated: TODAY_LABEL,
        sourceNote: "Official US listing; international shipping quote is not public."
      }
    ]
  },
  {
    id: "rem-nendoroid-663-rerelease",
    title: "Nendoroid Rem 663 Rerelease",
    character: "Rem",
    series: "Re:ZERO -Starting Life in Another World-",
    manufacturer: "Good Smile Company",
    line: "Nendoroid",
    type: "Nendoroid",
    scale: "Non-scale articulated figure",
    version: "663 Rerelease",
    size: "Approx. 10 cm",
    sku: "663",
    releaseDate: "2025-09-01",
    status: "Released",
    image: FIGURE_PLACEHOLDER_IMAGE,
    description:
      "Standard Nendoroid Rem rerelease. It must never be mixed with Nendoroid Doll Rem or any scale/prize Rem figure.",
    requiredTokens: ["rem", "nendoroid", "663"],
    aliases: ["nendoroid rem", "rem nendoroid 663"],
    history: [],
    normalization: [
      "Exact signature: Rem + Nendoroid + No. 663 + Good Smile Company.",
      "Nendoroid Doll Rem is a different product because the line and body format differ.",
      "Rerelease month is stored so reissues can be tracked without merging wrong editions."
    ],
    offers: [
      {
        providerId: "goodsmile",
        listingTitle: "Nendoroid Rem 663 Rerelease",
        url: "https://www.goodsmile.com/en/product/58677/Nendoroid+Rem",
        image: FIGURE_PLACEHOLDER_IMAGE,
        priceAmount: 6200,
        priceCurrency: "JPY",
        shippingAmount: 15,
        shippingCurrency: "USD",
        shippingLabel: "Europe flat shipping",
        feesAmount: null,
        feesCurrency: "EUR",
        feesLabel: "Import taxes not available",
        availability: "Released",
        shipsToPortugal: true,
        lastUpdated: TODAY_LABEL,
        sourceNote: "Official Good Smile product page; total blocked by mixed-currency shipping and unknown import fees."
      }
    ]
  },
  {
    id: "rem-nendoroid-doll",
    title: "Nendoroid Doll Rem",
    character: "Rem",
    series: "Re:ZERO -Starting Life in Another World-",
    manufacturer: "Good Smile Company",
    line: "Nendoroid Doll",
    type: "Nendoroid Doll",
    scale: "Non-scale doll figure",
    version: "Doll",
    size: "Approx. 14 cm",
    sku: "11113",
    releaseDate: "2023-09-01",
    status: "Released",
    image: FIGURE_PLACEHOLDER_IMAGE,
    description:
      "Nendoroid Doll Rem is a separate doll-format figure and should not be merged with the standard Nendoroid Rem 663.",
    requiredTokens: ["rem", "nendoroid", "doll"],
    aliases: ["nendoroid doll rem"],
    history: [],
    normalization: [
      "Exact signature: Rem + Nendoroid Doll + Good Smile Company.",
      "Different body format from Nendoroid 663, so it remains a separate figure page.",
      "Provider title must include Doll or a matching SKU before it can be confirmed."
    ],
    offers: [
      {
        providerId: "goodsmile",
        listingTitle: "Nendoroid Doll Rem",
        url: "https://www.goodsmile.com/en/product/11113/Nendoroid+Doll+Rem",
        image: FIGURE_PLACEHOLDER_IMAGE,
        priceAmount: 8900,
        priceCurrency: "JPY",
        shippingAmount: 15,
        shippingCurrency: "USD",
        shippingLabel: "Europe flat shipping",
        feesAmount: null,
        feesCurrency: "EUR",
        feesLabel: "Import taxes not available",
        availability: "Released",
        shipsToPortugal: true,
        lastUpdated: TODAY_LABEL,
        sourceNote: "Official Good Smile product page."
      }
    ]
  },
  {
    id: "rem-wedding-ver",
    title: "Rem: Wedding Ver.",
    character: "Rem",
    series: "Re:ZERO -Starting Life in Another World-",
    manufacturer: "Phat! Company",
    line: "Scale figure",
    type: "Scale figure",
    scale: "1/7 scale",
    version: "Wedding Ver.",
    size: "Approx. 22 cm",
    sku: "4067",
    releaseDate: "2024-04-01",
    status: "Released",
    image: "https://www.goodsmile.com/gsc-webrevo-sdk-storage-prd/product/image/product/20170317/6331/44409/large/bba305e80ea6deec8f995c815c36105c.jpg",
    description:
      "Wedding outfit 1/7 scale Rem by Phat! Company. Stored separately from other Rem scale figures and all chibi/prize lines.",
    requiredTokens: ["rem", "wedding"],
    aliases: ["rem wedding", "phat company rem wedding"],
    history: [],
    normalization: [
      "Exact signature: Rem + Wedding Ver. + Phat! Company + 1/7 scale.",
      "Do not merge with the Good Smile 1/7 maid Rem, bunny Rem, or combat outfit Rem.",
      "Version name is mandatory for provider matching."
    ],
    offers: [
      {
        providerId: "goodsmile",
        listingTitle: "Rem Wedding Ver.",
        url: "https://www.goodsmile.com/en/product/4067/Rem+Wedding+Ver.",
        image: "https://www.goodsmile.com/gsc-webrevo-sdk-storage-prd/product/image/product/20170317/6331/44409/large/bba305e80ea6deec8f995c815c36105c.jpg",
        priceAmount: 17800,
        priceCurrency: "JPY",
        shippingAmount: 15,
        shippingCurrency: "USD",
        shippingLabel: "Europe flat shipping",
        feesAmount: null,
        feesCurrency: "EUR",
        feesLabel: "Import taxes not available",
        availability: "Released",
        shipsToPortugal: true,
        lastUpdated: TODAY_LABEL,
        sourceNote: "Official Good Smile product page."
      }
    ]
  },
  {
    id: "rem-bare-leg-bunny-2nd",
    title: "Rem: Bare Leg Bunny Ver. 2nd",
    character: "Rem",
    series: "Re:ZERO -Starting Life in Another World-",
    manufacturer: "FREEing",
    line: "B-style",
    type: "Scale figure",
    scale: "1/4 scale",
    version: "Bare Leg Bunny Ver. 2nd",
    size: "Approx. 44 cm",
    sku: "1137281",
    releaseDate: "2025-06-01",
    status: "Released",
    image: "https://www.goodsmile.com/gsc-webrevo-sdk-storage-prd/product/image/1137281/UtgVYQXF6nPKEhWyceGkS8mi1Ad490sj.jpg",
    description:
      "Large 1/4 scale bunny Rem by FREEing. Separate from smaller bunny releases, wedding, combat, and POP UP PARADE versions.",
    requiredTokens: ["rem", "bunny", "2nd"],
    aliases: ["rem bunny", "rem bare leg bunny"],
    history: [],
    normalization: [
      "Exact signature: Rem + Bare Leg Bunny Ver. 2nd + FREEing + 1/4 scale.",
      "Size and version are mandatory because many Rem bunny products exist.",
      "Large-item shipping cannot be guessed unless the provider exposes the rule."
    ],
    offers: [
      {
        providerId: "goodsmile",
        listingTitle: "Rem Bare Leg Bunny Ver. 2nd",
        url: "https://www.goodsmile.com/en/product/1137281/Rem+Bare+Leg+Bunny+Ver.+2nd",
        image: "https://www.goodsmile.com/gsc-webrevo-sdk-storage-prd/product/image/1137281/UtgVYQXF6nPKEhWyceGkS8mi1Ad490sj.jpg",
        priceAmount: 29700,
        priceCurrency: "JPY",
        shippingAmount: null,
        shippingCurrency: "USD",
        shippingLabel: "Large-item shipping not available",
        feesAmount: null,
        feesCurrency: "EUR",
        feesLabel: "Import taxes not available",
        availability: "Released",
        shipsToPortugal: null,
        lastUpdated: TODAY_LABEL,
        sourceNote: "Official page confirms product and price; large-item shipping is not estimated."
      }
    ]
  },
  {
    id: "rem-combat-outfit",
    title: "Rem Combat Outfit Ver.",
    character: "Rem",
    series: "Re:ZERO -Starting Life in Another World-",
    manufacturer: "KADOKAWA",
    line: "KDcolle",
    type: "Scale figure",
    scale: "1/7 scale",
    version: "Combat Outfit Ver.",
    size: "Approx. 22 cm",
    sku: "1138279",
    releaseDate: "2025-11-01",
    status: "Released",
    image: "https://www.goodsmile.com/gsc-webrevo-sdk-storage-prd/product/image/1138279/9vtTyXgYrGxqA6sVaRS3WBh2pjNHf7QK.jpg",
    description:
      "KADOKAWA 1/7 scale Rem in an original Japanese-style combat outfit. Not interchangeable with other Rem scale figures.",
    requiredTokens: ["rem", "combat", "outfit"],
    aliases: ["rem combat outfit", "kadokawa rem"],
    history: [],
    normalization: [
      "Exact signature: Rem + Combat Outfit Ver. + KADOKAWA + 1/7 scale.",
      "Version name and manufacturer prevent accidental grouping with Wedding Ver. or maid Rem.",
      "Provider rows missing the Combat Outfit version stay in the verification queue."
    ],
    offers: [
      {
        providerId: "goodsmile",
        listingTitle: "Re:ZERO Rem Combat Outfit Ver.",
        url: "https://www.goodsmile.com/en/product/1138279/%22Re+ZERO+-Starting+Life+in+Another+World-%22+Rem+Combat+Outfit+Ver.",
        image: "https://www.goodsmile.com/gsc-webrevo-sdk-storage-prd/product/image/1138279/9vtTyXgYrGxqA6sVaRS3WBh2pjNHf7QK.jpg",
        priceAmount: 25300,
        priceCurrency: "JPY",
        shippingAmount: 15,
        shippingCurrency: "USD",
        shippingLabel: "Europe flat shipping",
        feesAmount: null,
        feesCurrency: "EUR",
        feesLabel: "Import taxes not available",
        availability: "Released",
        shipsToPortugal: true,
        lastUpdated: TODAY_LABEL,
        sourceNote: "Official Good Smile product page."
      }
    ]
  },
  {
    id: "rem-thunder-god",
    title: "Re:ZERO SPM Figure Rem Thunder God",
    character: "Rem",
    series: "Re:ZERO -Starting Life in Another World-",
    manufacturer: "SEGA",
    line: "SPM",
    type: "Prize figure",
    scale: "Prize figure",
    version: "Thunder God",
    size: "Approx. 19 cm",
    sku: "4570001959349",
    releaseDate: "2024-01-01",
    status: "In stock",
    image: FIGURE_PLACEHOLDER_IMAGE,
    description:
      "SEGA SPM prize figure with the Thunder God subtitle. Kept separate from every other Rem prize figure.",
    requiredTokens: ["rem", "thunder", "god"],
    aliases: ["rem thunder god", "4570001959349"],
    history: [],
    normalization: [
      "Exact signature: Rem + SPM + Thunder God + SEGA + prize figure.",
      "Subtitle token is mandatory so it does not merge with other SEGA Rem figures.",
      "US provider totals stay unavailable until international shipping and fees are known."
    ],
    offers: [
      {
        providerId: "crunchyroll",
        listingTitle: "Re:ZERO Rem Thunder God Figure",
        url: "https://store.crunchyroll.com/products/rezero--rem-thunder-god-figure-4570001959349.html",
        image: FIGURE_PLACEHOLDER_IMAGE,
        priceAmount: 22.3,
        priceCurrency: "USD",
        shippingAmount: null,
        shippingCurrency: "USD",
        shippingLabel: "Checkout quote required",
        feesAmount: null,
        feesCurrency: "USD",
        feesLabel: "Import taxes not available",
        availability: "In stock",
        shipsToPortugal: null,
        lastUpdated: TODAY_LABEL,
        sourceNote: "Crunchyroll listing confirms SKU and product; shipping total unavailable."
      }
    ]
  },
  {
    id: "nendoroid-marin-kitagawa",
    title: "Nendoroid Marin Kitagawa 1935 Rerelease",
    character: "Marin Kitagawa",
    series: "My Dress-Up Darling",
    manufacturer: "Good Smile Company",
    line: "Nendoroid",
    type: "Nendoroid",
    scale: "Non-scale articulated figure",
    version: "1935 Rerelease",
    size: "Approx. 10 cm",
    sku: "1935",
    releaseDate: "2026-02-01",
    status: "Pre-order",
    image: "https://www.goodsmile.com/gsc-webrevo-sdk-storage-prd/product/image/10754/edf6ef0c3a0093d651b2fbc1d1d45a78.jpg",
    description:
      "Rerelease of the standard Nendoroid Marin Kitagawa. Swimsuit, Doll, Surprise, and T-shirt versions are separate records.",
    requiredTokens: ["marin", "kitagawa", "nendoroid", "1935"],
    aliases: ["marin nendoroid", "my dress-up darling nendoroid"],
    history: [],
    normalization: [
      "Exact signature: Marin Kitagawa + Nendoroid + No. 1935 + rerelease.",
      "Variant selector content is stored so rerelease and original release can be separated if needed.",
      "Do not merge with Nendoroid Doll Marin Kitagawa or swimsuit variants."
    ],
    offers: [
      {
        providerId: "goodsmile",
        listingTitle: "Nendoroid Marin Kitagawa 1935 Rerelease",
        url: "https://www.goodsmile.com/en/product/10754/Nendoroid+Marin+Kitagawa",
        image: "https://www.goodsmile.com/gsc-webrevo-sdk-storage-prd/product/image/10754/edf6ef0c3a0093d651b2fbc1d1d45a78.jpg",
        priceAmount: 6500,
        priceCurrency: "JPY",
        shippingAmount: 15,
        shippingCurrency: "USD",
        shippingLabel: "Europe flat shipping",
        feesAmount: null,
        feesCurrency: "EUR",
        feesLabel: "Import taxes not available",
        availability: "Pre-order",
        shipsToPortugal: true,
        lastUpdated: TODAY_LABEL,
        sourceNote: "Official Good Smile product page."
      }
    ]
  },
  {
    id: "nendoroid-frieren",
    title: "Nendoroid Frieren 2367 Rerelease",
    character: "Frieren",
    series: "Frieren: Beyond Journey's End",
    manufacturer: "Good Smile Company",
    line: "Nendoroid",
    type: "Nendoroid",
    scale: "Non-scale articulated figure",
    version: "2367 Rerelease",
    size: "Approx. 10 cm",
    sku: "2367",
    releaseDate: "2025-05-01",
    status: "Released",
    image: "https://www.goodsmile.com/gsc-webrevo-sdk-storage-prd/product/image/56111/ZFz5s8Ki2emG3DTykJWLYBq4gtSdj9Cr.jpg",
    description:
      "Standard Nendoroid Frieren rerelease. Nendoroid Doll Frieren and Apprentice Era Ver. are separate variations.",
    requiredTokens: ["frieren", "nendoroid", "2367"],
    aliases: ["nendoroid frieren"],
    history: [],
    normalization: [
      "Exact signature: Frieren + Nendoroid + No. 2367 + Good Smile Company.",
      "Do not merge with Apprentice Era Ver., Doll, Aura, or Fern listings.",
      "Search results can show related Frieren figures separately without mixing offers."
    ],
    offers: [
      {
        providerId: "goodsmile",
        listingTitle: "Nendoroid Frieren 2367 Rerelease",
        url: "https://www.goodsmile.com/en/product/56111/Nendoroid+Frieren",
        image: "https://www.goodsmile.com/gsc-webrevo-sdk-storage-prd/product/image/56111/ZFz5s8Ki2emG3DTykJWLYBq4gtSdj9Cr.jpg",
        priceAmount: 6500,
        priceCurrency: "JPY",
        shippingAmount: 15,
        shippingCurrency: "USD",
        shippingLabel: "Europe flat shipping",
        feesAmount: null,
        feesCurrency: "EUR",
        feesLabel: "Import taxes not available",
        availability: "Released",
        shipsToPortugal: true,
        lastUpdated: TODAY_LABEL,
        sourceNote: "Official Good Smile product page."
      }
    ]
  },
  {
    id: "nendoroid-satoru-gojo",
    title: "Nendoroid Satoru Gojo 1528",
    character: "Satoru Gojo",
    series: "Jujutsu Kaisen",
    manufacturer: "Good Smile Company",
    line: "Nendoroid",
    type: "Nendoroid",
    scale: "Non-scale articulated figure",
    version: "1528",
    size: "Approx. 10 cm",
    sku: "1528",
    releaseDate: "2021-07-01",
    status: "Archive",
    image:
      "https://www.goodsmile.com/gsc-webrevo-sdk-storage-prd/product/image/product/20201204/10491/78229/large/1f267b1880bfeb45f05a0559d0de81cb.jpg",
    description:
      "Original Nendoroid Satoru Gojo. Separate from Swacchao, Doll, rubber mascot, and later rerelease records.",
    requiredTokens: ["satoru", "gojo", "nendoroid", "1528"],
    aliases: ["gojo nendoroid", "jujutsu kaisen gojo"],
    history: [],
    normalization: [
      "Exact signature: Satoru Gojo + Nendoroid + No. 1528.",
      "Do not merge with Swacchao, Doll, or Nendoroid Plus rubber mascot listings.",
      "Archive pages can identify products even when there is no current sellable total."
    ],
    offers: [
      {
        providerId: "goodsmile",
        listingTitle: "Nendoroid Satoru Gojo 1528",
        url: "https://www.goodsmile.com/en/product/8185/Nendoroid+Satoru+Gojo",
        image:
          "https://www.goodsmile.com/gsc-webrevo-sdk-storage-prd/product/image/product/20201204/10491/78229/large/1f267b1880bfeb45f05a0559d0de81cb.jpg",
        priceAmount: 5600,
        priceCurrency: "JPY",
        shippingAmount: null,
        shippingCurrency: "USD",
        shippingLabel: "Archive listing, shipping not available",
        feesAmount: null,
        feesCurrency: "EUR",
        feesLabel: "Fees not available",
        availability: "Archive",
        shipsToPortugal: null,
        lastUpdated: TODAY_LABEL,
        sourceNote: "Official archive page. No current checkout total is available."
      }
    ]
  },
  {
    id: "nendoroid-anya-forger",
    title: "Nendoroid Anya Forger 1736",
    character: "Anya Forger",
    series: "SPY x FAMILY",
    manufacturer: "Good Smile Company",
    line: "Nendoroid",
    type: "Nendoroid",
    scale: "Non-scale articulated figure",
    version: "1736",
    size: "Approx. 10 cm",
    sku: "1736",
    releaseDate: "2022-12-01",
    status: "Archive",
    image: FIGURE_PLACEHOLDER_IMAGE,
    description:
      "Standard Nendoroid Anya Forger. Kept separate from school uniform, casual, and accessory variants.",
    requiredTokens: ["anya", "forger", "nendoroid", "1736"],
    aliases: ["anya nendoroid", "spy family anya"],
    history: [],
    normalization: [
      "Exact signature: Anya Forger + Nendoroid + No. 1736.",
      "Provider rows must include Anya and Nendoroid tokens before confirmation.",
      "Archive status prevents fake totals from being displayed."
    ],
    offers: [
      {
        providerId: "goodsmile",
        listingTitle: "Nendoroid Anya Forger 1736",
        url: "https://www.goodsmile.com/en/product/12791/Nendoroid+Anya+Forger",
        image: FIGURE_PLACEHOLDER_IMAGE,
        priceAmount: 5900,
        priceCurrency: "JPY",
        shippingAmount: null,
        shippingCurrency: "USD",
        shippingLabel: "Archive listing, shipping not available",
        feesAmount: null,
        feesCurrency: "EUR",
        feesLabel: "Fees not available",
        availability: "Archive",
        shipsToPortugal: null,
        lastUpdated: TODAY_LABEL,
        sourceNote: "Official archive page. No current checkout total is available."
      }
    ]
  }
];

const candidateListings = [
  {
    providerId: "amiami",
    productId: "rem-pop-up-parade-l-size",
    listingTitle: "Possible AmiAmi result for POP UP PARADE Rem L Size",
    reason: "Search result is not an exact product URL yet. Keep it out of confirmed offers until URL, SKU, price, and image are verified."
  },
  {
    providerId: "hobbygenki",
    productId: "rem-bare-leg-bunny-2nd",
    listingTitle: "Possible Hobby Genki result for Rem Bunny",
    reason: "Title may match Rem Bunny but version and large-item shipping need manual confirmation."
  },
  {
    providerId: "solaris",
    productId: "rem-wedding-ver",
    listingTitle: "Possible Solaris Japan pre-owned Rem Wedding listing",
    reason: "Condition, edition, and exact manufacturer must be confirmed before comparison."
  }
];

const WISHLIST_STORAGE_KEY = "nekopriceWishlist";
const LEGACY_WISHLIST_STORAGE_KEY = "mochipriceWishlist";

function loadWishlist() {
  const saved = localStorage.getItem(WISHLIST_STORAGE_KEY);
  const legacySaved = localStorage.getItem(LEGACY_WISHLIST_STORAGE_KEY);
  const source = saved || legacySaved || "[]";

  if (!saved && legacySaved) {
    localStorage.setItem(WISHLIST_STORAGE_KEY, legacySaved);
  }

  return JSON.parse(source);
}

let selectedProductId = products[0].id;
let sortAscending = true;
let wishlist = loadWishlist();

const state = {
  query: "Rem",
  manufacturer: "all",
  type: "all",
  status: "all",
  provider: "all",
  sort: "lowestTotal",
  maxPrice: 350,
  confirmedOnly: false,
  shipsToPortugal: false
};

const els = {
  searchForm: document.querySelector("#searchForm"),
  searchInput: document.querySelector("#searchInput"),
  manufacturerFilter: document.querySelector("#manufacturerFilter"),
  typeFilter: document.querySelector("#typeFilter"),
  statusFilter: document.querySelector("#statusFilter"),
  providerFilter: document.querySelector("#providerFilter"),
  sortFilter: document.querySelector("#sortFilter"),
  priceRange: document.querySelector("#priceRange"),
  priceRangeValue: document.querySelector("#priceRangeValue"),
  confirmedOnly: document.querySelector("#confirmedOnly"),
  shipsToPortugal: document.querySelector("#shipsToPortugal"),
  resultsSection: document.querySelector("#results"),
  productGrid: document.querySelector("#productGrid"),
  resultMeta: document.querySelector("#resultMeta"),
  resultQuery: document.querySelector("#resultQuery"),
  productTitle: document.querySelector("#productTitle"),
  productDescription: document.querySelector("#productDescription"),
  productImageFrame: document.querySelector("#productImageFrame"),
  productImage: document.querySelector("#productImage"),
  specGrid: document.querySelector("#specGrid"),
  offerTable: document.querySelector("#offerTable"),
  bestDealTotal: document.querySelector("#bestDealTotal"),
  bestDealStore: document.querySelector("#bestDealStore"),
  bestDealLink: document.querySelector("#bestDealLink"),
  bestDealNote: document.querySelector("#bestDealNote"),
  sortToggle: document.querySelector("#sortToggle"),
  chart: document.querySelector("#priceChart"),
  chartDelta: document.querySelector("#chartDelta"),
  chartCaption: document.querySelector("#chartCaption"),
  normalizationList: document.querySelector("#normalizationList"),
  validationList: document.querySelector("#validationList"),
  supplierGrid: document.querySelector("#supplierGrid"),
  validationQueue: document.querySelector("#validationQueue"),
  trackProduct: document.querySelector("#trackProduct"),
  alertProduct: document.querySelector("#alertProduct"),
  wishlistButton: document.querySelector("#wishlistButton"),
  wishlistCount: document.querySelector("#wishlistCount"),
  wishlistDialog: document.querySelector("#wishlistDialog"),
  wishlistItems: document.querySelector("#wishlistItems"),
  alertDialog: document.querySelector("#alertDialog"),
  alertForm: document.querySelector("#alertForm"),
  alertPrice: document.querySelector("#alertPrice"),
  alertStatus: document.querySelector("#alertStatus")
};

function normalizeText(value) {
  return String(value || "")
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function tokens(value) {
  return normalizeText(value)
    .split(" ")
    .filter((token) => token.length > 1);
}

function providerById(providerId) {
  return providers.find((provider) => provider.id === providerId);
}

function providerName(providerId) {
  return providerById(providerId)?.name || "Unknown provider";
}

function formatMoney(amount, currency, unavailable = "Price unavailable") {
  if (amount === null || amount === undefined || Number.isNaN(Number(amount))) {
    return unavailable;
  }

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    maximumFractionDigits: currency === "JPY" ? 0 : 2
  }).format(amount);
}

function formatOfferPart(amount, currency, unavailable, label = "") {
  if (amount === null || amount === undefined || Number.isNaN(Number(amount))) {
    return label ? `${unavailable} (${label})` : unavailable;
  }

  const money = formatMoney(amount, currency, unavailable);
  return label ? `${money} ${label}` : money;
}

function normalizedHost(url) {
  try {
    return new URL(url).hostname.toLowerCase();
  } catch (error) {
    return "";
  }
}

function urlMatchesProvider(url, provider) {
  const host = normalizedHost(url);
  if (!host || !provider) return false;
  return provider.domains.some((domain) => host === domain || host.endsWith(`.${domain}`));
}

function titleMatchesProduct(product, offer) {
  const listing = normalizeText(`${offer.listingTitle} ${offer.url}`);
  return product.requiredTokens.every((required) => listing.includes(normalizeText(required)));
}

function imageLooksRelated(product, offer) {
  if (!product.image || !offer.image) return false;
  const productHost = normalizedHost(product.image);
  const offerHost = normalizedHost(offer.image);
  return product.image === offer.image || productHost === offerHost || offer.image.includes(product.sku);
}

function offerDuplicateKey(offer) {
  return `${offer.providerId}:${normalizeText(offer.url || offer.listingTitle)}`;
}

function validateOffer(product, offer, seenKeys = new Set()) {
  const provider = providerById(offer.providerId);
  const duplicate = seenKeys.has(offerDuplicateKey(offer));
  const checks = [
    {
      label: "Store is trusted",
      pass: Boolean(provider)
    },
    {
      label: "Store URL checks out",
      pass: urlMatchesProvider(offer.url, provider)
    },
    {
      label: "Listing title matches this figure",
      pass: titleMatchesProduct(product, offer)
    },
    {
      label: "Image belongs to the same listing",
      pass: imageLooksRelated(product, offer)
    },
    {
      label: "Price belongs to the listing",
      pass: offer.priceAmount !== null && offer.priceAmount !== undefined
    },
    {
      label: "Availability is captured",
      pass: Boolean(offer.availability)
    },
    {
      label: "Not a duplicate",
      pass: !duplicate
    }
  ];

  const critical = checks
    .filter((check) => ["Store is trusted", "Store URL checks out", "Listing title matches this figure", "Not a duplicate"].includes(check.label))
    .every((check) => check.pass);
  const score = checks.filter((check) => check.pass).length / checks.length;
  const confidence = critical && score >= 0.86 ? "Confirmed" : "Needs verification";

  seenKeys.add(offerDuplicateKey(offer));

  return {
    ...offer,
    provider,
    checks,
    confidence,
    score
  };
}

function preparedOffers(product) {
  const seen = new Set();
  return product.offers.map((offer) => validateOffer(product, offer, seen));
}

function displayedOffers(product) {
  return preparedOffers(product).filter((offer) => offer.checks.find((check) => check.label === "Not a duplicate")?.pass);
}

function hasKnownTotal(offer) {
  const amounts = [offer.priceAmount, offer.shippingAmount, offer.feesAmount];
  const currencies = [offer.priceCurrency, offer.shippingCurrency, offer.feesCurrency].filter(Boolean);
  return (
    amounts.every((amount) => typeof amount === "number") &&
    currencies.length === 3 &&
    new Set(currencies).size === 1 &&
    offer.shipsToPortugal !== false
  );
}

function offerTotal(offer) {
  if (!hasKnownTotal(offer)) return null;
  return offer.priceAmount + offer.shippingAmount + offer.feesAmount;
}

function bestOffer(product) {
  return displayedOffers(product)
    .filter((offer) => offer.confidence === "Confirmed" && hasKnownTotal(offer))
    .sort((a, b) => offerTotal(a) - offerTotal(b))[0];
}

function lowestKnownTotal(product) {
  const offer = bestOffer(product);
  return offer ? offerTotal(offer) : Infinity;
}

function productSearchText(product) {
  const offerProviders = product.offers.map((offer) => providerName(offer.providerId)).join(" ");
  return [
    product.title,
    product.character,
    product.series,
    product.manufacturer,
    product.line,
    product.type,
    product.scale,
    product.version,
    product.sku,
    product.status,
    product.aliases.join(" "),
    offerProviders
  ].join(" ");
}

function productMatchesQuery(product) {
  const queryTokens = tokens(state.query);
  if (!queryTokens.length) return true;

  const searchable = normalizeText(productSearchText(product));
  return queryTokens.every((queryToken) => searchable.includes(queryToken));
}

function productMatchesFilters(product) {
  const offers = displayedOffers(product);
  const knownTotal = lowestKnownTotal(product);
  const providerMatch = state.provider === "all" || offers.some((offer) => offer.providerId === state.provider);
  const confirmedMatch = !state.confirmedOnly || offers.some((offer) => offer.confidence === "Confirmed");
  const shipMatch = !state.shipsToPortugal || offers.some((offer) => offer.shipsToPortugal === true);
  const priceMatch = Number.isFinite(knownTotal) ? knownTotal <= state.maxPrice : true;

  return (
    productMatchesQuery(product) &&
    (state.manufacturer === "all" || product.manufacturer === state.manufacturer) &&
    (state.type === "all" || product.type === state.type || product.scale === state.type) &&
    (state.status === "all" || product.status === state.status) &&
    providerMatch &&
    confirmedMatch &&
    shipMatch &&
    priceMatch
  );
}

function availabilityRank(product) {
  const ranks = {
    "In stock": 0,
    "Pre-order": 1,
    Released: 2,
    Archive: 3,
    "Sold out": 4
  };
  return ranks[product.status] ?? 5;
}

function sortProducts(items) {
  return [...items].sort((a, b) => {
    if (state.sort === "newest") {
      return new Date(b.releaseDate) - new Date(a.releaseDate);
    }
    if (state.sort === "availability") {
      return availabilityRank(a) - availabilityRank(b) || compareKnownTotals(a, b);
    }
    return compareKnownTotals(a, b) || new Date(b.releaseDate) - new Date(a.releaseDate);
  });
}

function variationSignature(product) {
  return [product.character, product.line, product.scale, product.version, product.manufacturer]
    .filter(Boolean)
    .join(" / ");
}

function buyerFacingDescription(product) {
  return `${product.title} by ${product.manufacturer}. NekoPrice compares stores for this exact version and keeps similar figures separate.`;
}

function statusBadgeClass(status) {
  if (status === "In stock") return "mint";
  if (status === "Pre-order") return "blue";
  if (status === "Sold out" || status === "Archive") return "gray";
  return "pink";
}

function confidenceBadgeClass(confidence) {
  return confidence === "Confirmed" ? "mint" : "yellow";
}

function confidenceLabel(confidence) {
  return confidence === "Confirmed" ? "Checked match" : "Needs review";
}

function compareKnownTotals(a, b) {
  const totalA = lowestKnownTotal(a);
  const totalB = lowestKnownTotal(b);
  if (totalA === totalB) return 0;
  return totalA - totalB;
}

function visibleQueryLabel() {
  const query = state.query.trim();
  return query ? `Showing exact matches for \u201c${query}\u201d.` : "Showing all figures.";
}

function scrollToResults() {
  els.resultsSection.scrollIntoView({ behavior: "smooth", block: "start" });
}

function populateSelect(select, values, label) {
  const current = select.value || "all";
  select.innerHTML = [`<option value="all">${label}</option>`]
    .concat(values.map((value) => `<option value="${value}">${value}</option>`))
    .join("");
  select.value = values.includes(current) ? current : "all";
}

function populateFilters() {
  populateSelect(
    els.manufacturerFilter,
    [...new Set(products.map((product) => product.manufacturer))].sort(),
    "All manufacturers"
  );
  populateSelect(
    els.typeFilter,
    [...new Set(products.flatMap((product) => [product.type, product.scale]))].sort(),
    "All types"
  );
  populateSelect(
    els.providerFilter,
    providers.map((provider) => provider.name).sort().map((name) => providers.find((provider) => provider.name === name).id),
    "All stores"
  );
  [...els.providerFilter.options].forEach((option) => {
    if (option.value !== "all") option.textContent = providerName(option.value);
  });
}

function renderProductCards() {
  const matches = sortProducts(products.filter(productMatchesFilters));
  const confirmedOfferCount = matches.reduce(
    (count, product) => count + displayedOffers(product).filter((offer) => offer.confidence === "Confirmed").length,
    0
  );
  els.resultQuery.textContent = visibleQueryLabel();
  els.resultMeta.textContent = `${matches.length} figure${matches.length === 1 ? "" : "s"}, ${confirmedOfferCount} checked store listing${confirmedOfferCount === 1 ? "" : "s"}`;

  if (!matches.some((product) => product.id === selectedProductId) && matches[0]) {
    selectedProductId = matches[0].id;
  }

  els.productGrid.innerHTML = matches
    .map((product) => {
      const best = bestOffer(product);
      const isSaved = wishlist.includes(product.id);
      const offers = displayedOffers(product);
      const confirmed = offers.filter((offer) => offer.confidence === "Confirmed").length;
      const image = product.image
        ? `<img src="${product.image}" alt="${product.title}" loading="lazy">`
        : `<div class="figure-placeholder" aria-hidden="true"></div>`;
      const total = best ? formatMoney(offerTotal(best), best.priceCurrency) : "Unavailable";
      const bestStore = best ? providerName(best.providerId) : "Unavailable";

      return `
        <article class="product-card" aria-current="${product.id === selectedProductId}">
          <button class="product-thumb" type="button" data-select="${product.id}" title="Compare stores for this figure">
            ${image}
          </button>
          <div>
            <h3>${product.title}</h3>
            <p class="variation-line">${variationSignature(product)}</p>
            <dl class="card-details">
              <div>
                <dt>Series</dt>
                <dd>${product.series}</dd>
              </div>
              <div>
                <dt>Type</dt>
                <dd>${product.type}</dd>
              </div>
              <div>
                <dt>Manufacturer</dt>
                <dd>${product.manufacturer}</dd>
              </div>
              <div>
                <dt>Availability</dt>
                <dd><span class="badge ${statusBadgeClass(product.status)}">${product.status}</span></dd>
              </div>
            </dl>
            <div class="price-line">
              <span class="muted">Best total</span>
              <strong>${total}</strong>
            </div>
            <p class="store-line"><span>Best store</span><strong>${bestStore}</strong></p>
            <div class="card-meta">
              <span class="badge gray">${confirmed} checked listing${confirmed === 1 ? "" : "s"}</span>
            </div>
            <div class="card-actions">
              <button type="button" data-select="${product.id}">Compare stores</button>
              <button type="button" class="secondary-button" data-wish="${product.id}">
                ${isSaved ? "Saved" : "Save"}
              </button>
            </div>
          </div>
        </article>
      `;
    })
    .join("");

  if (!matches.length) {
    els.productGrid.innerHTML = `
      <article class="product-card empty-card empty-state" role="status">
        <div class="product-thumb"><div class="figure-placeholder" aria-hidden="true"></div></div>
        <div>
          <h3>No exact figures found</h3>
          <p class="muted">Try a character, series, manufacturer, figure line, or JAN/SKU. Shorter searches usually work best.</p>
          <button type="button" class="secondary-button" data-query="Rem">Reset to Rem</button>
        </div>
      </article>
    `;
  }

  bindCardImageFallbacks();
  renderProductDetail();
}

function renderProductDetail() {
  const product = products.find((item) => item.id === selectedProductId) || products[0];
  const offers = displayedOffers(product).sort((a, b) => {
    const totalA = offerTotal(a);
    const totalB = offerTotal(b);
    const safeA = totalA === null ? Infinity : totalA;
    const safeB = totalB === null ? Infinity : totalB;
    return sortAscending ? safeA - safeB : safeB - safeA;
  });
  const best = bestOffer(product);

  els.productTitle.textContent = product.title;
  els.productDescription.textContent = buyerFacingDescription(product);
  els.productImageFrame.classList.remove("is-missing");
  els.productImage.src = product.image || REM_POP_IMAGE;
  els.productImage.alt = product.title;
  els.trackProduct.textContent = wishlist.includes(product.id) ? "Saved" : "Save to wishlist";
  els.alertPrice.value = Number.isFinite(lowestKnownTotal(product)) ? Math.max(1, Math.ceil(lowestKnownTotal(product) - 1)) : 40;

  els.specGrid.innerHTML = [
    ["Character", product.character],
    ["Series", product.series],
    ["Manufacturer", product.manufacturer],
    ["Line", product.line],
    ["Scale/type", product.scale],
    ["Version", product.version],
    ["Release", product.releaseDate],
    ["JAN/SKU", product.sku]
  ]
    .map(
      ([label, value]) => `
        <div>
          <dt>${label}</dt>
          <dd>${value}</dd>
        </div>
      `
    )
    .join("");

  if (best) {
    els.bestDealTotal.textContent = formatMoney(offerTotal(best), best.priceCurrency);
    els.bestDealStore.textContent = `Cheapest checked store: ${providerName(best.providerId)}. ${best.availability}. ${best.feesLabel}.`;
    els.bestDealLink.href = best.url;
    els.bestDealLink.removeAttribute("aria-disabled");
    els.bestDealNote.textContent = `Last updated ${best.lastUpdated}. Product, shipping, and fees are included in this total.`;
  } else {
    els.bestDealTotal.textContent = "Total unavailable";
    els.bestDealStore.textContent = "No checked store has a complete product, shipping, and fee total yet.";
    els.bestDealLink.href = "#";
    els.bestDealLink.setAttribute("aria-disabled", "true");
    els.bestDealNote.textContent = "NekoPrice leaves totals unavailable instead of guessing.";
  }

  els.offerTable.innerHTML = offers.length
    ? offers
        .map((offer) => {
          const total = offerTotal(offer);
          const isBest = best && offer.url === best.url;
          const bestBadge = isBest ? `<span class="badge yellow">Best total</span>` : "";
          const shipBadge =
            offer.shipsToPortugal === true
              ? `<span class="badge mint">Ships to PT</span>`
              : offer.shipsToPortugal === false
                ? `<span class="badge gray">No PT shipping</span>`
                : `<span class="badge gray">Shipping unconfirmed</span>`;

          return `
            <tr class="${isBest ? "best-offer-row" : ""}">
              <td>
                <div class="store-cell">
                  <strong>${providerName(offer.providerId)} ${bestBadge}</strong>
                  <span>${offer.sourceNote}</span>
                </div>
              </td>
              <td><span class="badge ${statusBadgeClass(offer.availability)}">${offer.availability}</span></td>
              <td>${formatMoney(offer.priceAmount, offer.priceCurrency, "Price unavailable")}</td>
              <td>${formatOfferPart(offer.shippingAmount, offer.shippingCurrency, "Shipping not available", offer.shippingLabel)}</td>
              <td>${formatOfferPart(offer.feesAmount, offer.feesCurrency, "Fees not available", offer.feesLabel)}</td>
              <td class="total-cell ${isBest ? "best-total-cell" : ""}">
                <strong>${total === null ? "Total unavailable" : formatMoney(total, offer.priceCurrency)}</strong>
                ${isBest ? `<span class="badge yellow">Lowest complete total</span>` : ""}
              </td>
              <td>
                <span class="badge ${confidenceBadgeClass(offer.confidence)}">${confidenceLabel(offer.confidence)}</span>
                ${shipBadge}
              </td>
              <td>${offer.lastUpdated}</td>
              <td><a class="offer-link" href="${offer.url}" target="_blank" rel="noreferrer">Visit store</a></td>
            </tr>
          `;
        })
        .join("")
    : `
      <tr>
        <td colspan="9">
          <strong>No checked store listings for this exact figure yet.</strong>
          <span class="muted">Possible matches stay hidden until the figure version can be checked.</span>
        </td>
      </tr>
    `;

  els.normalizationList.innerHTML = product.normalization.map((item) => `<li>${item}</li>`).join("");
  renderValidationList(product, offers);
  drawChart(product.history);
}

function bindCardImageFallbacks() {
  els.productGrid.querySelectorAll(".product-thumb img").forEach((image) => {
    image.addEventListener(
      "error",
      () => {
        const thumb = image.closest(".product-thumb");
        if (thumb) {
          thumb.innerHTML = `<div class="figure-placeholder" aria-hidden="true"></div>`;
        }
      },
      { once: true }
    );
  });
}

function renderValidationList(product, offers) {
  const bestChecklist = offers[0]?.checks || [];
  els.validationList.innerHTML = bestChecklist.length
    ? bestChecklist
        .map(
          (check) => `
            <li>
              <span class="check-dot ${check.pass ? "pass" : "fail"}" aria-hidden="true"></span>
              ${check.label}
            </li>
          `
        )
        .join("")
    : `<li><span class="check-dot fail" aria-hidden="true"></span>No provider row has passed validation yet.</li>`;
}

function drawChart(history) {
  const canvas = els.chart;
  const ctx = canvas.getContext("2d");
  const width = canvas.width;
  const height = canvas.height;
  const padding = 34;

  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = "#fffdfd";
  ctx.fillRect(0, 0, width, height);

  if (!history || history.length < 2) {
    ctx.fillStyle = "#716b78";
    ctx.font = "700 22px Segoe UI, Arial";
    ctx.fillText("Not enough checked total data yet", padding, height / 2);
    els.chartDelta.textContent = "Pending";
    els.chartCaption.textContent = "Price history appears after at least two checked total updates.";
    return;
  }

  const values = history.map((point) => point.amount);
  const min = Math.min(...values) - 3;
  const max = Math.max(...values) + 3;
  const stepX = (width - padding * 2) / (values.length - 1);

  ctx.strokeStyle = "#efe5ed";
  ctx.lineWidth = 1;
  for (let i = 0; i < 5; i += 1) {
    const y = padding + ((height - padding * 2) / 4) * i;
    ctx.beginPath();
    ctx.moveTo(padding, y);
    ctx.lineTo(width - padding, y);
    ctx.stroke();
  }

  const points = values.map((value, index) => {
    const x = padding + stepX * index;
    const y = height - padding - ((value - min) / (max - min)) * (height - padding * 2);
    return { x, y, value };
  });

  ctx.beginPath();
  points.forEach((point, index) => {
    if (index === 0) ctx.moveTo(point.x, point.y);
    else ctx.lineTo(point.x, point.y);
  });
  ctx.strokeStyle = "#2fa876";
  ctx.lineWidth = 4;
  ctx.lineJoin = "round";
  ctx.stroke();

  points.forEach((point, index) => {
    ctx.beginPath();
    ctx.arc(point.x, point.y, 6, 0, Math.PI * 2);
    ctx.fillStyle = index === points.length - 1 ? "#2fa876" : "#cfe8ff";
    ctx.fill();
    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 3;
    ctx.stroke();
  });

  ctx.fillStyle = "#716b78";
  ctx.font = "700 18px Segoe UI, Arial";
  ctx.fillText(formatMoney(values[0], history[0].currency), padding, padding - 8);
  ctx.fillText(formatMoney(values[values.length - 1], history[history.length - 1].currency), width - padding - 104, height - 10);

  const delta = ((values[values.length - 1] - values[0]) / values[0]) * 100;
  els.chartDelta.textContent = `${delta.toFixed(0)}%`;
  els.chartCaption.textContent = `Checked totals from ${history[0].date} to ${history[history.length - 1].date}.`;
}

function renderSuppliers() {
  els.supplierGrid.innerHTML = providers
    .map(
      (provider) => `
        <article class="supplier-card">
          <div class="supplier-logo" aria-hidden="true">${provider.name.slice(0, 2)}</div>
          <div>
            <h3>${provider.name}</h3>
            <p>${provider.note}</p>
          </div>
          <dl>
            <div data-row>
              <dt>Location</dt>
              <dd>${provider.country}</dd>
            </div>
            <div data-row>
              <dt>Refresh</dt>
              <dd>${provider.update}</dd>
            </div>
            <div data-row>
              <dt>Trust</dt>
              <dd>${provider.confidence}</dd>
            </div>
          </dl>
          <div class="supplier-badges">
            <span class="badge mint">Verified store</span>
            <span class="badge blue">Shipping checked</span>
          </div>
        </article>
      `
    )
    .join("");
}

function renderValidationQueue() {
  const generated = products.flatMap((product) =>
    preparedOffers(product)
      .filter((offer) => offer.confidence !== "Confirmed")
      .map((offer) => ({
        providerId: offer.providerId,
        productId: product.id,
        listingTitle: offer.listingTitle,
        reason: offer.checks
          .filter((check) => !check.pass)
          .map((check) => check.label)
          .join(", ")
      }))
  );
  const queue = [...generated, ...candidateListings];

  els.validationQueue.innerHTML = queue.length
    ? queue
        .map((item) => {
          const product = products.find((entry) => entry.id === item.productId);
          return `
            <article class="queue-card">
              <span class="badge yellow">Needs verification</span>
              <h4>${item.listingTitle}</h4>
              <p>${product?.title || "Unknown figure"} / ${providerName(item.providerId)}</p>
              <small>${item.reason}</small>
            </article>
          `;
        })
        .join("")
    : `<article class="queue-card"><span class="badge mint">Clear</span><h4>No unresolved listing checks</h4><p>All visible provider rows currently pass validation.</p></article>`;
}

function renderWishlist() {
  els.wishlistCount.textContent = wishlist.length;
  els.wishlistItems.innerHTML = wishlist.length
    ? wishlist
        .map((id) => {
          const product = products.find((item) => item.id === id);
          if (!product) return "";
          const best = bestOffer(product);
          const total = best ? formatMoney(offerTotal(best), best.priceCurrency) : "Total unavailable";
          return `
            <div class="wishlist-row">
              <div>
                <strong>${product.title}</strong>
                <span>${total} / ${product.manufacturer}</span>
              </div>
              <button type="button" class="secondary-button" data-remove-wish="${product.id}">Remove</button>
            </div>
          `;
        })
        .join("")
    : `<p class="muted">Your wishlist is empty.</p>`;
}

function toggleWishlist(productId) {
  wishlist = wishlist.includes(productId)
    ? wishlist.filter((id) => id !== productId)
    : [...wishlist, productId];
  localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(wishlist));
  renderWishlist();
  renderProductCards();
}

function setSelectedProduct(productId) {
  selectedProductId = productId;
  renderProductCards();
  document.querySelector("#figure").scrollIntoView({ behavior: "smooth", block: "start" });
}

function applySearch(query, shouldScroll = true) {
  state.query = query.trim();
  els.searchInput.value = state.query;
  renderProductCards();
  if (shouldScroll) scrollToResults();
}

function bindEvents() {
  els.productImage.addEventListener("error", () => {
    els.productImageFrame.classList.add("is-missing");
  });

  els.searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    applySearch(els.searchInput.value);
  });

  document.querySelectorAll("[data-query]").forEach((button) => {
    button.addEventListener("click", () => {
      applySearch(button.dataset.query);
    });
  });

  els.manufacturerFilter.addEventListener("change", () => {
    state.manufacturer = els.manufacturerFilter.value;
    renderProductCards();
  });

  els.typeFilter.addEventListener("change", () => {
    state.type = els.typeFilter.value;
    renderProductCards();
  });

  els.statusFilter.addEventListener("change", () => {
    state.status = els.statusFilter.value;
    renderProductCards();
  });

  els.providerFilter.addEventListener("change", () => {
    state.provider = els.providerFilter.value;
    renderProductCards();
  });

  els.sortFilter.addEventListener("change", () => {
    state.sort = els.sortFilter.value;
    renderProductCards();
  });

  els.priceRange.addEventListener("input", () => {
    state.maxPrice = Number(els.priceRange.value);
    els.priceRangeValue.textContent = `Up to ${formatMoney(state.maxPrice, "EUR")}`;
    renderProductCards();
  });

  els.confirmedOnly.addEventListener("change", () => {
    state.confirmedOnly = els.confirmedOnly.checked;
    renderProductCards();
  });

  els.shipsToPortugal.addEventListener("change", () => {
    state.shipsToPortugal = els.shipsToPortugal.checked;
    renderProductCards();
  });

  els.productGrid.addEventListener("click", (event) => {
    const selectButton = event.target.closest("[data-select]");
    const wishButton = event.target.closest("[data-wish]");
    const queryButton = event.target.closest("[data-query]");
    if (selectButton) setSelectedProduct(selectButton.dataset.select);
    if (wishButton) toggleWishlist(wishButton.dataset.wish);
    if (queryButton) applySearch(queryButton.dataset.query);
  });

  els.sortToggle.addEventListener("click", () => {
    sortAscending = !sortAscending;
    els.sortToggle.textContent = sortAscending ? "Lowest total first" : "Highest total first";
    renderProductDetail();
  });

  els.trackProduct.addEventListener("click", () => toggleWishlist(selectedProductId));
  els.alertProduct.addEventListener("click", () => {
    els.alertStatus.textContent = "";
    els.alertDialog.showModal();
  });

  els.wishlistButton.addEventListener("click", () => {
    renderWishlist();
    els.wishlistDialog.showModal();
  });

  els.wishlistItems.addEventListener("click", (event) => {
    const removeButton = event.target.closest("[data-remove-wish]");
    if (removeButton) toggleWishlist(removeButton.dataset.removeWish);
  });

  els.alertForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const product = products.find((item) => item.id === selectedProductId);
    els.alertStatus.textContent = `NekoPrice will watch ${product.title} below ${formatMoney(Number(els.alertPrice.value), "EUR")}.`;
  });
}

function init() {
  populateFilters();
  els.priceRangeValue.textContent = `Up to ${formatMoney(state.maxPrice, "EUR")}`;
  renderSuppliers();
  renderValidationQueue();
  renderWishlist();
  renderProductCards();
  bindEvents();
}

init();
