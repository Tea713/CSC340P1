<template>
    <p>Build: {{ currentDate() }}</p>
    <p>By Thanh Nguyen</p>
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
    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
    }
    p {
        font-family: verdana;
        font-size: 10px;
    }   
</style>