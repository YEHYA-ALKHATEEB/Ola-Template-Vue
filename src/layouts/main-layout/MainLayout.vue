<template>
  <div class="layout-main">
    <div id="page-container">
      <!-- Header Container -->
        <header id="appHeader">
<!--            <app-header />-->
        </header>
      <!-- END Header Container -->
      <!-- Main Container -->
      <main id="main-container" :class="(showGoLive || showInvite) ? 'go-live' : ''">
        <!-- Page Content -->
        <div class="container">
<!--          sidebar and main content -->
        </div>
        <!-- END Page Content -->
      </main>
      <!-- END Main Container -->
    </div>
    <!-- END Page Container -->
  </div>
</template>

<script>
export default {
  name: 'main-layout'
}
</script>
