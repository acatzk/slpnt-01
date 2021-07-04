import React from 'react'
import Head from 'next/head'

interface SEOProps {
  lang?: string
  description?: string
  author?: string
  title: string
}

const SEO: React.FC<SEOProps> = ({
  description = 'startup product landing page',
  author = 'JG',
  title = 'startup landing title',
}) => {
  const metaData = [
    {
      name: `description`,
      content: description,
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:description`,
      content: description,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: author,
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: description,
    },
  ]

  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />

      {metaData.map(({ name, content }, i) => (
        <meta key={i} name={name} content={content} />
      ))}
    </Head>
  )
}

export default SEO
