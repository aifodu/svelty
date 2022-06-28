<script>
  import axios from "../lib/axios";

  const loginUser = () => {
    axios
      .post("/here", { name: "mail" })
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };
</script>

<div class="hero min-h-screen bg-base-200">
  <div class="hero-content max-w-4xl gap-12 flex-col lg:flex-row">
    <div class="text-center lg:text-left">
      <h1 class="text-5xl font-bold">Login now!</h1>
      <p class="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
        excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
        id nisi.
      </p>
    </div>
    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form on:submit|preventDefault={loginUser} class="card-body">
        <div class="form-control">
          <label for="email" class="label">
            <span class="label-text">Email</span>
          </label>
          <input
            id="email"
            type="text"
            placeholder="email"
            class="input input-bordered"
          />
        </div>
        <div class="form-control">
          <label for="password" class="label">
            <span class="label-text">Password</span>
          </label>
          <input
            id="password"
            type="text"
            placeholder="password"
            class="input input-bordered"
          />
          <label for="forgot-password" class="label">
            <a href="/reset" class="label-text-alt link link-hover"
              >Forgot password?</a
            >
          </label>
        </div>
        <div class="form-control mt-6">
          <button class="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  </div>
</div>
