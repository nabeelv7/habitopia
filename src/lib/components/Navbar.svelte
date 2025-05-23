<script>
  import { ArrowRight } from "@lucide/svelte";
  import { Menu } from "@lucide/svelte";
  import { X } from "@lucide/svelte";

  let isOpen = $state(false);
</script>

<!-- Desktop Navbar -->
<nav
  class="w-full hidden md:flex items-center justify-between border-b border-neutral/20 bg-base-200 py-4 md:px-8 px-5"
>
  <a href="/" class="text-xl font-bold flex gap-2">
    <span class="text-2xl">🐵</span> Habitopia
  </a>
  <div class="flex gap-6 items-center">
    <a href="#pricing" class="link link-hover">Pricing</a>
    <a href="#faq" class="link link-hover">FAQ</a>
    <a href="#reviews" class="link link-hover">Reviews</a>
  </div>
  <button class="btn btn-secondary">
    Build Habits <ArrowRight size={15} />
  </button>
</nav>
<!-- Mobile Navbar -->
<nav
  class="w-full md:hidden flex items-center justify-between bg-base-200 py-4 px-5 border-b border-neutral/20"
>
  <!-- Logo -->
  <a href="/" class="text-xl font-bold flex gap-2">
    <span class="text-2xl">🐵</span> Habitopia
  </a>

  <!-- Hamburger Button -->
  <button aria-label="open menu" onclick={() => (isOpen = !isOpen)}>
    <Menu />
  </button>
</nav>

<!-- Mobile Fullscreen Drawer -->
<div
  class={`fixed top-0 left-0 w-full h-full bg-base-100 z-50 ${
    isOpen ? "translate-x-0" : "-translate-x-full"
  }`}
>
  <div
    class="flex items-center justify-between px-5 py-4 border-b border-neutral/20 bg-base-200"
  >
    <!-- Logo -->
    <a href="/" class="text-xl font-bold flex gap-2">
      <span class="text-2xl">🐵</span> Habitopia
    </a>
    <!-- Close Button -->
    <button aria-label="close menu" onclick={() => (isOpen = false)}>
      <X />
    </button>
  </div>

  <!-- Mobile Links -->
  <div class="flex flex-col gap-6 mt-10 text-lg px-5">
    <a href="#pricing" class="link link-hover" onclick={() => (isOpen = false)}
      >Pricing</a
    >
    <a href="#faq" class="link link-hover" onclick={() => (isOpen = false)}
      >FAQ</a
    >
    <a href="#reviews" class="link link-hover" onclick={() => (isOpen = false)}
      >Reviews</a
    >
    <div>
      <div class="divider"></div>
      <button
        class="btn btn-secondary mt-4 w-full"
        onclick={() => (isOpen = false)}
      >
        Build Habits <ArrowRight size={15} />
      </button>
    </div>
  </div>
</div>
