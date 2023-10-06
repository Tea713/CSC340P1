<template>
  <Navbar/>
  <div class="p-3 mb-2 bg-dark text-white" style="height: auto;">
    <component :is="currentView" />
    <Footer/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import Landing from './components/Landing.vue'
import Help from './components/Help.vue'
import Analyzer from './components/Analyzer.vue'

const routes = {
  '/': Landing,
  '/help': Help,
  '/analyzer': Analyzer
}


export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
    Landing,
    Help,
    Analyzer
  },
  data(){
    return {
      currentPath: window.location.hash
    }
  },
  computed: {
    currentView() {
      return routes[this.currentPath.slice(1) || '/'] || NotFound
    }
  },
  mounted() {
    window.addEventListener('hashchange', () => {
		  this.currentPath = window.location.hash
		})
  }
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
  p{
    text-align: center;
    font-size: 11px;
    margin-bottom: 500px;
  }
  hr {
    margin-top: 1rem;
    margin-bottom: 1rem;
    border: 0;
  }
</style>
