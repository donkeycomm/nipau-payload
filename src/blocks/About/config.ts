import type { Block } from 'payload'
import { contentBlock } from "@/blocks/ContentBlock/config";

export const AboutPage: Block = {
  slug: 'page_about',
  interfaceName: 'AboutPage',
  fields: [
    {
      name: 'layout',
      type: 'blocks',
      blocks: [contentBlock],
      required: true,
      admin: {
        initCollapsed: true,
      },
    },
  ],
  labels: {
    plural: 'Aboutpages',
    singular: 'Aboutpage',
  },
}
