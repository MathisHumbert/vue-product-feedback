<script setup lang="ts">
const { total, isUpvoted } = defineProps<{
  total: number;
  isUpvoted: boolean;
}>();
</script>

<template>
  <button class="upvoted__button" :class="isUpvoted && 'active'">
    <svg
      class="upvoted__button__icon"
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 11 7"
      fill="none"
    >
      <path
        d="M1.33447 6L5.33447 2L9.33447 6"
        stroke="#4661E6"
        stroke-width="2"
      />
    </svg>
    <p class="upvoted__button__text">{{ total }}</p>
  </button>
</template>

<style scoped lang="scss">
.upvoted__button {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 10px 8px;
  height: fit-content;
  background: $color-light-grey;
  border: none;
  border-radius: 10px;
}

.upvoted__button__icon {
  width: 11px;
  height: 7px;
}

.upvoted__button__text {
  color: $color-special-black;

  font-size: 13px;
  font-weight: 700;
  letter-spacing: -0.181px;
}
</style>
