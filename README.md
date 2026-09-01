# Kahve Köşesi — Dijital Menü

Taze çekirdekten demlenen kahveler ve ev yapımı lezzetler için dijital menü sitesi.

## 📁 Yapı

```
├── index.html          # Ana HTML dosyası
├── css/
│   └── style.css       # Stillendirme (Vintage kafe teması)
├── js/
│   └── menu.js         # Menü render ve kontrol scripti
├── data/
│   └── menu.js         # Menü verileri
└── README.md           # Bu dosya
```

## 🎨 Özellikler

✨ **Responsive Tasarım** - Tüm cihazlara uygun
⚡ **Hızlı Yükleme** - Lazy loading resimler
🔄 **Dinamik Navigasyon** - Smooth scroll kategori geçişleri
🌙 **Vintage Tema** - Sıcak kafe ortamı
📱 **Mobile-First** - Mobil cihazlarda optimize

## 🚀 Kullanım

1. Repository'yi klonlayın
2. `index.html` dosyasını tarayıcıda açın
3. Menüyü görüntüleyin ve kategoriler arasında gezinin

## 📝 Menüyü Düzenlemek

`data/menu.js` dosyasındaki ürünleri ekleyin/silin:

```javascript
{
  id: 'urun-id',
  categoryId: 'kahve',  // kahve, pasta, icecek
  name: 'Ürün Adı',
  description: 'Açıklama',
  price: '25',
  image: 'resim-url',
  popular: true,        // ⭐ Popüler etiketi göster
  active: true
}
```

## 🔧 Yapılacaklar

- [ ] Sepet sistemi
- [ ] Sipariş al butonu
- [ ] İletişim formu
- [ ] Lokasyon haritası
- [ ] Sosyal medya bağlantıları

---

**Afiyet olsun!** ☕