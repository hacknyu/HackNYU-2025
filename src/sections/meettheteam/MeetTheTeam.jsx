import React from "react";

// stand-in data to be replaced
const teamMembers = [
  {
    id: 1,
    name: "John Doe",
    title: "Software Engineer",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Jane Smith",
    title: "Product Designer",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Sam Wilson",
    title: "Project Manager",
    image: "https://via.placeholder.com/150",
  },
];

export default function MeetTheTeam() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
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
