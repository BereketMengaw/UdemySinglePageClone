<template>
  <div>
    <header>
      <h1>Udemy Course Page</h1>
    </header>
    <nuxt />
    <footer>
      <p>&copy; 2023 Udemy Course Page</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout'
}
</script>

<style scoped>
header {
  background-color: #f8f9fa;
  padding: 20px;
  text-align: center;
}

footer {
  background-color: #f8f9fa;
  padding: 10px;
  text-align: center;
  position: fixed;
  width: 100%;
  bottom: 0;
}
</style>