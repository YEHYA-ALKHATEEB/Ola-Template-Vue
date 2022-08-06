<template>
  <div class="row">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="col-12 col-md-12 col-lg-6"
    >
      <div
        class="d-flex gallery mb-5 flex-wrap flex-md-nowrap justify-content-start align-items-center"
      >
        <div class="me-4">
          <img :src="require('@/assets/image/' + item.image)" />
        </div>
        <div>
          <p class="title mb-2">{{ item.title }}</p>
          <p class="description my-0">{{ item.description }}</p>
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
    image: "Cab-for-every-one.jpg",
    title: "Cabs for Every Pocket",
    description:
      "From Sedans and SUVs to Luxury cars for special occasions, we have cabs to suit every pocket",
  },
  {
    id: "1",
    image: "ola-select.jpg",
    title: "Ola Select",
    description:
      " A membership program with Ola that lets you ride a Prime Sedan at  Mini fares, book cabs without peak pricing and has zero wait time",
  },
  {
    id: "2",
    image: "share-and-express.jpg",
    title: "Share and Express",
    description:
      " To travel with the lowest fares choose Ola Share. For a faster travel experience we have Share Express on some fixed routes with zero deviations. Choose your ride and zoom away!",
  },
  {
    id: "3",
    image: "secure-and-safer-rides.jpg",
    title: "Secure and Safer Rides",
    description:
      "  Verified drivers, an emergency alert button, and live ride tracking are some of the features that we have in place to ensure you a safe travel experience.",
  },
  {
    id: "4",
    image: "cabs-Entertainment.jpg",
    title: "In Cab Entertainment",
    description:
      "Play music, watch videos and a lot more with Ola Play! Also stay  connected even if you are travelling through poor network areas with our free wifi facility.",
  },
  {
    id: "5",
    image: "cashless-rides.jpg",
    title: "Cashless Rides",
    description:
      " Now go cashless and travel easy. Simply recharge your Ola money or add your credit/ debit card to enjoy hassle free payments.",
  },
]);
</script>
