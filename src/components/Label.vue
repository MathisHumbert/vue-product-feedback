<script setup lang="ts">
const {
  text,
  allowHover = false,
  active = false,
} = defineProps<{
  text: string;
  allowHover?: boolean;
  active?: boolean;
}>();
</script>

<template>
  <div v-if="!allowHover" class="label">
    {{ text }}
  </div>
  <div v-else-if="active" class="label--active">
    {{ text }}
  </div>
  <div v-else class="label--hover">
    {{ text }}
  </div>
</template>

<style scoped lang="scss">
.label {
  width: fit-content;
  padding: 6px 16px;
  background: $color-light-grey;
  border-radius: 10px;
  color: #4661e6;
  font-size: 13px;
  font-weight: 600;
}
</style>
