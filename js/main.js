(() => {
  'use strict'

  /* ---------- Helper ---------- */
  const $ = (sel, ctx = document) => ctx.querySelector(sel)
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel))
  const prefersReduced = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches
  const isTouch = window.matchMedia('(hover: none)').matches

  const clamp = (v, min, max) => Math.min(Math.max(v, min), max)

  function throttleRAF(fn) {
    let ticking = false
    return (...args) => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        fn(...args)
        ticking = false
      })
    }
  }

  // GANTI: role yang muncul dengan efek mengetik
  const ROLES = [
    'Full-Stack Developer',
    'UI/UX Engineer',
    'React Specialist',
    'Problem Solver'
  ]

  // GANTI: teknologi di marquee
  const TECHS = [
    { name: 'React', icon: 'react/react-original' },
    { name: 'Next.js', icon: 'nextjs/nextjs-original', invert: true },
    { name: 'TypeScript', icon: 'typescript/typescript-original' },
    { name: 'Node.js', icon: 'nodejs/nodejs-original' },
    { name: 'Vue', icon: 'vuejs/vuejs-original' },
    { name: 'Tailwind', icon: 'tailwindcss/tailwindcss-original' },
    { name: 'PostgreSQL', icon: 'postgresql/postgresql-original' },
    { name: 'MySQL', icon: 'mysql/mysql-original' },
    { name: 'MongoDB', icon: 'mongodb/mongodb-original' },
    { name: 'Docker', icon: 'docker/docker-original' },
    { name: 'Figma', icon: 'figma/figma-original' },
    { name: 'Git', icon: 'git/git-original' },
    { name: 'Python', icon: 'python/python-original' },
    { name: 'Laravel', icon: 'laravel/laravel-original' },
    { name: 'AWS', icon: 'amazonwebservices/amazonwebservices-original-wordmark' },
    { name: 'Angular', icon: 'angularjs/angularjs-original' },
    { name: 'Jenkins', icon: 'jenkins/jenkins-original' },
  ]

  // GANTI: daftar proyek kamu
  const PROJECTS = [
    {
      title: 'AYO SRC - Principal Website',
      cat: 'web',
      catLabel: 'Management System',
      year: '2022',
      featured: true,
      img: './public/images/principal.png',
      alt: 'The AYO SRC Principal Web serves as the parent platform for the partner web portal and mobile application.',
      short:
        'Centralized web platform for managing partner portals, users, and operational data in real time.',
      desc: 'The AYO SRC Principal Web serves as the core management platform for the entire AYO SRC ecosystem. It centralizes partner management, user administration, transaction monitoring, and operational reporting while integrating seamlessly with the partner web portal and mobile application. Developed using Agile Scrum, the platform is continuously enhanced through iterative sprints with new features, performance improvements, and system optimizations.',
      stack: ['Laravel', 'Angular', 'TypeScript', 'MySql', 'Redis', 'Chart.js', 'scss', 'Aws', 'Docker', 'Jenkins', 'BitBucket', 'Jira'],
      role: 'Lead Developer',
      period: '2022 - Present',
      methodology: 'Agile Scrum',
      client: 'HM. Sampoerna Tbk.',
      demo: 'https://example.com',
      code: 'https://github.com'
    },
    {
      title: 'AYO SRC - Mitra Website',
      cat: 'web',
      catLabel: 'E-Commerce',
      year: '2022',
      featured: true,
      img: './public/images/mitra.png',
      alt: 'Halaman toko online di layar laptop',
      short:
        'The AYO SRC Partner Website is a web portal designed for partner stores to manage products, inventory, promotions, and transactions. All partner accounts, permissions, and configurations are centrally managed through the AYO SRC Principal Web, ensuring secure data synchronization and consistent business operations across the ecosystem.',
      desc: 'Toko online modern dengan arsitektur headless: katalog dinamis, pencarian instan, keranjang persisten, dan checkout satu halaman terintegrasi Midtrans & Stripe. Optimasi gambar dan ISR membuat halaman produk tampil di bawah 1 detik.',
      stack: ['Laravel', 'Angular', 'TypeScript', 'MySql', 'Redis', 'Chart.js', 'scss', 'Aws', 'Docker', 'Jenkins', 'BitBucket', 'Jira', 'Figma'],
      role: 'Lead Developer',
      period: '2022 - Present',
      methodology: 'Agile Scrum',
      client: 'HM. Sampoerna Tbk.',
      demo: 'https://example.com',
      code: 'https://github.com'
    },
    {
      title: 'AYO SRC - Mitra Order Mobile',
      cat: 'mobile',
      catLabel: 'B2B Ordering',
      year: '2023',
      featured: false,
      img: './public/images/amo.png',
      alt: 'AYO SRC Mitra Order Mobile',
      short:
        'Mobile application for partner stores to place direct orders, schedule pre-orders, and manage deliveries.',
      desc: 'A mobile application that enables SRC partner stores to place direct orders, schedule pre-orders, and track delivery status from distributors. Fully integrated with the AYO SRC Principal platform, the app synchronizes product catalogs, pricing, promotions, and order data in real time, providing a seamless ordering experience for partner stores.',
      stack: ['Express.js', 'React Native', 'Firebase', 'Aws', 'Jenkins', 'Jira', 'BitBucket', 'Docker', 'Redis', 'Figma'],
      role: 'Mobile Developer',
      period: '2023 - Present',
      methodology: 'Agile Scrum',
      client: 'HM. Sampoerna Tbk.',
      demo: 'https://example.com',
      code: 'https://github.com'
    },
    {
      title: 'AYO SRC - Kasosyo Mobile',
      cat: 'mobile',
      catLabel: 'B2B Ordering',
      year: '2023',
      featured: true,
      img: './public/images/toko.png',
      alt: 'AYO SRC Kasosyo Mobile',
      short:
        'Mobile app for retailers to place orders, monitor order status, and receive promotions from partner stores.',
      desc: 'A mobile application that enables retailers to place orders directly with SRC partner stores, monitor order progress, and receive personalized promotions. Orders submitted through the app are processed and managed by the AYO SRC Mitra Website, while product catalogs, pricing, and retailer data remain synchronized with the AYO SRC Principal platform.',
      stack: ['Laravel', 'React Native', 'TypeScript', 'MySql', 'Redis', 'Chart.js', 'scss', 'Figma', 'Aws', 'Docker', 'Jenkins', 'BitBucket', 'Jira'],
      role: 'Design Engineer',
      period: '2023 - Present',
      methodology: 'Agile Scrum',
      client: 'HM. Sampoerna Tbk.',
      demo: 'https://example.com',
      code: 'https://github.com'
    },
    {
      title: 'AYO SRC - Kasir',
      cat: 'web',
      catLabel: 'B2B Ordering',
      year: '2023',
      featured: false,
      img: './public/images/kasir_ph.png',
      alt: 'AYO SRC Kasir',
      short:
        'Web-based cashier system for creating direct orders, managing transactions, and synchronizing sales data in real time.',
      desc: 'A web-based cashier application that enables partner stores to create direct customer orders, process transactions, and manage daily sales operations. Fully integrated with the AYO SRC ecosystem, the system synchronizes product catalogs, pricing, inventory, and transaction data with the Principal platform, ensuring accurate reporting and seamless operational workflows.',
      stack: ['Laravel', 'Angular', 'TypeScript', 'MySql', 'Redis', 'Chart.js', 'scss', 'Aws', 'Docker', 'Jenkins', 'BitBucket', 'Jira', 'Figma'],
      role: 'Frontend Lead',
      period: '2023 - Present',
      methodology: 'Agile Scrum',
      client: 'HM. Sampoerna Tbk.',
      demo: 'https://example.com',
      code: 'https://github.com'
    },
    {
      title: 'Trade Finance Portal',
      cat: 'web',
      catLabel: 'Corporate Banking',
      year: '2026',
      featured: false,
      img: './public/images/poc-bank-dki.png',
      alt: 'Bank Mantap Trade Finance Portal',
      short:
        'Web portal for monitoring trade finance transactions, approvals, and credit utilization in real time.',
      desc: 'A corporate banking portal that enables business customers to monitor trade finance transactions, review pending approvals, track expiring facilities, and analyze credit utilization through interactive dashboards. The platform provides secure access to transaction data, reporting, and operational insights to streamline daily financial operations.',
      stack: ['Golang', 'React', 'Figma', 'Tailwind', 'Jenkins', 'Git'],
      role: 'Designer & Developer',
      period: 'Jan 2026 – Sep 2026',
      methodology: 'Waterfall',
      client: 'Bank Guarantee',
      demo: 'https://example.com',
      code: 'https://github.com'
    }
  ]

  // GANTI: testimoni klien
  const TESTIMONIALS = [
    {
      text: 'Hasil kerjanya melampaui ekspektasi. Waktu muat aplikasi kami turun drastis dan tim internal jadi jauh lebih produktif berkat dokumentasi yang rapi.',
      name: 'Andini Pratama',
      role: 'Product Manager',
      avatar: 'https://i.pravatar.cc/160?img=47'
    },
    {
      text: 'Komunikasinya jelas, tepat waktu, dan selalu memberi solusi alternatif ketika ada kendala teknis. Kolaborasi paling menyenangkan tahun ini.',
      name: 'Bagas Wicaksono',
      role: 'CTO',
      avatar: 'https://i.pravatar.cc/160?img=12'
    },
    {
      text: 'Detail antarmukanya luar biasa. Setiap animasi terasa punya tujuan, bukan sekadar hiasan. Konversi halaman landing kami naik 31%.',
      name: 'Citra Halim',
      role: 'Head of Design',
      avatar: 'https://i.pravatar.cc/160?img=32'
    },
    {
      text: 'Dia tidak hanya menulis kode, tapi juga ikut memikirkan bisnisnya. Banyak saran yang akhirnya menghemat biaya infrastruktur kami.',
      name: 'Dimas Ramadhan',
      role: 'Founder',
      avatar: 'https://i.pravatar.cc/160?img=68'
    }
  ]

  /* ======================================================================
    1. PRELOADER
     ====================================================================== */
  function initPreloader() {
    const pre = $('#preloader')
    const bar = $('#preloaderBar')
    if (!pre) return

    let progress = 0
    const tick = setInterval(() => {
      progress = Math.min(progress + Math.random() * 18 + 6, 100)
      if (bar) bar.style.width = progress + '%'
      if (progress >= 100) clearInterval(tick)
    }, 130)

    const finish = () => {
      clearInterval(tick)
      if (bar) bar.style.width = '100%'
      setTimeout(() => {
        pre.classList.add('is-done')
        document.body.classList.remove('is-locked')
        startHeroSequence()
      }, 350)
    }

    document.body.classList.add('is-locked')
    if (document.readyState === 'complete') setTimeout(finish, 500)
    else window.addEventListener('load', () => setTimeout(finish, 450))
    // Fallback keras kalau ada resource yang menggantung
    setTimeout(finish, 4000)
  }

  /* ======================================================================
    2. TEMA (dark / light)
     ====================================================================== */
  function initTheme() {
    const root = document.documentElement
    const toggle = $('#themeToggle')
    const meta = $('meta[name="theme-color"]')

    let saved = null
    try {
      saved = localStorage.getItem('portfolio-theme')
    } catch (e) {
      /* storage diblokir */
    }

    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const initial = saved || (systemDark ? 'dark' : 'light')
    apply(initial)

    function apply(theme) {
      root.setAttribute('data-theme', theme)
      if (meta)
        meta.setAttribute('content', theme === 'dark' ? '#070a12' : '#f7f8fc')
      try {
        localStorage.setItem('portfolio-theme', theme)
      } catch (e) { }
    }

    toggle?.addEventListener('click', () => {
      const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'
      apply(next)
      drawParticlesColor()
    })
  }

  /* ======================================================================
    3. NAVBAR: sticky, active link, mobile menu, scroll progress
     ====================================================================== */
  function initNav() {
    const nav = $('#nav')
    const bar = $('#scrollBar')
    const toTop = $('#toTop')
    const hamburger = $('#hamburger')
    const menu = $('#mobileMenu')
    const overlay = $('#menuOverlay')
    const navLinks = $$('.nav__link')
    const mobileLinks = $$('.mobile-menu__link')
    const sections = $$('main section[id]')

    /* --- mobile menu --- */
    const setMenu = open => {
      menu?.classList.toggle('is-open', open)
      overlay?.classList.toggle('is-open', open)
      hamburger?.classList.toggle('is-open', open)
      hamburger?.setAttribute('aria-expanded', String(open))
      hamburger?.setAttribute('aria-label', open ? 'Tutup menu' : 'Buka menu')
      menu?.setAttribute('aria-hidden', String(!open))
      document.body.classList.toggle('is-locked', open)
    }

    hamburger?.addEventListener('click', () =>
      setMenu(!menu?.classList.contains('is-open'))
    )
    overlay?.addEventListener('click', () => setMenu(false))
    mobileLinks.forEach(l => l.addEventListener('click', () => setMenu(false)))
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') setMenu(false)
    })

    /* --- scroll handler --- */
    const onScroll = throttleRAF(() => {
      const y = window.scrollY
      const docH = document.documentElement.scrollHeight - window.innerHeight

      nav?.classList.toggle('is-stuck', y > 30)
      if (bar) bar.style.width = clamp((y / (docH || 1)) * 100, 0, 100) + '%'
      toTop?.classList.toggle('is-visible', y > 550)

      // active section
      let current = 'hero'
      const offset = window.innerHeight * 0.35
      sections.forEach(sec => {
        if (sec.offsetTop - offset <= y) current = sec.id
      })

      navLinks.forEach(l =>
        l.classList.toggle(
          'is-active',
          l.getAttribute('href') === '#' + current
        )
      )
      mobileLinks.forEach(l =>
        l.classList.toggle(
          'is-active',
          l.getAttribute('href') === '#' + current
        )
      )

      updateTimelineLine()
    })

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    toTop?.addEventListener('click', () =>
      window.scrollTo({ top: 0, behavior: prefersReduced ? 'auto' : 'smooth' })
    )

    // Smooth scroll dengan offset navbar
    $$('a[href^="#"]').forEach(link => {
      link.addEventListener('click', e => {
        const id = link.getAttribute('href')
        if (!id || id === '#') return
        const target = document.querySelector(id)
        if (!target) return
        e.preventDefault()
        const navH =
          parseInt(
            getComputedStyle(document.documentElement).getPropertyValue(
              '--nav-h'
            )
          ) || 70
        const top =
          target.getBoundingClientRect().top + window.scrollY - navH + 2
        window.scrollTo({ top, behavior: prefersReduced ? 'auto' : 'smooth' })
      })
    })
  }

  /* ======================================================================
    4. TIMELINE progress line
     ====================================================================== */
  let timelineFill, timelineEl
  function updateTimelineLine() {
    if (!timelineFill || !timelineEl) return
    const rect = timelineEl.getBoundingClientRect()
    const vh = window.innerHeight
    const start = vh * 0.8
    const progress = clamp((start - rect.top) / (rect.height || 1), 0, 1)
    timelineFill.style.height = progress * 100 + '%'
  }

  /* ======================================================================
    5. TYPING EFFECT
     ====================================================================== */
  function initTyping() {
    const el = $('#typing')
    if (!el) return

    if (prefersReduced) {
      el.textContent = ROLES[0]
      return
    }

    let i = 0
    let char = 0
    let deleting = false

    const loop = () => {
      const word = ROLES[i]
      char += deleting ? -1 : 1
      el.textContent = word.slice(0, char)

      let delay = deleting ? 45 : 85
      if (!deleting && char === word.length) {
        delay = 1900
        deleting = true
      } else if (deleting && char === 0) {
        deleting = false
        i = (i + 1) % ROLES.length
        delay = 380
      }
      setTimeout(loop, delay)
    }
    loop()
  }

  /* ======================================================================
    6. PARTICLE CANVAS
     ====================================================================== */
  let particleCtx = null
  let particleColor = 'rgba(129, 140, 248, '

  function drawParticlesColor() {
    const dark = document.documentElement.getAttribute('data-theme') === 'dark'
    particleColor = dark ? 'rgba(129, 140, 248, ' : 'rgba(99, 102, 241, '
  }

  function initParticles() {
    const canvas = $('#particles')
    if (!canvas || prefersReduced) return

    const ctx = canvas.getContext('2d')
    particleCtx = ctx
    drawParticlesColor()

    let w, h, dpr, particles, raf
    const mouse = { x: -9999, y: -9999 }

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = canvas.offsetWidth
      h = canvas.offsetHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      spawn()
    }

    function spawn() {
      const density = Math.min(Math.floor((w * h) / 15000), 90)
      particles = Array.from({ length: density }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.32,
        vy: (Math.random() - 0.5) * 0.32,
        r: Math.random() * 1.9 + 0.6
      }))
    }

    function frame() {
      ctx.clearRect(0, 0, w, h)

      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > w) p.vx *= -1
        if (p.y < 0 || p.y > h) p.vy *= -1

        // tarik ringan ke kursor
        const dx = mouse.x - p.x
        const dy = mouse.y - p.y
        const dist = Math.hypot(dx, dy)
        if (dist < 130) {
          p.x -= (dx / dist) * 0.35
          p.y -= (dy / dist) * 0.35
        }

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = particleColor + '0.55)'
        ctx.fill()
      }

      // garis penghubung
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i]
          const b = particles[j]
          const d = Math.hypot(a.x - b.x, a.y - b.y)
          if (d < 118) {
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.strokeStyle =
              particleColor + (0.18 * (1 - d / 118)).toFixed(3) + ')'
            ctx.lineWidth = 1
            ctx.stroke()
          }
        }
      }
      raf = requestAnimationFrame(frame)
    }

    const hero = $('#hero')
    hero?.addEventListener('mousemove', e => {
      const r = canvas.getBoundingClientRect()
      mouse.x = e.clientX - r.left
      mouse.y = e.clientY - r.top
    })
    hero?.addEventListener('mouseleave', () => {
      mouse.x = mouse.y = -9999
    })

    window.addEventListener('resize', throttleRAF(resize))
    resize()
    frame()

    // Hemat CPU saat hero tidak terlihat
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            if (!raf) frame()
          } else {
            cancelAnimationFrame(raf)
            raf = null
          }
        },
        { threshold: 0 }
      ).observe(canvas)
    }
  }

  /* ======================================================================
    7. REVEAL ON SCROLL + COUNTER + SKILL BAR
     ====================================================================== */
  function initReveal() {
    const items = $$('.reveal')

    if (!('IntersectionObserver' in window) || prefersReduced) {
      items.forEach(el => el.classList.add('is-visible'))
      $$('.counter').forEach(c => (c.textContent = c.dataset.target))
      $$('.bar__track i').forEach(b => (b.style.width = b.dataset.width + '%'))
      return
    }

    const io = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return
          const el = entry.target
          const delay = parseInt(el.dataset.delay || '0', 10)
          setTimeout(() => el.classList.add('is-visible'), delay)

          // counter di dalamnya
          $$('.counter', el).forEach(animateCounter)
          // skill bar di dalamnya
          $$('.bar__track i', el).forEach((b, idx) => {
            setTimeout(
              () => (b.style.width = b.dataset.width + '%'),
              delay + 200 + idx * 120
            )
          })

          io.unobserve(el)
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    )

    items.forEach(el => io.observe(el))
  }

  function animateCounter(el) {
    if (el.dataset.done) return
    el.dataset.done = '1'
    const target = parseFloat(el.dataset.target)
    const dur = 1600
    const start = performance.now()

    const step = now => {
      const p = clamp((now - start) / dur, 0, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      el.textContent = Math.round(target * eased)
      if (p < 1) requestAnimationFrame(step)
      else el.textContent = target
    }
    requestAnimationFrame(step)
  }

  /* ======================================================================
    8. MARQUEE
     ====================================================================== */
  function initMarquee() {
    const track = $('#marqueeTrack')
    if (!track) return

    const build = () =>
      TECHS.map(
        t => `
        <div class="marquee__item">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${t.icon
          }.svg"
              alt="" loading="lazy" class="${t.invert ? 'ico-invert' : ''}"
              onerror="this.style.display='none'" />
          <span>${t.name}</span>
        </div>`
      ).join('')

    // digandakan agar animasi -50% terasa mulus tanpa jeda
    track.innerHTML = build() + build()
  }

  /* ======================================================================
    9. PROJECTS: render, filter, modal
     ====================================================================== */
  function initProjects() {
    const grid = $('#projectGrid')
    if (!grid) return

    const cardHTML = (p, i) => `
      <article class="project reveal" data-reveal="up" data-delay="${(i % 3) * 90
      }"
              data-cat="${p.cat}" data-index="${i}" tabindex="0" role="button"
              aria-label="Lihat detail proyek ${p.title}">
        <div class="project__media">
          <img src="${p.img}" alt="${p.alt}" loading="lazy" decoding="async"
              onerror="this.src='https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900&q=80&auto=format&fit=crop'" />
          <span class="project__badge">${p.catLabel}</span>
          ${p.featured ? '<span class="project__featured">Featured</span>' : ''}
          <div class="project__view">
            <span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
              </svg>
            </span>
          </div>
        </div>
        <div class="project__body">
          <div class="project__head">
            <h3>${p.title}</h3>
            <span class="project__year">${p.year}</span>
          </div>
          <p>${p.short}</p>
          <ul class="project__stack">
            ${p.stack
        .slice(0, 4)
        .map(s => `<li>${s}</li>`)
        .join('')}
          </ul>
        </div>
      </article>`

    grid.innerHTML = PROJECTS.map(cardHTML).join('')

    /* --- filter --- */
    const filters = $$('.filter')
    filters.forEach(btn => {
      btn.addEventListener('click', () => {
        const val = btn.dataset.filter
        filters.forEach(b => {
          const on = b === btn
          b.classList.toggle('is-active', on)
          b.setAttribute('aria-selected', String(on))
        })

        const cards = $$('.project', grid)
        cards.forEach(c => c.classList.add('is-filtering'))

        setTimeout(() => {
          let shown = 0
          cards.forEach(c => {
            const match = val === 'all' || c.dataset.cat === val
            c.classList.toggle('is-hidden', !match)
            if (match) shown++
          })

          $('.projects__empty', grid)?.remove()
          if (shown === 0) {
            grid.insertAdjacentHTML(
              'beforeend',
              '<p class="projects__empty">Belum ada proyek pada kategori ini.</p>'
            )
          }

          requestAnimationFrame(() =>
            cards.forEach(c => c.classList.remove('is-filtering'))
          )
        }, 260)
      })
    })

    /* --- modal --- */
    const modal = $('#projectModal')
    let lastFocused = null

    const openModal = index => {
      const p = PROJECTS[index]
      if (!p || !modal) return
      lastFocused = document.activeElement

      $('#modalImg').src = p.img
      $('#modalImg').alt = p.alt
      $('#modalCat').textContent = p.catLabel + ' · ' + p.year
      $('#modalTitle').textContent = p.title
      $('#modalDesc').textContent = p.desc
      $('#modalStack').innerHTML = p.stack.map(s => `<li>${s}</li>`).join('')
      $('#modalMeta').innerHTML = `
        <div><span class="k">Role</span><span class="v">${p.role}</span></div>
        <div><span class="k">period</span><span class="v">${p.period}</span></div>
        <div><span class="k">methodology</span><span class="v">${p.methodology}</span></div>
        <div><span class="k">Client</span><span class="v">${p.client}</span></div>`
      // $('#modalDemo').href = p.demo
      // $('#modalCode').href = p.code

      modal.classList.add('is-open')
      modal.setAttribute('aria-hidden', 'false')
      document.body.classList.add('is-locked')
      setTimeout(() => $('.modal__close', modal)?.focus(), 120)
    }

    const closeModal = () => {
      if (!modal) return
      modal.classList.remove('is-open')
      modal.setAttribute('aria-hidden', 'true')
      document.body.classList.remove('is-locked')
      lastFocused?.focus()
    }

    grid.addEventListener('click', e => {
      const card = e.target.closest('.project')
      if (card) openModal(parseInt(card.dataset.index, 10))
    })
    grid.addEventListener('keydown', e => {
      if (e.key !== 'Enter' && e.key !== ' ') return
      const card = e.target.closest('.project')
      if (card) {
        e.preventDefault()
        openModal(parseInt(card.dataset.index, 10))
      }
    })

    $$('[data-close]', modal).forEach(el =>
      el.addEventListener('click', closeModal)
    )
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && modal?.classList.contains('is-open'))
        closeModal()
    })
  }

  /* ======================================================================
    10. TESTIMONIAL SLIDER
     ====================================================================== */
  function initSlider() {
    const track = $('#tTrack')
    const dotsBox = $('#tDots')
    const viewport = $('#tViewport')
    if (!track) return

    const star = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.3 6.8.8-5 4.7 1.3 6.8L12 17.3 6 20.6l1.3-6.8-5-4.7 6.8-.8z"/></svg>`

    track.innerHTML = TESTIMONIALS.map(
      t => `
      <div class="tcard" role="group" aria-label="Testimoni dari ${t.name}">
        <div class="tcard__inner">
          <div class="tcard__stars" aria-label="Penilaian 5 dari 5">${star.repeat(
        5
      )}</div>
          <p class="tcard__text">"${t.text}"</p>
          <div class="tcard__author">
            <img src="${t.avatar}" alt="Foto ${t.name}" loading="lazy"
                onerror="this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(
        t.name
      )}&background=6366f1&color=fff&size=160'" />
            <div>
              <span class="tcard__name">${t.name}</span>
              <span class="tcard__role">${t.role}</span>
            </div>
          </div>
        </div>
      </div>`
    ).join('')

    dotsBox.innerHTML = TESTIMONIALS.map(
      (_, i) =>
        `<button class="slider__dot${i === 0 ? ' is-active' : ''}" data-i="${i}"
          role="tab" aria-label="Testimoni ${i + 1}"></button>`
    ).join('')

    let index = 0
    let timer = null

    const go = i => {
      index = (i + TESTIMONIALS.length) % TESTIMONIALS.length
      track.style.transform = `translateX(-${index * 100}%)`
      $$('.slider__dot', dotsBox).forEach((d, di) =>
        d.classList.toggle('is-active', di === index)
      )
    }

    const play = () => {
      if (prefersReduced) return
      stop()
      timer = setInterval(() => go(index + 1), 6000)
    }
    const stop = () => timer && clearInterval(timer)

    $('#tNext')?.addEventListener('click', () => {
      go(index + 1)
      play()
    })
    $('#tPrev')?.addEventListener('click', () => {
      go(index - 1)
      play()
    })
    dotsBox.addEventListener('click', e => {
      const dot = e.target.closest('.slider__dot')
      if (!dot) return
      go(parseInt(dot.dataset.i, 10))
      play()
    })

    // swipe / drag
    let startX = 0
    let dragging = false

    const down = x => {
      startX = x
      dragging = true
      stop()
    }
    const up = x => {
      if (!dragging) return
      dragging = false
      const diff = startX - x
      if (Math.abs(diff) > 45) go(index + (diff > 0 ? 1 : -1))
      play()
    }

    viewport?.addEventListener('touchstart', e => down(e.touches[0].clientX), {
      passive: true
    })
    viewport?.addEventListener(
      'touchend',
      e => up(e.changedTouches[0].clientX),
      {
        passive: true
      }
    )
    viewport?.addEventListener('mousedown', e => down(e.clientX))
    window.addEventListener('mouseup', e => up(e.clientX))

    viewport?.addEventListener('mouseenter', stop)
    viewport?.addEventListener('mouseleave', play)

    // keyboard
    viewport?.setAttribute('tabindex', '0')
    viewport?.addEventListener('keydown', e => {
      if (e.key === 'ArrowRight') go(index + 1)
      if (e.key === 'ArrowLeft') go(index - 1)
    })

    go(0)
    play()
  }

  /* ======================================================================
    11. FORM KONTAK
     ====================================================================== */
  function initForm() {
    const form = $('#contactForm')
    if (!form) return

    const note = $('#formNote')
    const btn = $('#submitBtn')

    const rules = {
      name: v => (v.trim().length < 3 ? 'Nama minimal 3 karakter.' : ''),
      email: v =>
        !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim())
          ? 'Format email tidak valid.'
          : '',
      subject: v => (v.trim().length < 3 ? 'Subjek minimal 3 karakter.' : ''),
      message: v => (v.trim().length < 10 ? 'Pesan minimal 10 karakter.' : '')
    }

    const validate = input => {
      const rule = rules[input.name]
      if (!rule) return true
      const msg = rule(input.value)
      const field = input.closest('.field')
      const err = $(`[data-error-for="${input.name}"]`, form)

      field?.classList.toggle('has-error', !!msg)
      field?.classList.toggle('is-valid', !msg && input.value.trim() !== '')
      if (err) err.textContent = msg
      return !msg
    }

    $$('input, textarea', form).forEach(input => {
      input.addEventListener('blur', () => validate(input))
      input.addEventListener('input', () => {
        if (input.closest('.field')?.classList.contains('has-error'))
          validate(input)
      })
    })

    form.addEventListener('submit', e => {
      e.preventDefault()
      const inputs = $$('input, textarea', form)
      const ok = inputs.map(validate).every(Boolean)

      if (!ok) {
        note.textContent = 'Mohon perbaiki kolom yang ditandai merah.'
        note.className = 'form-note is-bad'
        $('.field.has-error input, .field.has-error textarea', form)?.focus()
        return
      }

      btn.classList.add('is-loading')
      note.textContent = ''
      note.className = 'form-note'

      // SIMULASI pengiriman.
      // GANTI: hubungkan ke backend / Formspree / EmailJS di sini.
      setTimeout(() => {
        btn.classList.remove('is-loading')
        note.textContent =
          'Pesan terkirim! Terima kasih, saya akan segera membalas.'
        note.className = 'form-note is-ok'
        form.reset()
        $$('.field', form).forEach(f =>
          f.classList.remove('is-valid', 'has-error')
        )
        setTimeout(() => {
          note.textContent = ''
          note.className = 'form-note'
        }, 6000)
      }, 1500)
    })
  }

  /* ======================================================================
    12. CURSOR, TILT, MAGNETIC, GLOW
     ====================================================================== */
  function initCursor() {
    if (isTouch || prefersReduced) return
    const dot = $('#cursorDot')
    const ring = $('#cursorRing')
    if (!dot || !ring) return

    let mx = 0,
      my = 0,
      rx = 0,
      ry = 0

    window.addEventListener('mousemove', e => {
      mx = e.clientX
      my = e.clientY
      dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`
      document.body.classList.add('cursor-ready')
    })

    const loop = () => {
      rx += (mx - rx) * 0.16
      ry += (my - ry) * 0.16
      ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`
      requestAnimationFrame(loop)
    }
    loop()

    const hoverables =
      'a, button, .project, .skill-card, input, textarea, .chips li'
    document.addEventListener('mouseover', e => {
      if (e.target.closest(hoverables)) ring.classList.add('is-hover')
    })
    document.addEventListener('mouseout', e => {
      if (e.target.closest(hoverables)) ring.classList.remove('is-hover')
    })
  }

  function initTilt() {
    if (isTouch || prefersReduced) return

    $$('[data-tilt]').forEach(el => {
      el.addEventListener('mousemove', e => {
        const r = el.getBoundingClientRect()
        const px = (e.clientX - r.left) / r.width - 0.5
        const py = (e.clientY - r.top) / r.height - 0.5
        el.style.transform = `perspective(900px) rotateY(${px * 11
          }deg) rotateX(${-py * 11}deg) scale(1.015)`
      })
      el.addEventListener('mouseleave', () => {
        el.style.transform = 'perspective(900px) rotateY(0) rotateX(0) scale(1)'
      })
    })
  }

  function initMagnetic() {
    if (isTouch || prefersReduced) return

    $$('.magnetic').forEach(el => {
      el.addEventListener('mousemove', e => {
        const r = el.getBoundingClientRect()
        const x = e.clientX - r.left - r.width / 2
        const y = e.clientY - r.top - r.height / 2
        el.style.transform = `translate(${x * 0.22}px, ${y * 0.32 - 2}px)`
      })
      el.addEventListener('mouseleave', () => {
        el.style.transform = ''
      })
    })
  }

  function initCardGlow() {
    if (isTouch) return
    $$('.skill-card').forEach(card => {
      card.addEventListener('mousemove', e => {
        const r = card.getBoundingClientRect()
        card.style.setProperty('--mx', e.clientX - r.left + 'px')
        card.style.setProperty('--my', e.clientY - r.top + 'px')
      })
    })
  }

  /* ======================================================================
    13. HERO parallax + urutan animasi awal
     ====================================================================== */
  function startHeroSequence() {
    $$('#hero .reveal').forEach((el, i) => {
      const delay = parseInt(el.dataset.delay || '0', 10) || i * 70
      setTimeout(() => el.classList.add('is-visible'), delay)
    })
  }

  function initParallax() {
    if (isTouch || prefersReduced) return
    const hero = $('#hero')
    const photo = $('.hero__photo-wrap')
    if (!hero || !photo) return

    const onScroll = throttleRAF(() => {
      const y = window.scrollY
      if (y > window.innerHeight) return
      photo.style.translate = `0 ${y * 0.12}px`
      const content = $('.hero__content')
      if (content) content.style.opacity = String(clamp(1 - y / 520, 0, 1))
    })
    window.addEventListener('scroll', onScroll, { passive: true })
  }

  /* ======================================================================
    14. MISC
     ====================================================================== */
  function initMisc() {
    // Tahun otomatis di footer
    const year = $('#year');
    if (year) {
      year.textContent = new Date().getFullYear();
    }

    timelineEl = $('.timeline');
    timelineFill = $('#timelineFill');

    updateTimelineLine();
  }

  /* ======================================================================
    BOOT
     ====================================================================== */
  function boot() {
    initTheme()
    initMarquee()
    initProjects()
    initSlider()
    initMisc()
    initNav()
    initReveal()
    initTyping()
    initParticles()
    initForm()
    initCursor()
    initTilt()
    initMagnetic()
    initCardGlow()
    initParallax()
    initPreloader()
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot)
  } else {
    boot()
  }
})()
