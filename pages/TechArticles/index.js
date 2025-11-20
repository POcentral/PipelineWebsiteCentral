import { useState } from 'react';
import Link from 'next/link';

import { Container, Layout, Button } from '@/components';

export default function TechArticles() {
  // Example data (you can replace with API or CMS later)
  const [articles] = useState([
    {
      title: 'Interactive Biofuel Cell Demonstrator at The Heat',
      description:
        'How we designed, engineered, and delivered a fully interactive enzymatic biofuel cell experience at The Heat 2025. Led by Apoorva Parmar, this project transformed our technology into a live hands-on exhibit for the world to explore.',
      link: '/TechArticles/the-heat-event',
      date: 'September 2025',
    },
    {
      title: 'Developing fuel cell holders using PicoGK',
      description:
        'Exploring how computational geometry and additive manufacturing enable the rapid creation of functional fuel cell components — combining PicoGK-based algorithmic design with state-of-the-art surface chemistry',
      link: '/TechArticles/fuel-cell-holders',
      date: 'August 2025',
    },
    {
      title: 'AI-Driven Geometry Generation with PicoGK',
      description:
        'How we built an AI tool that links ChatGPT’s reasoning with PicoGK’s implicit modeling engine — enabling automated generation of complex electrode and lattice geometries directly from natural-language prompts.',
      link: '/TechArticles/ai-geometry-tool',
      date: 'July 2025',
    },

    // {
    //   title: 'Surface Chemistry Meets Computational Design',
    //   description:
    //     'We are implementing state-of-the-art surface chemistry to enhance electrode performance — from catalytic coatings to bio-compatible surface treatments — integrated seamlessly into our design pipeline.',
    //   link: '/TechArticles/surface-chemistry',
    //   date: 'August 2025',
    // },
  ]);

  return (
    <Layout>
      <div className='pb-20 pt-20 mt-[50px]'>
        <Container>
          <h1 className='text-5xl font-bold mb-10 text-secondary text-center'>
            Tech Articles
          </h1>
          <p className='text-center text-gray text-lg max-w-3xl mx-auto mb-14'>
            At Pipeline Organics, we combine computational geometry, additive
            manufacturing, and <span className='text-primary font-medium'>
            advanced surface chemistry</span> to push the limits of clean-energy
            technology. These articles share insights into our methods — from
            implicit modeling to electrochemical performance optimization.
          </p>

          <div className='grid md:grid-cols-3 gap-8'>
            {articles.map((article, index) => (
              <div
                key={index}
                className='bg-white rounded-2xl shadow-[0_0_10px_#00000014] p-8 flex flex-col justify-between'
              >
                <div>
                  <h2 className='text-2xl font-semibold mb-3 text-primary'>
                    {article.title}
                  </h2>
                  <p className='text-gray text-sm mb-5 leading-relaxed'>
                    {article.description}
                  </p>
                </div>
                <div className='flex justify-between items-center'>
                <span className='text-xs text-gray-500'>{article.date}</span>
                <Link href={article.link} passHref>
                    <Button className='text-sm font-medium capitalize'>
                    Read more
                    </Button>
                </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </Layout>
  );
}
