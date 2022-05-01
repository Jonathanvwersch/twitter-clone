import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import { Feed, Sidebar } from '../components'

const Home: NextPage = () => {
  return (
    <div className="bg-black">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mx-auto flex min-h-screen max-w-[1500px]">
        <div className="hidden min-w-[88px] sm:inline xl:min-w-[275px]">
          <Sidebar />
        </div>
        <div className="flex w-full">
          <Feed />
          {/* Widgets */}
        </div>
        {/* Modal */}
      </main>
    </div>
  )
}

export default Home
