import React from 'react';
import Hero from '../components/Hero';
import Head from 'next/head';
import Contact from '../components/Contact';
const contact = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Hero
        heading="Welcome to Contact"
        message="Please refer to below content"
      />
      <Contact />
    </>
  );
};

export default contact;
