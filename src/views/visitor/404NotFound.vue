<template>
  <div class="d-flex align-items-center justify-content-center vh-100">
    <div class="text-center">
      <h1 class="display-1 fw-bold" style="color: #582456">404</h1>
      <p class="fs-3"><span class="text-danger">Opps!</span> Page not found.</p>
      <p class="lead">The page you’re looking for doesn’t exist.</p>
      <router-link
        to="/"
        class="btn btn-primary border-0"
        style="background: #582456"
        >Go Home</router-link
      >
    </div>
  </div>
</template>
<script>
export default {
  name: "404NotFound",
};
</script>
