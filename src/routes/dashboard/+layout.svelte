<script>
  import Sidebar from "$lib/components/Dock.svelte";
  let { data, children } = $props();
  console.log("hello");
</script>

<div
  class="tooltip tooltip-left fixed top-10 right-10 text-3xl font-extrabold font-mono animate-bounce"
  data-tip="These are gems, which are earned through completing habits regularly and can be used to buy new pets in the pet store."
>
  <h1>💎 11</h1>
</div>
<Sidebar />
{@render children()}
