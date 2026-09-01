/**
 * AFİFE HANIM GURME COFFEE SHOP — Menü Verileri
 */

const MENU_DATA = {
  cafeInfo: {
    name: 'Afife Hanım Gurme Coffee Shop',
    tagline: 'Her yudumda sıcaklık',
    description: 'Taze çekirdekten demlenen kahveler ve ev yapımı lezzetler.',
    logo: ''
  },
  categories: [
    { id: 'kahveler', name: 'Kahveler', icon: '☕', active: true },
    { id: 'soguk-kahveler', name: 'Soğuk Kahveler', icon: '🧊', active: true },
    { id: 'bitki-caylari', name: 'Bitki Çayları', icon: '🌿', active: true },
    { id: 'caylar', name: 'Çaylar', icon: '🍵', active: true },
    { id: 'milkshake', name: 'Milkshake', icon: '🥤', active: true },
    { id: 'tostlar', name: 'Tostlar', icon: '🥪', active: true },
    { id: 'sandvicler', name: 'Sandviçler', icon: '🥖', active: true },
    { id: 'cocuk-icecekleri', name: 'Limonatalar', icon: '🍋', active: true },
    { id: 'limonatalar-1788262279067', name: 'Çocuk İçecekleri', icon: '🤖', active: true }
  ],
  products: [
    // ── Kahveler ──
    {
      id: 1,
      categoryId: 'kahveler',
      name: 'Espresso',
      description: 'Yoğun aromalı, tek shot taze çekilmiş espresso.',
      price: '120',
      image: '',
      popular: false,
      active: true
    },
    {
      id: 2,
      categoryId: 'kahveler',
      name: 'Double Espresso',
      description: 'İki shot espresso, güçlü başlangıç için ideal.',
      price: '160',
      image: '',
      popular: false,
      active: true
    },
    {
      id: 3,
      categoryId: 'kahveler',
      name: 'Americano',
      description: 'Espresso üzerine sıcak su, sade ve derin tadıyla.',
      price: '140',
      image: '',
      popular: false,
      active: true
    },
    {
      id: 5,
      categoryId: 'kahveler',
      name: 'Latte',
      description: 'Yumuşak espresso ve kadifemsi sütün mükemmel uyumu.',
      price: '180',
      image: '',
      popular: false,
      active: true
    },
    {
      id: 6,
      categoryId: 'kahveler',
      name: 'Flat White',
      description: 'Yoğun espresso ve az köpüklü ince süt tabakası.',
      price: '170',
      image: '',
      popular: false,
      active: true
    },
    {
      id: 7,
      categoryId: 'kahveler',
      name: 'Türk Kahvesi',
      description: 'Geleneksel yöntemle pişirilmiş, köpüklü Türk kahvesi.',
      price: '120',
      image: '',
      popular: false,
      active: true
    },
    {
      id: 8,
      categoryId: 'kahveler',
      name: 'Mocha',
      description: 'Espresso, çikolata sosu ve buharla ısıtılmış süt.',
      price: '180',
      image: '',
      popular: false,
      active: true
    },
    {
      id: 40,
      categoryId: 'kahveler',
      name: 'Double Türk Kahvesi',
      description: 'Geleneksel yöntemle pişirilmiş,köpüklü  double  Türk kahvesi.',
      price: '160',
      image: '',
      popular: false,
      active: true
    },
    // ── Soğuk Kahveler ──
    {
      id: 9,
      categoryId: 'soguk-kahveler',
      name: 'Iced Latte',
      description: 'Soğuk sütün üzerine dökülen taze espresso, buz dolu.',
      price: '200',
      image: '',
      popular: false,
      active: true
    },
    {
      id: 12,
      categoryId: 'soguk-kahveler',
      name: 'Iced Mocha',
      description: 'Çikolata sosu, espresso ve buz üzeri süt.',
      price: '200',
      image: '',
      popular: false,
      active: true
    },
    {
      id: 41,
      categoryId: 'soguk-kahveler',
      name: 'Iced Americano',
      description: 'Yoğun  espresso,buz gibi ferahlık',
      price: '180',
      image: '',
      popular: false,
      active: true
    },
    {
      id: 42,
      categoryId: 'soguk-kahveler',
      name: 'Iced White Mocha',
      description: 'Espresso , süt ve beyaz çikolatanın buz gibi, kremsi buluşması.',
      price: '200',
      image: '',
      popular: false,
      active: true
    },
    {
      id: 43,
      categoryId: 'soguk-kahveler',
      name: 'Iced Caramel Latte',
      description: 'Espresso, süt ve nefis karamelin buz gibi buluşması.',
      price: '200',
      image: '',
      popular: false,
      active: true
    },
    // ── Bitki Çayları ──
    {
      id: 14,
      categoryId: 'bitki-caylari',
      name: 'Ihlamur',
      description: 'Doğal ihlamur çiçeğiyle demlenen rahatlatıcı çay.',
      price: '120',
      image: '',
      popular: false,
      active: true
    },
    {
      id: 44,
      categoryId: 'bitki-caylari',
      name: 'Ada Çayı',
      description: 'Doğanın ferahlatıcı lezzetiyle , mis kokulu ve keyifli bir çay molası.',
      price: '120',
      image: '',
      popular: false,
      active: true
    },
    // ── Çaylar ──
    {
      id: 19,
      categoryId: 'caylar',
      name: 'Çay (Demlik)',
      description: 'Geleneksel demlik çay, iki bardak.',
      price: '35',
      image: '',
      popular: false,
      active: true
    },
    // ── Milkshake ──
    {
      id: 23,
      categoryId: 'milkshake',
      name: 'Çikolatalı Milkshake',
      description: 'Zengin çikolata sosu ve dondurmayla hazırlanan kremsi shake.',
      price: '210',
      image: '',
      popular: false,
      active: true
    },
    {
      id: 24,
      categoryId: 'milkshake',
      name: 'Çilekli Milkshake',
      description: 'Taze çilek ve vanilya dondurmasıyla pembe renkli lezzet.',
      price: '210',
      image: '',
      popular: false,
      active: true
    },
    // ── Tostlar ──
    {
      id: 27,
      categoryId: 'tostlar',
      name: 'Klasik Kaşarlı Tost',
      description: 'Çıtır beyaz ekmek ve erimiş kaşar peyniri.',
      price: '160',
      image: '',
      popular: false,
      active: true
    },
    {
      id: 28,
      categoryId: 'tostlar',
      name: 'Karışık Tost',
      description: 'Kaşar, sucuk ve domates ile dolu doyurucu tost.',
      price: '170',
      image: '',
      popular: false,
      active: true
    },
    {
      id: 45,
      categoryId: 'tostlar',
      name: 'Kavurmalı Tost',
      description: '',
      price: '190',
      image: '',
      popular: false,
      active: true
    },
    {
      id: 46,
      categoryId: 'tostlar',
      name: 'Afife Hanım Tost',
      description: '',
      price: '180',
      image: '',
      popular: false,
      active: true
    },
    // ── Sandviçler ──
    {
      id: 50,
      categoryId: 'sandvicler',
      name: 'Kavurmalı Sandviç',
      description: '',
      price: '200',
      image: '',
      popular: false,
      active: true
    },
    {
      id: 51,
      categoryId: 'sandvicler',
      name: 'Kaşar Peynirli sandviç',
      description: '',
      price: '140',
      image: '',
      popular: false,
      active: true
    },
    {
      id: 52,
      categoryId: 'sandvicler',
      name: 'Salamlı Sandviç',
      description: '',
      price: '180',
      image: '',
      popular: false,
      active: true
    },
    {
      id: 53,
      categoryId: 'sandvicler',
      name: 'Beyaz Peynirli Sandviç',
      description: '',
      price: '160',
      image: '',
      popular: false,
      active: true
    },
    {
      id: 54,
      categoryId: 'sandvicler',
      name: 'Saçaklı',
      description: '',
      price: '20',
      image: '',
      popular: false,
      active: true
    },
    // ── Limonatalar ──
    {
      id: 36,
      categoryId: 'cocuk-icecekleri',
      name: 'Çilek Limonata',
      description: 'Taze çileklerden sıkılmış doğal meyve suyu.',
      price: '180',
      image: '',
      popular: false,
      active: true
    },
    {
      id: 37,
      categoryId: 'cocuk-icecekleri',
      name: 'Limonata',
      description: 'Taze limon, su ve az şeker ile ev yapımı limonata.',
      price: '180',
      image: '',
      popular: false,
      active: true
    },
    // ── Çocuk İçecekleri ──
    {
      id: 47,
      categoryId: 'limonatalar-1788262279067',
      name: 'Ballı Süt',
      description: '',
      price: '150',
      image: '',
      popular: false,
      active: true
    },
    {
      id: 48,
      categoryId: 'limonatalar-1788262279067',
      name: 'Karamelli Süt',
      description: '',
      price: '150',
      image: '',
      popular: false,
      active: true
    },
    {
      id: 49,
      categoryId: 'limonatalar-1788262279067',
      name: 'Çikolatalı Süt',
      description: '',
      price: '150',
      image: '',
      popular: false,
      active: true
    }
  ]
};

function initMenuData() {
  if (typeof window !== 'undefined') {
    window.menuData = MENU_DATA;
  }
}

function loadMenuData() {
  return MENU_DATA;
}