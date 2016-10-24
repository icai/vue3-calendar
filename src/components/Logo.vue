<template>
   <div>
      <a :href="link" title=""><img src="~assets/logo.png"></a>
    </div>
</template>
<script>
export default {
  name: 'logo',
  data () {
    return {
      link: document.domain === 'localhost' ? '/' : '/vue2-calendar/'
    }
  }
}
</script>
