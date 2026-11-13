/* KOREAN DISCOVERY｜共用互動與元件渲染 */
(() => {
  "use strict";
  const articles = window.KD_ARTICLES || [];
  const $ = (selector, scope = document) => scope.querySelector(selector);
  const categoryNames = {
    "Hangul": "韓文字母與發音",
    "Daily Korean": "日常韓文",
    "Korean Culture": "韓國文化",
    "Internet Slang": "網路流行語",
    "Language Facts": "有趣的語言現象"
  };

  function cardTemplate(article, featured = false) {
    return `
      <article class="article-card ${featured ? "article-card-featured" : ""}">
        <a class="card-cover ${article.coverClass}" href="article.html?id=${encodeURIComponent(article.id)}" aria-label="閱讀：${article.title}">
          <span class="cover-kicker">${article.coverNote}</span><span class="cover-visual-text">${article.coverText}</span>
          <span class="cover-corner">↗</span><span class="cover-grain"></span>
        </a>
        <div class="card-content">
          <div class="card-meta"><span class="category-tag">${article.categoryLabel}</span><span>${article.readTime}</span></div>
          <h3><a href="article.html?id=${encodeURIComponent(article.id)}">${article.title}</a></h3>
          <p>${article.excerpt}</p>
          <div class="card-footer"><time>${article.date}</time><a href="article.html?id=${encodeURIComponent(article.id)}" aria-label="閱讀文章">READ STORY <span>↗</span></a></div>
        </div>
      </article>`;
  }

  function renderHome() {
    const featured = $("#featured-articles");
    const latest = $("#latest-articles");
    if (featured) {
      const picks = articles.filter(a => a.featured).slice(0, 3);
      featured.innerHTML = picks.map((a, i) => cardTemplate(a, i === 0)).join("");
    }
    if (latest) {
      latest.innerHTML = [...articles].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 4).map((a, i) => `
        <article class="latest-item">
          <span class="latest-number">0${i + 1}</span>
          <div class="latest-info"><span class="latest-category">${a.categoryLabel} <i>/</i> ${a.date}</span><h3><a href="article.html?id=${encodeURIComponent(a.id)}">${a.title}</a></h3><p>${a.excerpt}</p></div>
          <a class="latest-arrow" href="article.html?id=${encodeURIComponent(a.id)}" aria-label="閱讀文章">↗</a>
        </article>`).join("");
    }
  }

  function renderListing() {
    const grid = $("#all-articles");
    if (!grid) return;
    const params = new URLSearchParams(location.search);
    let activeCategory = params.get("category") || "all";
    let keyword = "";
    const filters = $("#category-filters");
    const search = $("#article-search");
    const count = $("#article-count");
    const resultLabel = $("#result-label");
    const empty = $("#empty-state");

    function update() {
      const filtered = articles.filter(a => {
        const categoryMatch = activeCategory === "all" || a.category === activeCategory;
        const haystack = `${a.title} ${a.subtitle} ${a.excerpt} ${a.categoryLabel} ${a.coverText}`.toLowerCase();
        return categoryMatch && haystack.includes(keyword.toLowerCase());
      });
      grid.innerHTML = filtered.map(a => cardTemplate(a)).join("");
      if (count) count.textContent = `${String(filtered.length).padStart(2, "0")} STORIES`;
      if (resultLabel) resultLabel.textContent = activeCategory === "all" ? "ALL STORIES" : (categoryNames[activeCategory] || activeCategory).toUpperCase();
      if (empty) empty.hidden = filtered.length > 0;
      grid.hidden = filtered.length === 0;
      filters?.querySelectorAll(".filter-button").forEach(btn => {
        const active = btn.dataset.category === activeCategory;
        btn.classList.toggle("active", active);
        btn.setAttribute("aria-pressed", String(active));
      });
    }
    filters?.addEventListener("click", event => {
      const button = event.target.closest("[data-category]");
      if (!button) return;
      activeCategory = button.dataset.category;
      const url = new URL(location.href);
      if (activeCategory === "all") url.searchParams.delete("category");
      else url.searchParams.set("category", activeCategory);
      history.replaceState({}, "", url);
      update();
    });
    search?.addEventListener("input", () => { keyword = search.value.trim(); update(); });
    $("#clear-filters")?.addEventListener("click", () => {
      activeCategory = "all"; keyword = ""; if (search) search.value = "";
      history.replaceState({}, "", location.pathname); update();
    });
    update();
  }

  function wordTemplate(word) {
    return `<div class="korean-word"><div class="word-main"><span>${word.korean}</span><small>${word.roman}</small></div><div class="word-definition"><b>${word.meaning}</b><p>${word.note}</p></div></div>`;
  }
  function exampleTemplate(example, index) {
    return `<div class="example-box"><span class="example-index">EXAMPLE 0${index + 1}</span><p class="example-korean">${example.korean}</p><p class="example-roman">${example.roman}</p><p class="example-meaning">${example.meaning}</p><p class="example-usage">${example.usage}</p></div>`;
  }

  function renderArticle() {
    const root = $("#article-content");
    if (!root) return;
    const id = new URLSearchParams(location.search).get("id");
    const article = articles.find(a => a.id === id) || articles[0];
    if (!article) {
      root.innerHTML = `<div class="container not-found"><p class="eyebrow">404 / STORY NOT FOUND</p><h1>這篇故事暫時找不到。</h1><a class="button button-dark" href="articles.html">回到文章列表 ↗</a></div>`;
      return;
    }
    document.title = `${article.title}｜KOREAN DISCOVERY`;
    const related = (article.related || []).map(key => articles.find(a => a.id === key)).filter(Boolean);
    root.innerHTML = `
      <div class="container article-breadcrumb"><a href="index.html">首頁</a><span>/</span><a href="articles.html">主題文章</a><span>/</span><span>${article.categoryLabel}</span></div>
      <header class="article-header container">
        <div class="article-heading-copy"><span class="category-tag">${article.categoryLabel}</span><p class="eyebrow article-issue">KOREAN DISCOVERY / STORY NO. ${String(articles.indexOf(article) + 1).padStart(2, "0")}</p>
          <h1>${article.title}</h1><p class="article-subtitle">${article.subtitle}</p>
          <div class="article-byline"><span>${article.author}</span><i></i><time>${article.date}</time><i></i><span>${article.readTime}</span></div>
        </div>
      </header>
      <div class="container"><div class="article-cover ${article.coverClass}"><span class="cover-kicker">${article.coverNote}</span><span class="article-cover-word">${article.coverText}</span><span class="article-cover-caption">KOREAN DISCOVERY — ISSUE 01</span></div></div>
      <div class="container article-layout">
        <aside class="article-side-note"><span>IN THIS STORY</span><a href="#intro">主題介紹</a><a href="#knowledge">知識解析</a><a href="#vocabulary">韓文單字</a><a href="#examples">實際情境</a><a href="#takeaways">重點整理</a></aside>
        <article class="article-body">
          <section id="intro" class="article-section article-intro"><p class="eyebrow">01 / THE INTRODUCTION</p><h2>先來認識這個主題。</h2><p>${article.intro}</p></section>
          <section id="knowledge" class="article-section"><p class="eyebrow">02 / LET'S DISCOVER</p><h2>知識解析<span class="heading-period">.</span></h2>${article.sections.map(section => `<div class="knowledge-block"><h3>${section.heading}</h3>${section.paragraphs.map(p => `<p>${p}</p>`).join("")}</div>`).join("")}</section>
          <section id="vocabulary" class="article-section"><p class="eyebrow">03 / WORD COLLECTION</p><h2>這些韓文要記住。</h2><p class="section-lead">先從幾個關鍵字開始，搭配羅馬拼音與中文意思一起認識。</p><div class="word-list">${article.words.map(wordTemplate).join("")}</div></section>
          <section id="examples" class="article-section"><p class="eyebrow">04 / IN REAL LIFE</p><h2>放進生活裡試試看。</h2><p class="section-lead">看看這些句子會在什麼情境出現。</p><div class="examples-grid">${article.examples.map(exampleTemplate).join("")}</div></section>
          <section id="takeaways" class="article-section"><p class="eyebrow">05 / KEEP IN MIND</p><h2>這次探索的三個重點。</h2><div class="highlight-box"><span class="highlight-label">TAKEAWAY NOTES</span><ol>${article.takeaways.map(item => `<li>${item}</li>`).join("")}</ol></div></section>
          <div class="article-endnote"><span>✳</span><p>今天也多認識了一點韓文。<br>下一篇故事，繼續一起探索。</p></div>
        </article>
      </div>
      <section class="related-section"><div class="container"><div class="section-heading"><div><p class="eyebrow">06 / KEEP EXPLORING</p><h2>接著讀這些<span class="heading-period">.</span></h2></div><a class="text-link" href="articles.html">所有文章 ↗</a></div><div class="related-grid">${related.map(a => cardTemplate(a)).join("")}</div></div></section>
      <div class="container article-back"><a class="text-link" href="articles.html">← 回到文章列表</a></div>`;
  }

  function setupMenu() {
    const toggle = $(".menu-toggle");
    const nav = $(".main-nav");
    if (!toggle || !nav) return;
    toggle.addEventListener("click", () => {
      const expanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!expanded));
      nav.classList.toggle("nav-open", !expanded);
      document.body.classList.toggle("menu-is-open", !expanded);
    });
    nav.addEventListener("click", event => {
      if (event.target.closest("a")) {
        toggle.setAttribute("aria-expanded", "false");
        nav.classList.remove("nav-open");
        document.body.classList.remove("menu-is-open");
      }
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    setupMenu();
    renderHome();
    renderListing();
    renderArticle();
  });
})();
