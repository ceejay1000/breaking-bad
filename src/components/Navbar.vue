<template>
  <nav class="z-depth-0">
    <div class="nav-wrapper">
      <div class="container flex-center">
        <h2 class="center">Breaking Bad</h2>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar"
}
</script>


<style scoped>
  nav {
    background-image: 
    linear-gradient(45deg, 
    rgba(23, 138, 3, 0.9), 
    rgba(35, 105, 2, 0.815),
    rgba(10, 70, 42, 0.815));
    z-index: 10;
  }

  h2 {
    margin: 0;
    color: #fff;
    font-weight: 100 !important;
  }

  .flex-center {
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
