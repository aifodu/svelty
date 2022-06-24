<script>
  export let movie;
</script>

<div class="card bg-base-100 shadow-xl">
  {#if movie.poster_path}
    <figure>
      <img
        src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}
        alt={movie.title}
      />
    </figure>
  {/if}
  <div class="card-body p-4">
    <h2 class="card-title">{movie.title}</h2>
    <p class=" text-slate-500 font-bold text-sm uppercase mb-2">
      <small>📅 {movie.release_date} <br />⭐ ({movie.vote_average}/10)</small>
    </p>
    <div class="card-actions justify-start">
      <a
        sveltekit:prefetch
        href={`/movie/${movie.id}`}
        class="btn btn-primary btn-sm">Details</a
      >
    </div>
  </div>
</div>

<style>
  img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    object-position: top;
  }
</style>
