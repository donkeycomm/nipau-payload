import type { GlobalConfig } from 'payload'

import { revalidateFooter } from './hooks/revalidateFooter'

export const Footer: GlobalConfig = {
  slug: 'footer',
  label: 'Company info',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'address',
      type: 'text',
      required: true,
      localized: true,
    },{
      name: 'phone',
      type: 'text',
      required: true,
      localized: true,
    },{
      name: 'mail',
      type: 'text',
      required: true,
      localized: true,
    },{
      name: 'showroom',
      type: 'text',
      required: true,
      localized: true,
    },{
      name: 'office',
      type: 'text',
      required: true,
      localized: true,
    },
  ],
  hooks: {
    afterChange: [revalidateFooter],
  },
}
