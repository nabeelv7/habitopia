<script>
  import GoogleButton from "$lib/components/GoogleButton.svelte";
  import BackButton from "$lib/components/BackButton.svelte";
</script>

<div class="flex min-h-screen flex-col md:flex-row">
  <!-- Left side (GIF/Video/Image) - Only on Desktop -->
  <div
    id="left"
    class="hidden md:flex w-0 md:w-1/2 md:min-h-screen md:h-full"
  ></div>

  <!-- Right side (Login Form) -->
  <div
    class="flex relative w-full min-h-screen md:w-1/2 justify-center items-center px-6 py-12 bg-accent"
    >
    <BackButton href="/" styles="absolute top-10 left-6" />
    <div class="w-full py-10 max-w-md rounded-xl space-y-8 bg-base-100">
      <div class="flex flex-col justify-center items-center gap-4">
        <h1 class="text-4xl font-bold">🐵 Habitopia</h1>
        <p class="text-base-content/70 mb-2">
          Build better habits, one day at a time.
        </p>
        <GoogleButton />
      </div>
    </div>
  </div>
</div>

<style>
  div#left {
    background-color: #fff7ed;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 200 200'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='100' y1='33' x2='100' y2='-3'%3E%3Cstop offset='0' stop-color='%23000' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23000' stop-opacity='1'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='100' y1='135' x2='100' y2='97'%3E%3Cstop offset='0' stop-color='%23000' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23000' stop-opacity='1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg fill='%23d5cec4' fill-opacity='0.45'%3E%3Crect x='100' width='100' height='100'/%3E%3Crect y='100' width='100' height='100'/%3E%3C/g%3E%3Cg fill-opacity='0.45'%3E%3Cpolygon fill='url(%23a)' points='100 30 0 0 200 0'/%3E%3Cpolygon fill='url(%23b)' points='100 100 0 130 0 100 200 100 200 130'/%3E%3C/g%3E%3C/svg%3E");
  }
</style>
