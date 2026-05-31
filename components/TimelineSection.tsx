import { BookOpen, Brain, Code2, Globe } from "lucide-react";
import EventCard from "./EventCard";
import nonghanlogo from "@/public/โลโก้วิทยาลัยnew-768x768-removebg-preview.png"

export default function TimelineSection() {
  const events = [
    {
      logo: "https://upload.wikimedia.org/wikipedia/en/a/ab/Logo_of_King_Mongkut%27s_University_of_Technology_North_Bangkok.svg",
      date: "Expected Graduation: October 2026",
      badge: "Bachelor",
      title: "King Mongkut's University of Technology North Bangkok",
      location: "Prachinburi, Thailand",
      description:
        "Bachelor of Industry Technology Program in Information Technology (Continuing Program)",
      link: "https://www.kmutnb.ac.th/?lang=en-gb",
      tags: [
        { icon: <Globe size={14} />, label: "Website" },
        { icon: <Brain size={14} />, label: "Education" },
        { icon: <Code2 size={14} />, label: "Information Technology" },
      ],
    },
    {
      logo: nonghanlogo.src,
      date: "March 15th, 2024",
      badge: "Diploma",
      title: "Nonghan Industrial and Community Education College",
      location: "Udon Thani, Thailand",
      description:
        "Diploma in Digital Business Technology",
      link: "https://www.nonghan.ac.th/",
      tags: [
        { icon: <Globe size={14} />, label: "Website" },
        { icon: <Brain size={14} />, label: "Education" },
        { icon: <BookOpen size={14} />, label: "Digital Business" },
      ],
    },
  ];

  return (
    <div className="flex flex-col items-start">
      {events.map((event, index) => (
        <EventCard key={event.title} {...event} index={index} />
      ))}
    </div>
  );
}
