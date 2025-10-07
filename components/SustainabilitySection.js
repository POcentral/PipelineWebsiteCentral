import dynamic from 'next/dynamic';
const Player = dynamic(
  () => import('@lottiefiles/react-lottie-player').then(mod => mod.Player),
  { ssr: false }
);
import Reveal from 'react-awesome-reveal';
import { keyframes } from '@emotion/react';

import { SectionHeader } from './SectionHeader';
import { Container } from './Container';

const CONTENT = [
  {
    id: 1,
    title: '24%',
    text: 'of global GHG emissions come from the energy used to power Industry.',
    icon: '/images/json/one.json',
  },
  {
    id: 2,
    title: '50 bn',
    text: 'tonnes of CO2 emissions produced globally every year.',
    icon: '/images/json/two.json',
  },
  {
    id: 3,
    title: '9.5 tn',
    text: 'megawatt hours of electricity consumed across Industry per year.',
    icon: '/images/json/three.json',
  },
];

const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: scale(0.5) translate3d(0, 100px, 0);
    
  }

  to {
    opacity: 1;
    transform: scale(1) translate3d(0, 0, 0);
  }
`;

export const SustainabilitySection = () => (
  <section className='py-20 sm:py-24 tab:py-40'>
    <Container>
      <SectionHeader
        heading='The Global Energy Challenge'
        text='Inflated energy costs, crumbling infrastructure, and unreliable supply chains are crippling energy-intensive industries. The Food & Beverage sector alone spends a staggering $145 billion annually on energy bills.'
      />
      <div className='flex flex-col items-center sm:items-start sm:flex-row justify-between gap-10 pt-12 md:pt-20'>
        {CONTENT?.map((data) => (
          <Reveal
            keyframes={customAnimation}
            key={data?.id}
            direction='bottom'
            delay={5}
            duration={800}
            className='xs:w-[314px]'
          >
            <div className='item flex flex-col items-center justify-center text-center gap-3'>
              <div className='w-[110px] h-[110px]'>
                <Player
                  autoplay
                  loop
                  src={data?.icon}
                  style={{ height: '100%', width: '100%' }}
                ></Player>
              </div>
              <h3 className='text-40 leading-11 font-bold text-secondary'>
                {data?.title}
              </h3>
              <p className='text-sm text-gray font-medium'>{data?.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Container>
  </section>
);
