<template>
  <div>
    <navbar />
    <sidebar />
    <div class="row">
      <div class="col-lg-5 d-flex justify-content-center p-5">
        <img :src="movie.poster" alt="" />
      </div>
      <div class="col-lg-5 p-5">
        <div>
          <h1>{{ movie.title }}</h1>
          <h3>{{ movie.director }}</h3>
          <h3>{{ movie.yearReleased }}</h3>
          <h3>{{ movie.gnere }}</h3>
        </div>
        <div class="">
          <p>{{ movie.storyline }}</p>
        </div>
        <div class="d-flex justify-content-center">
          <div class="p-3">
            <a href="#" class="btn btn-dark text-white">Edit</a>
          </div>
          <div class="p-3">
            <a @click="deleteMovie" class="btn btn-dark text-white">Delete</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from "../components/navbar.vue";
import sidebar from "../components/sidebar.vue";
export default {
  components: {
    navbar,
    sidebar,
  },
  props: {
    id: {
      type: Number,
      default: null,
    },
  },

  data() {
    return {
      movie: {},
    };
  },
  created() {
    var a = parseInt(this.id);
    this.movie = this.$store.getters.getMovieById(a);
  },
  methods: {
    deleteMovie() {
      var a = parseInt(this.id);
      this.movie = this.$store.dispatch("deleteMovie", a);
      this.$router.push("/");
    },
    updateMovie(){
      this.$store.dispatch('updateMovie', this.movie)
    },
    openModal(){
            $("#myModal").modal("toggle");
    }
  },
};
</script>

<style scoped></style>
