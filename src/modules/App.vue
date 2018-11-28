<template>

  <div id="app">
    <logo></logo>
    <calendar v-model="value"  :firstDayOfWeek="1" :disabled-days-of-week="disabled" :format="format" :clear-button="clear" :placeholder="placeholder" ></calendar>
    <hello :show-link="true" ></hello>
    <div :class="'markdown'">
      <div class="markdown-body" v-html="html">
      </div>
    </div>
  </div>
</template>

<script>
import Logo from 'components/Logo'
import Hello from 'components/Hello'
import Calendar from 'components/Calendar'
import html from 'root/README.md'
export default {
  name: 'app',
  data () {
    return {
      html: html,
      disabled: [],
      value: new Date(),
      format: 'yyyy-MM-dd',
      clear: true,
      placeholder: 'placeholder is displayed when value is null or empty'
    }
  },
  components: {
    Logo,
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

* {
    box-sizing: border-box;
}

.markdown {
    width: 980px;
    margin-right: auto;
    margin-left: auto;
    text-align: left;
}

@import "~assets/sass/markdown.scss"

</style>
