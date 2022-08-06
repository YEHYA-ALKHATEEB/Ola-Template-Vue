<template>
  <div class="fleet-carousel">
    <Carousel class="" :settings="settings" :breakpoints="breakpoints">
      <Slide
        class="set-borders"
        v-for="(slide, slideIndex) in objects"
        :key="slideIndex"
      >
        <div class="carousel__item">
          <div>
            <div
              class="d-flex borfer flex-column justify-content-center align-items-center"
            >
              <div class="mb-2 rounded-circle">
                <img
                  class="p-1"
                  :src="require('@/assets/image/' + slide.picture)"
                  alt=" logo"
                />
              </div>
              <div>
                <p>{{ slide.name }}</p>
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
});
///demo/photos/abstracts/2.png
// breakpoints are mobile first
// any settings not specified will fallback to the carousel settings
const objects = ref([
  {
    id: "0",
    name: "Auto",
    picture: "Auto.svg",
  },
  {
    id: "1",
    name: "Bike",
    picture: "Bike.svg",
  },
  {
    id: "2",
    name: "Share",
    picture: "Share.svg",
  },
  {
    id: "3",
    name: "Micro",
    picture: "Micro.svg",
  },
  {
    id: "4",
    name: "Mini",
    picture: "Mini.svg",
  },
  {
    id: "5",
    name: "Prime Sedan",
    picture: "Prime-Sedan.svg",
  },
  {
    id: "6",
    name: "Prime Play",
    picture: "Prime-Play.svg",
  },
  {
    id: "7",
    name: "Prime Suv",
    picture: "Prime-Play.svg",
  },
  {
    id: "8",
    name: "LUX",
    picture: "LUX.svg",
  },
  {
    id: "9",
    name: "E-Rick",
    picture: "E-Rick.svg",
  },
]);

const breakpoints = ref({
  // 700px and up

  245: {
    itemsToShow: 2,
    snapAlign: "center",
  },
  316: {
    itemsToShow: 3,
    snapAlign: "center",
  },
  700: {
    itemsToShow: 5,
    snapAlign: "center",
  },
  // 1024 and up

  1024: {
    itemsToShow: 8,
    snapAlign: "start",
  },
  1204: {
    itemsToShow: 10,
    snapAlign: "center",
  },
});
</script>
