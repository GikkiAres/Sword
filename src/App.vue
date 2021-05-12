<template>
  <div id="app">
    <header>
      Sword
    </header>

    <div>
      <router-view></router-view>
    </div>

    <footer>
      <div class="wrap">
        <div>Author:GikkiAres</div>
      </div>
    </footer>
  </div>
</template>

<script>
window.console.log("App.vue");

export default {
  name: "App",
  data() {
    return {
      mb_isUseDatabase: false,
    };
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
