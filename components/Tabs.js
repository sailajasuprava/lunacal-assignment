"use client";
import { useState } from "react";
import { HelpCircle } from "lucide-react";
import { BiGridVertical } from "react-icons/bi";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState("about");

  const tabs = [
    { id: "about", label: "About Me" },
    { id: "exp", label: "Experiences" },
    { id: "rec", label: "Recommended" },
  ];

  const content = {
    about: `Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now...Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now...Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now...Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now...Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now...Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now...Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now...Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now...Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now...Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now...`,
    exp: `Over the past decade, I've worked in multiple sales and client relationship roles...`,
    rec: `Clients often recommend me for my ability to listen carefully...`,
  };

  return (
    <div className="bg-[#363c43] rounded-2xl p-6 px-10 shadow-lg w-full h-full relative flex flex-col">
      <button className="absolute top-4 left-2 text-gray-500 hover:text-white transition-colors">
        <HelpCircle size={22} />
      </button>

      <button className="absolute top-1/2 left-1 text-gray-500 hover:text-white transition-colors">
        <BiGridVertical size={30} />
      </button>

      <div className="flex gap-1 bg-[#171717] rounded-2xl p-2 mb-4 shadow-[inset_4px_4px_8px_rgba(0,0,0,0.5),inset_-2px_-2px_6px_rgba(255,255,255,0.03)] flex-shrink-0">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 py-2 rounded-2xl text-base font-semibold transition-all duration-300 ${
              activeTab === tab.id
                ? "bg-[#28292C] text-white shadow-[6px_6px_12px_#0a0b0c,-4px_-4px_10px_#3d454f]"
                : "text-gray-400 hover:text-gray-200 hover:bg-[#1f2023]"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div
        className="scrollable flex-1 overflow-y-auto pr-4 pb-6 text-md text-stone-400 leading-[1.4]"
        role="region"
        aria-label="Tab content"
      >
        <p className="whitespace-pre-line">{content[activeTab]}</p>
      </div>

      <style jsx>{`
        .scrollable::-webkit-scrollbar {
          width: 8px;
        }
        .scrollable::-webkit-scrollbar-track {
          background: transparent;
          border-radius: 10px;
        }
        .scrollable::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #4a5158, #363c43);
          border-radius: 10px;
        }
        .scrollable::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #555d65, #3d444b);
        }

        /* Firefox */
        .scrollable {
          scrollbar-width: thin;
          scrollbar-color: #4a5158 transparent;
        }
      `}</style>
    </div>
  );
}
