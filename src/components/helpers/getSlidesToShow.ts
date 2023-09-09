import { ref, computed } from "vue";
// получаем книгу из списка books по id

export function getSlidesToShow() {
  const screenWidth = ref(window.innerWidth);
  const slidesToShow = computed(() => {
    if (screenWidth.value < 840) {
      return 2;
    } else if (screenWidth.value < 540) {
      return 1;
    } else {
      return 3.5;
    }
  });

  return { slidesToShow };
}
