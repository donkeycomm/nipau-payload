import { postgresAdapter } from '@payloadcms/db-postgres'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { s3Storage } from '@payloadcms/storage-s3'
import sharp from 'sharp'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

import { Categories } from './collections/Categories'
import { Media } from './collections/Media'
import { Pages } from './collections/Pages'
import { Posts } from './collections/Posts'
import { Users } from './collections/Users'
import { Footer } from './Footer/config'
import { Header } from './Header/config'
import fs from "fs";
import {Brands} from "@/collections/Brands";
import {Events} from "@/collections/Events";

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)
const isProduction = process.env.NODE_ENV === 'production'
const isBuild =
  process.env.NEXT_PHASE === 'phase-production-build'

export default buildConfig({
  localization: {
    locales: ['en', 'nl', "fr"], // required
    defaultLocale: 'en', // required
    fallback: true,
  },
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    meta: {
      titleSuffix: 'Nipau CMS',
      description:
        'Nipau CMS is a headless content management system for managing your content easily.',
      authors: [
        {
          name: 'Indy Vanhaelst',
        },
      ],
      robots: 'noindex, nofollow',
      icons: [
        {
          rel: 'icon',
          type: 'image/svg+xml',
          url: 'https://nipau.be/favicon.ico',
        },
      ],
    },
    components: {
      // The `BeforeLogin` component renders a message that you see while logging into your admin panel.
      // Feel free to delete this at any time. Simply remove the line below.
      beforeLogin: ['@/components/BeforeLogin'],
      // The `BeforeDashboard` component renders the 'welcome' block that you see after logging into your admin panel.
      // Feel free to delete this at any time. Simply remove the line below.
      beforeDashboard: ['@/components/BeforeDashboard'],
    },
  },
  // This config helps us configure global or default features that the other editors can inherit
  collections: [Pages, Brands, Events, Posts, Media, Categories, Users],
  globals: [Header, Footer],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET,
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  // @ts-ignore
  db: isBuild
  ? undefined
  : postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || '',
      ...(isProduction
        ? {
          ssl: {
            rejectUnauthorized: false,
          },
        }
        : {
          ssl: {
            ca: fs.readFileSync(path.resolve(process.cwd(), 'ca-certificate.crt')),
            rejectUnauthorized: true,
          },
        }),
    },
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    s3Storage({
      collections: {
        media: true,
      },
      bucket: process.env.DO_SPACES_BUCKET || '',
      config: {
        credentials: {
          accessKeyId: process.env.DO_SPACES_KEY_ID || '',
          secretAccessKey: process.env.DO_SPACES_ACCESS_KEY || '',
        },
        region: process.env.DO_SPACES_REGION,
        endpoint: process.env.DO_SPACES_ENDPOINT,
      },
    }),
  ],
})
