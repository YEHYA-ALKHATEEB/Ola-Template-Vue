<template>
  <div class="container ola-app">
    <div class="row mt-5">
      <div class="col-12 mt-5 col-lg-6">
        <div class="d-flex flex-column justify-content-start">
          <div>
            <p>
              <b>Book an Ola from the App</b><br />
              Download the app for exclusive deals and ease of booking
            </p>
          </div>

          <div
            class="d-flex mt-5 mb-4 mb-lg-0 justify-content-start align-items-center flex-wrap"
          >
            <img
              class="img-button mb-2 mb-md-0 me-4"
              :src="require('@/assets/image/playstore.svg')"
            />
            <img
              class="mb-2 mb-md-0 img-button me-4"
              :src="require('@/assets/image/appstore.svg')"
            />

            <img
              class="mb-2 mb-md-0 img-button"
              :src="require('@/assets/image/windowstore.svg')"
            />
          </div>
        </div>
      </div>
      <div class="col-12 col-lg-6">
        <div
          class="d-flex flex-column justify-content-start align-items-center"
        >
          <img
            class="w-100 ola-location"
            :src="require('@/assets/image/ola-booking.jpg')"
          />
        </div>
      </div>
    </div>
  </div>
  <div class="about">
    <div class="container">
      <div class="row py-3">
        <div
          v-for="(item, index) in items"
          :key="index"
          class="col-12 col-md-4"
        >
          <div class="d-flex justify-content-start">
            <div class="me-2">
              <img :src="require('@/assets/image/' + item.image)" />
            </div>
            <p>
              <b>{{ item.title }}</b
              ><br />
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";

const items = ref([
  {
    id: "0",
    image: "wheel.svg",
    title: "24/7 Customer Support",
    description:
      " A dedicated 24x7 customer support team always at your service to help solve any problem",
  },
  {
    id: "1",
    image: "sos.svg",
    title: "Your Safety First",
    description:
      "Keep your loved ones informed about your travel routes or call emergency services when in need",
  },
  {
    id: "2",
    image: "hat.svg",
    title: "Top Rated Driver-Partners",
    description:
      "All our driver-partners are background verified and trained to deliver only the best experience",
  },
]);
</script>
