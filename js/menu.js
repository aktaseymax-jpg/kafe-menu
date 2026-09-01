/**
 * KAHVE KÖŞESİ — Menü Render Scripti
 * Menü verilerini yükler ve sayfaya yerleştirir.
 */

document.addEventListener('DOMContentLoaded', () => {
  initMenuData();
  const data = loadMenuData();
  renderHeader(data.cafeInfo);
  renderCategories(data.categories, data.products);
  setupNavigation(data.categories, data.products);
  setupScrollTop();
});

/* ── Kafe Başlığını Güncelle ── */
function renderHeader(info) {
  const nameEl    = document.getElementById('cafe-name');
  const taglineEl = document.getElementById('cafe-tagline');
  if (nameEl)    nameEl.textContent    = info.name    || 'Kahve Köşesi';
  if (taglineEl) taglineEl.textContent = info.tagline || '';
}

/* ── Kategori Navigasyonu ── */
function setupNavigation(categories, products) {
  const nav = document.getElementById('cat-nav');
  if (!nav) return;

  const active = categories.filter(c => c.active);
  nav.innerHTML = '';

  active.forEach((cat, idx) => {
    const count = products.filter(p => p.categoryId === cat.id && p.active).length;
    if (count === 0) return;

    const btn = document.createElement('button');
    btn.className = 'cat-btn' + (idx === 0 ? ' active' : '');
    btn.dataset.catId = cat.id;
    btn.innerHTML = `<span class="cat-icon">${cat.icon}</span><span>${cat.name}</span>`;
    btn.addEventListener('click', () => {
      // Nav aktif durumu
      nav.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      // İlgili bölüme kaydır
      const section = document.getElementById('section-' + cat.id);
      if (section) {
        const offset = document.querySelector('.category-nav').offsetHeight + 8;
        const top = section.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
    nav.appendChild(btn);
  });

  // Scroll sırasında aktif kategoriyi güncelle
  observeCategories(active);
}

/* ── Intersection Observer ile aktif kategori takibi ── */
function observeCategories(categories) {
  const navHeight = document.querySelector('.category-nav')?.offsetHeight || 56;
  const options = { rootMargin: `-${navHeight + 4}px 0px -60% 0px`, threshold: 0 };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const catId = entry.target.id.replace('section-', '');
        const nav = document.getElementById('cat-nav');
        if (!nav) return;
        nav.querySelectorAll('.cat-btn').forEach(b => {
          b.classList.toggle('active', b.dataset.catId === catId);
        });
        // Aktif butonu görünür yap
        const activeBtn = nav.querySelector('.cat-btn.active');
        if (activeBtn) activeBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    });
  }, options);

  categories.forEach(cat => {
    const section = document.getElementById('section-' + cat.id);
    if (section) observer.observe(section);
  });
}

/* ── Tüm Kategorileri ve Ürünleri Render Et ── */
function renderCategories(categories, products) {
  const container = document.getElementById('menu-content');
  if (!container) return;

  const activeCategories = categories.filter(c => c.active);
  container.innerHTML = '';

  let hasAny = false;

  activeCategories.forEach(cat => {
    const catProducts = products.filter(p => p.categoryId === cat.id && p.active);
    if (catProducts.length === 0) return;

    hasAny = true;
    const section = document.createElement('section');
    section.className = 'category-section';
    section.id = 'section-' + cat.id;

    section.innerHTML = `
      <div class="section-header">
        <span class="section-icon">${cat.icon}</span>
        <h2 class="section-title">${cat.name}</h2>
      </div>
      <div class="products-grid" id="grid-${cat.id}"></div>
    `;

    container.appendChild(section);

    const grid = section.querySelector('.products-grid');
    catProducts.forEach(product => {
      grid.appendChild(buildProductCard(product));
    });
  });

  if (!hasAny) {
    container.innerHTML = `<div class="empty-state"><p>Henüz menüde ürün bulunmuyor.</p></div>`;
  }
}

/* ── Ürün Kartı ── */
function buildProductCard(product) {
  const card = document.createElement('article');
  card.className = 'product-card';

  const badge = product.popular
    ? `<span class="popular-badge">⭐ Popüler</span>`
    : '';

  card.innerHTML = `
    ${badge}
    <div class="product-image-wrap">
      <img
        class="product-image"
        src="${escapeHtml(product.image)}"
        alt="${escapeHtml(product.name)}"
        loading="lazy"
        onerror="this.src='https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&q=80'"
      />
    </div>
    <div class="product-info">
      <h3 class="product-name">${escapeHtml(product.name)}</h3>
      <p class="product-desc">${escapeHtml(product.description)}</p>
      <span class="product-price">${product.price}</span>
    </div>
  `;
  return card;
}

/* ── Scroll to Top ── */
function setupScrollTop() {
  const btn = document.getElementById('scrollTop');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 300);
  });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ── XSS önlemi ── */
function escapeHtml(str) {
  if (typeof str !== 'string') return String(str);
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}