import type { GlobalConfig } from 'payload'

import { link } from '@/fields/link'
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
    },{
      name: 'phone',
      type: 'text',
      required: true,
    },{
      name: 'mail',
      type: 'text',
      required: true,
    },{
      name: 'showroom',
      type: 'text',
      required: true,
    },{
      name: 'office',
      type: 'text',
      required: true,
    },
  ],
  hooks: {
    afterChange: [revalidateFooter],
  },
}
