// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://teach.texastorque.org",
  integrations: [
    starlight({
      title: "Torque Teach",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/TexasTorque",
        },
      ],
      sidebar: [
        {
          label: "Getting Started",
          items: [{ label: "Introduction", slug: "introduction" }],
        },
        {
          label: "Subteams",
          items: [
            { label: "Programming", slug: "subteams/programming" },
            { label: "Electrical", slug: "subteams/electrical" },
            {
              label: "Mechanical",
              items: [
                { label: "Design", slug: "subteams/mechanical/design" },
                {
                  label: "Fabrication",
                  items: [
                    {
                      label: "Machines",
                      slug: "subteams/mechanical/fabrication/machines",
                    },
                    {
                      label: "CAM",
                      slug: "subteams/mechanical/fabrication/cam",
                    },
                  ],
                },
                { label: "Assembly", slug: "subteams/mechanical/assembly" },
              ],
            },
            {
              label: "Business",
              items: [
                { label: "Media", slug: "subteams/business/media" },
                { label: "Awards", slug: "subteams/business/awards" },
                { label: "Outreach", slug: "subteams/business/outreach" },
              ],
            },
          ],
        },
        {
          label: "Strategy",
          items: [
            { label: "Scouting", slug: "strategy/scouting" },
            { label: "Analysis", slug: "strategy/analysis" },
          ],
        },
      ],
    }),
  ],
});
