<script>
  import { afterNavigate, beforeNavigate } from "$app/navigation";
  import NProgress from "nprogress";
  import "nprogress/nprogress.css";
  import Navbar from "$lib/components/Navbar.svelte";
  import "../app.css";

  let { data, children } = $props();
  console.log(data.session);

  beforeNavigate(() => {
    NProgress.start();
  });

  afterNavigate(() => {
    NProgress.done();
  });

  NProgress.configure({
    showSpinner: false,
    trickleSpeed: 100,
    minimum: 0.1,
  });
</script>

<Navbar />
{@render children()}
