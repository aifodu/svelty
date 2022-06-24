<script context="module">
  const API_KEY = import.meta.env.VITE_API_KEY;
  const TMDB_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;

  export async function load({ fetch }) {
    const res = await fetch(TMDB_URL);
    const { results: popular } = await res.json();

    return {
      props: {
        popular,
      },
    };
  }
</script>

<script>
  import { fly } from "svelte/transition";
  import MovieCard from "../components/MovieCard.svelte";
  export let popular;
</script>

<svelte:head>
  <title>Movies</title>
</svelte:head>

<div
  in:fly={{ x: 10, duration: 500, delay: 300 }}
  out:fly={{ x: -10, duration: 300 }}
  class="movies-list"
>
  {#each popular as movie}
    <MovieCard {movie} />
  {/each}
</div>

<style>
  .movies-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    column-gap: 1em;
    row-gap: 2em;
  }
</style>
