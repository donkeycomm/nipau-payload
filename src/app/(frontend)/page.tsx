import { headers as getHeaders } from 'next/headers.js'
import Image from 'next/image'
import { getPayload } from 'payload'
import React from 'react'

import config from '@/payload.config'
import './globals.css'

export default async function HomePage() {
  const payloadConfig = await config

  return (
    <div className="home">
      <div className="content">
        <picture>
          <Image
            alt="Donkeycomm CMS"
            height={30}
            src="https://donkeycomm.be/logo-white.svg"
            width={300}
          />
        </picture>

        <div style={{ marginTop: '50px' }} className="links">
          <a className="admin" href={payloadConfig.routes.admin} rel="noopener noreferrer">
            Inloggen
          </a>
        </div>
      </div>
    </div>
  )
}
