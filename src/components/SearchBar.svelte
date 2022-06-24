<script>
  import { goto } from "$app/navigation";

  let term = "";

  function searchMovies() {
    goto(`/search/${term}`);
  }
</script>

<form on:submit|preventDefault={searchMovies}>
  <div class="form-control w-96 text-slate-800">
    <input
      type="text"
      bind:value={term}
      placeholder="Search movies"
      class="input input-bordered"
    />
  </div>
</form>
