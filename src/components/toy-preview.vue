<template>
  <section class="toy-preview flex">
      <div>
          {{toy.name}}
      </div>
      <div>
          {{toy.price}}
      </div>
  </section>
</template>

<script>
export default {
  name: "toy-preview",
  props: {
      toy: Object
  },
  data() {
    return {

    };
  },
  created() {},
  methods: {},
  computed: {},
  components: {},
};
</script>
