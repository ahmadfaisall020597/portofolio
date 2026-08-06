# Portofolio — Modern & Responsive

Situs portofolio satu halaman: HTML + CSS + JavaScript vanilla, tanpa build step dan tanpa dependency.

## Cara menjalankan

Buka `index.html` langsung di browser (double-click). Semua path relatif, jadi tidak butuh server.

Kalau ingin pakai server lokal:

```bash
npx serve .
```

## Struktur

```
index.html      # semua markup & konten teks
css/style.css   # design token, komponen, responsive, reduced-motion
js/main.js      # data konten + seluruh interaksi
README.md
```

## Cara mengganti data

Cari komentar bertanda `GANTI:` di kedua file utama.

**Di `index.html`:**

| Bagian | Lokasi |
| --- | --- |
| Judul & meta SEO | `<head>` |
| Nama | `.hero__name` |
| Foto profil | `.hero__photo img` |
| Bio & angka statistik | section `#about` |
| Persentase skill | atribut `data-width` pada `.bar__track i` |
| Riwayat kerja | section `#experience` |
| Email, WhatsApp, lokasi | section `#contact` |
| Link sosial media | hero, mobile menu, dan footer |

**Di `js/main.js`** (bagian DATA di atas file):

| Konstanta | Isi |
| --- | --- |
| `ROLES` | teks yang muncul pada efek mengetik |
| `TECHS` | logo teknologi di marquee |
| `PROJECTS` | daftar proyek + isi modal detail |
| `TESTIMONIALS` | testimoni klien |

## Fitur

- Mode gelap/terang, tersimpan di `localStorage`, default mengikuti sistem
- Preloader, scroll progress bar, custom cursor (desktop)
- Hero: particle canvas interaktif, gradient blob, efek mengetik, parallax
- Reveal on scroll via `IntersectionObserver`, counter angka, skill bar beranimasi
- Grid proyek dengan filter kategori dan modal detail
- Timeline dengan garis progres mengikuti scroll
- Slider testimoni: autoplay, swipe, navigasi keyboard
- Form kontak dengan validasi inline
- Responsive di 380 / 560 / 720 / 980 / 1100 / 1600px
- Menghormati `prefers-reduced-motion`, skip link, focus state, ARIA label

## Yang masih perlu kamu sambungkan

**Form kontak** saat ini hanya simulasi (`setTimeout`) dan tidak mengirim data ke mana pun. Untuk mengaktifkannya, ganti bagian bertanda `GANTI: hubungkan ke backend` di `initForm()` — misalnya pakai Formspree, EmailJS, atau endpoint sendiri. Jangan menaruh API key atau kredensial di file JS ini karena isinya terlihat publik; taruh di backend.

**Tombol Unduh CV** masih menampilkan `alert`. Ubah handler `#cvBtn` di `initMisc()`, atau langsung set `href` tombolnya ke file PDF kamu.

## Gambar

Semua gambar diambil dari CDN publik tanpa API key: Unsplash (foto), pravatar.cc (avatar testimoni), dan devicon via jsDelivr (logo teknologi). Setiap `<img>` punya fallback `onerror`. Untuk produksi, sebaiknya unduh gambar dan host sendiri agar tidak bergantung pada layanan pihak ketiga.

## Deploy

Karena statis, cukup unggah seluruh folder:

- **Netlify / Vercel** — drag & drop foldernya
- **GitHub Pages** — push ke repo, aktifkan Pages di Settings
# portofolio
