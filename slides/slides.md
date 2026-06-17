---
theme: default
title: Prompt Engineering 101
# Hash routing: required for GitHub Pages project sites. Avoids deep-link 404s
# and base-path doubling that history mode hits under a /<repo>/ subpath.
routerMode: hash
info: |
  ## Prompt Engineering 101
  A 60-minute hands-on workshop on getting great work out of AI — on purpose.
colorSchema: light
fonts:
  sans: Public Sans
  serif: Fraunces
  mono: JetBrains Mono
transition: slide-left
mdc: true
layout: cover
class: cover-slide
---

<div class="presented-by">
  <span class="presented-by-label">presented by</span>
  <img :src="$base + 'coin-cropped.png'" class="presented-by-coin" alt="Codédex coin" />
  <img :src="$base + 'codedex-logo.svg'" class="presented-by-logo" alt="Codédex" />
</div>

# Prompt Engineering <span class="accent">101</span>

<p class="subtitle">Getting great work out of AI, on purpose.</p>

<p class="byline">A 60-minute hands-on workshop</p>

<p class="presenter">Dharma J. (2026)</p>

---
layout: default
class: about-slide
---

# About me

<div class="about-grid">
<div class="about-photo">
<img :src="$base + 'dharma.png'" alt="Dharmarajsinh Jethva" />
</div>
<div class="about-bio">
  <ul>
    <li><strong>Founding engineer @ Codédex</strong></li>
    <li>Built &amp; supported the site since day one</li>
  </ul>
  <p class="about-label">when I'm not coding</p>
  <ul>
    <li>Light novels · manga · anime · Souls games</li>
    <li>I use Neovim (btw)</li>
  </ul>
</div>
</div>

---
class: hook-slide
---

# Treat it like ordering your coffee!

<div class="compare">
<div class="prompt-card prompt-bad">
give me coffee
</div>
<div class="prompt-card prompt-good" v-click>
I want a <b>medium oat-milk latte</b>, <b>extra shot</b>, <b>half the syrup</b>, <b>extra hot</b>. <b>For here</b>, not to go. Suggest good coffee shops.
</div>
</div>

<p class="footnote" v-click>Let's run both right now.</p>

---
class: agenda-slide
---

# The next 60 minutes

<div class="agenda">

1. **A mental model**: what's actually happening in there
2. **The Big Five**: techniques that fix most bad prompts
3. **Your turn**: fix a bad prompt
4. **Safety & Limitations**: when not to trust the output

</div>

---
src: ./pages/01-mental-model.md
---

---
src: ./pages/02-techniques.md
---

---
src: ./pages/03-exercise.md
---

---
src: ./pages/04-pitfalls.md
---

---
src: ./pages/05-wrap.md
---
