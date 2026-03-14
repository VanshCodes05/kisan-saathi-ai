'use client';

import { presentationData } from '@/data/presentation';

export function Slide7Prototype() {
  return (
    <div className="flex flex-col h-full p-10 bg-gradient-to-b from-[#FAFAF7] to-white">
      <div className="text-center mb-10">
        <h1 className="font-playfair text-5xl font-bold text-[#0D3B1F] mb-2">
          Our Mobile Prototype
        </h1>
        <p className="font-jakarta text-lg text-[#4A7C59] font-semibold">
          हमारे मोबाइल प्रोटोटाइप
        </p>
        <div className="h-1 w-20 bg-[#E8A020] mx-auto mt-2"></div>
      </div>

      {/* Phone Mockups */}
      <div className="grid grid-cols-4 gap-6 mb-10">
        {presentationData.prototype.screens.map((screen) => (
          <div key={screen.id} className="flex flex-col items-center">
            <div className="w-32 h-64 border-8 border-gray-800 rounded-2xl shadow-lg overflow-hidden bg-white">
              <div
                className="w-full h-16 flex items-center justify-center text-white font-jakarta font-bold text-sm"
                style={{ backgroundColor: screen.color }}
              >
                {screen.title}
              </div>
              <div className="h-40 bg-gradient-to-b from-gray-100 to-gray-50 flex items-center justify-center">
                <span className="text-4xl">📱</span>
              </div>
            </div>
            <p className="mt-4 font-jakarta font-semibold text-gray-900">{screen.title}</p>
          </div>
        ))}
      </div>

      {/* Flow Diagram */}
      <div className="bg-[#f0faf0] p-8 rounded-lg border-2 border-[#1a5c1a]">
        <h3 className="font-jakarta font-bold text-gray-900 mb-6 text-center">
          User Journey Stages
        </h3>
        <div className="flex items-center justify-between">
          {presentationData.prototype.flowStages.map((stage, index) => (
            <div key={stage.stage} className="flex items-center flex-1">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-[#1a5c1a] text-white rounded-full flex items-center justify-center font-jakarta font-bold">
                  {stage.stage}
                </div>
                <p className="text-sm font-jakarta font-semibold text-gray-900 mt-2 text-center max-w-20">
                  {stage.label}
                </p>
              </div>
              {index < presentationData.prototype.flowStages.length - 1 && (
                <div className="flex-1 h-1 bg-[#1a5c1a] mx-2"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
