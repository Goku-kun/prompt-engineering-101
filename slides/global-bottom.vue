<template>
  <div
    v-if="$slidev.nav.currentPage > 1 && $slidev.nav.currentPage < $slidev.nav.total"
    class="running-head"
  >
    <span>Prompt Engineering 101</span>
    <span class="running-head-page">{{ $slidev.nav.currentPage }} · {{ $slidev.nav.total }}</span>
  </div>
</template>
