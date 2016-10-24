<template>
  <div class="lorem">
    {{lorem}}
  </div>
</template>
<script>
export default {
  name: 'lorem',
  props: ['len'],
  data () {
    return {
      str: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod' +
      'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,' +
      'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo' +
      'consequat. '
    }
  },
  computed: {
    lorem () {
      return this.genLorem()
    }
  },
  methods: {
    genLorem () {
      let str = ''
      for (let i = 0; i < this.len; i++) {
        str += this.str
      }
      return str
    }
  }
}
</script>
