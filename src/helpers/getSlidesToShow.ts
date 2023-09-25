import { computed, Ref, UnwrapRef } from "vue";

// передаем количество паказываемых слайдов в карусель в зависимости от ширины экрана пользователя

export function getSlidesToShow(screenWidth: Ref<UnwrapRef<number>>) {
  const slides = computed((): number => {
    if (screenWidth.value < 540) {
      return 1.3;
    } else if (screenWidth.value < 840) {
      return 2;
    } else {
      return 3.5;
    }
  });
  return { slides };
}
