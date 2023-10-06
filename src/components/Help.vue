<template>
  <div class="p-3 mb-2 bg-dark text-white" style="height: auto;">
    <h1>Help</h1>
    <div id="center">
      <p1>
        Upload the images as below to begin the process. You can do so by clicking on the select file button or drag and drop the image to the right.
      </p1>
    </div>
    <div>
      <img alt="ex1" src="../assets/relic_example.png" class="ex1">
    </div>
    <div>
      <img alt="ex2" src="../assets/relic_example2.png" class="ex2">
    </div>
    
    
    <div id="center">
      <p1>
        Click scan to analyze the relic and copy its attributes to your clipboard. You can then use this data on the optimizer. There is also the option to manually tweak the data in cases of error.
      </p1>
    </div>  
    <div id="center">
      <p1>
        If you encounter troubles, contact me through discord at Chairacter.
      </p1>
    </div>
  </div>
  <p1>
    
  </p1>
  
  
  <hr/>
</template>

<script>
export default {
  name: 'Help'
}
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 0px;
  }
  p1 {
    text-align: center;
    font-size: 16px;
    margin-bottom: 500px;
  }
  #center {
    max-width: 600px;
    margin: auto;
    margin-bottom: 30px;
    text-align: left;
  }
  .ex1 {
    width: 700px; 
    height: auto;
    margin-bottom: 50px;
  }
  .ex2 {
    width: auto; 
    height: 600px;
    margin-bottom: 50px;
  }
</style>