<script setup lang="ts">
const {
  onClick = () => {},
  text,
  type = 'button',
  statu = 'purple',
} = defineProps<{
  onClick?: () => void;
  text: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  statu?: string;
}>();
</script>

<template>
  <button @click="onClick" :type="type" :class="`${statu}`">
    {{ text }}
  </button>
</template>

<style scoped lang="scss">
button {
  padding: 12.5px 24px 11.5px;
  border-radius: 10px;
  border: none;
  color: $color-light-grey;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;

  &.purple {
    background: $color-purple;

    &:hover {
      background: $color-light-purple;
    }
  }

  &.black {
    background: $color-special-black;

    &:hover {
      background: $color-light-dark;
    }
  }

  &.blue {
    background: $color-blue;

    &:hover {
      background: $color-light-blue;
    }
  }

  &.red {
    background: $color-red;

    &:hover {
      background: $color-light-red;
    }
  }
}
</style>
