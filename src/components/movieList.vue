<template>
  <div class="row">
    <div class="col-12 text-center text-white">
      <h1>MOVIE LIST</h1>
    </div>
    <movie class="col-lg-3 m-4" v-for="movie in movies" :key="movie" :movie="movie" />
  </div>
</template>

<script>
import movie from "./movies";
export default {
  components: {
    movie,
  },
  data() {
    return {
    //   movies: [],
    };
  },
  computed: {
    movies(){
        return this.$store.getters.getMovies
    }
  },
//   created() {
//     this.movies = this.$store.getters.getMovies;
//   },
};
</script>
<style >
.row{
    margin-left: 220px;
    float: right;
}
</style>
