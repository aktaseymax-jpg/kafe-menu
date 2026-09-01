/**
 * KAHVE KÖŞESİ — Menü Verileri
 */

const MENU_DATA = {
  cafeInfo: {
    name: 'Kahve Köşesi',
    tagline: 'Her yudumda sıcaklık'
  },
  categories: [
    { id: 'kahve', name: 'Kahveler', icon: '☕', active: true },
    { id: 'pasta', name: 'Pastalar', icon: '🍰', active: true },
    { id: 'icecek', name: 'İçecekler', icon: '🥤', active: true }
  ],
  products: [
    // ── Kahveler ──
    {
      id: 'espresso',
      categoryId: 'kahve',
      name: 'Espresso',
      description: 'Yoğun ve güçlü kahve',
      price: '25',
      image: 'https://images.unsplash.com/photo-1514432324607-2e467f4af445?w=400&q=80',
      popular: true,
      active: true
    },
    {
      id: 'cappuccino',
      categoryId: 'kahve',
      name: 'Cappuccino',
      description: 'Espresso ve köpüklü süt',
      price: '35',
      image: 'https://images.unsplash.com/photo-1517668808822-9ebb02ae2a0e?w=400&q=80',
      popular: true,
      active: true
    },
    {
      id: 'latte',
      categoryId: 'kahve',
      name: 'Latte',
      description: 'Ilık ve yumuşak kahve',
      price: '35',
      image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&q=80',
      popular: false,
      active: true
    },
    {
      id: 'americano',
      categoryId: 'kahve',
      name: 'Americano',
      description: 'Espresso + sıcak su',
      price: '28',
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&q=80',
      popular: false,
      active: true
    },
    // ── Pastalar ──
    {
      id: 'cheesecake',
      categoryId: 'pasta',
      name: 'Cheesecake',
      description: 'Ev yapımı kremali peynir pastası',
      price: '45',
      image: 'https://images.unsplash.com/photo-1502741224143-90386d7f8c82?w=400&q=80',
      popular: true,
      active: true
    },
    {
      id: 'brownie',
      categoryId: 'pasta',
      name: 'Brownie',
      description: 'Çikolatalı fırın keki',
      price: '40',
      image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=400&q=80',
      popular: true,
      active: true
    },
    {
      id: 'croissant',
      categoryId: 'pasta',
      name: 'Croissant',
      description: 'Taze ve çıtır Fransız ekmeği',
      price: '30',
      image: 'https://images.unsplash.com/photo-1585080876519-e21cc028cb29?w=400&q=80',
      popular: false,
      active: true
    },
    // ── İçecekler ──
    {
      id: 'muz-smoothie',
      categoryId: 'icecek',
      name: 'Muz Smoothie',
      description: 'Taze muz ve yaourt karışımı',
      price: '40',
      image: 'https://images.unsplash.com/photo-1505252585461-04db1267ae5b?w=400&q=80',
      popular: false,
      active: true
    },
    {
      id: 'buzlu-cay',
      categoryId: 'icecek',
      name: 'Buzlu Çay',
      description: 'Soğuk ve ferahlatıcı çay',
      price: '20',
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561c1a?w=400&q=80',
      popular: false,
      active: true
    }
  ]
};

function initMenuData() {
  // Menü verilerini başlatır
  if (typeof window !== 'undefined') {
    window.menuData = MENU_DATA;
  }
}

function loadMenuData() {
  return MENU_DATA;
}