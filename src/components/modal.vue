<template>
  <div class="modal fade" id="myModal" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content bg-dark">
        <div class="modal-header">
          <h5 class="modal-title" id="staticBackdropLabel">Enter New Movie</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
        <form @submit.prevent="addMovie" ref="movieForm">        
          <input v-model="form.title" type="text" placeholder="Enter Movie Title" />
          <input v-model="form.director" type="text" placeholder="Enter Movie Director" />
          <input v-model="form.yearReleased" type="text" placeholder="Enter Movie Year Released" />
          <input v-model="form.gnere" type="text" placeholder="Enter Movie Gnere" />
          <input v-model="form.poster" type="text" placeholder="Enter Movie Poster" />
          <textarea rows="6" name="" v-model="form.storyline"></textarea>

        </form>
        </div>
        <div class="modal-footer">
          <button @click="closeModal()" class="btn btn-secondary">Close</button>
          <button @click="$refs.movieForm.requestSubmit()" type="button" class="btn btn-primary">Add</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      form: {
        title: "",
        yearReleased: null,
        gnere: "",
        director: "",
        storyline: "",
        poster: " ",
        storyline: ''
      },
    }
  },
  methods: {
    closeModal() {
      $("#myModal").modal("hide");
    },
    addMovie(e) {
      $("#myModal").modal("hide");
      e.preventDefault();
      this.$store.dispatch('addMovie', this.form)
      
    },
  },
};
</script>
<style>
input {
  width: 100%;
  padding: 5px;
  border-radius: 10px;
}
textarea{
  width: 100%;
  border-radius: 10px;
  margin-top: 20px;
}
</style>
