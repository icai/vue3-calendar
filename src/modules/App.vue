<template>

  <div id="app">
    <div>
      <a href="/" title=""><img src="~assets/logo.png"></a>
    </div>
    <calendar :value="value" :disabled-days-of-week="disabled" :format="format" :clear-button="clear" :placeholder="placeholder" ></calendar>
    <hello :show-link="true" ></hello>
  </div>
</template>

<script>
import Hello from 'components/Hello'
import Calendar from 'components/Calendar'
export default {
  name: 'app',
  data () {
    return {
      disabled: [],
      value: '2015-06-10',
      format: 'yyyy-MM-dd',
      clear: true,
      placeholder: 'placeholder is displayed when value is null or empty'
    }
  },
  components: {
    Hello,
    Calendar
  }
}
</script>


<style lang="scss">

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
