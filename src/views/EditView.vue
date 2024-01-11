<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import supabase from '../supabase';
import BackButton from '../components/BackButton.vue';
import Button from '../components/Button.vue';
import TextInput from '../components/TextInput.vue';
import SelectInput from '../components/SelectInput.vue';
import TextareaInput from '../components/TextareaInput.vue';

const route = useRoute();
const router = useRouter();
const { id } = route.params;

const title = ref('');
const titleError = ref('');
const type = ref('');
const status = ref('');
const description = ref('');
const descriptionError = ref('');

const onTitleInputChange = (e: any) => {
  title.value = e.target.value;

  if (titleError.value.length && title.value.trim().length > 0) {
    titleError.value = '';
  }
};

const onDescriptionInputChange = (e: any) => {
  description.value = e.target.value;

  if (descriptionError.value.length && description.value.trim().length > 0) {
    descriptionError.value = '';
  }
};

const onTypeInputChange = (value: string) => {
  type.value = value;
};

const onStatusInputChange = (value: string) => {
  status.value = value;
};

const onSubmit = async (e: Event) => {
  e.preventDefault();

  await supabase
    .from('feedback')
    .update({
      title: title.value,
      type: type.value,
      status: status.value,
      description: description.value,
    })
    .eq('id', Number(id));

  router.push('/');
};

const onDelete = async () => {
  await supabase.from('feedback').delete().eq('id', Number(id));

  router.push('/');
};

onMounted(async () => {
  const res = await supabase
    .from('feedback')
    .select()
    .eq('id', Number(id))
    .single();

  if (res.data) {
    title.value = res.data.title;
    type.value = res.data.type;
    status.value = res.data.status;
    description.value = res.data.description;
  }
});
</script>

<template>
  <div class="edit">
    <BackButton />
    <div class="edit__feedback">
      <svg
        class="edit__feedback__icon"
        xmlns="http://www.w3.org/2000/svg"
        width="56"
        height="56"
        viewBox="0 0 56 56"
        fill="none"
      >
        <circle cx="28" cy="28" r="28" fill="url(#paint0_radial_0_1978)" />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M29.0825 19.4809L32.8315 16L39.345 22.2719L35.7969 25.952L29.0825 19.4809ZM16 39.5949C16.9207 35.6533 19.4867 25.5743 19.4867 25.5743L27.6895 20.7535L34.5209 27.1499L29.3017 34.97L16.313 40L22.4703 34.2104C23.513 34.5998 24.9857 34.2478 25.7818 33.3736C26.8328 32.2255 26.7539 30.4423 25.605 29.3914C24.456 28.3404 22.5848 28.3404 21.5339 29.4885C20.751 30.3444 20.4812 31.8544 20.9287 32.8498L16 39.5949Z"
          fill="white"
        />
        <defs>
          <radialGradient
            id="paint0_radial_0_1978"
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
      <h1>Editing ‘Add a dark theme option’</h1>
      <form @submit="onSubmit" class="edit__feedback__form">
        <TextInput
          :value="title"
          :title="'Feedback Title'"
          :description="'Add a short, descriptive headline'"
          :error="titleError"
          :onChange="onTitleInputChange"
        />
        <SelectInput
          :value="type"
          :title="'Category'"
          :description="'Choose a category for your feedback'"
          :options="['Feature', 'UI', 'UX', 'Enhancement', 'Bug']"
          :onChange="onTypeInputChange"
        />
        <SelectInput
          :value="status"
          :title="'Category'"
          :description="'Choose a category for your feedback'"
          :options="['Suggestion', 'Planned', 'In-Progress', 'Live']"
          :onChange="onStatusInputChange"
        />
        <TextareaInput
          :value="description"
          :title="'Feedback Detail'"
          :description="'Include any specific comments on what should be improved, added, etc.'"
          :error="descriptionError"
          :onChange="onDescriptionInputChange"
        />
        <div class="edit__feedback__form__buttons">
          <Button
            :text="'Delete'"
            :statu="'red'"
            type="button"
            :onClick="onDelete"
          />
          <div class="edit__feedback__form__buttons__container">
            <RouterLink to="/">
              <Button :text="'Cancel'" :statu="'black'" type="button" />
            </RouterLink>
            <Button
              :text="'Edit Feedback'"
              :statu="'purple'"
              :type="'submit'"
            />
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped lang="scss">
.edit {
  max-width: 540px;
  margin: 92px auto 0 auto;
}

.edit__feedback {
  position: relative;
  padding: 52px 42px 40px;
  margin-top: 68px;
  background: $color-white;
  border-radius: 10px;
}

.edit__feedback__icon {
  position: absolute;
  top: 0;
  left: 42px;
  transform: translate(0, -50%);
  width: 56px;
  height: 56px;
}

.edit__feedback__form__buttons {
  display: flex;
  justify-content: space-between;
}

.edit__feedback__form__buttons__container {
  display: flex;
  gap: 16px;
}

.edit__feedback__form {
  margin-top: 40px;
}
</style>
