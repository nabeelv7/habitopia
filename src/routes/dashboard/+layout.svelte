<script>
  import Sidebar from "$lib/components/Dock.svelte";
  let { data, children } = $props();
</script>

<h1 class="fixed top-10 right-10 text-3xl font-extrabold font-mono animate-bounce">💎 11</h1>
<Sidebar />
{@render children()}
