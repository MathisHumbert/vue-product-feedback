<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

import { Feedback } from '../types';
import supabase from '../supabase';
import BackButton from '../components/BackButton.vue';
import Button from '../components/Button.vue';
import FeedbackCard from '../components/FeedbackCard.vue';

const route = useRoute();
const { id } = route.params;
const feedback = ref<null | Feedback>(null);

onMounted(async () => {
  const res = await supabase
    .from('feedback')
    .select()
    .eq('id', Number(id))
    .single();

  if (res.data) {
    feedback.value = res.data;
  }
});
</script>

<template>
  <div class="detail">
    <header class="detail__header">
      <BackButton />
      <RouterLink :to="`/edit/${id}`">
        <Button :text="'Edit Feedback'" :statu="'blue'" />
      </RouterLink>
    </header>
    <FeedbackCard v-if="feedback" :feedback="feedback" />
  </div>
</template>

<style scoped lang="scss">
.detail {
  max-width: 730px;
  margin: 0 auto;
}

.detail__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 80px 0px 24px;
}
</style>
