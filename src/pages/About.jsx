import React from 'react';
import { Helmet } from 'react-helmet-async'

export default function About() {
  return (
    <>
      <Helmet>
        <title>About | SEO React App</title>
        <meta name="description" content="Learn more about our SEO-optimized React application" />
        <link rel="canonical" href="/about" />
      </Helmet>
      <h1>About Us</h1>
    </>
  )
}
