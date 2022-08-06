<template>
  <!-- banner -->
  <div
    class="banner"
    :style="{
      backgroundImage:
        'url(' +
        require('/src/assets/image/banner-' + activeTab + '.jpg') +
        ')',
    }"
  >
    <div class="container">
      <div class="banner-wrapper">
        <div v-if="activeTab === 0" class="t-1">
          <div class="title">
            <h1 class="text-center">
              Book a City Taxi to your destination in town
            </h1>
          </div>
          <div class="description">
            <p class="text-center">
              Choose from a range of categories and prices
            </p>
          </div>
        </div>
        <div v-else-if="activeTab === 1" class="t-2">
          <div class="title">
            <h1 class="text-center">Ride out of town with Ola Outstation</h1>
          </div>
          <div class="description">
            <p class="text-center">
              Affordable one-way and round-trip packages
            </p>
          </div>
        </div>
        <div v-else-if="activeTab === 2" class="t-3">
          <div class="title">
            <h1 class="text-center">Rent cabs by the hour with Ola Rentals</h1>
          </div>
          <div class="description">
            <p class="text-center">Flexible packages at affordable prices</p>
          </div>
        </div>

        <div class="bg-white tab-control">
          <ul
            class="nav nav-pills p-2 d-flex justify-content-around"
            id="pills-tab"
            role="tablist"
          >
            <li class="nav-item" role="presentation">
              <button
                @click="activeTab = 0"
                class="nav-link active py-1 px-3"
                id="pills-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-home"
                type="button"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
              >
                CITY TAXI
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                @click="activeTab = 1"
                class="nav-link py-1 px-3"
                id="pills-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-profile"
                type="button"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
              >
                OUTSTATION
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                @click="activeTab = 2"
                class="nav-link py-1 px-3"
                id="pills-contact-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-contact"
                type="button"
                role="tab"
                aria-controls="pills-contact"
                aria-selected="false"
              >
                RENTALS
              </button>
            </li>
          </ul>
          <div class="tab-content p-2" id="pills-tabContent">
            <div
              class="tab-pane fade show active"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
            >
              <div
                class="d-flex flex-column title align-items-center justify-content-center"
              >
                <h1>Your everyday travel partner</h1>
                <p>Ac Cabs for point to point travel</p>
              </div>
              <div class="input-group input-group-lg mb-2">
                <span class="input-group-text" id="inputGroup-sizing-lg"
                  >PICKEUP</span
                >
                <input
                  type="text"
                  class="form-control"
                  placeholder="Current location"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-lg"
                />
              </div>
              <div class="input-group input-group-lg mb-2">
                <span class="input-group-text" id="inputGroup-sizing-lg"
                  >DROP</span
                >
                <input
                  placeholder="Enter drop for ride estimate"
                  type="text"
                  class="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-lg"
                />
              </div>
              <div class="input-group input-group-lg mb-2">
                <span class="input-group-text" id="inputGroup-sizing-lg"
                  >WHEN</span
                >
                <input
                  placeholder="Now"
                  type="text"
                  class="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-lg"
                />
              </div>
              <button
                class="w-100 btn book-now btn-primary btn-outline-success"
              >
                Search Caps
              </button>
            </div>
            <div
              class="tab-pane fade"
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
            >
              <div
                class="d-flex flex-column title align-items-center justify-content-center"
              >
                <h1>The getaway car</h1>
                <p>Ac Cabs for inter-city travel</p>
              </div>
              <div class="input-group input-group-lg mb-2">
                <span class="input-group-text" id="inputGroup-sizing-lg"
                  >PICKEUP</span
                >
                <input
                  placeholder="Current location"
                  type="text"
                  class="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-lg"
                />
              </div>
              <div class="input-group input-group-lg mb-2">
                <span class="input-group-text" id="inputGroup-sizing-lg"
                  >DROP</span
                >
                <input
                  placeholder="Enter drop for ride estimate"
                  type="text"
                  class="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-lg"
                />
              </div>
              <div class="input-group input-group-lg mb-2">
                <span class="input-group-text" id="inputGroup-sizing-lg"
                  >DEPART</span
                >

                <select class="form-select" id="inputGroupSelect01">
                  <option selected>Today</option>
                  <option value="1">Tomorrow</option>
                </select>
                <select class="form-select" id="inputGroupSelect02">
                  <option selected>1:45 AM</option>
                  <option value="1">2:30 AM</option>
                  <option value="2">3:00 PM</option>
                  <option value="3">4:00 PM</option>
                </select>
              </div>
              <button
                class="w-100 btn book-now btn-primary btn-outline-success"
              >
                Search Outstation Cabs
              </button>
            </div>
            <div
              class="tab-pane fade"
              id="pills-contact"
              role="tabpanel"
              aria-labelledby="pills-contact-tab"
            >
              <div
                class="d-flex flex-column title align-items-center justify-content-center"
              >
                <h1>The getaway car</h1>
                <p>Ac Cabs for inter-city travel</p>
              </div>
              <div class="input-group input-group-lg mb-2">
                <span class="input-group-text" id="inputGroup-sizing-lg"
                  >PICKEUP</span
                >
                <input
                  placeholder="Current location"
                  type="text"
                  class="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-lg"
                />
              </div>
              <div class="input-group input-group-lg mb-2">
                <span class="input-group-text" id="inputGroup-sizing-lg"
                  >DROP</span
                >
                <input
                  placeholder="Now"
                  placeh
                  type="text"
                  class="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-lg"
                />
              </div>
              <button
                class="w-100 btn book-now btn-primary btn-outline-success"
              >
                Search Rental Cabs
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="">
    <div class="container">
      <carousel />
      <h1 class="title mt-5">A Car for every occasion</h1>
      <p class="sub-title">
        Ola offers city taxis, inter-city cabs, and local cabs at hourly
        packages
      </p>
      <ola-cards />

      <h1 class="title mt-5">Why ride with Ola?</h1>
      <p class="sub-title">The best way to travel to your destination</p>

      <gallery />

      <h1 class="title mt-5">Meet our Awesome Fleet</h1>
      <p class="sub-title">The widest variety of cars to choose from</p>
      <div class="rounded-circle circle"></div>

      <fleet-carousel />
    </div>
    <fleet-details />
    <ola-app />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Carousel from "@/components/carousel/Carousel";
import OlaCards from "@/components/ola-cards/OlaCards";
import Gallery from "@/components/gallery/Gallery";
import FleetCarousel from "@/components/fleet-carousel/FleetCarousel";
import FleetDetails from "@/components/fleet-details-carousel/FleetDetails";
import OlaApp from "@/components/ola-app/OlaApp.vue";

const activeTab = ref(0);

onMounted(() => {});
</script>
