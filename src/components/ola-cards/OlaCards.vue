<template>
  <div class="d-flex flex-wrap justify-content-between align-items-center">
    <nav class="navbar mx-0 navbar-expand category">
      <div>
        <ul class="navbar-nav flex-wrap">
          <li class="nav-item mx-0">
            <a
              @click="getProducts(), (activeCategory = 'all')"
              class="nav-link"
              :class="activeCategory === 'all' ? 'active' : ''"
              aria-current="page"
              >All</a
            >
          </li>
          <li
            v-if="categoryLoader"
            class="spinner-border text-primary loader"
            role="status"
          >
            <span class="visually-hidden">Loading...</span>
          </li>
          <li v-else-if="categoriesList.length === 0">No categories</li>

          <li
            v-else
            v-for="(category, index) in categoriesList"
            :key="index"
            class="nav-item"
            @click="getFilteredProducts(category)"
          >
            <a
              :class="activeCategory === category ? 'active' : ''"
              class="nav-link"
              >{{ category }}</a
            >
          </li>
        </ul>
      </div>
    </nav>
    <button
      icon="feather:plus-circle"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
      data-bs-whatever="@getbootstrap"
      @click="showModal = !showModal"
      class="add-product bg-transparent my-3 my-md-0 p-0 border-0"
    >
      <img :src="require('@/assets/image/plus-circle.svg')" />
      Product
    </button>
  </div>

  <div
    v-if="productLoader"
    class="spinner-border loader text-primary"
    role="status"
  >
    <span class="visually-hidden">Loading...</span>
  </div>
  <div v-else-if="productList.length === 0">No Products</div>

  <div v-else class="row">
    <div
      v-for="(product, index) in productList"
      :key="index"
      class="col-12 mb-3 col-md-6 col-lg-4"
    >
      <div class="card border-0 h-100">
        <div
          class="card-image w-100"
          :style="{
            backgroundImage: 'url(' + product.image + ')',
          }"
        >
          <div
            class="d-flex flex-column align-items-end"
            style="margin-top: 160px; margin-right: 20px"
          >
            <div
              class="rounded-circle bg-primary d-flex flex-column align-items-center justify-content-center"
              style="width: 73px; height: 73px"
            >
              <!-- <img class="p-2" :src="require('@/assets/image/city-taxi.svg')" /> -->
              <p class="mt-3">${{ product.price }}</p>
            </div>
          </div>
        </div>
        <div class="card-body mt-3 mb-2">
          <h5 class="card-title mb-3">{{ product.category }}</h5>

          <p class="card-text">
            {{ product.title }}
          </p>
          <p class="card-text">
            {{ product.description }}
          </p>
        </div>
        <div class="card-footer border-0 bg-transparent">
          <div class="d-flex justify-content-between align-items-center">
            <div>
              <div class="d-flex justify-content-center align-items-center">
                <div class="me-2">
                  <img
                    :src="require('@/assets/image/AC-Cabs.svg')"
                    alt=" logo"
                  />
                </div>
                <div>
                  <p class="my-0 icon-title">AC</p>
                  <p class="my-0 icon-title">Cabs</p>
                </div>
              </div>
            </div>
            <div>
              <div class="d-flex justify-content-center align-items-center">
                <div class="me-2">
                  <img
                    :src="require('@/assets/image/Pocket-Friencly.svg')"
                    alt=" logo"
                  />
                </div>
                <div>
                  <p class="my-0 icon-title">Pocket</p>
                  <p class="my-0 icon-title">Friencly</p>
                </div>
              </div>
            </div>
            <div>
              <div class="d-flex justify-content-around align-items-center">
                <div class="me-2">
                  <img
                    :src="require('@/assets/image/Cashless-Rides.svg')"
                    alt=" logo"
                  />
                </div>
                <div>
                  <p class="my-0 icon-title">Cashless</p>
                  <p class="my-0 icon-title">Rides</p>
                </div>
              </div>
            </div>
          </div>
          <button
            @click.prevent="deleteProduct(product.id)"
            class="delete bg-danger mt-2 w-100"
          >
            Delete
          </button>
        </div>
      </div>
    </div>

    <teleport to="#formModal" :disabled="!showModal">
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">New Product</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                @click="showModal = false"
              ></button>
            </div>
            <div class="modal-body">
              <form>
                <div class="mb-3">
                  <label for="title" class="col-form-label">Title</label>
                  <input
                    type="text"
                    v-model="title"
                    class="form-control"
                    id="title"
                  />
                </div>
                <div class="mb-3">
                  <label for="price" class="col-form-label">Price</label>
                  <input
                    type="text"
                    v-model="price"
                    class="form-control"
                    id="price"
                  />
                </div>
                <div class="mb-3">
                  <label for="category" class="col-form-label">Category</label>
                  <select
                    id="category"
                    required
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option
                      v-for="(category, index) in categoriesList"
                      :key="index"
                      value=""
                      selected
                    >
                      {{ category }}
                    </option>
                  </select>
                </div>
                <div class="mb-3">
                  <label for="description" class="col-form-label"
                    >Description:</label
                  >
                  <textarea
                    type="text"
                    rows="4"
                    v-model="description"
                    class="form-control h-auto"
                    id="description"
                  />
                </div>
                <label for="image" class="col-form-label">Image</label>

                <div class="input-group mb-3">
                  <input type="file" class="form-control" id="image" />
                  <label class="input-group-text">Upload</label>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
                @click="showModal = false"
              >
                Cancel
              </button>
              <button
                type="button"
                @click="addProduct()"
                class="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </teleport>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import ProductService from "@/services/ProductService";

const categoriesList = ref([]);
const productList = ref([]);
const activeCategory = ref("all");
const categoryLoader = ref(false);
const productLoader = ref(false);
const title = ref("");
const price = ref("");
const category = ref("");
const description = ref("");
const image = ref("");
const showModal = ref("false");

const getCategories = function () {
  categoryLoader.value = true;
  ProductService.findCategories({})
    .then(function (res) {
      categoriesList.value = res.data || [];
      categoryLoader.value = false;
    })
    .catch(function (err) {
      console.log(err);
    });
};

const getProducts = function () {
  productLoader.value = true;
  ProductService.findProducts({})
    .then(function (res) {
      productList.value = res.data || [];
      productLoader.value = false;
    })
    .catch(function (err) {
      console.log(err);
    });
};

const getFilteredProducts = function (category) {
  productList.value = [];
  ProductService.findFilteredProducts({
    category: category,
  })
    .then(function (res) {
      productList.value = res.data || [];
      activeCategory.value = category;
    })
    .catch(function (err) {
      console.log(err);
    });
};

const deleteProduct = function (id) {
  ProductService.deleteProduct({
    id: id,
  })
    .then(function (res) {
      console.log(res.data);
    })
    .catch(function (err) {
      console.log(err);
    });
};

const addProduct = function () {
  ProductService.addProduct({
    title: title,
    price: price,
    category: category,
    description: description,
    image: image,
  })
    .then(function (res) {
      showModal.value = false;
      console.log(res.data);
    })
    .catch(function (err) {
      console.log(err);
    });
};

onMounted(() => {
  getCategories();
  getProducts();
});
</script>
