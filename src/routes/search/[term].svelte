<script context="module">
  export async function load({ fetch, params }) {
    const API_KEY = import.meta.env.VITE_API_KEY;
    const TMDB_URL = `https://api.themoviedb.org/3/search/movie/?api_key=${API_KEY}&language=en-US&query=${params.term}`;

    const res = await fetch(TMDB_URL);
    const { results } = await res.json();

    if (res.ok) {
      return {
        props: { results },
      };
    }
  }
</script>

<script>
  export let results;

  import { fly } from "svelte/transition";
  import MovieCard from "../../components/MovieCard.svelte";
</script>

<div
  in:fly={{ x: 10, duration: 500, delay: 300 }}
  out:fly={{ x: -10, duration: 300 }}
  class="movies-list"
>
  {#each results as movie}
    <MovieCard {movie} />
  {/each}
</div>

<style>
  .movies-list {
    display: grid;
    /* grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); */
    grid-template-columns: repeat(auto-fit, 200px);
    column-gap: 1em;
    row-gap: 2em;
  }
</style>
