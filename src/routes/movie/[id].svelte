<script context="module">
  export async function load({ fetch, params }) {
    const API_KEY = import.meta.env.VITE_API_KEY;
    const TMDB_URL = `https://api.themoviedb.org/3/movie/${params.id}?api_key=${API_KEY}`;

    const res = await fetch(TMDB_URL);
    const movie = await res.json();

    if (res.ok) {
      return {
        props: { movie },
      };
    }
  }
</script>

<script>
  export let movie;
</script>

<svelte:head>
  <title>Movies: {movie.title}</title>
</svelte:head>

<div class="card max-w-4xl mx-auto">
  <nav class="bg-slate-200 p-4">
    <a href="/" class="btn gap-2 btn-sm btn-secondary">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"><path d="M19 12H6M12 5l-7 7 7 7" /></svg
      >
      Movie list
    </a>
  </nav>

  <figure>
    <img
      src={"https://image.tmdb.org/t/p/original/" + movie.backdrop_path}
      alt={movie.title}
    />
  </figure>

  <article class=" bg-slate-100 p-6 pb-8">
    <h2 class="font-extrabold text-3xl my-3">
      {movie.title} <br />
      <small class="text-base font-normal text-slate-500">{movie.tagline}</small
      >
    </h2>

    <p class="flex gap-1 mb-4">
      {#each movie.genres as genre}
        <small
          class="px-2 bg-slate-100 rounded uppercase text-xs border border-slate-400 text-slate-400"
        >
          {genre.name}
        </small>
      {/each}
    </p>

    <p class=" text-indigo-500 font-bold text-xs mb-4  leading-6">
      📅 {movie.release_date} <br /> ⭐ ({movie.vote_average}/10) <br /> ⏱️ {movie.runtime}mins
      <!-- <br />💰 {movie.budget} -->
    </p>

    <p>{movie.overview}</p>
  </article>
</div>
