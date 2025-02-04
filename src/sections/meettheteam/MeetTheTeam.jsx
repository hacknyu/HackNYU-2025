import React from "react";

// 1) Import each image directly:
import fahimImg from "../../assets/bitmojis/grin smile-Fahim Hussain.png";
import isaacImg from "../../assets/bitmojis/grin smile - Isaac Zhang.png";
import kaynaImg from "../../assets/bitmojis/grin smile - Kayna Huang.png";
import mohanImg from "../../assets/bitmojis/grin smile - Mohan Lu.png";
import shreyImg from "../../assets/bitmojis/grin smile - Shrey Kharbanda.png";
import tanzinaImg from "../../assets/bitmojis/grin smile - Tanzina Sumona.png";
import helenImg from "../../assets/bitmojis/Helen_Zhou_bitmoji - Helen Zhou.png";
import cassandraImg from "../../assets/bitmojis/IMG_9762 - Cassandra Salazar.png";
import rileyImg from "../../assets/bitmojis/Riley_Bitmoji - Riley Dou.png";
import sarthakImg from "../../assets/bitmojis/Sarthak-Goel - Sarthak Goel.png";
import aaliaImg from "../../assets/bitmojis/smiling - Aalia Imran.png";
import vandanaImg from "../../assets/bitmojis/smiling - Vandana Rajesh.png";
import anaImg from "../../assets/bitmojis/sticker - Ana Eremina.png";
import haileyImg from "../../assets/bitmojis/sticker - Hailey Kim.png";
import heloiseImg from "../../assets/bitmojis/sticker - Heloise Wu.png";
import rishiImg from "../../assets/bitmojis/sticker - Rishi Rana.png";
import zakImg from "../../assets/bitmojis/grin smile - Zakaria Arshad.png";

// 2) Use each imported variable in the teamMembers array:
const teamMembers = [
  {
    id: 5,
    name: "Shrey Kharbanda",
    title: "Executive Director",
    image: shreyImg,
  },
  {
    id: 16,
    name: "Rishi Rana",
    title: "Vice President",
    image: rishiImg,
  },
  {
    id: 8,
    name: "Cassandra Salazar",
    title: "Vice President",
    image: cassandraImg,
  },
  // Bam
  {
    id: 13,
    name: "Ana Eremina",
    title: "Design PM",
    image: anaImg,
  },
  {
    id: 12,
    name: "Vandana Rajesh",
    title: "Design",
    image: vandanaImg,
  },
  // Cher
  {
    id: 15,
    name: "Heloise Wu",
    title: "Design",
    image: heloiseImg,
  },
  {
    id: 6,
    name: "Tanzina Sumona",
    title: "Logistics PM",
    image: tanzinaImg,
  },
  // Ashley
  {
    id: 11,
    name: "Aalia Imran",
    title: "Logistics",
    image: aaliaImg,
  },
  // Daniel
  {
    id: 3,
    name: "Kayna Huang",
    title: "Media and Marketing",
    image: kaynaImg,
  },
  {
    id: 14,
    name: "Hailey Kim",
    title: "Media and Marketing",
    image: haileyImg,
  },
  {
    id: 2,
    name: "Isaac Zhang",
    title: "Media and Marketing",
    image: isaacImg,
  },
  {
    id: 7,
    name: "Helen Zhou",
    title: "Media and Marketing",
    image: helenImg,
  },
  {
    id: 9,
    name: "Riley Dou",
    title: "Tech Development PM",
    image: rileyImg,
  },
  {
    id: 99,
    name: "Zakaria Arshad",
    title: "Tech Development",
    image: zakImg,
  },
  {
    id: 10,
    name: "Sarthak Goel",
    title: "Tech Development",
    image: sarthakImg,
  },
  {
    id: 1,
    name: "Fahim Hussain",
    title: "Tech Development",
    image: fahimImg,
  },
  {
    id: 4,
    name: "Mohan Lu",
    title: "Tech Development",
    image: mohanImg,
  },
];

export default function MeetTheTeam() {
  return (
    <div id="team" className="flex flex-col items-center justify-center min-h-screen p-8 md:my-20">
      <h2 className="text-blue text-3xl font-bold mb-8">Meet the Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="bg-white border-2 border-blue shadow-lg rounded-lg p-6 flex flex-col items-center text-center"
            style={{ width: "250px", height: "200px" }}
          >
            <img
              src={member.image}
              alt={`${member.name}'s photo`}
              className="w-24 h-24 rounded-full mb-4"
            />
            <h3 className="text-lg font-semibold text-blue">{member.name}</h3>
            <p className="text-blue">{member.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
