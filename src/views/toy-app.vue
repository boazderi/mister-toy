<template>
  <section className="toy-app">
        <h1>Toy app</h1>
    <toy-list v-if="toys"
    :toys="toys"
    ></toy-list>
  </section>
</template>

<script>
import toyList from "../components/toy-list.vue";
import toyFilter from "../components/toy-filter.vue";
export default {
  name: "toy-app",
  props: [],
  data() {
    return {};
  },
  created() {
    console.log('toy app');
  },
  methods: {

  },
  computed: {
    toys() {
        console.log('this.$store.getters.toys;',this.$store.getters.toys)
        return this.$store.getters.toys
    },
    toysToShow() {
      // if (!this.filterBy) return this.toys;
      // const regex = new RegExp(this.filterBy.name, "i");
      // return this.toys.filter((toy) => regex.test(toy.name));
    },
  },
  components: {
    toyList,
    toyFilter
  },
};
</script>