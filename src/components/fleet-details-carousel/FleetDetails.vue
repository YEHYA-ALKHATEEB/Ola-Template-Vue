<template>
  <div class="fleet-details">
    <div class="container">
      <div class="row">
        <div class="col-12 p-5">
          <Carousel class="" :settings="settings" :breakpoints="breakpoints">
            <Slide
              class="set-borders"
              v-for="(slide, slideIndex) in objects"
              :key="slideIndex"
            >
              <div class="carousel__item w-100">
                <div class="row">
                  <div class="col-12 col-md-6">
                    <img
                      class="p-1 carousel-image"
                      :src="require('@/assets/image/' + slide.picture)"
                      alt=" logo"
                    />
                  </div>
                  <div class="col-12 col-lg-6">
                    <p class="title mb-0">{{ slide.name }}</p>
                    <p class="description-1 mt-0">{{ slide.description_1 }}</p>
                    <p class="description mb-5 flex-wrap">
                      {{ slide.description_2 }}
                    </p>
                    <div
                      class="d-flex justify-content-start align-items-center"
                    >
                      <div
                        v-for="(logo, logoIndex) in slide.logos"
                        :key="logoIndex"
                      >
                        <div
                          class="me-4 h-100 logos rounded-circle"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          :title="logo.tooltip"
                        >
                          <img
                            class="me-2"
                            :src="require('@/assets/image/' + logo.image)"
                            alt="Logo"
                          />
                        </div>
                      </div>
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
      </div>
    </div>
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
    picture: "Auto.png",
    description_2:
      " The all too familiar auto ride, minus the hassle of waiting and haggling for price. A convient way to travel everyday.",
    description_1: "Get an Auto at your doorstep",
    logos: [
      { tooltip: "Eco-Friendly Ride", image: "leaves.svg" },
      { tooltip: "Value For Money", image: "R.svg" },
      { tooltip: "Cashless Rides", image: "doc.svg" },
    ],
  },
  {
    id: "1",
    name: "Bike-Taxi",
    picture: "Bike-Taxi.png",
    description_2:
      " The all too familiar auto ride, minus the hassle of waiting and haggling for price. A convient way to travel everyday.",
    description_1: "Get an Auto at your doorstep",
    logos: [
      { tooltip: "Value For Money", image: "R.svg" },
      { tooltip: "Cashless Rides", image: "doc.svg" },
    ],
  },
  {
    id: "2",
    name: "Share",
    picture: "Share-Taxi.png",
    description_2:
      " The all too familiar auto ride, minus the hassle of waiting and haggling for price. A convient way to travel everyday.",
    description_1: "Get an Auto at your doorstep",
    logos: [
      { tooltip: "Air Conditioned Cab", image: "AC-Cabs.svg" },
      { tooltip: "Eco-Friendly Ride", image: "leaves.svg" },
      { tooltip: "Value For Money", image: "R.svg" },
      { tooltip: "Cashless Rides", image: "doc.svg" },
    ],
  },
  {
    id: "3",
    name: "Micro",
    picture: "Micro-Taxi.png",
    description_2:
      " The all too familiar auto ride, minus the hassle of waiting and haggling for price. A convient way to travel everyday.",
    description_1: "Get an Auto at your doorstep",
    logos: [
      { tooltip: "Air Conditioned Cab", image: "AC-Cabs.svg" },
      { tooltip: "Value For Money", image: "R.svg" },
      { tooltip: "Compact Hatchback", image: "compact-hatchback.svg" },
      { tooltip: "Space For 2 pieces of Luggage", image: "baggage-2.svg" },
    ],
  },
  {
    id: "4",
    name: "Mini",
    picture: "Mini-Taxi.png",
    description_2:
      " The all too familiar auto ride, minus the hassle of waiting and haggling for price. A convient way to travel everyday.",
    description_1: "Get an Auto at your doorstep",
    logos: [
      { tooltip: "Air Conditioned Cab", image: "AC-Cabs.svg" },
      { tooltip: "Value For Money", image: "R.svg" },
      { tooltip: "Regular Hatchback", image: "regular-hatchback.svg" },
      { tooltip: "Space For 2 pieces of Luggage", image: "baggage-2.svg" },
    ],
  },
  {
    id: "5",
    name: "Prime Sedan",
    picture: "Prime-Sedan-Taxi.png",
    description_2:
      " The all too familiar auto ride, minus the hassle of waiting and haggling for price. A convient way to travel everyday.",
    description_1: "Get an Auto at your doorstep",
    logos: [
      { tooltip: "Air Conditioned Cab", image: "AC-Cabs.svg" },
      { tooltip: "Free Wi-Fi", image: "wifi.svg" },
      { tooltip: "Extra Legroom", image: "leg-room.svg" },
      { tooltip: "Extra Boot Space", image: "boot-space.svg" },
      { tooltip: "Executive Rides", image: "exec-ride.svg" },
    ],
  },
  {
    id: "6",
    name: "Prime Play",
    picture: "Prime-Play-Taxi.png",
    description_2:
      " The all too familiar auto ride, minus the hassle of waiting and haggling for price. A convient way to travel everyday.",
    description_1: "Get an Auto at your doorstep",
    logos: [
      { tooltip: "Entertainment By Ola Play", image: "play.svg" },
      { tooltip: "Air Conditioned Cab", image: "AC-Cabs.svg" },
      { tooltip: "Free Wi-Fi", image: "wifi.svg" },
      { tooltip: "Family Friendly Ride", image: "family.svg" },
      { tooltip: "Space For 3 pieces of Luggage", image: "baggage-3.svg" },
    ],
  },
  {
    id: "7",
    name: "Prime Suv",
    picture: "Prime-SUV-Taxi.png",
    description_2:
      " The all too familiar auto ride, minus the hassle of waiting and haggling for price. A convient way to travel everyday.",
    description_1: "Get an Auto at your doorstep",
    logos: [
      { tooltip: "Extra Legroom", image: "leg-room.svg" },
      { tooltip: "Air Conditioned Cab", image: "AC-Cabs.svg" },
      { tooltip: "Free Wi-Fi", image: "wifi.svg" },
      { tooltip: "Family Friendly Ride", image: "family.svg" },
      { tooltip: "Space For 3 pieces of Luggage", image: "baggage-3.svg" },
    ],
  },
  {
    id: "8",
    name: "LUX",
    picture: "LUX-Taxi.png",
    description_2:
      " The all too familiar auto ride, minus the hassle of waiting and haggling for price. A convient way to travel everyday.",
    description_1: "Get an Auto at your doorstep",
    logos: [
      { tooltip: "Extra Legroom", image: "leg-room.svg" },
      { tooltip: "Water Bottle Available", image: "water-bottle.svg" },
      { tooltip: "Luxury Ride", image: "lux-ride.svg" },
      { tooltip: "Connect Phone Via USB", image: "usb.svg" },
    ],
  },
  {
    id: "9",
    name: "E-Rick",
    picture: "E-Rick-Taxi.png",
    description_2:
      " The all too familiar auto ride, minus the hassle of waiting and haggling for price. A convient way to travel everyday.",
    description_1: "Get an Auto at your doorstep",
    logos: [
      { tooltip: "Eco-Friendly Ride", image: "leaves.svg" },
      { tooltip: "Value For Money", image: "R.svg" },
      { tooltip: "Cashless Rides", image: "doc.svg" },
    ],
  },
]);

const breakpoints = ref({
  // 700px and up

  0: {
    itemsToShow: 1,
    snapAlign: "center",
  },
});
</script>
