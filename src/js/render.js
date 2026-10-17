// Reusable card templates shared by all pages.
window.R = (() => {
  const { icon } = ML;
  const arrow = icon("arrow", "size-4 transition group-hover:translate-x-1");

  const values = ML.values;

  const tints = { Lifts: "bg-sky", Freight: "bg-sand", Parking: "bg-mint", Escalators: "bg-sky", Construction: "bg-sand" };

  return {
    values,
    // Brand stacked heading: big word + condensed caption (company-profile style)
    stack: (big, cap, cls = "") => `<h2 class="stack ${/[gjpqy]/.test(big) ? "desc" : ""} ${cls}"><span class="stack-big">${big}</span><span class="stack-cap">${cap}</span></h2>`,
    // Series lockup: The “Prime” / SERIES / rule / tagline
    series: (name, bold, rest, cls = "") => `<div class="series ${cls}"><span class="series-name">The “${name}”</span><span class="series-cap">SERIES</span><span class="series-rule"></span><span class="series-tag"><b>${bold}</b>${rest.map((r) => `<i>${r}</i>`).join("")}</span></div>`,
    fill(id, arr) {
      const el = document.getElementById(id);
      if (el) el.innerHTML = arr.join("");
    },

    // Product card: framed image (like a lift door frame), floor-number index, arrow button
    productCard: (p) => {
      const n = String(ML.products.indexOf(p) + 1).padStart(2, "0");
      return `
      <a href="product.html?p=${p.slug}" class="glow group relative flex flex-col rounded-[26px] bg-white p-2.5 ring-1 ring-ink-900/7 shadow-[0_1px_2px_rgba(12,27,51,.04),0_20px_40px_-30px_rgba(12,27,51,.35)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(12,27,51,.45)]" data-reveal data-tilt data-cat="${p.cat}">
        <div class="img-zoom relative aspect-[5/4] overflow-hidden rounded-[18px] ${tints[p.cat] || "bg-mist"}">
          <img src="${p.img}" alt="${p.name}" class="size-full object-cover" loading="lazy">
          <div class="absolute inset-0 bg-gradient-to-t from-ink-950/35 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100"></div>
          <span class="chip absolute left-2 top-2 hidden sm:left-3 sm:top-3 sm:inline-flex">${p.cat}</span>
          <span class="absolute right-2 top-2 sm:right-3 sm:top-3 grid h-7 min-w-9 place-items-center rounded-lg bg-ink-900/85 px-2 font-mono text-[11px] led backdrop-blur">${n}</span>
        </div>
        <div class="flex flex-1 flex-col px-1.5 pb-1.5 pt-3 sm:px-3 sm:pb-3 sm:pt-4">
          <h3 class="font-display text-[16px] font-semibold leading-tight tracking-[-0.02em] text-ink-900 sm:text-[19px]">${p.name}</h3>
          <p class="mt-1.5 hidden flex-1 text-[14.5px] leading-[1.6] text-ink-500 sm:block">${p.line}</p>
          <div class="mt-3 flex items-center justify-between border-t border-dashed border-ink-900/10 pt-3 sm:mt-5 sm:pt-4">
            <span class="text-[12px] font-semibold text-ink-900 sm:text-[14px]">View details</span>
            <span class="grid size-8 place-items-center rounded-full bg-paper sm:size-9 text-ink-900 ring-1 ring-ink-900/8 transition duration-500 group-hover:rotate-[-45deg] group-hover:bg-brand-600 group-hover:text-white group-hover:ring-brand-600">${icon("arrow", "size-4")}</span>
          </div>
        </div>
      </a>`;
    },

    // Service card on light background
    serviceItem: (s, i) => `
      <li class="svc-card group relative rounded-[22px] bg-white p-6 ring-1 ring-ink-900/7 transition duration-500 hover:-translate-y-1 hover:shadow-[0_24px_50px_-30px_rgba(12,27,51,.45)]" data-reveal>
        <div class="flex items-start justify-between">
          <span class="grid size-12 place-items-center rounded-2xl bg-mint text-brand-600 transition duration-500 group-hover:bg-ink-900 group-hover:text-brand-300">${icon(s.icon, "size-[22px]")}</span>
          <span class="font-display text-[34px] font-semibold leading-none text-ink-900/[.07] transition group-hover:text-brand-500/30">0${i + 1}</span>
        </div>
        <h3 class="mt-6 font-display text-[19px] font-semibold tracking-[-0.02em] text-ink-900">${s.name}</h3>
        <p class="mt-2 text-[14.5px] leading-[1.65] text-ink-500">${s.text}</p>
      </li>`,

    valueTile: ([n, ic, t]) => `
      <div class="group rounded-[22px] bg-white p-6 ring-1 ring-ink-900/7 transition duration-500 hover:-translate-y-1 hover:ring-brand-400" data-reveal>
        <span class="grid size-11 place-items-center rounded-xl bg-mint text-brand-600 transition duration-500 group-hover:bg-brand-600 group-hover:text-white">${icon(ic, "size-5")}</span>
        <h3 class="mt-5 font-display text-[17px] font-semibold">${n}</h3>
        <p class="mt-1.5 text-[14px] leading-relaxed text-ink-500">${t}</p>
      </div>`,

    newsCard: (n) => `
      <a href="article.html?a=${n.slug}" class="group flex flex-col rounded-[26px] bg-white p-2.5 ring-1 ring-ink-900/7 transition duration-500 hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(12,27,51,.4)]" data-reveal>
        <div class="img-zoom relative aspect-[16/10] overflow-hidden rounded-[18px] ${n.fit === "portrait" ? "bg-gradient-to-br from-mint via-sky to-sand" : "bg-mist"}">
          ${n.fit === "portrait" ? `<div class="bg-floors absolute inset-0 opacity-50"></div><img src="${n.img}" alt="" class="relative mx-auto h-full w-auto object-contain object-bottom mix-blend-multiply" loading="lazy">` : `<img src="${n.img}" alt="" class="size-full object-cover" loading="lazy">`}
          <span class="chip absolute left-3 top-3">${n.cat}</span>
        </div>
        <div class="flex flex-1 flex-col px-3 pb-3 pt-5">
          <time class="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-400">${n.date}</time>
          <h3 class="mt-2 font-display text-[21px] font-semibold leading-[1.2] tracking-[-0.02em] text-ink-900 transition group-hover:text-brand-600">${n.title}</h3>
          <p class="mt-2.5 flex-1 text-[14px] leading-[1.65] text-ink-500">${n.excerpt}</p>
          <span class="mt-5 inline-flex items-center gap-2 text-[14px] font-semibold text-ink-900">Read article ${arrow}</span>
        </div>
      </a>`,

    // Light inner-page hero with blueprint grid and optional framed image
    pageHero: ({ eyebrow, title, text, crumbs = [], img, big, cap, side }) => `
      <section class="relative overflow-hidden border-b border-ink-900/6 bg-paper">
        <div class="bg-blueprint absolute inset-0 mask-radial"></div>
        <div class="blob -left-24 top-10 size-80 bg-brand-200/50"></div>
        <div class="blob right-0 -top-20 size-96 bg-sky"></div>
        <div class="container-x relative grid items-center gap-12 py-16 lg:grid-cols-12 lg:py-24">
          <div class="${img || side ? "lg:col-span-7" : "lg:col-span-10"}">
            <nav aria-label="Breadcrumb" class="fade-up flex flex-wrap items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-400" style="--d:.15s">
              <a href="index.html" class="hover:text-ink-900">Home</a>${crumbs.map((c) => ` <span class="text-ink-300">/</span> ${c.href ? `<a href="${c.href}" class="hover:text-ink-900">${c.label}</a>` : `<span class="text-brand-600">${c.label}</span>`}`).join("")}
            </nav>
            <p class="eyebrow fade-up mt-7" style="--d:.25s">${eyebrow}</p>
            ${big ? `<h1 class="stack ${/[gjpqy]/.test(big) ? "desc" : ""} fade-up mt-10 !flex w-fit sm:mt-12" style="--d:.35s"><span class="stack-big"${big.length > 8 ? ` style="font-size:clamp(2.2rem,4.2vw,3.9rem);overflow-wrap:normal"` : ""}>${big}</span><span class="stack-cap">${cap || ""}</span></h1>${title ? `<p class="fade-up mt-5 font-display text-[1.35rem] font-bold leading-snug tracking-tight text-ink-800 sm:text-[1.6rem]" style="--d:.45s">${title}</p>` : ""}` : `<h1 class="h-display fade-up mt-5 text-[2.5rem] leading-[1.02] sm:text-[3.4rem] lg:text-[4.1rem]" style="--d:.35s">${title}</h1>`}
            ${text ? `<p class="lead fade-up mt-6 max-w-2xl" style="--d:.5s">${text}</p>` : ""}
          </div>
          ${img ? `
          <div class="fade-up relative hidden lg:col-span-5 lg:block" style="--d:.45s">
            <div class="relative mx-auto max-w-sm">
              <div class="absolute inset-0 translate-x-4 translate-y-4 rounded-[32px] border-2 border-dashed border-brand-400/50 bg-mint/60" aria-hidden="true"></div>
              <div class="relative rounded-[30px] bg-white p-3 shadow-[0_40px_80px_-40px_rgba(12,27,51,.5)] ring-1 ring-ink-900/8">
                <div class="aspect-[4/3] overflow-hidden rounded-[22px]"><img src="${img}" alt="" class="kenburns size-full object-cover"></div>
              </div>
            </div>
            <div class="floaty absolute -bottom-5 -left-2 flex items-center gap-2 rounded-2xl bg-ink-900 px-4 py-3 text-white shadow-xl">
              <span class="led font-mono text-sm">▲</span><span class="text-[12px] font-medium">MATRIX Lift</span>
            </div>
          </div>` : ""}
          ${side && !img ? `
          <div class="fade-up relative lg:col-span-5" style="--d:.45s">
            <div class="absolute inset-0 translate-x-4 translate-y-4 rounded-[32px] border-2 border-dashed border-brand-400/50 bg-mint/60" aria-hidden="true"></div>
            <div class="relative overflow-hidden rounded-[30px] bg-ink-900 p-7 text-white shadow-[0_40px_80px_-40px_rgba(12,27,51,.6)] sm:p-8">
              <div class="bg-floors absolute inset-0 opacity-15"></div>
              <div class="blob -right-16 -top-16 size-56 bg-brand-500/30"></div>
              <div class="relative">${side}</div>
            </div>
          </div>` : ""}
        </div>
      </section>`,

    quoteForm: (preset = "") => `
      <form class="js-quote grid gap-5 sm:grid-cols-2" novalidate>
        <div class="fld"><label class="label" for="q-name">Full name *</label><input id="q-name" name="name" class="field" required autocomplete="name"><p class="err mt-1 hidden text-xs text-red-500">Please enter your name.</p></div>
        <div class="fld"><label class="label" for="q-company">Company</label><input id="q-company" name="company" class="field" autocomplete="organization"></div>
        <div class="fld"><label class="label" for="q-phone">Phone *</label><input id="q-phone" name="phone" type="tel" class="field" required autocomplete="tel" placeholder="+880"><p class="err mt-1 hidden text-xs text-red-500">Enter a valid phone number.</p></div>
        <div class="fld"><label class="label" for="q-email">Email *</label><input id="q-email" name="email" type="email" class="field" required autocomplete="email"><p class="err mt-1 hidden text-xs text-red-500">Enter a valid email address.</p></div>
        <div class="fld"><label class="label" for="q-interest">Product / service *</label>
          <select id="q-interest" name="interest" class="field" required>
            <option value="">Select…</option>
            <optgroup label="Products">${ML.products.map((p) => `<option value="${p.slug}" ${p.slug === preset ? "selected" : ""}>${p.name}</option>`).join("")}</optgroup>
            <optgroup label="Services">${ML.services.map((s) => `<option value="${s.key}" ${s.key === preset ? "selected" : ""}>${s.name}</option>`).join("")}</optgroup>
          </select><p class="err mt-1 hidden text-xs text-red-500">Please choose an option.</p></div>
        <div class="fld"><label class="label" for="q-loc">Project location</label><input id="q-loc" name="location" class="field" placeholder="e.g. Gulshan, Dhaka"></div>
        <div class="fld sm:col-span-2"><label class="label" for="q-msg">Project details *</label><textarea id="q-msg" name="message" rows="4" class="field resize-none" required placeholder="Building type, number of floors, expected timeline…"></textarea><p class="err mt-1 hidden text-xs text-red-500">Tell us a little about your project.</p></div>
        <div class="fld sm:col-span-2"><label class="flex items-start gap-3 text-[14.5px] text-ink-500"><input type="checkbox" required class="mt-0.5 size-4 accent-brand-500"> I agree that MATRIX may use these details to respond to my enquiry.</label><p class="err mt-1 hidden text-xs text-red-500">Consent is required to send the enquiry.</p></div>
        <input type="text" name="website" class="hidden" tabindex="-1" autocomplete="off" aria-hidden="true">
        <div class="sm:col-span-2"><button type="submit" class="btn btn-primary w-full sm:w-auto">Submit enquiry ${icon("arrow", "size-4")}</button></div>
      </form>`,
  };
})();
