<template>
  <div class="layout-full cursor-pointer">
    <!-- Main Container -->
    <app-header />
    <main id="main-container">
      <!-- Page Content -->

      <router-view />

      <!-- END Page Content -->
    </main>
    <!-- END Main Container -->
    <app-footer />
  </div>
</template>

<script>
import AppHeader from "@/components/app-header/AppHeader";
import AppFooter from "@/components/app-footer/AppFooter";
export default {
  name: "full-layout",
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>
