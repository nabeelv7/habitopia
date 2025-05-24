<script>
  import Dock from "$lib/components/Dock.svelte";
  let { data, children } = $props();
</script>

<!-- Fixed sidebar -->
<Dock />

<!-- Main content -->
<div class="md:ml-33 ml-0 max-md:mb-23">
  <div
    class="tooltip tooltip-left fixed top-10 right-10 text-3xl font-extrabold font-mono"
    data-tip="These are gems, which are earned through completing habits regularly and can be used to buy new pets in the pet store."
  >
    <h1 class="md:btn md:btn-xl">💎 11</h1>
  </div>

  {@render children()}
</div>
