<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

import supabase from '../supabase';
import BackButton from '../components/BackButton.vue';
import TextInput from '../components/TextInput.vue';
import TextareaInput from '../components/TextareaInput.vue';
import SelectInput from '../components/SelectInput.vue';
import Button from '../components/Button.vue';

const router = useRouter();

const text = ref('');
const textError = ref('');
const select = ref('Feature');
const textarea = ref('');
const textareaError = ref('');

const onTextInputChange = (e: any) => {
  text.value = e.target.value;

  if (textError.value.length && text.value.trim().length > 0) {
    textError.value = '';
  }
};

const onTextareaInputChange = (e: any) => {
  textarea.value = e.target.value;

  if (textareaError.value.length && textarea.value.trim().length > 0) {
    textareaError.value = '';
  }
};

const onSelectInputChange = (value: string) => {
  select.value = value;
};

const onSubmit = async (e: Event) => {
  e.preventDefault();

  textError.value = '';
  textareaError.value = '';

  if (text.value.trim().length === 0) {
    textError.value = 'Can’t be empty';
  }

  if (textarea.value.trim().length === 0) {
    textareaError.value = 'Can’t be empty';
  }

  if (textError.value.length > 0 || textareaError.value.length > 0) {
    return;
  }

  await supabase.from('feedback').insert({
    title: text.value,
    description: textarea.value,
    type: select.value,
  });

  router.push('/');
};
</script>

<template>
  <div class="new">
    <BackButton />
    <div class="new__feedback">
      <svg
        class="new__feedback__icon"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 56 56"
        fill="none"
      >
        <circle cx="28" cy="28" r="28" fill="url(#paint0_radial_0_2017)" />
        <path
          d="M30.3425 36V30.1657H36.0295V25.8637H30.3425V20H25.7459V25.8637H20V30.1657H25.7459V36H30.3425Z"
          fill="white"
        />
        <defs>
          <radialGradient
            id="paint0_radial_0_2017"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(58.184 -5.81647) rotate(129.411) scale(93.4169)"
          >
            <stop stop-color="#E84D70" />
            <stop offset="0.530886" stop-color="#A337F6" />
            <stop offset="1" stop-color="#28A7ED" />
          </radialGradient>
        </defs>
      </svg>
      <h1>Create New Feedback</h1>
      <form @submit="onSubmit" class="new__feedback__form">
        <TextInput
          :value="text"
          :title="'Feedback Title'"
          :description="'Add a short, descriptive headline'"
          :error="textError"
          :onChange="onTextInputChange"
        />
        <SelectInput
          :value="select"
          :title="'Category'"
          :description="'Choose a category for your feedback'"
          :options="['Feature', 'UI', 'UX', 'Enhancement', 'Bug']"
          :onChange="onSelectInputChange"
        />
        <TextareaInput
          :value="textarea"
          :title="'Feedback Detail'"
          :description="'Include any specific comments on what should be improved, added, etc.'"
          :error="textareaError"
          :onChange="onTextareaInputChange"
        />
        <div class="new__feedback__form__buttons">
          <RouterLink to="/">
            <Button :text="'Cancel'" :statu="'black'" type="button" />
          </RouterLink>
          <Button :text="'Add Feedback'" :statu="'purple'" :type="'submit'" />
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped lang="scss">
.new {
  max-width: 540px;
  margin: 92px auto 0 auto;
}

.new__feedback {
  position: relative;
  padding: 52px 42px 40px;
  margin-top: 68px;
  background: $color-white;
  border-radius: 10px;
}

.new__feedback__icon {
  position: absolute;
  top: 0;
  left: 42px;
  transform: translate(0, -50%);
  width: 56px;
  height: 56px;
}

.new__feedback__form {
  margin-top: 40px;
}

.new__feedback__form__container {
  margin-bottom: 24px;

  p {
    font-size: 14px;
    font-weight: 400;
  }
}

.new__feedback__form__buttons {
  display: flex;
  justify-content: flex-end;
  gap: 16px;
}
</style>
