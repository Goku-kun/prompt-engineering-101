---
layout: section
---

<div class="section-num">4</div>

<p class="part-label">Part 4</p>

# Safety & Limits

<p class="section-sub">When not to trust the output</p>

---

# If you don't question it

<img class="slide-gif" width="400px" v-click :src="$base + 'tyrion-knows.gif'" alt="Tyrion: I drink and I know things" />

---

# Confident ≠ correct

<p class="big-statement">The model is <em>fluent</em> even when it's <em>wrong</em>.</p>

<v-clicks>

- It predicts plausible text, and a confident wrong answer is often more *plausible* than "I don't know"
- Fabricated citations, dates, statistics, and case law all read exactly like real ones
- Risk is highest for: **specific facts · numbers · sources · anything recent**

</v-clicks>

<img class="slide-gif gif-br" v-click :src="$base + 'confidently-wrong.gif'" alt="Confidently incorrect reaction meme" />

---

# Habits that keep you safe

<v-clicks>

- **Verify what matters**: check any fact you'd be embarrassed to repeat before you ship it
- **Ask for its sources**, then actually open them. Broken or vague sourcing is a red flag
- **Never paste secrets**: credentials, customer data, and anything under NDA stay out of the chat
- **Treat output as a draft** from a brilliant, overconfident intern, and review it like you'd review their work

</v-clicks>

---

# Iterate — it's a conversation

<div class="iterate-loop">
<span class="loop-step">Prompt</span>
<span class="loop-arrow">→</span>
<span class="loop-step">Inspect</span>
<span class="loop-arrow">→</span>
<span class="loop-step">Refine</span>
<span class="loop-arrow">→</span>
<span class="loop-step loop-accent">Better</span>
</div>

<v-clicks>

- First answer's not right? **Don't start over. Talk back**: "shorter", "more formal", "you missed the budget constraint"
- The model holds the whole conversation, so each refinement builds on everything before it
- Two or three rounds of refinement is *normal use*, not failure

</v-clicks>
