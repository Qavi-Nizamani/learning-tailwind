import React from 'react';
import Hero from '../components/Hero';
import Portfolio from '../components/Portfolio';
import Head from 'next/head';
const work = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div>
        <Hero
          heading="Let's Work"
          message="Go to contact page to start working together!"
        />
        <Portfolio />
      </div>
    </>
  );
};

export default work;
