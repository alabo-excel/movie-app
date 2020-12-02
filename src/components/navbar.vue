<template>
  <div class="hello">
    <ul class="nav bg-dark justify-content-between">
      <li @click="$router.push('/')" class="nav-item ml-4 text-white">
        <h1>Movie-App</h1>
      </li>
      <li v-if="$route.path == '/'" class="nav-item m-2">
        <input v-model="search" placeholder="enter movie" type="text" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return{
      search:""
    };
  },
  watch:{
    search(){
      this.$store.dispatch('search', this.search);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
input{
  padding: 10px;
  width: 300px;
  border-radius: 10px;
  border: none;
}</style>
