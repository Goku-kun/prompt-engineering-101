---
layout: section
---

<div class="section-num">1</div>

<p class="part-label">Part 1</p>

# What's actually happening in there

---

# A very well-read autocomplete

<div class="completion-demo">
<span class="completion-stem">"The cat sat on the…"</span>
<span class="chip chip-strong">mat <small>most likely</small></span>
<span class="chip">sofa</span>
<span class="chip">roof</span>
<span class="chip chip-faint">spreadsheet <small>unlikely</small></span>
</div>

<v-clicks>

- An LLM does one thing: **predict the next token**, over and over, from patterns in a vast amount of text
- It isn't looking things up in a database. It continues your text the way the text it has seen *plausibly would*
- That's why it's brilliant at *"shaped-like-this"* tasks, and shaky on exact facts

</v-clicks>

---

# It only sees this conversation

<div class="grid grid-cols-2 gap-6 mt-2">
<div class="panel panel-yes">

**The model sees**

- Every message in *this* chat
- Its own earlier replies
- Whatever you paste in

</div>
<div class="panel panel-no">

**The model doesn't see**

- Your other chats
- Your files, email, or screen
- What you meant but didn't say

</div>
</div>

<p class="footnote" v-click>In very long chats, the earliest details fade. Restate what matters.</p>

---
class: punchline-slide
---

# Vague in, average out

The Prompt is the one dial you can actually control.

<p class="big-statement-kicker" v-click>Prompting is a <span class="accent">skill</span>, not a vibe.</p>
