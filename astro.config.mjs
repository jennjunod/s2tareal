import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), mdx()],
  site: "https://opengraph.b-cdn.net/production/images/472241ee-3726-4492-b73b-976b50e8b0f1.jpg?token=33NiEpv5gmrrJBx8qHOX-pQ3Z9PA1Y7acKgzrGZXDRE&height=438&width=491&expires=33268139322"
});
