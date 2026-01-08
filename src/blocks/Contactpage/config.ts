import type { Block } from 'payload'

import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const ContactPage: Block = {
  slug: 'contactpage',
  interfaceName: 'ContactPage',
  fields: [
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
      name: 'media',
      type: 'upload',
      relationTo: 'media',
      required: false,
    },

    {
      name: 'address',
      label: 'Address - title',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'phone',
      label: 'Phone - title',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'showroom',
      label: 'Showroom - title',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'office',
      label: 'Office - title',
      type: 'text',
      required: true,
      localized: true,
    },
  ],
  labels: {
    plural: 'Contacts',
    singular: 'Contact',
  },
}
