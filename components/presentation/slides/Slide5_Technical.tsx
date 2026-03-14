'use client';

import { presentationData } from '@/data/presentation';

export function Slide5Technical() {
  const techColors: { [key: string]: string } = {
    'AI/ML': 'bg-slate-100 text-slate-800 border-l-4 border-[#2C4A6E]',
    'GenAI/NLP': 'bg-blue-50 text-slate-800 border-l-4 border-[#4A7C59]',
    'Satellite': 'bg-purple-50 text-slate-800 border-l-4 border-[#E8A020]',
    'Weather': 'bg-cyan-50 text-slate-800 border-l-4 border-[#C4501A]',
    'Backend': 'bg-amber-50 text-slate-800 border-l-4 border-[#B8760A]',
    'Mobile': 'bg-pink-50 text-slate-800 border-l-4 border-[#0D3B1F]',
    'Database': 'bg-rose-50 text-slate-800 border-l-4 border-[#6B3A1F]',
    'Maps': 'bg-yellow-50 text-slate-800 border-l-4 border-[#2C4A6E]'
  };

  return (
    <div className="flex h-full gap-10 p-10 bg-gradient-to-b from-[#FAFAF7] to-white">
      {/* Header */}
      <div className="absolute top-10 left-10 right-10">
        <div className="text-center mb-8">
          <h1 className="font-playfair text-5xl font-bold text-[#0D3B1F] mb-2">
            Technical Architecture
          </h1>
          <p className="font-jakarta text-lg text-[#4A7C59] font-semibold">
            तकनीकी आर्किटेक्चर
          </p>
          <div className="h-1 w-20 bg-[#E8A020] mx-auto mt-2"></div>
        </div>
      </div>

      {/* Left Panel - Tech Stack */}
      <div className="w-1/2 flex flex-col pt-32">
        <h2 className="font-playfair text-3xl font-bold text-[#2C4A6E] mb-8">
          Tech Stack
        </h2>
        <div className="space-y-6 flex-1">
          {presentationData.techStack.map((tech) => (
            <div key={tech.category}>
              <h3 className="font-jakarta font-bold text-gray-900 mb-3">{tech.category}</h3>
              <div className="flex flex-wrap gap-2">
                {tech.items.map((item) => (
                  <span
                    key={item}
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${techColors[tech.category]}`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Panel - Workflow */}
      <div className="w-1/2 flex flex-col pt-32">
        <h2 className="font-playfair text-3xl font-bold text-[#1a5c1a] mb-8">
          Data Flow Pipeline
        </h2>
        <div className="space-y-4 flex-1">
          {presentationData.workflow.map((item) => (
            <div key={item.step} className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[#e8b84b] rounded-full flex items-center justify-center font-bold text-[#1a5c1a]">
                {item.step}
              </div>
              <div className="pt-2">
                <p className="font-jakarta font-bold text-gray-900">{item.en}</p>
                <p className="text-sm italic text-gray-600">{item.hi}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
