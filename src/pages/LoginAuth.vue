<template>
  <p>Nobody ever sees this page haaa</p>
</template>

<script>
export default {
  name: 'LoginAuth',
  head: {
    title: { inner: 'Authentication' }
  },
  mounted () {
    this.login()
  },
  methods: {
    login () {
      if (this.$route.hash && opener && opener.location.host === process.env.ROOT_HOST) {
        const keys = this.$route.hash.slice(1).split('&').reduce(function (o, t) {
          const [ key, value ] = t.split('=')
          o[key] = value || true
          return o
        }, {})
        opener[this.$discord.loginCallback](keys.access_token)
        window.close()
      } else {
        this.$router.push('/')
      }
    }
  }
}
</script>
