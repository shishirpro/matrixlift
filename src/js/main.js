(() => {
  const { icon, contact, products, services } = ML;
  const page = document.body.dataset.page || "";
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Header ---------- */
  const nav = [
    { label: "Home", href: "index.html", key: "home" },
    {
      label: "About", key: "about", children: [
        { label: "About Us", href: "about.html", desc: "Who we are and what we stand for" },
        { label: "Background of MATRIX", href: "background.html", desc: "Four decades of leadership" },
        { label: "Message from CEO", href: "ceo-message.html", desc: "Our direction, in his words" },
        { label: "Our Management", href: "management.html", desc: "Board & functional team" },
      ],
    },
    { label: "Brands", href: "brands.html", key: "brands" },
    { label: "Products", href: "products.html", key: "products", mega: true },
    { label: "Services", href: "services.html", key: "services" },
    { label: "Gallery", href: "gallery.html", key: "gallery" },
    { label: "News", href: "news.html", key: "news" },
    { label: "Contact", href: "contact.html", key: "contact" },
  ];

  const active = (k) => (k === page ? "text-ink-900" : "text-ink-500 hover:text-ink-900");

  const megaProducts = `
    <div class="grid w-[760px] grid-cols-4 gap-1 p-3">
      ${products.map((p) => `
        <a href="product.html?p=${p.slug}" class="group flex items-center gap-3 rounded-2xl p-2 transition hover:bg-mint">
          <span class="size-12 shrink-0 overflow-hidden rounded-xl bg-mist"><img src="${p.img}" alt="" class="size-full object-cover transition duration-500 group-hover:scale-110" loading="lazy"></span>
          <span><span class="block text-[14.5px] font-semibold text-ink-900">${p.name}</span><span class="block font-mono text-[10px] uppercase tracking-wider text-ink-400">${p.cat}</span></span>
        </a>`).join("")}
    </div>
    <a href="products.html" class="flex items-center justify-between bg-paper px-5 py-3.5 text-[14px] font-semibold text-ink-900 hover:text-brand-600">View the full product range ${icon("arrow", "size-4")}</a>`;

  const desktopNav = nav.map((n) => {
    if (n.children || n.mega) {
      const inner = n.mega ? megaProducts : `<div class="w-80 p-2">${n.children.map((c) => `
        <a href="${c.href}" class="block rounded-2xl px-4 py-3 transition hover:bg-mint">
          <span class="block text-[14px] font-semibold text-ink-900">${c.label}</span>
          <span class="block text-[13.5px] text-ink-400">${c.desc}</span>
        </a>`).join("")}</div>`;
      return `
        <li class="group/dd relative">
          <a href="${n.href || "#"}" class="nav-link flex items-center gap-1 px-3 py-2 text-[15px] font-medium transition ${active(n.key)}" ${n.key === page ? 'aria-current="page"' : ""} aria-haspopup="true">${n.label}
            <svg class="size-3.5 transition group-hover/dd:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
          </a>
          <div class="invisible absolute left-1/2 top-full -translate-x-1/2 translate-y-2 pt-3 opacity-0 transition duration-300 group-hover/dd:visible group-hover/dd:translate-y-0 group-hover/dd:opacity-100 group-focus-within/dd:visible group-focus-within/dd:translate-y-0 group-focus-within/dd:opacity-100">
            <div class="overflow-hidden rounded-3xl bg-white shadow-[0_30px_60px_-20px_rgba(12,27,51,.35)] ring-1 ring-ink-900/8">${inner}</div>
          </div>
        </li>`;
    }
    return `<li><a href="${n.href}" class="nav-link block px-3 py-2 text-[15px] font-medium transition ${active(n.key)}" ${n.key === page ? 'aria-current="page"' : ""}>${n.label}</a></li>`;
  }).join("");

  const mobileNav = nav.map((n) => n.children
    ? `<details class="group border-b border-ink-900/8"><summary class="flex cursor-pointer list-none items-center justify-between py-4 font-display text-xl font-semibold text-ink-900">${n.label}<span class="grid size-8 place-items-center rounded-full bg-mint text-xl text-brand-600 transition group-open:rotate-45">+</span></summary>
        <div class="space-y-3 pb-4 pl-3">${n.children.map((c) => `<a class="block text-ink-500 hover:text-ink-900" href="${c.href}">${c.label}</a>`).join("")}</div></details>`
    : `<a href="${n.href}" class="block border-b border-ink-900/8 py-4 font-display text-xl font-semibold ${n.key === page ? "text-brand-600" : "text-ink-900"}">${n.label}</a>`).join("");

  const header = `
  <div class="hidden border-b border-ink-900/6 bg-white text-ink-500 md:block">
    <div class="container-x flex h-10 items-center justify-between text-[13.5px]">
      <div class="flex items-center gap-6">
        <a href="${contact.phoneHref}" class="flex items-center gap-1.5 hover:text-ink-900">${icon("phone", "size-3.5 text-brand-600")} ${contact.phone}</a>
        <a href="mailto:${contact.email}" class="flex items-center gap-1.5 hover:text-ink-900">${icon("mail", "size-3.5 text-brand-600")} ${contact.email}</a>
      </div>
      <div class="flex items-center gap-5">
        <span class="flex items-center gap-2"><span class="relative flex size-2"><span class="absolute inline-flex size-full animate-ping rounded-full bg-brand-400 opacity-60"></span><span class="relative inline-flex size-2 rounded-full bg-brand-500"></span></span><b class="font-semibold text-ink-900">24/7</b> maintenance &amp; after-sales service</span>
        <span class="h-4 w-px bg-ink-900/10"></span>
        <span class="flex items-center gap-1">${["facebook", "linkedin", "youtube"].map((x) => `<a href="#" aria-label="${x} (link to confirm)" class="grid size-7 place-items-center rounded-full text-ink-500 transition hover:bg-mint hover:text-brand-600">${icon(x, "size-3.5")}</a>`).join("")}</span>
      </div>
    </div>
  </div>
  <header id="site-header" class="sticky top-0 z-50 border-b transition-all duration-500">
    <div class="container-x flex h-18 items-center justify-between gap-6">
      <a href="index.html" class="flex shrink-0 items-center" aria-label="MATRIX Lift home"><img src="img/logo-dark.png" alt="MATRIX Lift" class="h-7 w-auto sm:h-8"></a>
      <nav aria-label="Primary" class="hidden xl:block"><ul class="flex items-center">${desktopNav}</ul></nav>
      <div class="flex items-center gap-3">
        <div class="hidden items-center gap-2 rounded-full bg-ink-900 px-3 py-1.5 font-mono text-[11px] text-white/60 lg:flex" title="Scroll position — floor indicator">
          <span class="led text-[10px]">▲</span><span>FLR</span><span id="floor-num" class="led w-5">01</span>
        </div>
        <a href="contact.html#quote" class="btn btn-primary hidden !py-2.5 sm:inline-flex">Request a Quote</a>
        <button id="menu-btn" class="grid size-11 place-items-center rounded-full bg-white text-ink-900 ring-1 ring-ink-900/12 xl:hidden" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-menu">
          <svg class="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 7h16M4 12h16M4 17h10"/></svg>
        </button>
      </div>
    </div>
    <div id="scroll-progress" class="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-brand-500 to-brand-300"></div>
  </header>
  <div id="mobile-menu" class="fixed inset-0 z-[60] hidden bg-paper bg-dots" role="dialog" aria-modal="true" aria-label="Menu">
    <div class="container-x flex h-18 items-center justify-between">
      <img src="img/logo-dark.png" alt="MATRIX Lift" class="h-7">
      <button id="menu-close" class="grid size-11 place-items-center rounded-full bg-white text-ink-900 ring-1 ring-ink-900/12" aria-label="Close menu">${icon("close")}</button>
    </div>
    <nav class="container-x mt-4 max-h-[calc(100vh-10rem)] overflow-y-auto">${mobileNav}
      <a href="contact.html#quote" class="btn btn-primary mt-8 w-full">Request a Quote</a>
    </nav>
  </div>`;

  /* ---------- Footer ---------- */
  const footer = `
  <section class="relative px-4 pb-0 pt-8 sm:px-6 lg:px-8">
    <div class="relative mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-brand-600 px-6 py-14 sm:px-12 lg:py-16">
      <div class="pointer-events-none absolute inset-0 opacity-25" style="background-image:repeating-linear-gradient(180deg,transparent 0 87px,rgb(255 255 255/.35) 87px 88px)"></div>
      <div class="pointer-events-none absolute bottom-0 right-12 hidden lg:block">
        <div class="relative flex h-48 w-36 gap-px overflow-hidden rounded-t-[22px] bg-ink-900/90 p-2 pt-9 shadow-2xl">
          <div class="h-full w-1/2 bg-gradient-to-r from-slate-300 to-slate-100"></div><div class="h-full w-1/2 bg-gradient-to-l from-slate-300 to-slate-100"></div>
          <span class="absolute left-1/2 top-3 -translate-x-1/2 rounded bg-ink-950 px-2 py-0.5 text-[10px] led">▲ 12</span>
        </div>
      </div>
      <div class="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center lg:pr-48">
        <div>
          <p class="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 font-mono text-[10.5px] uppercase tracking-[0.2em] text-white">Next stop — your project</p>
          <h2 class="mt-4 max-w-2xl font-display text-[2rem] font-semibold leading-[1.05] tracking-[-0.03em] text-white sm:text-[2.6rem]">Planning a building? Let’s size the <em class="!text-brand-100">right lift</em> for it.</h2>
        </div>
        <div class="flex flex-wrap gap-3">
          <a href="contact.html#quote" class="btn btn-dark">Request a Quote ${icon("arrow", "size-4")}</a>
          <a href="${contact.phoneHref}" class="btn bg-white/10 text-white ring-1 ring-white/40 hover:bg-white hover:text-ink-900">${icon("phone", "size-4")} Call us</a>
        </div>
      </div>
    </div>
  </section>
  <footer class="relative mt-8 overflow-hidden bg-white text-ink-500">
    <div class="bg-blueprint pointer-events-none absolute inset-0 opacity-60 mask-radial"></div>
    <div class="container-x relative grid gap-12 pb-12 pt-16 md:grid-cols-2 lg:grid-cols-12">
      <div class="lg:col-span-4">
        <img src="img/logo-dark.png" alt="MATRIX Lift" class="h-9">
        <p class="mt-5 max-w-sm text-[14.5px] leading-relaxed">MATRIX Lift Limited / MATRIX Engineering Services — a comprehensive vertical transportation company. Family owned, second generation, about four decades of experience.</p>
        <div class="mt-6 flex gap-2">
          ${["facebook", "linkedin", "youtube"].map((s) => `<a href="#" aria-label="${s} (link to confirm)" class="grid size-10 place-items-center rounded-full bg-paper text-ink-700 ring-1 ring-ink-900/8 transition hover:bg-ink-900 hover:text-white">${icon(s, "size-4")}</a>`).join("")}
        </div>
      </div>
      <div class="lg:col-span-2">
        <h3 class="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-900">Company</h3>
        <ul class="mt-5 space-y-3 text-[14px]">
          <li><a class="hover:text-ink-900" href="about.html">About Us</a></li>
          <li><a class="hover:text-ink-900" href="background.html">Background</a></li>
          <li><a class="hover:text-ink-900" href="management.html">Management</a></li>
          <li><a class="hover:text-ink-900" href="brands.html">Our Brands</a></li>
          <li><a class="hover:text-ink-900" href="news.html">News</a></li>
          <li><a class="hover:text-ink-900" href="management.html">Functional Team</a></li>
          <li><a class="hover:text-ink-900" href="about.html#beelia">BEELIA Membership</a></li>
        </ul>
      </div>
      <div class="lg:col-span-3">
        <h3 class="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-900">Products</h3>
        <ul class="mt-5 grid grid-cols-2 gap-x-4 gap-y-3 text-[14px]">
          ${products.slice(0, 8).map((p) => `<li><a class="hover:text-ink-900" href="product.html?p=${p.slug}">${p.name}</a></li>`).join("")}
        </ul>
      </div>
      <div class="lg:col-span-3">
        <h3 class="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-900">Contact</h3>
        <ul class="mt-5 space-y-4 text-[14px]">
          <li><a href="${contact.phoneHref}" class="flex gap-3 hover:text-ink-900">${icon("phone", "size-4 mt-0.5 text-brand-600")}${contact.phone}</a></li>
          <li><a href="mailto:${contact.email}" class="flex gap-3 hover:text-ink-900">${icon("mail", "size-4 mt-0.5 text-brand-600")}${contact.email}</a></li>
          <li><a href="${contact.phone2Href}" class="flex gap-3 hover:text-ink-900">${icon("phone", "size-4 mt-0.5 text-brand-600")}${contact.phone2}</a></li>
          <li class="flex gap-3">${icon("pin", "size-4 mt-0.5 shrink-0 text-brand-600")}<span>${contact.address}</span></li>
        </ul>
        <form class="js-newsletter mt-6" novalidate>
          <label for="nl-email" class="text-[12px] font-semibold text-ink-700">Company updates</label>
          <div class="mt-2 flex rounded-full bg-paper p-1 ring-1 ring-ink-900/10 focus-within:ring-2 focus-within:ring-brand-400">
            <input id="nl-email" type="email" required placeholder="you@company.com" class="min-w-0 flex-1 bg-transparent px-3 text-sm text-ink-900 outline-none placeholder:text-ink-400">
            <button class="rounded-full bg-ink-900 px-4 py-2 text-xs font-semibold text-white hover:bg-ink-700">Subscribe</button>
          </div>
          <p class="js-msg mt-2 text-xs" aria-live="polite"></p>
        </form>
      </div>
    </div>
    <div class="container-x relative">
      <p class="watermark select-none text-center text-[17vw] lg:text-[13.5rem]" aria-hidden="true">MATRIX</p>
    </div>
    <div class="relative border-t border-ink-900/8">
      <div class="container-x flex flex-col justify-between gap-2 py-6 text-[13.5px] sm:flex-row">
        <p>© ${new Date().getFullYear()} MATRIX Lift Limited. All rights reserved.</p>
        <p>Lifting is <em class="font-serif text-[15px] text-brand-600">our passion.</em></p>
      </div>
    </div>
  </footer>`;

  document.getElementById("header-slot")?.insertAdjacentHTML("afterbegin", header);
  document.getElementById("footer-slot")?.insertAdjacentHTML("afterbegin", footer);

  /* ---------- Intro: lift doors open ---------- */
  if (!reduce && !sessionStorage.getItem("ml-intro")) {
    const doors = document.createElement("div");
    doors.className = "lift-doors";
    doors.innerHTML = `<div class="door l"></div><div class="door r"></div><div class="door-badge"><span>▲</span><b>MATRIX</b></div>`;
    document.body.appendChild(doors);
    requestAnimationFrame(() => setTimeout(() => doors.classList.add("open"), 450));
    setTimeout(() => doors.remove(), 1900);
    try { sessionStorage.setItem("ml-intro", "1"); } catch (e) {}
  }

  /* ---------- Header scroll state, progress, floor indicator ---------- */
  const hdr = document.getElementById("site-header");
  const prog = document.getElementById("scroll-progress");
  const floor = document.getElementById("floor-num");
  const onScroll = () => {
    const y = window.scrollY;
    const max = document.documentElement.scrollHeight - innerHeight;
    const pct = max > 0 ? y / max : 0;
    hdr?.classList.toggle("is-scrolled", y > 24);
    if (prog) prog.style.width = pct * 100 + "%";
    if (floor) floor.textContent = String(Math.max(1, Math.ceil(pct * 12))).padStart(2, "0");
  };
  addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile menu ---------- */
  const mm = document.getElementById("mobile-menu");
  const mb = document.getElementById("menu-btn");
  const setMenu = (open) => {
    mm.classList.toggle("hidden", !open);
    mb.setAttribute("aria-expanded", open);
    document.body.style.overflow = open ? "hidden" : "";
    if (open) document.getElementById("menu-close").focus(); else mb.focus();
  };
  mb?.addEventListener("click", () => setMenu(true));
  document.getElementById("menu-close")?.addEventListener("click", () => setMenu(false));
  addEventListener("keydown", (e) => { if (e.key === "Escape" && mm && !mm.classList.contains("hidden")) setMenu(false); });

  /* ---------- Reveal on scroll ---------- */
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      e.target.classList.add("in");
      io.unobserve(e.target);
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  const watch = (root = document) => root.querySelectorAll("[data-reveal]:not(.in)").forEach((el, i) => {
    if (!el.style.getPropertyValue("--d") && el.parentElement?.hasAttribute("data-stagger")) {
      el.style.setProperty("--d", [...el.parentElement.children].indexOf(el) * 80 + "ms");
    }
    reduce ? el.classList.add("in") : io.observe(el);
  });
  ML.watch = watch;

  /* ---------- Counters ---------- */
  const cio = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      const el = e.target, end = +el.dataset.count, dur = 1600, t0 = performance.now();
      const tick = (t) => {
        const k = Math.min(1, (t - t0) / dur);
        el.textContent = Math.round(end * (1 - Math.pow(1 - k, 3))).toLocaleString();
        if (k < 1) requestAnimationFrame(tick);
      };
      reduce ? (el.textContent = end.toLocaleString()) : requestAnimationFrame(tick);
      cio.unobserve(el);
    });
  }, { threshold: 0.6 });
  document.querySelectorAll("[data-count]").forEach((el) => cio.observe(el));

  /* ---------- Parallax ---------- */
  const px = [...document.querySelectorAll("[data-parallax]")];
  if (px.length && !reduce) {
    const run = () => {
      px.forEach((el) => {
        const r = el.getBoundingClientRect();
        const s = parseFloat(el.dataset.parallax) || 0.15;
        el.style.transform = `translate3d(0, ${(r.top + r.height / 2 - innerHeight / 2) * -s}px, 0)`;
      });
    };
    addEventListener("scroll", () => requestAnimationFrame(run), { passive: true });
    run();
  }

  /* ---------- Tilt cards ---------- */
  if (!reduce && matchMedia("(hover: hover)").matches) {
    document.addEventListener("pointermove", (e) => {
      const c = e.target.closest?.("[data-tilt]");
      document.querySelectorAll("[data-tilt].tilting").forEach((x) => x !== c && (x.classList.remove("tilting"), x.style.transform = ""));
      if (!c) return;
      const r = c.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
      c.classList.add("tilting");
      c.style.transform = `perspective(900px) rotateX(${-y * 5}deg) rotateY(${x * 6}deg) translateY(-4px)`;
      c.style.setProperty("--mx", (x + 0.5) * 100 + "%");
      c.style.setProperty("--my", (y + 0.5) * 100 + "%");
    });
  }

  /* ---------- Lightbox ---------- */
  ML.lightbox = (items, start = 0) => {
    let i = start;
    const lb = document.createElement("div");
    lb.className = "fixed inset-0 z-[70] flex items-center justify-center bg-ink-950/95 p-4 backdrop-blur-md lb-in";
    lb.setAttribute("role", "dialog");
    lb.setAttribute("aria-modal", "true");
    lb.setAttribute("aria-label", "Image viewer");
    const btn = "grid size-12 place-items-center rounded-full border border-white/15 text-white hover:bg-white/10";
    lb.innerHTML = `
      <button class="${btn} absolute right-4 top-4" data-x aria-label="Close">${icon("close")}</button>
      <button class="${btn} absolute left-4 top-1/2 -translate-y-1/2" data-p aria-label="Previous">${icon("chevL")}</button>
      <button class="${btn} absolute right-4 top-1/2 -translate-y-1/2" data-n aria-label="Next">${icon("chevR")}</button>
      <figure class="max-h-full max-w-5xl text-center"><img class="mx-auto max-h-[80vh] rounded-2xl object-contain" alt=""><figcaption class="mt-4 text-sm text-white/70"></figcaption></figure>`;
    const img = lb.querySelector("img"), cap = lb.querySelector("figcaption");
    const show = () => { img.src = items[i].src; img.alt = items[i].alt || ""; cap.textContent = `${items[i].caption || ""}  ·  ${i + 1} / ${items.length}`; };
    const close = () => { lb.remove(); removeEventListener("keydown", key); document.body.style.overflow = ""; prev?.focus(); };
    const key = (e) => { if (e.key === "Escape") close(); if (e.key === "ArrowRight") { i = (i + 1) % items.length; show(); } if (e.key === "ArrowLeft") { i = (i - 1 + items.length) % items.length; show(); } };
    const prev = document.activeElement;
    lb.addEventListener("click", (e) => {
      if (e.target === lb || e.target.closest("[data-x]")) close();
      if (e.target.closest("[data-n]")) { i = (i + 1) % items.length; show(); }
      if (e.target.closest("[data-p]")) { i = (i - 1 + items.length) % items.length; show(); }
    });
    addEventListener("keydown", key);
    document.body.appendChild(lb);
    document.body.style.overflow = "hidden";
    show();
    lb.querySelector("[data-x]").focus();
  };

  /* ---------- Forms (front-end prototype only) ---------- */
  document.addEventListener("submit", (e) => {
    const f = e.target;
    if (f.classList.contains("js-newsletter")) {
      e.preventDefault();
      const inp = f.querySelector("input"), msg = f.querySelector(".js-msg");
      const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inp.value.trim());
      msg.className = "js-msg mt-2 text-xs " + (ok ? "text-brand-600" : "text-red-500");
      msg.textContent = ok ? "Thanks — you’re on the list. (Demo: connect email provider before launch.)" : "Please enter a valid email address.";
      if (ok) f.reset();
    }
    if (f.classList.contains("js-quote")) {
      e.preventDefault();
      let valid = true;
      f.querySelectorAll("[required]").forEach((el) => {
        const err = el.closest(".fld")?.querySelector(".err");
        const bad = el.type === "checkbox" ? !el.checked : el.type === "email" ? !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(el.value.trim()) : el.type === "tel" ? !/^[+\d][\d\s-]{6,}$/.test(el.value.trim()) : !el.value.trim();
        el.setAttribute("aria-invalid", bad);
        el.classList.toggle("!border-red-400", bad);
        if (err) err.classList.toggle("hidden", !bad);
        if (bad && valid) { el.focus(); valid = false; }
      });
      if (!valid) return;
      const b = f.querySelector("button[type=submit]");
      b.disabled = true;
      b.innerHTML = `<span class="size-4 animate-spin rounded-full border-2 border-ink-950/30 border-t-ink-950"></span> Sending…`;
      setTimeout(() => {
        f.innerHTML = `<div class="py-12 text-center">
          <div class="mx-auto grid size-16 place-items-center rounded-full bg-brand-400/15 text-brand-500 success-pop">${icon("check", "size-8")}</div>
          <h3 class="mt-6 font-display text-2xl font-semibold text-ink-900">Enquiry received</h3>
          <p class="mx-auto mt-2 max-w-sm text-ink-500">Thank you. Our team will contact you shortly. For urgent matters call <a class="font-semibold text-ink-900 underline" href="${contact.phoneHref}">${contact.phone}</a>.</p>
        </div>`;
      }, 1100);
    }
  });

  // Prefill product in quote form
  const qp = new URLSearchParams(location.search).get("product");
  if (qp) document.querySelectorAll("select[name=interest]").forEach((s) => (s.value = qp));

  watch();
})();
