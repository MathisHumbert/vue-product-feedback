<script setup lang="ts">
const { value, title, description, error, onChange } = defineProps<{
  value: string;
  title: string;
  description: string;
  error: string;
  onChange: (e: any) => void;
}>();
</script>

<template>
  <div class="input">
    <h4>{{ title }}</h4>
    <p>{{ description }}</p>
    <input :value="value" @input="onChange" class="input__text" type="text" />
    <p class="input__error" v-if="error">{{ error }}</p>
  </div>
</template>

<style scoped lang="scss">
.input {
  margin-bottom: 24px;

  h4 {
    color: $color-special-black;
  }

  p {
    font-size: 14px;
    font-weight: 400;
  }
}

.input__text {
  margin-top: 16px;
  width: 100%;
  height: 48px;
  padding-left: 24px;
  background: $color-background;
  color: $color-special-black;
  border: none;
  border-radius: 5px;
  font-family: 'Jost', sans-serif;
  font-size: 15px;
  font-weight: 400;
  border: 1px solid transparent;
  cursor: pointer;

  &:focus {
    outline: none;
    border: 1px solid $color-blue;
  }

  &:hover {
    border: 1px solid $color-blue;
  }
}

.input__error {
  margin-top: 2px;
  color: $color-red;
}
</style>
