import type { Block } from 'payload'

import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const HomePage: Block = {
  slug: 'homepage',
  interfaceName: 'HomePage',
  fields: [
    {
      name: 'media1',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'media2',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'media3',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'media4',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'title',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'description',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [
            ...rootFeatures,
            HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
            FixedToolbarFeature(),
            InlineToolbarFeature(),
          ]
        },
      }),
      label: "Description",
      localized: true,
    },

    {
      name: 'media5',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'media6',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'media7',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'media8',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'description2',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [
            ...rootFeatures,
            HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
            FixedToolbarFeature(),
            InlineToolbarFeature(),
          ]
        },
      }),
      label: "Description 2",
      localized: true,
    },
  ],
  labels: {
    plural: 'Home',
    singular: 'Home',
  },
}
