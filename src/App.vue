<template>
  <div id="app">
    <products/>
    <br>
    <productShow/>
  </div>
</template>
<script>
  import products from './components/products'
  import productShow from './components/productShow'
  export default {
    name: 'app',
    components: {
      products, productShow
    }

  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
