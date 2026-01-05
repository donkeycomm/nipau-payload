import type { Block } from 'payload'
import { contentBlock } from "@/blocks/ContentBlock/config";

export const ShowroomPage: Block = {
  slug: 'page_showroom',
  interfaceName: 'ShowroomPage',
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
    plural: 'Showroom',
    singular: 'Showroom',
  },
}
