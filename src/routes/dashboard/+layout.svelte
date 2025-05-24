<script>
  import Sidebar from "$lib/components/Sidebar.svelte";
  let { data, children } = $props();
</script>

<Sidebar />
{@render children()}
