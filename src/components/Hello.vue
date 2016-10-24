<template>
  <div class="hello">
    <h1>{{ message }}</h1>
    <div v-if="link">
      <h2>Essential Links</h2>
      <ul>
        <li><a href="./demo/" >Demo</a></li>
        <li><a href="https://github.com/icai/vue2-calendar/" target="_blank">Github</a></li>
      </ul>
    </div>

    </div>
</template>

<script>
export default {
  name: 'hello',
  props: ['msg', 'showLink'],
  data () {
    return {
      message: this.msg || 'Welcome to Vue Calendar Component',
      link: this.showLink || false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
