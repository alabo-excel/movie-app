<template>
  <div class="movie">
    <div class="card " style="width: 18rem">
      <img :src="movie.poster" class="card-img-top" alt="..." @click="openDetails" />
      <hr>
      <div class="card-body">
        <h5 class="card-title">{{ movie.title }}</h5>
        <span>{{ movie.director }}</span>
        <p>{{ movie.gnere }}</p>
        <p>{{ movie.yearReleased }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    movie: {
      type: Object,
      default: () => {},
    },
  },
  methods:{
    openDetails(){
      this.$router.push({name: 'moviePreview', params:{id: this.movie.id}})
    }
  }
};
</script>
<style>
img {
  height: 400px;
}
</style>
