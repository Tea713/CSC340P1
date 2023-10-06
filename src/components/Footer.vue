<template>
    <div class="p-3 mb-2 bg-dark text-white" style="height: 10vh;">
        <p>Build: {{ currentDate() }}</p>
        <p>By Thanh Nguyen</p>
    </div>
</template>

<script>
export default {
    name: 'Footer',
    methods: {
    currentDate() {
      const date = new Date().toJSON().slice(0,10).replace(/-/g,'-')
      return date;
    }
  }
}
</script>

<style>
    p {
        font-family: verdana;
        font-size: 10px;
    }   
</style>