<script>
  export let dog;
</script>

<div class="card w-72 bg-base-100 shadow-xl">
  <figure><img src={dog.image_link} alt={dog.name} /></figure>
  <div class="card-body">
    <h2 class="card-title">{dog.name}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div
      class="card-actions justify-start mt-2 pt-2 border-t border-x-cyan-200"
    >
      <a href={"/dogs/" + dog.name} class="btn btn-primary">Details</a>
    </div>
  </div>
</div>
