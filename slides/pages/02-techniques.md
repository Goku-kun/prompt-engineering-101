---
layout: section
---

<div class="section-num">2</div>

<p class="part-label">Part 2</p>

# The Big ~~Three~~ Five

<p class="section-sub">Five techniques that fix most bad prompts</p>

---

# 1 · Be specific

<div class="ghost-num">1</div>

<div class="compare">
<div class="prompt-card prompt-bad">
explain Breaking Bad
</div>
<div class="prompt-card prompt-good" v-click>
Explain <b>season 1</b> of Breaking Bad to <b>someone who only watches anime</b>. <b>No spoilers (past episode 3)</b>. Max <b>100 words</b>. End with: <b>binge or skip</b>.
</div>
</div>

<p class="technique-rule" v-click>Four dials: audience · tone · format · length</p>

---

# 2 · Give context

<div class="ghost-num">2</div>

<div class="compare">
<div class="prompt-card prompt-bad">
recommend me a game
</div>
<div class="prompt-card prompt-good" v-click>
Recommend me a game. I loved <b>Hades and Stardew Valley</b> and <b>bounce off anything with PvP or 100-hour grinds</b>. I get about <b>30 minutes a night on a Switch</b>. Give <b>3 picks</b> with a one-line reason each.
</div>
</div>

<figure class="gif-figure gif-side" v-click>
<img :src="$base + 'kobe-more.gif'" alt="Kobe nodding emphatically" width="200px" />
<figcaption>How much context should you add? <b>MORE.</b></figcaption>
</figure>

---

# 3 · Assign a role

<div class="ghost-num">3</div>

<div class="compare">
<div class="prompt-card prompt-bad">
is my resume any good?
</div>
<div class="prompt-card prompt-good" v-click>
You are <b>Gordon Ramsay reviewing my resume like it's a failing dish</b>: brutally honest, specific, no sugar-coating. What makes you <b>bin it in 10 seconds</b>, and which <b>3 fixes</b> matter most?
</div>
</div>

<p class="technique-rule" v-click>A role sets vocabulary, priorities, and standards in one sentence</p>

<img class="slide-gif gif-br" width="350px" v-click :src="$base + 'gordon-raw.gif'" alt="Gordon Ramsay: it's raw" />

---

# 4 · Show, don't tell

<div class="ghost-num">4</div>

<div class="compare">
<div class="prompt-card prompt-bad">
Write movie reviews in my style.
</div>
<div class="prompt-card prompt-good" v-click>
Write a one-line review of Dune, matching these:
<br />
<span class="example-line">"Batman Begins: pure adrenaline, zero camp, will redefine the superhero origin. — “Why do we fall, sir? So that we can learn to pick ourselves up.”"</span>
<br />
<span class="example-line">"The Matrix: pure cyberpunk, zero filler, will redefine your reality. — “There is no spoon.”"</span>
</div>
</div>

<p class="technique-rule" v-click>One or two examples beat three paragraphs of description</p>

---

# 5 · Specify the format

<div class="ghost-num">5</div>

<div class="compare">
<div class="prompt-card prompt-bad">
what are some good co-op games?
</div>
<div class="prompt-card prompt-good" v-click>
List <b>5 couch co-op games</b> as a table: <b>title · platform · players · chaos level (1–5)</b>. End with a <b>2-sentence</b> pick for game night.
</div>
</div>

<p class="technique-rule" v-click>Name the shape: table, bullets, sections, word count, JSON</p>

---

# Bonus · Think step by step

<div class="ghost-num">+</div>

<v-clicks>

- **The five magic words**: _"Let's think step by step"_ turns a coin-flip guess into a worked answer
- **Split big tasks**: outline, then draft, then polish. Three small prompts beat one giant one
- **Ask for self-critique**: _"Now critique your answer and improve it"_ is a free second draft

</v-clicks>

<img class="slide-gif gif-br" v-click :src="$base + 'math-lady.gif'" alt="Confused math-lady calculations meme" />

---

# Anatomy of a great prompt

<div class="anatomy">
<div class="anatomy-row" v-click><span class="anatomy-tag">Role</span><span>You are an upbeat running coach who has trained dozens of total beginners.</span></div>
<div class="anatomy-row" v-click><span class="anatomy-tag">Context</span><span>I can't run for 2 minutes straight. Free 3 mornings a week. Bad knees.</span></div>
<div class="anatomy-row" v-click><span class="anatomy-tag">Task</span><span>Build me a week-by-week plan to jog a 5K in 8 weeks.</span></div>
<div class="anatomy-row" v-click><span class="anatomy-tag">Example</span><span>Describe each week like: "Week 1: jog 1 min / walk 2 min, ×6. Win: just leave the house."</span></div>
<div class="anatomy-row" v-click><span class="anatomy-tag">Format</span><span>Numbered weeks, one line each, plus one recovery tip at the end.</span></div>
</div>
