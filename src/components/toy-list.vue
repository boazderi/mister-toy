<template>
  <section className="toylist">
      <h1>Toy-list</h1>
      <div class="toys-list">
        <toy-preview v-for="toy in toys" :toy="toy" :key="toy._id">prev</toy-preview>
      </div>
  </section>
</template>

<script>
import toyPreview from './toy-preview.vue'
export default {
  name: "toylist",
  props: {
          toys: Array
  },
  data() {
    return {

    }
  },
  created() {
    console.log('toys',this.toys);
  },
  methods: {

  },
  computed: {

  },
  components: {
    toyPreview
  },
}
</script>
