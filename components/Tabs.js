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
    about: `Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now.Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now.Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now.Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now.Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now.

I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a...`,
    exp: `Over the past decade, I've worked in multiple sales and client relationship roles across diverse industries. My focus has always been building trust and delivering impactful results.
    
I started my career in tech sales at a startup in San Francisco, where I learned the importance of understanding customer pain points. From there, I moved to enterprise software sales, working with Fortune 500 companies.`,
    rec: `Clients often recommend me for my ability to listen carefully, understand their needs, and tailor solutions that make a real difference.
    
"Dave has been instrumental in helping our team achieve our goals. His dedication and expertise are unmatched." - Sarah J., VP of Sales`,
  };

  return (
    <div className="bg-[#363c43] rounded-2xl p-6 px-10 shadow-lg w-full relative">
      <button className="absolute top-4 left-2 text-gray-500 hover:text-white transition-colors">
        <HelpCircle size={22} />
      </button>

      <button className="absolute top-1/2 left-1 text-gray-500 hover:text-white transition-colors">
        <BiGridVertical size={30} />
      </button>

      <div className="flex gap-1 bg-[#171717] rounded-2xl p-2 mb-6 shadow-[inset_4px_4px_8px_rgba(0,0,0,0.5),inset_-2px_-2px_6px_rgba(255,255,255,0.03)]">
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

      <div className="relative">
        <div className="text-lg text-stone-400 leading-[1.2] h-36 overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent">
          <p className="whitespace-pre-line">{content[activeTab]}</p>
        </div>

        <style jsx>{`
          div::-webkit-scrollbar {
            width: 6px;
          }
          div::-webkit-scrollbar-track {
            background: transparent;
            border-radius: 10px;
          }
          div::-webkit-scrollbar-thumb {
            background: linear-gradient(to bottom, #4a5158, #363c43);
            border-radius: 10px;
          }
          div::-webkit-scrollbar-thumb:hover {
            background: linear-gradient(to bottom, #555d65, #3d444b);
          }
        `}</style>
      </div>
    </div>
  );
}
