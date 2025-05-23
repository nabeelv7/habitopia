<script>
  import { ArrowRight } from "@lucide/svelte";

  const steps = [
    {
      emoji: "💎✨",
      title: "You get 3am motivation",
      example1: "🤑 “I'm gonna start a side hustle!”",
      example2: "💪 “Tomorrow is gym day. For real this time.”",
    },
    {
      emoji: "😵📱",
      title: "You get distracted",
      example1: "🛌 Sleep in 'til noon",
      example2: "📲 Scroll TikTok for 2 hours",
    },
    {
      emoji: "🫠🧹",
      title: "You forget all about it",
      example1: "😩 “Wait, what happened to my plan?”",
      example2: "🧠 “Eh, maybe next Monday…”",
    },
  ];
</script>

<div
  class="flex flex-wrap justify-center items-center py-8 gap-5 md:flex-row flex-col"
>
  {#each steps as step, i}
    <div class="flex items-center md:flex-row flex-col gap-5">
      <div
        class="bg-secondary text-secondary-content w-80 aspect-square rounded-xl flex flex-col p-6 shadow-xl"
      >
        <div class="flex flex-col justify-center gap-5 items-center h-full">
          <h1 class="text-6xl font-bold">{step.emoji}</h1>
          <p class="text-xl font-bold capitalize text-center">{step.title}</p>
          <ul class="space-y-2 text-lg text-left w-full">
            <li>{step.example1}</li>
            <li>{step.example2}</li>
          </ul>
        </div>
      </div>

      {#if i < steps.length - 1}
        <ArrowRight class="text-secondary-content md:block hidden" size={40} />
        <ArrowRight
          class="text-secondary-content block md:hidden rotate-90"
          size={40}
        />
      {/if}
    </div>
  {/each}
</div>
