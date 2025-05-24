<script>
  import Sidebar from "$lib/components/Dock.svelte";
  let { data, children } = $props();
</script>

<Sidebar />
{@render children()}
