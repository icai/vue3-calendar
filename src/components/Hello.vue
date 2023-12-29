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

<script setup>
import { ref } from 'vue'
const props = defineProps(['msg', 'showLink'])
const message = ref(props.msg || 'Welcome to Vue Calendar Component')
const link = ref(props.showLink || false)
</script>
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
