<template>
  <div id="filters">
    <h3>Filters</h3>
    <p v-for="filter in filters" :key="filter.key" @click="applyFilter(filter)" >{{filter.name}}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      filters: [
        {
          name: "year lowest",
          order: "desc",
          key: "year",
        },
        {
          name: "year heighest",
          order: "acs",
          key: "year",
        },
      ],
    };
},
methods: {
     applyFilter(filter) {
         this.$store.dispatch('filter', filter)
     }
    }
}
</script>

<style></style>
