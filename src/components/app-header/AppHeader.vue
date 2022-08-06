<template>
  <header class="p-0 fixed-top">
    <!-- first-nav -->
    <div class="first-nav d-none d-lg-block">
      <div class="container nav-one">
        <nav class="navbar p-0 navbar-expand-lg bg-dark">
          <ul class="navbar-nav ms-auto nav-items-border">
            <li class="nav-item">
              <a class="nav-link nav-tag active" aria-current="page" href="#"
                >Drive with Ola</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link nav-tag nav-jam" href="#">Ola Money</a>
            </li>
            <li class="nav-item">
              <a class="nav-link nav-tag" href="#">Ola Corporate</a>
            </li>
            <li class="nav-item">
              <a class="nav-link nav-tag" href="#">Ola Foundation</a>
            </li>
            <li class="nav-item">
              <a class="nav-link nav-tag" href="#">Share</a>
            </li>
            <li class="nav-item">
              <a class="nav-link nav-tag" href="#">Offers</a>
            </li>
            <li class="nav-item no-border">
              <a class="nav-link pe-0 nav-tag a-no" href="#">Support</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <div class="second-nav pt-3 pt-lg-0">
      <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light">
          <router-link class="text-decorate" :to="{ name: 'Homepage' }">
            <img
              class="h-100"
              :src="require('@/assets/image/logo.svg')"
              alt="Ola Logo"
            />
          </router-link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a
                  class="nav-link d-block d-lg-none"
                  aria-current="page"
                  href="#"
                  >Drive with Ola</a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link d-block d-lg-none" href="#">Ola Money</a>
              </li>
              <li class="nav-item">
                <a class="nav-link d-block d-lg-none" href="#">Ola Corporate</a>
              </li>
              <li class="nav-item">
                <a class="nav-link d-block d-lg-none" href="#"
                  >Ola Foundation</a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link d-block d-lg-none" href="#">Share</a>
              </li>
              <li class="nav-item">
                <a class="nav-link d-block d-lg-none" href="#">Offers</a>
              </li>
              <li class="nav-item">
                <a class="nav-link d-block d-lg-none" href="#">Support</a>
              </li>
              <li class="nav-item">
                <a class="nav-link d-block" href="#">Ola Drive</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Ola Select</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Ola Fleet</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Features</a>
              </li>
              <li class="nav-item">
                <a
                  data-bs-toggle="modal"
                  data-bs-target="#userLoginModal"
                  class="nav-link"
                >
                  Login
                </a>
              </li>
              <li class="nav-item">
                <button class="btn book-now btn-primary btn-outline-success">
                  Book Now
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  </header>
  <teleport to="#loginModal" :disabled="!showLoginModal">
    <div
      class="modal"
      id="userLoginModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Login</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form>
              <div class="mb-3">
                <label for="username" class="col-form-label">Username</label>
                <input
                  v-model="username"
                  type="text"
                  class="form-control"
                  id="username"
                />
              </div>
              <div class="mb-3">
                <label for="password" class="col-form-label">Password</label>
                <input
                  v-model="password"
                  type="text"
                  class="form-control"
                  id="password"
                />
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
              @click="showLoginModal = false"
            >
              Close
            </button>
            <button
              data-bs-dismiss="modal"
              @click="login()"
              type="button"
              class="btn btn-primary"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  </teleport>
</template>
<script setup>
import ProductService from "@/services/ProductService";
import { ref } from "vue";
import { useStore } from "vuex";

const store = useStore();
const username = ref("");
const password = ref("");

const showLoginModal = ref(false);
const login = function () {
  ProductService.userLogin({
    username: username,
    password: password,
  })
    .then(function (res) {
      showLoginModal.value = false;
      store.dispatch("setSession", {
        token: res.data.token,
      });

      console.log(res);
    })
    .catch(function (err) {
      console.log(err);
    });
};
</script>
