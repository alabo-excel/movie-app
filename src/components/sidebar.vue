<template>
  <div id="sidebar" class="bg-dark text-white pl-5 pt-5">
    <filters />
    <button @click="showModal" class="btn bg-secondary text-white">Add Movie</button>

    <modal />
  </div>
</template>

<script>
import filters from "./filters";
import modal from "./modal";

export default {
  components: {
    filters,
    modal,
  },
  data() {
    return {
      // showModal: false,
      form: {
        title: "",
        yearReleased: null,
        gnere: "",
        director: "",
        storyline: "",
        poster: " ",
        storyline: ''
      },
    };
  },
  methods: {
    showModal() {
      $("#myModal").modal("toggle");
    },
    
  },
};
</script>
<style>
#sidebar {
  float: left;
  width: 15%;
  height: 95vh;
  position: fixed;
}
button {
  padding: 10px;
  border: none;
  border-radius: 10px;
}
.modal-backdrop.show {
  opacity: 0;
  display: none;
}
</style>
