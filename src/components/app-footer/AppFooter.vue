<template>
  <footer>
    <div class="container">
      <!-- Top Visited Cities -->
      <div class="row text-center text-md-start">
        <div class="col-12">
          <p class="br-b pb-3 title">Top Visited Cities</p>
        </div>
      </div>

      <!-- Popular Outstation -->
      <div class="row py-3 text-center text-md-start br-b">
        <div
          class="col-12 col-md-6 col-lg-3"
          v-for="(item, index) in items"
          :key="index"
        >
          <p class="title">{{ item.title }}</p>

          <p
            v-for="(link, linkIndex) in item.links"
            :key="linkIndex"
            class="links"
          >
            {{ link }}
          </p>
        </div>
        <div
          v-if="expand"
          @click="(hide = true), (items = allItems), (expand = false)"
          class="col-12 d-flex justify-content-center"
        >
          <p class="links title">+ Expand more routes</p>
        </div>
        <div
          v-if="!expand"
          @click="(expand = true), (items = filteredItems), (hide = false)"
          class="col-12 d-flex justify-content-end"
        >
          <p class="pb-3 links title">hide</p>
        </div>
      </div>
      <!-- social links -->
      <div class="row py-3 br-b">
        <div class="col-12 ps-0 col-md-3">
          <div
            class="d-flex justify-content-center justify-content-md-start justify-content-lg-start"
          >
            <p class="title">Social Links</p>
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div
            class="d-flex mb-3 mb-md-0 justify-content-center justify-content-md-start justify-content-lg-start"
          >
            <img
              class="me-4 icon-hover"
              :src="require('@/assets/image/fb-footer-icon.svg')"
              alt="facebook icon"
            />
            <img
              class="me-4 icon-hover"
              :src="require('@/assets/image/insta-footer-icon.svg')"
              alt="instagram icon"
            />
            <img
              class="me-4 icon-hover"
              :src="require('@/assets/image/youtube-footer-icon.svg')"
              alt="youtube icon"
            />
            <img
              class="me-4 icon-hover"
              :src="require('@/assets/image/twitter-footer-icon.svg')"
              alt="twitter icon"
            />
          </div>
        </div>

        <div class="col-12 pe-0 col-md-3">
          <div
            class="d-flex justify-content-center justify-content-md-end justify-content-lg-end"
          >
            <select class="form-select" aria-label="Default select example">
              <option
                :style="{
                  backgroundImage:
                    'url(' +
                    require('/src/assets/image/india-flag-icon.png') +
                    ')',
                }"
                value="1"
              >
                India
              </option>
              <option
                :style="{
                  backgroundImage:
                    'url(' +
                    require('/src/assets/image/australia-flag-icon.png') +
                    ')',
                }"
                value="2"
              >
                Australia
              </option>
              <option
                :style="{
                  backgroundImage:
                    'url(' +
                    require('/src/assets/image/uk-flag-icon.png') +
                    ')',
                }"
                value="3"
              >
                United Kingdom
              </option>
              <option
                :style="{
                  backgroundImage:
                    'url(' + require('/src/assets/image/nz.svg') + ')',
                }"
                value="4"
              >
                United Kingdom
              </option>
            </select>
          </div>
        </div>
      </div>
      <!-- Discover Ola -->
      <div class="row py-3 br-b">
        <div class="col-12 ps-0 col-md-3">
          <div
            class="d-flex justify-content-center justify-content-md-start justify-content-lg-start"
          >
            <p class="title">Discover Ola</p>
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div
            class="d-flex mb-3 mb-md-0 justify-content-center justify-content-md-start justify-content-lg-start"
          >
            <nav class="navbar p-0 m-0 navbar-expand-lg">
              <div class="ms-0 ps-0" id="navbarNav">
                <ul class="navbar-nav flex-wrap">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#"
                      >About Ola</a
                    >
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Careers</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Offers</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Contact us</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Media Center</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>

        <div class="col-12 pe-0 col-md-3">
          <div
            class="d-flex justify-content-center justify-content-md-end justify-content-lg-end"
          >
            <nav class="navbar p-0 m-0 navbar-expand-lg">
              <div class="" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#"
                      >become a driver</a
                    >
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">book a ride</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <!-- social links -->
      <div class="row py-3">
        <div class="col-12 ps-0 col-md-6">
          <div
            class="d-flex justify-content-center justify-content-md-start justify-content-lg-start"
          >
            <img
              class="me-4 icon-hover"
              :src="require('@/assets/image/footer-ola-logo.svg')"
              alt="ola logo"
            />
          </div>
        </div>

        <div class="col-12 pe-0 col-md-6">
          <div
            class="d-flex justify-content-center justify-content-md-end justify-content-lg-end"
          >
            <nav class="navbar p-0 m-0 navbar-expand-lg">
              <div class="" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#"
                      >Notices</a
                    >
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Terms and Conditions</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
        <div class="col-12 text-center text-md-end">
          <p>
            <small
              >copyright &copy;2018 ANI Technologies Pvt. Ltd. All rights
              reserved</small
            >
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
<script setup>
import { ref } from "vue";
const expand = ref(true);
const hide = ref(false);
const filteredItems = ref([
  { id: "0", title: "Popular Outstation Routes", links: [] },
  {
    id: "1",
    title: "Northern India",
    links: [
      "Delhi to Chandigarh Outstation Cabs",
      "Delhi to Agra Outstation Cabs",
      "Delhi to Jaipur Outstation Cabs",
      "Delhi to Shimla Outstation Cabs",
      "Delhi to Nainital Outstation Cabs",
    ],
  },
  {
    id: "2",
    title: "Southern India",
    links: [
      "Chennai to Pondicherry Outstation Cabs",
      "Chennai to Tirupati Outstation Cabs",
      "Chennai to Vellore Outstation Cabs",
      "Hyderabad to Vijayawada Outstation Cabs",
      "Hyderabad to Warangal Outstation Cabs",
    ],
  },
  {
    id: "3",
    title: "East & West India",
    links: [
      "Mumbai to Pune Outstation Cabs",
      "Mumbai to Mahabaleshwar Outstation Cabs",
      "Mumbai to Lonavala Outstation Cabs",
      "Mumbai to Nashik Outstation Cabs",
      "Mumbai to Matheran Outstation Cabs",
    ],
  },
]);

const allItems = ref([
  { id: "0", title: "Popular Outstation Routes", links: [] },
  {
    id: "1",
    title: "Northern India",
    links: [
      "Delhi to Chandigarh Outstation Cabs",
      "Delhi to Agra Outstation Cabs",
      "Delhi to Jaipur Outstation Cabs",
      "Delhi to Shimla Outstation Cabs",
      "Delhi to Nainital Outstation Cabs",
      "Jaipur to Delhi Outstation Cabs",
      "Chandigarh to Manali Outstation Cabs",
      "Chandigarh to Delhi Outstation Cabs",
      "Chandigarh to Ludhiana Outstation Cabs",
      "Kanpur to Lucknow Outstation Cabs",
      "Lucknow to Kanpur Outstation Cabs",
      "Bhopal to Jaipur Outstation Cabs",
      "Ahmedabad to Vadodara Outstation Cabs",
      "Indore to Bhopal Outstation Cabs",
      "Ajmer to Jaipur Outstation Cabs",
      "Vadodara to Ahmedabad Outstation Cabs",
    ],
  },
  {
    id: "2",
    title: "Southern India",
    links: [
      "Chennai to Pondicherry Outstation Cabs",
      "Chennai to Tirupati Outstation Cabs",
      "Chennai to Vellore Outstation Cabs",
      "Hyderabad to Vijayawada Outstation Cabs",
      "Hyderabad to Warangal Outstation Cabs",
      "Hyderabad to Tirupati Outstation Cabs",
      "Bangalore to Mysore Outstation Cabs",
      "Bangalore to Coorg Outstation Cabs",
      "Bangalore to Ooty Outstation Cabs",
      "Bangalore to Pondicherry Outstation Cabs",
      "Mysore to Bangalore Outstation Cabs",
      "Coimbatore to Ooty Outstation Cabs",
      "Kochi to Munnar Outstation Cabs",
      "Kochi to Alleppey Outstation Cabs",
    ],
  },
  {
    id: "3",
    title: "East & West India",
    links: [
      "Mumbai to Pune Outstation Cabs",
      "Mumbai to Mahabaleshwar Outstation Cabs",
      "Mumbai to Lonavala Outstation Cabs",
      "Mumbai to Nashik Outstation Cabs",
      "Mumbai to Matheran Outstation Cabs",
      "Mumbai to Shirdi Outstation Cabs",
      "Pune to Mumbai Outstation Cabs",
      "Pune to Lavasa Outstation Cabs",
      "Indore to Ujjain Outstation Cabs",
      "Bhubaneswar to Puri Outstation Cabs",
      "Kolkata to Durgapur Outstation Cabs",
      "Aurangabad to Shirdi Outstation Cabs",
      "Aurangabad to Pune Outstation Cabs",
    ],
  },
]);
const items = ref(filteredItems);
</script>
