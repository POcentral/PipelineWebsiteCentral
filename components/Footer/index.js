import Link from 'next/link';

// import Image from 'next/image';
import { LogoIcon } from '../icons';
import { Container } from '../Container';
// import { Button } from '../Button';
import { LinkedinIcon } from '../icons';

const FOOTER_LINKS = [
  {
    id: 1,
    url: '/',
    text: 'Home',
  },
  {
    id: 2,
    url: '/contact-us',
    text: 'Contact us',
  },
  {
    id: 3,
    url: '/##',
    text: 'Timeline',
  },
  {
    id: 4,
    url: '/###',
    text: 'Team',
  },
  // {
  //   id: 5,
  //   text: 'Tech Articles',
  //   url: '/TechArticles',
  // },
];

export const Footer = () => (
  <footer className='bg-[#f7f7f8] rounded-t-[30px]'>
    <Container>
      {/* <EmailSection /> */}
      <div className='bottomSection pt-16 md:pt-28'>
        <div className='relative grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-20'>
          <div className='image'>
            <LogoIcon />
          </div>
          <div className='relative'>
            <h3 className='font-semibold text-lg text-black mb-5'>
              About Pipeline
            </h3>
            <div className='links flex flex-col gap-3 flex-wrap xs:flex-nowrap'>
              {FOOTER_LINKS?.map((data) => (
                <Link
                  href={data?.url}
                  key={data?.id}
                  className='text-base whitespace-nowrap text-black font-regular'
                >
                  {data?.text}
                </Link>
              ))}
            </div>
          </div>
          <div className='relative'>
            <h3 className='font-semibold text-lg mb-5 text-black'>Contact</h3>
            <div className='links flex flex-col gap-3 flex-wrap xs:flex-nowrap'>
              <Link
                href='mailto:info@pipelineorganics.co.uk'
                className='text-base break-all text-black font-regular'
              >
                info@pipelineorganics.co.uk
              </Link>
                  <Link
                href='/TechArticles'
                className='text-base text-black font-regular'
              >
                Tech Articles
              </Link>
              {/* <Link
                href='/#'
                className='text-base whitespace-nowrap text-black font-regular'
              >
                Dashboard
              </Link> */}
            </div>
          </div>
          <div className='socailIcons'>
            <div className='relative flex overflow-hidden py-[6px] lg:px-20'>
              <Link href='https://www.linkedin.com/company/pipeline-organics/?viewAsMember=true'>
                <LinkedinIcon className='text-[#0076B2] h-12 w-12' />
              </Link>
            </div>
          </div>
        </div>

        <div className='flex flex-col md:flex-row gap-7 md:gap-[10px] text-center md:text-left justify-between items-center py-7 mt-16 border-t border-[#e7e9ed]'>
          <p className='text-xs font-medium text-gray'>
            © 2024 Pipeline Organics, All rights reserved.
          </p>
          <div className='links flex gap-3'>
            <Link
              href='/privacy-poilcy'
              className='text-xs font-normal text-secondary'
            >
              Privacy Policy
            </Link>
            <span className='text-sm text-gray'>|</span>
            <Link href='/terms' className='text-xs font-normal text-secondary'>
              Terms of use
            </Link>
          </div>
        </div>
      </div>
    </Container>
  </footer>
);
