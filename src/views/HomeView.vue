<script setup lang="ts">
import { ref, onMounted } from 'vue';

import supabase from '../supabase';
import HomeHeader from '../sections/home/HomeHeader.vue';
import HomeNavbar from '../sections/home/HomeNavbar.vue';
import FeedbackCard from '../components/FeedbackCard.vue';
import Button from '../components/Button.vue';
import { Feedback } from '../types/index';

const feedbacks = ref<Feedback[]>([]);
const loading = ref(true);

onMounted(async () => {
  const res = await supabase.from('feedback').select();

  if (res.data) {
    feedbacks.value = res.data;
    loading.value = false;
  }
});
</script>

<template>
  <div class="home">
    <div v-if="!loading" class="home__container">
      <HomeNavbar />
      <div class="home__content">
        <HomeHeader :total="feedbacks.length" />
        <section v-if="feedbacks.length" class="home__feedbacks">
          <FeedbackCard v-for="feedback in feedbacks" :feedback="feedback" />
        </section>
        <section v-else class="home__empty">
          <img src="/empty.png" alt="empty" class="home__empty__img" />
          <h1 class="home__empty__title">There is no feedback yet.</h1>
          <p class="body2">
            Got a suggestion? Found a bug that needs to be squashed? We love
            hearing about new ideas to improve our app.
          </p>
          <RouterLink to="/new">
            <Button text="+ Add Feedback" :statu="'purple'" />
          </RouterLink>
        </section>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.home {
  padding: 48px;
}

.home__container {
  display: flex;
  gap: 30px;
}

.home__content {
  width: 100%;
}

.home__feedbacks {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.home__empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 110px 0;
  background: $color-white;
}

.home__empty__img {
  margin-bottom: 54px;
}

.home__empty__title {
  color: $color-special-black;
  margin-bottom: 16px;
}

.body2 {
  max-width: 410px;
  margin-bottom: 48px;
  text-align: center;
}
</style>
