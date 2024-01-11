<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <RouterLink to="/">
    <div class="back__button">
      <svg
        class="back__button__icon"
        xmlns="http://www.w3.org/2000/svg"
        width="6"
        height="10"
        viewBox="0 0 6 10"
        fill="none"
      >
        <path
          d="M4.33447 9L0.334473 5L4.33447 1"
          stroke="#4661E6"
          stroke-width="2"
        />
      </svg>
      <p class="back__button__text">Go Back</p>
    </div></RouterLink
  >
</template>

<style scoped lang="scss">
a {
  text-decoration: none;
  color: $color-grey;

  &:hover {
    text-decoration: underline;
  }
}

.back__button {
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 14px;
  font-weight: 700;
}
</style>
