
<template>
  <header>
    <div class="wrapper">
      <h1>I'm not your TOY</h1>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/toy">Toy app</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<script>
export default {
  name: 'app',
  created() {
    this.$store.dispatch({ type: 'loadToys' })
  },
  methods: {
  },
  components: {
  },
}
</script>
