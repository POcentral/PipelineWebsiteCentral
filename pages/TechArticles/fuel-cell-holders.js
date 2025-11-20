import { useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Editor from 'react-simple-code-editor';
import Prism from 'prismjs';
import 'prismjs/components/prism-csharp';
import 'prismjs/themes/prism.css';

import { Layout, Container } from '@/components';

const STLViewerSection = dynamic(() => import('../../components/STLViewer'), {
  ssr: false,
  loading: () => (
    <div className="bg-white rounded-xl shadow-md border border-gray-200 min-h-[300px] flex items-center justify-center text-gray-500">
      Loading 3D viewer...
    </div>
  ),
});

export default function FuelCellClothHolders() {
    const [code, setCode] = useState(`// Generate spiral-based lattice
for (int j = 0; j < fZMax_n; j++)
{
    // Z position for this spiral stage
    float fZ = fElecZStrt + (fElecH - fElecZStrt) * (j / (fZMax_n - 1));

    // Create spiral layer
    for (int i = 0; i < nRadPtsTot; i++)
    {
        float fRadius = fRadStrt + (fRadMax - fRadStrt) * (i / nRadPtsTot);
        float fPhi = ((2 * MathF.PI * nTurns) / nRadPtsTot) * i;

        Vector3 vecSpPt = VecOperations.vecGetCylPoint(fRadius, fPhi, fZ);
        latSpiral.AddSphere(vecSpPt, fSprWallth);
    }

    // Add spiral-patterned connection struts
    if (j < fZMax_n - 1)
    {
        for (int i = 0; i < nRadPtsTotVerts; i++)
        {
            float fRadius2 = fRadStrt + (fRadMax - fRadStrt) * (i / nRadPtsTotVerts);
            float fRadTurns = 2 * MathF.PI * nTurns;
            float fPhi2 = (fRadTurns / nRadPtsTotVerts) * i;
            float fZ2 = fElecZStrt + (fElecH - fElecZStrt) * ((j + 1) / (fZMax_n - 1));

            Vector3 vecSpPt2 = VecOperations.vecGetCylPoint(fRadius2, fPhi2, fZ);
            Vector3 vecSpPt3 = VecOperations.vecGetCylPoint(fRadius2, fPhi2, fZ2);

            latSpiral.AddBeam(vecSpPt2, fSprWallth, vecSpPt3, fSprWallth);
        }
    }

    // Connect the ends of the spiral
    Vector3 vecSpPtEnd = VecOperations.vecGetCylPoint(fRadius, fPhi, fZ2);
    latSpiral.AddBeam(vecSpPt, fSprWallth, vecSpPtEnd, fSprWallth);
}

// Convert to voxel representation
Voxels voxSpir = new(latSpiral);
`);

  return (
    <Layout>
      <div className="mt-[70px] pb-20 pt-10 bg-[#F7F7F8]">
        <Container>
          <h1 className="text-5xl font-bold mb-6 text-secondary text-center">
            Fuel Cell Cloth Holders — From Algorithmic Design to Prototype using PicoGK
          </h1>

          <p className="text-gray text-lg leading-relaxed max-w-3xl mx-auto text-center mb-12">
            This project illustrates how computational geometry and additive manufacturing 
            enable rapid development of functional components for bioelectrochemical fuel cells. 
            Our objective was to design a holder that securely positions carbon cloth for both 
            anode and cathode while maximising active surface area. 
            The result integrates <span className="font-medium text-primary">
            state-of-the-art surface chemistry</span> with precise geometric design.
          </p>

          {/* --- Image Section --- */}
          <div className="flex justify-center mb-10">
            <Image
              src="/images/TechArticles/fuelcellholders_overview.png"
              alt="Fuel cell cloth holders overview"
              width={500}
              height={300}
              className="rounded-2xl shadow-lg"
            />
          </div>

          {/* --- Sections --- */}
          <section className="space-y-10">
            <div>
              <h2 className="text-2xl font-semibold mb-3 text-primary">1. Design Requirements</h2>
              <ul className="list-disc ml-6 text-gray leading-relaxed">
                <li>Hold carbon cloth securely for both anode and cathode.</li>
                <li>Maximise available carbon cloth surface area for electrochemical reactions.</li>
                <li>Ensure manufacturability using additive manufacturing processes.</li>
                <li>Maintain mechanical stability under operation.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3 text-primary">2. Concept Development</h2>
              <p className="text-gray leading-relaxed mb-4">
                The creative foundation for this design was developed by 
                <span className="font-medium"> Masoumeh Tahimehr</span> at Pipeline Organics. 
                Her initial sketch introduced a dual-spiral structure concept that inspired 
                the algorithmic generation of both the anode and cathode holders.
              </p>
              <Image
                src="/images/TechArticles/fuelcellholders_sketch.png"
                alt="Initial concept sketch"
                width={200}
                height={150}
                className="rounded-xl shadow-md mx-auto"
              />
            </div>

            <div>
            <h2 className="text-2xl font-semibold mb-3 text-primary">
                3. Computational Engineering Algorithm
            </h2>
            <p className="text-gray leading-relaxed mb-4">
                The geometry was generated using parametric algorithms written in C# by{' '}
                <span className="font-medium">Eric Lehder</span>. The logic proceeds in three main stages:
            </p>

            <ol className="list-decimal ml-6 text-gray leading-relaxed">
                <li>Create spiral stages parametrically with adjustable radius and pitch.</li>
                <li>Connect the spirals using spiral-patterned struts for structural integrity.</li>
                <li>Generate the cathode holder through a circular pattern of holders.</li>
            </ol>

            <p className="text-gray leading-relaxed mt-3">
                This spiral-based algorithm allows precise control of spacing and volume fraction, 
                ensuring mechanical efficiency and maximum electrode exposure.
            </p>

            {/* --- New Row: editable code + viewer --- */}
            <div className="grid md:grid-cols-2 gap-8 items-start mt-8">
            {/* Left: editable light-themed code editor */}
            <div className="rounded-xl border border-gray-300 bg-[#FAFAFA] shadow-sm p-4 font-mono text-sm leading-relaxed h-[400px] overflow-y-auto">
            <Editor
                value={code}
                onValueChange={setCode}
                highlight={(code) =>
                Prism.highlight(code, Prism.languages.csharp, 'csharp')
                }
                padding={12}
                style={{
                fontFamily: '"Fira Code", monospace',
                fontSize: 14,
                backgroundColor: '#FAFAFA',
                height: '100%',
                outline: 'none',
                }}
            />
            </div>



            {/* Right: Live 3D STL Viewer */}
            <div className="h-full">
                <STLViewerSection />
            </div>
            </div>

            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3 text-primary">4. Prototyping and Printing</h2>
              <p className="text-gray leading-relaxed mb-4">
                The final 3D model was exported to STL and printed by 
                <span className="font-medium"> Apoorva Parmar</span> at Pipeline Organics. 
                The prototype demonstrates excellent rigidity and precision, 
                enabling smooth insertion of carbon cloth for both electrodes.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <Image
                  src="/images/TechArticles/fuelcellholders_render.png"
                  alt="Fuel cell holder render"
                  width={300}
                  height={200}
                  className="rounded-xl shadow-md"
                />
                <Image
                  src="/images/TechArticles/fuelcellholders_overview.png"
                  alt="Printed prototype"
                  width={300}
                  height={200}
                  className="rounded-xl shadow-md"
                />
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3 text-primary">5. Next Steps</h2>
              <p className="text-gray leading-relaxed">
                Future iterations will integrate catalytic coatings and advanced surface chemistry 
                developed in-house to enhance charge transfer and biocompatibility. 
                Additional work will focus on optimising flow dynamics around the electrode 
                surface and improving print efficiency.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3 text-primary">6. Summary</h2>
              <p className="text-gray leading-relaxed">
                This work showcases how computational geometry and additive manufacturing 
                can rapidly transform conceptual sketches into test-ready components. 
                The integration of advanced surface chemistry marks an important step 
                toward scalable, high-efficiency bioelectrochemical energy systems.
              </p>
            </div>
          </section>
        </Container>
      </div>
    </Layout>
  );
}
