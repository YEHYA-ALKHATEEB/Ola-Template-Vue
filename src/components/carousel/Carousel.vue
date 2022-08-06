<template>
  <div class="br-5 bg-lightsecondary share-pass-carousel">
    <Carousel class="" :settings="settings" :breakpoints="breakpoints">
      <Slide
        class="set-borders"
        v-for="(slide, slideIndex) in objects"
        :key="slideIndex"
      >
        <div class="carousel__item w-100 h-100 mx-1 py-2">
          <div>
            <div class="d-flex borfer mx-4 align-items-center">
              <div class="me-4">
                <img
                  :src="require('@/assets/image/' + slide.picture)"
                  alt=" logo"
                />
              </div>
              <div class="d-flex my-0 flex-column align-items-start">
                <a class="text-lightblue" href="">{{ slide.title }}</a>
                <p class="mb-2">{{ slide.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </Slide>
      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { Carousel, Navigation, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

const settings = ref({
  itemsToShow: 1,
  snapAlign: "center",
  loop: true,
});
///demo/photos/abstracts/2.png
// breakpoints are mobile first
// any settings not specified will fallback to the carousel settings
const objects = ref([
  {
    id: "0",
    title: "Get Yourself a Share Pass",
    description: "Enjoy cheapest rides on the go",
    picture: "play.svg",
    border: "30px",
  },
  {
    id: "1",
    title: "Get Yourself a Share Pass",
    description: "Enjoy cheapest rides on the go",
    picture: "share-pass.svg",
    border: "0px",
  },
  {
    id: "2",
    title: "Get Yourself a Share Pass",
    description: "Enjoy cheapest rides on the go",
    picture: "star.svg",
    border: "30px",
  },
  {
    id: "3",
    title: "Get Yourself a Share Pass",
    description: "Enjoy cheapest rides on the go",
    picture: "star.svg",
    border: "30px",
  },
  {
    id: "3",
    title: "Get Yourself a Share Pass",
    description: "Enjoy cheapest rides on the go",
    picture: "star.svg",
    border: "30px",
  },
]);
const breakpoints = ref({
  // 700px and up
  700: {
    itemsToShow: 1,
    snapAlign: "center",
  },
  // 1024 and up

  1024: {
    itemsToShow: 2,
    snapAlign: "start",
  },
  1204: {
    itemsToShow: 3,
    snapAlign: "center",
  },
});
</script>
