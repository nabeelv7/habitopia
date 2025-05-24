<script>
  import { ArrowLeft } from "@lucide/svelte";
  let { href, styles } = $props();
</script>

<a {href} class={`${styles} btn`}>
  <ArrowLeft size={15} /> Back
</a>
