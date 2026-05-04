import React from "react";

const timelineData = [
  {
    title: "Graphic Designer",
    company: "Freelance",
    date: "2022 – 2023",
    side: "left",
    points: [
      "Designed logos, posters, and social media content for local businesses",
      "Delivered high-quality assets using Adobe Photoshop, Illustrator, and CorelDRAW",
    ],
  },
  {
    title: "Graphic Designer",
    company: "small agency",
    date: "2023 – 2025",
    side: "right",
    points: [
      "Created brand identities and print materials for clients in retail and service sectors."
    ],
  },
  {
    title: "Graphic Designer",
    company: "Metro advertising agency",
    date: "2025 – present",
    side: "left",
    points: [
      "Developed social media content using AI tools.",
      "Improved print design workflows and production quality",
    ],
  },
];

export default function Timeline() {
  return (
    <div className='bg-black text-white pt-20 items-center bg-[url("https://assets.prebuiltui.com/images/components/hero-section/hero-background-image.png")] bg-cover bg-center bg-no-repeat pb-10'>
      {/* Header */}
      <div className="text-center mb-16">
        <p className="text-[#A6FF5D] tracking-widest uppercase text-sm">
          Career Path
        </p>
        <h1 className="text-4xl font-bold">Professional History</h1>
      </div>

      {/* Timeline */}
      <div className="relative max-w-5xl mx-auto">
        {/* Center Line */}
        <div className="absolute left-1/2 top-0 w-[2px] h-full bg-gray-600 transform -translate-x-1/2">
                <div className="absolute transform -translate-x-1/2 w-4 h-4 bg-[#A6FF5D] rounded-full shadow-[#A6FF5D]  shadow-[0px_0px_10px_8px_rgba(0,0,0,1)]"></div>
                <div className="absolute transform -translate-x-1/2 top-1/2 w-4 h-4 bg-[#A6FF5D] rounded-full shadow-[#A6FF5D]  shadow-[0px_0px_10px_8px_rgba(0,0,0,1)]"></div>
                <div className="absolute transform -translate-x-1/2 top-3/4 w-4 h-4 bg-[#A6FF5D] rounded-full shadow-[#A6FF5D]  shadow-[0px_0px_10px_8px_rgba(0,0,0,1)]"></div>

        </div>

        {timelineData.map((item, index) => (
          <div
            key={index}
            className={`mb-16 flex ${
              item.side === "left" ? "justify-start" : "justify-end"
            }`}
          >
            <div className="w-full md:w-1/2 px-6">
              <div className="bg-[#1a1a1a] p-6 rounded-xl shadow-lg relative">
                {/* Dot */}

                <h3 className="text-xl font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-[#A6FF5D] mb-3">{item.company}</p>

                <ul className="text-gray-300 text-sm space-y-1 mb-4">
                  {item.points.map((point, i) => (
                    <li key={i}>• {point}</li>
                  ))}
                </ul>

                <span className="text-xs bg-gray-700 px-3 py-1 rounded">
                  {item.date}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}