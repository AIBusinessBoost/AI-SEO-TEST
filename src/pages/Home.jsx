import React from 'react';
import { Helmet } from 'react-helmet-async'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Home | SEO React App</title>
        <meta name="description" content="Welcome to our SEO-optimized React application" />
        <link rel="canonical" href="/" />
      </Helmet>
      <h1>Welcome to Our SEO-Optimized Site</h1>
    </>
  )
}
