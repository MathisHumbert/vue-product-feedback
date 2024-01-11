<script setup lang="ts">
import Label from './Label.vue';
import UpvoteButton from './UpvoteButton.vue';
import { Feedback } from '../types/index';

const { feedback } = defineProps<{ feedback: Feedback }>();
</script>

<template>
  <RouterLink :to="`/detail/${feedback.id}`">
    <article class="feedback__card">
      <UpvoteButton :total="feedback.upvotes" :isUpvoted="false" />
      <div class="feedback__card__infos">
        <h3>{{ feedback.title }}</h3>
        <p>{{ feedback.description }}</p>
        <Label :text="feedback.type" />
      </div></article
  ></RouterLink>
</template>

<style scoped lang="scss">
a {
  text-decoration: none;

  &:hover h3 {
    color: $color-blue;
  }
}

.feedback__card {
  display: flex;
  gap: 40px;
  padding: 28px;
  background: $color-white;
  border-radius: 10px;
}

h3 {
  color: $color-special-black;
  margin-bottom: 4px;
}

p {
  color: $color-grey;
  margin-bottom: 12px;
}
</style>
