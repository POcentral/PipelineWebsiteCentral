import Image from 'next/image';

import { Layout, Container } from '@/components';

export default function TheHeatExperience() {
  return (
    <Layout>
      <div className="mt-[70px] pb-20 pt-10 bg-[#F7F7F8]">
        <Container>
          <h1 className="text-5xl font-bold mb-6 text-secondary text-center">
            Bringing Enzymatic Biofuel Cells to Life — Our Interactive Exhibit at The Heat
          </h1>

          <p className="text-gray text-lg leading-relaxed max-w-3xl mx-auto text-center mb-12">
            At <span className="font-medium text-primary">The Heat 2025</span>, Pipeline Organics 
            introduced a fully interactive demonstration of our enzymatic biofuel cell technology. 
            Led by <span className="font-medium">Apoorva Parmar</span>, this project transformed 
            complex electrochemical processes into a tangible, engaging experience for visitors.
          </p>

          {/* --- Header Image --- */}
          <div className="flex justify-center mb-10">
            <Image
              src="/images/TechArticles/TheHeatTeam.jpg"
              alt="The Heat event interactive exhibit"
              width={600}
              height={350}
              className="rounded-2xl shadow-lg"
            />
          </div>

          <section className="space-y-10">
            {/* 1. Designing the experience */}
            <div>
              <h2 className="text-2xl font-semibold mb-3 text-primary">
                1. Designing the Interactive Biofuel Cell Experience
              </h2>

              <p className="text-gray leading-relaxed mb-4">
                This project was led by <span className="font-medium">Apoorva Parmar</span>, who 
                defined the entire user experience from concept to execution. Other key controbutors to the project were Eric Lehder, Keyvan Jodeiri, Masoumeh Tahimehr and Ethan Norman. The goal was to make 
                our biofuel cell technology intuitive to understand, engaging to interact with, and 
                visually compelling for a wide audience.
              </p>

              <ul className="list-disc ml-6 text-gray leading-relaxed">
                <li>Real-time displays showing voltage, current, and power.</li>
                <li>Interactive controls allowing visitors to influence the system.</li>
                <li>Clear visual feedback showcasing live power generation.</li>
                <li>Compact modular design for rapid transport and setup.</li>
                <li>Lattice design optimisation via Computational Fluid Dynamics.</li>
              </ul>

              <div className="flex justify-center mt-6">
                <Image
                  src="/images/TechArticles/AP-DesignPhase.png"
                  alt="Design sketches"
                  width={450}
                  height={280}
                  className="rounded-xl shadow-md"
                />
              </div>
            </div>

            {/* 2. Testing */}
            <div>
              <h2 className="text-2xl font-semibold mb-3 text-primary">
                2. Testing the Electromechanical System
              </h2>

              <p className="text-gray leading-relaxed mb-4">
                Ahead of the event, the exhibit underwent rigorous electromechanical testing. The 
                system needed to operate continuously, handle public interaction, and deliver clear, 
                stable data visualisation throughout the showcase.
              </p>

              {/* GIF placeholder */}
              <div className="flex justify-center mt-6">
                <Image
                  src="/images/TechArticles/AP-TestGiff.gif"
                  alt="Testing GIF"
                  width={500}
                  height={300}
                  className="rounded-xl shadow-lg"
                />
              </div>

              <p className="text-center text-sm text-gray mt-2">
                Lab test of the technology demonstrator
              </p>
            </div>

            {/* 3. Delivering at The Heat */}
            <div>
              <h2 className="text-2xl font-semibold mb-3 text-primary">
                3. Delivering the Project at The Heat 2025
              </h2>

              <p className="text-gray leading-relaxed mb-4">
                The final system was successfully delivered at 
                <span className="font-medium"> The Heat 2025</span>, where visitors interacted 
                directly with our technology. Changes in conditions were reflected immediately on 
                the live display, creating an intuitive understanding of how enzymatic biofuel cells 
                generate power.
              </p>

              <p className="text-gray leading-relaxed mb-4">
                This showcase marked a major milestone for Pipeline Organics, demonstrating our 
                technology publicly in an interactive format for the first time and receiving 
                enthusiastic feedback from attendees.
              </p>

              <div className="flex justify-center mt-6">
                <Image
                  src="/images/TechArticles/AP-Delivery.jpg"
                  alt="The Heat event showcase"
                  width={500}
                  height={300}
                  className="rounded-xl shadow-lg"
                />
              </div>
            </div>

            {/* Summary */}
            <div>
              <h2 className="text-2xl font-semibold mb-3 text-primary">Summary</h2>
              <p className="text-gray leading-relaxed">
                Led by <span className="font-medium">Apoorva Parmar</span>, this project highlights 
                the power of combining engineering, design, and accessible science communication. 
                By converting complex bioelectrochemistry into a hands-on experience, we introduced 
                our technology to the world in a format that was both engaging and scientifically 
                rigorous.
              </p>
            </div>
          </section>
        </Container>
      </div>
    </Layout>
  );
}
