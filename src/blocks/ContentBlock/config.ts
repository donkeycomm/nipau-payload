import type { Block } from 'payload'

import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const contentBlock: Block = {
  slug: 'contentBlock',
  interfaceName: 'ContentBlock',
  labels: {
    plural: 'Content',
    singular: 'content',
  },
  fields: [
    {
      name: 'media1',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'richText',
      editor: lexicalEditor({
        features: ({rootFeatures}) => {
          return [
            ...rootFeatures,
            HeadingFeature({enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4']}),
            FixedToolbarFeature(),
            InlineToolbarFeature(),
          ]
        },
      }),
      label: "Description",
    },
  ]
}
