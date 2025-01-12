import React, { useState, useEffect } from "react";

const Schedule = () => {
  const [scale] = useState(1);
  const BASE_WIDTH = window.screen.width;
  const BASE_HEIGHT = window.screen.height;

  useEffect(() => {
    const handleResize = () => {
      const scaleX = window.innerWidth / BASE_WIDTH;
      const scaleY = window.innerHeight / BASE_HEIGHT;
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div 
      className="min-h-screen flex flex-col bg-white p-4"
      style={{
        transform: `scale(${scale})`,
        transformOrigin: 'center center',
        overflow: 'visible'
      }}
    >
      <div className="max-w-7xl mx-auto mb-12">
        <h2 className="text-[#0b5cd5] text-2xl md:text-4xl font-bold font-inter text-center mb-8">Saturday Schedule</h2>
        
        <div className="grid grid-cols-6 gap-4">
          <div className="space-y-4">
            <div className="h-6"></div>
            {[
              "9:30 AM - 10:00 AM",
              "10:00 AM - 11:00 AM", 
              "11:30 AM - 12:00 PM",
              "12:00 PM - 1:00 PM", 
              "1:00 PM - 2:00 PM", 
              "2:00 PM - 3:00 PM", 
              "3:00 PM - 4:00 PM", 
              "4:00 PM - 5:00 PM", 
              "5:30 PM - 6:00 PM", 
              "6:00 PM - 7:00 PM", 
              "7:00 PM - 8:00 PM",
              "9:00 PM - 10:00 PM"
            ].map((time, index) => (
              <div 
                key={index} 
                className="bg-[#0b5cd5] text-white p-2 rounded-xl text-xs font-bold font-inter text-center min-w-[80px] max-h-[40px]"
              >
                {time}
              </div>
            ))}
          </div>

          <div className="space-y-3">
            <div className="bg-[#0b5cd5] text-white p-2 rounded-xl text-xs font-bold font-inter text-center flex items-center justify-center">
              Tandon Gym
            </div>
            <div className="bg-white text-[#0b5cd5] p-2 rounded-xl text-xs font-bold font-inter text-center border border-[#0b5cd5] flex items-center justify-center min-w-[80px] min-h-[80px] h-16">
              Check-In
            </div>
            <div className="bg-white text-[#0b5cd5] p-2 rounded-xl text-xs font-bold font-inter text-center border border-[#0b5cd5] inline-flex justify-center text-sm">
              Opening Ceremony
            </div>
            <div className="bg-white text-[#0b5cd5] p-2 rounded-xl text-xs font-bold font-inter text-center border border-[#0b5cd5] flex items-center justify-center min-w-[80px] min-h-[30px]">
              Team Formation
            </div>
            <div className="bg-white text-[#0b5cd5] p-2 rounded-xl text-xs font-bold font-inter text-center border border-[#0b5cd5] flex items-center justify-center min-w-[80px]">
              Workshop
            </div>
            <div className="h-10"></div>
            <div className="h-10"></div>
            <div className="h-8"></div>
            <div className="bg-white text-[#0b5cd5] p-2 rounded-xl text-xs font-bold font-inter text-center border border-[#0b5cd5]">
              Fun-tivity
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-[#0b5cd5] text-white p-2 rounded-xl text-xs font-bold font-inter text-center">
              Room A
            </div>
            <div className="h-6"></div>
            <div className="h-8"></div>
            <div className="h-6"></div>
            <div className="bg-white text-[#0b5cd5] p-2 rounded-xl text-xs font-bold font-inter text-center border border-[#0b5cd5] flex items-center justify-center h-32">
              HackNYU Booth
            </div>
            <div className="bg-white text-[#0b5cd5] p-2 rounded-xl text-xs font-bold font-inter text-center border border-[#0b5cd5] flex items-center justify-center min-w-[80px]">
              Workshop
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-[#0b5cd5] text-white p-2 rounded-xl text-xs font-bold font-inter text-center">
              Room B
            </div>
            <div className="h-8"></div>
            <div className="h-8"></div>
            <div className="h-8"></div>
            <div className="h-8"></div>
            <div className="h-12"></div>
            <div className="h-12"></div>
            <div className="bg-white text-[#0b5cd5] p-2 rounded-xl text-xs font-bold font-inter text-center border border-[#0b5cd5] flex items-center justify-center min-w-[80px]">
              Workshop
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-[#0b5cd5] text-white p-2 rounded-xl text-xs font-bold font-inter text-center">
              Food
            </div>
            <div className="h-4"></div>
            <div className="bg-white text-[#0b5cd5] p-2 rounded-xl text-xs font-bold font-inter text-center border border-[#0b5cd5] flex items-center justify-center">
              Breakfast
            </div>
            <div className="h-20"></div>
            <div className="h-8"></div>
            <div className="bg-white text-[#0b5cd5] p-2 rounded-xl text-xs font-bold font-inter text-center border border-[#0b5cd5]">
              Lunch
            </div>
            <div className="h-8"></div>
            <div className="h-8"></div>
            <div className="bg-white text-[#0b5cd5] p-2 rounded-xl text-xs font-bold font-inter text-center border border-[#0b5cd5]">
              Snacks
            </div>
            <div className="h-8"></div>
            <div className="h-8"></div>
            <div className="bg-white text-[#0b5cd5] p-2 rounded-xl text-xs font-bold font-inter text-center border border-[#0b5cd5]">
              Dinner
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mb-12">
        <h2 className="text-[#0b5cd5] text-2xl md:text-4xl font-bold font-inter text-center mb-8">Sunday Schedule</h2>
        
        <div className="grid grid-cols-5 gap-12">
          <div className="space-y-4">
            <div className="h-6"></div>
            {[
              "9:00 AM - 10:00 AM",
              "10:00 AM - 11:00 AM", 
              "11:30 AM - 12:00 PM",
              "12:00 PM - 1:00 PM", 
              "1:00 PM - 2:00 PM", 
              "2:00 PM - 3:00 PM", 
              "3:00 PM - 4:00 PM", 
              "4:00 PM - 5:00 PM", 
              "5:30 PM - 6:00 PM", 
              "6:00 PM - 7:00 PM", 
              "7:00 PM - 8:00 PM",
              "9:00 PM - 10:00 PM"
            ].map((time, index) => (
              <div 
                key={index} 
                className="bg-[#0b5cd5] text-white p-2 rounded-xl text-xs font-bold font-inter text-center min-w-[80px]"
              >
                {time}
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <div className="bg-[#0b5cd5] text-white p-2 rounded-xl text-xs font-bold font-inter text-center min-w-[60px]">
              Tandon Gym
            </div>
            <div className="h-8"></div>
            <div className="h-6"></div>
            <div className="bg-white text-[#0b5cd5] p-2 rounded-xl text-xs font-bold font-inter text-center border border-[#0b5cd5] flex items-center justify-center min-w-[60px]">
              Project Deadline
            </div>
            <div className="bg-white text-[#0b5cd5] p-2 rounded-xl text-xs font-bold font-inter text-center border border-[#0b5cd5] h-20 flex items-center justify-center min-w-[60px]">
              Judging
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-[#0b5cd5] text-white p-2 rounded-xl text-xs font-bold font-inter text-center flex items-center justify-center min-w-[70px] min-w-[60px]">
              Pfizer Auditorium
            </div>
            <div className="h-8"></div>
            <div className="h-8"></div>
            <div className="h-8"></div>
            <div className="h-10"></div>
            <div className="h-16"></div>
            <div className="bg-white text-[#0b5cd5] p-2 rounded-xl text-xs font-bold font-inter text-center border border-[#0b5cd5] flex items-center justify-center min-w-[80px]">
              Closing Ceremony
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-[#0b5cd5] text-white p-2 rounded-xl text-xs font-bold font-inter text-center min-w-[60px]">
              Food
            </div>
            <div className="h-6"></div>
            <div className="bg-white text-[#0b5cd5] p-2 rounded-xl text-xs font-bold font-inter flex items-center justify-center border border-[#0b5cd5] h-12 min-w-[60px]">
              Brunch
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;