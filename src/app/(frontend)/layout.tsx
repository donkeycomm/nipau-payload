import React from 'react'
import './globals.css'
import { Metadata } from "next";

export const metadata: Metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Donkeycomm CMS is a headless content management system for managing your content easily.',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
    <head>
      <link rel="icon" href="https://donkeycomm.be/favicon.ico" type="image/svg+xml" />
      <meta name="robots" content="noindex, nofollow" />
    </head>
    <body>
    <main>{children}</main>
    </body>
    </html>
  )
}
