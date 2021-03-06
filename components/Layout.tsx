import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'Small Office, Home Office' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav>
        <Link href="/">
          <a>首页</a>
        </Link>{' '}
        |{' '}
        <Link href="/about">
          <a>关于</a>
        </Link>
      </nav>
    </header>
    {children}
    <footer>
      <span>kevin.penn@outlook.com</span>
    </footer>
  </div>
)

export default Layout
