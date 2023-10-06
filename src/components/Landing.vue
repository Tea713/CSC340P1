<template>
  <div class="p-3 mb-2 bg-dark text-white" style="height: auto;">
    <img alt="logo" src="../assets/p1icon.png" class="logo">
    <div id="center">
      <p1>
        HSR relicscan is a tool for Honkai: Star Rail players to quickly build their relics database. The tool should still help PC players create their relics inventory while filling the need for mobile and console players. 
      </p1>
    </div>
    <div id="center">
      <p1>
        By using tool users will be able to upload images of their relics to scan and export their relics statistics to a JSON file. It can then be used with a Honkai: Star Rail characters and relics optimizer tool to help determine the best options available.
      </p1>
    </div>  
    <div id="center">
      <p1>
        Thank you for using the tool. You can message me through discord at Chairacter if you encounter any problem or would like to give me any feedback.
      </p1>
    </div>
  </div>
  <hr/>
</template>

<script>
  export default {
    name: 'Landing'
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: left;
    color: #2c3e50;
    margin-top: 0px;
  }
  p1 {
    text-align: left;
    font-size: 16px;
    margin-bottom: 500px;
  }
  #center {
    max-width: 600px;
    margin: auto;
    margin-bottom: 30px;
    text-align: left;
  }
  .logo {
    max-height: 350px;
    max-width: auto;
    padding-bottom: 40px;
  }
</style>