<script setup lang="ts">
import { ref } from 'vue';

const { value, title, description, options, onChange } = defineProps<{
  value: string;
  title: string;
  description: string;
  options: string[];
  onChange: (e: any) => void;
}>();

const isOpen = ref(false);

const onSelectClick = (option: string) => {
  onChange(option);
  isOpen.value = false;
};
</script>

<template>
  <div class="input">
    <h4>{{ title }}</h4>
    <p>{{ description }}</p>
    <div class="input__select">
      <div
        class="input__select__input"
        :class="isOpen && 'open'"
        @click="isOpen = !isOpen"
      >
        <p>{{ value }}</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="7"
          viewBox="0 0 10 7"
          fill="none"
        >
          <path d="M1 1L5 5L9 1" stroke="#4661E6" stroke-width="2" />
        </svg>
      </div>
      <div class="input__select__list" :class="isOpen && 'open'">
        <ul class="input__select__list__container">
          <li
            class="input__select__list__item"
            v-for="option in options"
            @click="onSelectClick(option)"
            :class="option === value && 'active'"
          >
            <p>{{ option }}</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="11"
              viewBox="0 0 13 11"
              fill="none"
            >
              <path
                d="M1 5.23287L4.52154 9L12 1"
                stroke="#AD1FEA"
                stroke-width="2"
              />
            </svg>
          </li>
        </ul>
      </div>
    </div>
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

.input__select {
  position: relative;
  margin-top: 16px;
  border-radius: 5px;
}

.input__select__input {
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 24px;
  cursor: pointer;
  background: $color-background;
  border-radius: 5px;
  border: 1px solid transparent;

  p {
    color: $color-special-black;
    font-size: 15px;
    font-weight: 400;
  }

  &.open {
    border: 1px solid $color-blue;

    svg {
      transform: rotate(180deg);
    }
  }

  &:hover {
    border: 1px solid $color-blue;
  }
}

.input__select__list {
  position: absolute;
  top: 64px;
  width: 100%;
  height: 0;
  overflow: hidden;
  background: $color-white;
  box-shadow: 0px 10px 40px -7px rgba(55, 63, 104, 0.35);
  border-radius: 10px;
  z-index: 10;

  &.open {
    height: fit-content;
  }

  li {
    padding: 12px 24px;
    border-bottom: 1px solid rgba(58, 67, 116, 0.15);
  }
}

.input__select__list__item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  p {
    color: $color-grey;
    font-size: 16px;
    font-weight: 400;
  }

  svg {
    opacity: 0;
  }

  &:hover {
    p {
      color: $color-purple;
    }
  }
}

.input__select__list__item.active {
  p {
    color: $color-purple;
  }

  svg {
    opacity: 1;
  }
}
</style>
