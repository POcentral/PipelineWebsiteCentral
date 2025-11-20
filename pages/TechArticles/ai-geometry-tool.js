import Image from 'next/image';

import { Layout, Container } from '@/components';

export default function AIGeometryTool() {
  return (
    <Layout>
      <div className="mt-[70px] pb-20 pt-10 bg-[#F7F7F8]">
        <Container>

          <h1 className="text-5xl font-bold mb-6 text-secondary text-center">
            AI-Driven Computational Geometry — Merging ChatGPT with PicoGK
          </h1>

          <p className="text-gray text-lg leading-relaxed max-w-3xl mx-auto text-center mb-6">
            This project introduces an AI-powered geometry design tool that fuses the creative 
            reasoning of ChatGPT with the computational precision of 
            <span className="font-medium text-primary"> PicoGK</span>. 
            The system was led and fully implemented by <span className="font-medium">Eric Lehder</span> 
            as part of an internal R&amp;D effort at Pipeline Organics.
          </p>

          <p className="text-gray text-lg leading-relaxed max-w-3xl mx-auto text-center mb-12">
            You can try the prototype here (still in development — 
            <span className="font-medium text-red-500"> please avoid clicking &quot;Generate STL&quot; for now</span>):<br />
            <a 
              href="https://black-river-048387203.1.azurestaticapps.net/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary underline font-medium"
            >
              https://black-river-048387203.1.azurestaticapps.net/
            </a>
          </p>

          {/* --- Header Image / Screenshot --- */}
          <div className="flex justify-center mb-10">
            <Image
              src="/images/TechArticles/ai-tool.png"
              alt="AI Geometry Tool UI"
              width={900}
              height={450}
              className="rounded-2xl shadow-lg"
            />
          </div>

          <section className="space-y-10">

            {/* 1. Concept */}
            <div>
              <h2 className="text-2xl font-semibold mb-3 text-primary">
                1. Concept — A New Way to Design Geometry
              </h2>

              <p className="text-gray leading-relaxed mb-4">
                Designed and implemented by <span className="font-medium">Eric Lehder</span>, 
                the tool replaces manual scripting of lattices, implicit fields, and voxel logic 
                with a natural-language interface. Engineers describe what they want, and the AI 
                generates a complete PicoGK-compatible C# file that follows strict templates and 
                geometric conventions.
              </p>

              <p className="text-gray leading-relaxed">
                This creates a conversational workflow for algorithmic geometry: the engineer 
                specifies intent, the AI writes the code, and PicoGK executes it — merging 
                creativity and computational accuracy into a single seamless process.
              </p>
            </div>

            {/* 2. Architecture */}
            <div>
              <h2 className="text-2xl font-semibold mb-3 text-primary">
                2. Architecture — ChatGPT, PicoGK, and Real-Time Feedback
              </h2>

              <p className="text-gray leading-relaxed mb-4">
                The platform is structured around three interactive panes: the AI Designer, the 
                3D Preview, and the Result. Together, they form a fast and iterative computational 
                geometry pipeline.
              </p>

              <ul className="list-disc ml-6 text-gray leading-relaxed mb-4">
                <li>
                  <span className="font-medium">AI Designer:</span> Accepts natural language prompts 
                  such as &quot;generate a TPMS electrode with variable pore size&quot;.
                </li>
                <li>
                  <span className="font-medium">Backend Compiler:</span> Writes the produced code 
                  to disk, compiles it, and runs PicoGK to generate STL outputs.
                </li>
                <li>
                  <span className="font-medium">3D Preview:</span> Displays the resulting STL as soon 
                  as the geometry is generated (this feature is being finalised).
                </li>
                <li>
                  <span className="font-medium">Result Panel:</span> Shows AI reasoning, explanations, 
                  or parametric suggestions.
                </li>
              </ul>

              <p className="text-gray leading-relaxed">
                Compilation errors automatically feed back into the AI, creating a self-correcting 
                iterative loop. The system effectively blends deterministic geometry generation with 
                adaptive AI reasoning.
              </p>
            </div>

            {/* 3. Applications */}
            <div>
              <h2 className="text-2xl font-semibold mb-3 text-primary">
                3. Applications — From Electrodes to Lattices
              </h2>

              <p className="text-gray leading-relaxed mb-4">
                Developed by Eric Lehder to support rapid R&amp;D cycles, the tool can generate a wide 
                range of implicit and voxel-based geometries:
              </p>

              <ul className="list-disc ml-6 text-gray leading-relaxed mb-4">
                <li>TPMS lattices with tunable pore size and thickness</li>
                <li>Spiral and radial electrode architectures</li>
                <li>Multi-material arrangements using voxel fusion</li>
                <li>Cylindrical and organic implicit surfaces</li>
                <li>Beam networks and structural scaffolds</li>
                <li>Tank-arc inspired geometries and concept shapes</li>
              </ul>

              <p className="text-gray leading-relaxed">
                This accelerates early-stage hardware development by allowing engineers to explore 
                design spaces in seconds, rather than writing thousands of lines of code manually.
              </p>
            </div>

            {/* Summary */}
            <div>
              <h2 className="text-2xl font-semibold mb-3 text-primary">
                Summary
              </h2>

              <p className="text-gray leading-relaxed">
                By combining ChatGPT&amp;rsquo;s generative power with PicoGK&amp;rsquo;s computational modelling 
                backend, this tool — led and implemented by <span className="font-medium">Eric Lehder</span> — 
                introduces a new paradigm for geometry creation. It enables rapid exploration of 
                complex structures for additive manufacturing, energy systems, and advanced 
                computational design, all through the simplicity of natural language.
              </p>
            </div>

          </section>
        </Container>
      </div>
    </Layout>
  );
}
