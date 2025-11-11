import { Globe, Brain, Apple } from "lucide-react";
import EventCard from "./EventCard";
import nonghanlogo from "@/public/โลโก้วิทยาลัยnew-768x768-removebg-preview.png"

export default function TimelineSection() {
  const events = [
    {
      logo: "https://upload.wikimedia.org/wikipedia/en/a/ab/Logo_of_King_Mongkut%27s_University_of_Technology_North_Bangkok.svg",
      date: "Expected Graducation: October 2026",
      title: "King Mongkut's University of Technology North Bangkok",
      location: "Prajunburi, Thailand",
      description:
        "Bachelor of Industry Technology Program in Information Technology (Continuing Program)",
      link: "https://www.kmutnb.ac.th/?lang=en-gb",
      tags: [
        { icon: <Globe size={14} />, label: "WebSite" },
        { icon: <Brain size={14} />, label: "Education" },
      ],
    },
    {
      logo: nonghanlogo.src,
      date: "March 15th, 2024",
      title: "Nonghan Industrial and Community Education College",
      location: "Udontani, Thailand",
      description:
        "Diploma in Digital Business Technology",
      link: "https://www.nonghan.ac.th/",
      tags: [
        { icon: <Globe size={14} />, label: "WebSite" },
        { icon: <Brain size={14} />, label: "Education" },
      ],
    },
  ];

  return (
    <>
      <div className="space-y-24 relative">
        {events.map((event, index) => (
          <EventCard key={index} {...event} index={index} />
        ))}
      </div>
    </>


  );
}
