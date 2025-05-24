import { SvelteKitAuth } from "@auth/sveltekit";
import Google from "@auth/sveltekit/providers/google";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { db } from "$lib/server/db";

export const { handle } = SvelteKitAuth({
  adapter: DrizzleAdapter(db),
  providers: [Google],
});
