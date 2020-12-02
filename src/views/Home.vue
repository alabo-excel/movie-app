<template>
  <div class="home">
    <navbar />
    <div>
      <movie-list />
      <sidebar />

    </div>
    
  </div>
</template>

<script>
import navbar from "../components/navbar.vue";
import sidebar from "../components/sidebar.vue";
import movieList from "../components/movieList.vue";

// @ is an alias to /src

export default {
  name: "Home",
  components: {
    navbar,
    sidebar,
    movieList,
  },
};
</script>
