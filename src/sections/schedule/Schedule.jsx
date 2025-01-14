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

  const renderTableCell = (content, isTimeColumn = false) => {
    const isStarTime = content === "●";
    
    if (!content || isStarTime) {
      return (
        <td 
          className={`p-2 ${isStarTime ? 'bg-transparent' : ''} ${isTimeColumn ? 'h-[50px]' : ''}`}
        ></td>
      );
    }
    
    return (
      <td className={`p-3 border border-[#0b5cd5] border-opacity-50 rounded-xl bg-white text-[#0b5cd5] ${isTimeColumn ? 'h-[50px] flex items-center justify-center' : 'flex flex-col'}`}>
        <div className={`text-s font-bold font-inter text-center ${isTimeColumn ? 'w-1/6' : ''}`}>
          {content}
        </div>
      </td>
    );
  };

  const filterAdditionalMobileEvents = (scheduleData, predefinedSectionsInput = null) => {
    const predefinedSections = predefinedSectionsInput || scheduleData;
    return { predefinedSections };
  };

  const renderMobileScheduleSections = (scheduleData, predefinedSectionsInput = null) => {
    const { predefinedSections } = filterAdditionalMobileEvents(scheduleData, predefinedSectionsInput);

    return (
      <div className="w-full px-5 font-inter">
        {predefinedSections.map((section, index) => (
          <div 
            key={`predefined-${index}`} 
            className="relative w-full"
          >
            <div className="flex flex-col py-6 w-full text-white">
              <div className="flex items-start">
                <div className="flex flex-col mr-16 min-w-[120px]">
                  <span className="text-xl font-bold">{section.startTime}</span>
                  <span className="text-sm">{section.endTime}</span>
                </div>
                
                <div className={`flex flex-col ${section.location === undefined ? 'self-center' : 'items-start'}`}>
                  <span className="text-xl font-bold">{section.description}</span>
                  {section.location && (
                    <span className="text-sm">{section.location}</span>
                  )}
                </div>
              </div>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/30" />
          </div>
        ))}
      </div>
    );
  };

  const saturdayScheduleData = [
    {
      time: "9:30 AM - 10:00 AM",
      tandonGym: "",
      roomA: "",
      roomB: "",
      food: "",
      pfizer: ""
    },
    {
      time: "10:00 AM - 10:30 AM",
      tandonGym: "",
      roomA: "",
      roomB: "",
      food: "",
      pfizer: ""
    },
    {
      time: "10:30 AM - 11:00 AM",
      tandonGym: "",
      roomA: "",
      roomB: "",
      food: "",
      pfizer: ""
    },
    {
      time: "11:00 AM - 11:30 AM",
      tandonGym: "Opening Ceremony",
      roomA: "",
      roomB: "",
      food: "",
      pfizer: ""
    },
    {
      time: "11:30 AM - 12:00 PM",
      tandonGym: "Team Formation",
      roomA: "",
      roomB: "",
      food: "",
      pfizer: ""
    },
    {
      time: "12:00 PM - 12:30 PM",
      tandonGym: "",
      roomA: "",
      roomB: "",
      food: "",
      pfizer: ""
    },
    {
      time: "12:30 PM - 1:00 PM",
      tandonGym: "",
      roomA: "",
      roomB: "",
      food: "",
      pfizer: ""
    },
    {
      time: "1:00 PM - 1:30 PM",
      tandonGym: "",
      roomA: "",
      roomB: "",
      food: "",
      pfizer: ""
    },
    {
      time: "1:30 PM - 2:00 PM",
      tandonGym: "",
      roomA: "",
      roomB: "",
      food: "",
      pfizer: ""
    },
    {
      time: "2:00 PM - 2:30 PM",
      tandonGym: "",
      roomA: "",
      roomB: "",
      food: "",
      pfizer: ""
    },
    {
      time: "2:30 PM - 3:00 PM",
      tandonGym: "",
      roomA: "",
      roomB: "",
      food: "",
      pfizer: ""
    },
    {
      time: "3:00 PM - 3:30 PM",
      tandonGym: "Fun-tivity",
      roomA: "",
      roomB: "",
      food: "",
      pfizer: ""
    },
    {
      time: "3:30 PM - 4:00 PM",
      tandonGym: "",
      roomA: "",
      roomB: "",
      food: "",
      pfizer: ""
    },
    {
      time: "4:00 PM - 4:30 PM",
      tandonGym: "",
      roomA: "",
      roomB: "",
      food: "",
      pfizer: ""
    },
    {
      time: "4:30 PM - 5:00 PM",
      tandonGym: "",
      roomA: "",
      roomB: "",
      food: "",
      pfizer: ""
    },
    {
      time: "5:00 PM - 5:30 PM",
      tandonGym: "",
      roomA: "",
      roomB: "",
      food: "",
      pfizer: ""
    },
    {
      time: "5:30 PM - 6:00 PM",
      tandonGym: "",
      roomA: "",
      roomB: "",
      food: "Snacks",
      pfizer: ""
    },
    {
      time: "●",
      tandonGym: "",
      roomA: "",
      roomB: "",
      food: "",
      pfizer: ""
    },
    {
      time: "●",
      tandonGym: "",
      roomA: "",
      roomB: "",
      food: "",
      pfizer: ""
    },
    {
      time: "●",
      tandonGym: "",
      roomA: "",
      roomB: "",
      food: "",
      pfizer: ""
    },
    {
      time: "9:00 PM - 9:30 PM",
      tandonGym: "",
      roomA: "",
      roomB: "",
      food: "",
      pfizer: ""
    },
    {
      time: "9:30 PM - 10:00 PM",
      tandonGym: "",
      roomA: "",
      roomB: "",
      food: "",
      pfizer: ""
    },
    {
      time: "10:00 PM - 10:30 PM",
      tandonGym: "",
      roomA: "",
      roomB: "",
      food: "",
      pfizer: ""
    }
  ];

  const sundayScheduleData = [
    {
      time: "9:00 AM - 10:00 AM",
      tandonGym: "",
      pfizer: "",
      food: ""
    },
    {
      time: "10:00 AM - 10:30 AM",
      tandonGym: "",
      pfizer: "",
      food: ""
    },
    {
      time: "●",
      tandonGym: "",
      pfizer: "",
      food: ""
    },
    {
      time: "●",
      tandonGym: "",
      pfizer: "",
      food: ""
    },
    {
      time: "11:30 AM - 12:00 PM",
      tandonGym: "Project Deadline (11:30)",
      pfizer: "",
      food: ""
    },
    {
      time: "12:00 PM - 12:30 PM",
      tandonGym: "",
      pfizer: "",
      food: ""
    },
    {
      time: "12:30 PM - 1:00 PM",
      tandonGym: "",
      pfizer: "",
      food: ""
    },
    {
      time: "1:00 PM - 1:30 PM",
      tandonGym: "",
      pfizer: "",
      food: ""
    },
    {
      time: "1:30 PM - 2:00 PM",
      tandonGym: "",
      pfizer: "",
      food: ""
    },
    {
      time: "●",
      tandonGym: "",
      pfizer: "",
      food: ""
    },
    {
      time: "●",
      tandonGym: "",
      pfizer: "",
      food: ""
    },
    {
      time: "●",
      tandonGym: "",
      pfizer: "",
      food: ""
    },
    {
      time: "3:00 PM - 3:30 PM",
      tandonGym: "",
      pfizer: "",
      food: ""
    },
    {
      time: "3:30 PM - 4:00 PM",
      tandonGym: "",
      pfizer: "",
      food: ""
    }
  ];

  const saturdayMobileScheduleData = [
    { startTime: "9:30 AM", endTime: "10:00 AM", description: "Check-in", location: "Tandon Gym" },
    { startTime: "10:00 AM", endTime: "11:00 AM", description: "Breakfast"},
    { startTime: "11:00 AM", endTime: "11:30 AM", description: "Opening Ceremony", location: "Tandon Gym" },
    { startTime: "11:30 AM", endTime: "12:00 PM", description: "Team Formation", location: "Tandon Gym" },
    { startTime: "12:30 PM", endTime: "1:30 PM", description: "Workshop", location: "Tandon Gym" },
    { startTime: "2:00 PM", endTime: "3:00 PM", description: "Lunch"},
    { startTime: "3:00 PM", endTime: "3:30 PM", description: "Fun-tivity", location: "Tandon Gym" },
    { startTime: "5:30 PM", endTime: "6:00 PM", description: "Snacks"},
    { startTime: "9:00 PM", endTime: "10:30 PM", description: "Dinner"}
  ];

  const sundayMobileScheduleData = [
    { startTime: "11:00 AM", endTime: "12:00 AM", description: "Brunch"},
    { startTime: "11:30 AM", endTime: "", description: "Project Deadline!", location: "" },
    { startTime: "12:00 PM", endTime: "2:00 PM", description: "Judging", location: "Tandon Gym" },
    { startTime: "3:00 PM", endTime: "4:00 PM", description: "Closing Ceremony", location: "Pfizer Auditorium" }
  ];

  return (
    <div 
      className="min-h-screen min-w-screen flex flex-col bg-white sm:bg-white sm:p-2 font-inter"
      style={{
        transform: `scale(${scale})`,
        transformOrigin: 'center center',
        overflow: 'visible'
      }}
    >
      <div className="hidden sm:block max-w-7xl mx-auto mb-12">
        <h2 className="text-[#0b5cd5] text-2xl md:text-4xl font-bold font-inter text-center mb-8 mt-12">Saturday Schedule</h2>
        
        <table className="w-full border-separate border-spacing-2 table-fixed">
          <thead>
            <tr>
              <th className="w-1/6"></th>
              <th className="w-1/6 bg-[#0b5cd5] text-white p-3 rounded-xl text-s font-bold font-inter text-center">Tandon Gym</th>
              <th className="w-1/6 bg-[#0b5cd5] text-white p-3 rounded-xl text-s font-bold font-inter text-center">Room A</th>
              <th className="w-1/6 bg-[#0b5cd5] text-white p-3 rounded-xl text-s font-bold font-inter text-center">Room B</th>
              <th className="w-1/6 bg-[#0b5cd5] text-white p-3 rounded-xl text-s font-bold font-inter text-center">Food</th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                time: "9:30 AM - 10:00 AM",
                tandonGym: "",
                roomA: "",
                roomB: "",
                food: ""
              },
              {
                time: "10:00 AM - 10:30 AM",
                tandonGym: "",
                roomA: "",
                roomB: "",
                food: ""
              },
              {
                time: "10:30 AM - 11:00 AM",
                tandonGym: "",
                roomA: "",
                roomB: "",
                food: ""
              },
              {
                time: "11:00 AM - 11:30 AM",
                tandonGym: "Opening Ceremony",
                roomA: "",
                roomB: "",
                food: ""
              },
              {
                time: "11:30 AM - 12:00 PM",
                tandonGym: "Team Formation",
                roomA: "",
                roomB: "",
                food: ""
              },
              {
                time: "12:00 PM - 12:30 PM",
                tandonGym: "",
                roomA: "",
                roomB: "",
                food: ""
              },
              {
                time: "12:30 PM - 1:00 PM",
                tandonGym: "",
                roomA: "",
                roomB: "",
                food: ""
              },
              {
                time: "1:00 PM - 1:30 PM",
                tandonGym: "",
                roomA: "",
                roomB: "",
                food: ""
              },
              {
                time: "1:30 PM - 2:00 PM",
                tandonGym: "",
                roomA: "",
                roomB: "",
                food: ""
              },
              {
                time: "2:00 PM - 2:30 PM",
                tandonGym: "",
                roomA: "",
                roomB: "",
                food: ""
              },
              {
                time: "2:30 PM - 3:00 PM",
                tandonGym: "",
                roomA: "",
                roomB: "",
                food: ""
              },
              {
                time: "3:00 PM - 3:30 PM",
                tandonGym: "Fun-tivity",
                roomA: "",
                roomB: "",
                food: ""
              },
              {
                time: "3:30 PM - 4:00 PM",
                tandonGym: "",
                roomA: "",
                roomB: "",
                food: ""
              },
              {
                time: "4:00 PM - 4:30 PM",
                tandonGym: "",
                roomA: "",
                roomB: "",
                food: ""
              },
              {
                time: "4:30 PM - 5:00 PM",
                tandonGym: "",
                roomA: "",
                roomB: "",
                food: ""
              },
              {
                time: "5:00 PM - 5:30 PM",
                tandonGym: "",
                roomA: "",
                roomB: "",
                food: ""
              },
              {
                time: "5:30 PM - 6:00 PM",
                tandonGym: "",
                roomA: "",
                roomB: "",
                food: "Snacks"
              },
              {
                time: "●",
                tandonGym: "",
                roomA: "",
                roomB: "",
                food: ""
              },
              {
                time: "●",
                tandonGym: "",
                roomA: "",
                roomB: "",
                food: ""
              },
              {
                time: "●",
                tandonGym: "",
                roomA: "",
                roomB: "",
                food: ""
              },
              {
                time: "9:00 PM - 9:30 PM",
                tandonGym: "",
                roomA: "",
                roomB: "",
                food: ""
              },
              {
                time: "9:30 PM - 10:00 PM",
                tandonGym: "",
                roomA: "",
                roomB: "",
                food: ""
              },
              {
                time: "10:00 PM - 10:30 PM",
                tandonGym: "",
                roomA: "",
                roomB: "",
                food: ""
              }
            ].map((row, index) => {
              if (index >= 0 && index <= 2) {
                if (index === 0){
                  return (
                    <tr key={index} className="h-[50px]">
                      {row.time === '●' ? (
                        <td className="text-[#0b5cd5] p-2 text-s font-bold font-inter text-center">
                          ●
                        </td>
                      ) : (
                        <td className="bg-[#0b5cd5] text-white p-2 rounded-xl text-s font-bold font-inter text-center ">
                          {row.time}
                        </td>
                      )}
                      
                      <td className="p-2 border border-[#0b5cd5] border-opacity-50 rounded-xl bg-white text-[#0b5cd5]" rowSpan={2}>
                        <div className="text-s font-bold font-inter text-center">
                          Check-In
                        </div>
                      </td>
                  </tr>
                );
              }
              }
              if (index >= 6 && index <= 8) {
                if (index === 6){
                  return (
                    <tr key={index} className="h-[50px]">
                      {row.time === '●' ? (
                        <td className="text-[#0b5cd5] p-2 text-s font-bold font-inter text-center">
                          ●
                        </td>
                      ) : (
                        <td className="bg-[#0b5cd5] text-white p-2 rounded-xl text-s font-bold font-inter text-center ">
                          {row.time}
                        </td>
                      )}
                      
                      <td className="p-2 border border-[#0b5cd5] border-opacity-50 rounded-xl bg-white text-[#0b5cd5]" rowSpan={2}>
                        <div className="text-s font-bold font-inter text-center">
                          Workshop
                        </div>
                      </td>
                  </tr>
                  );
                }
              }
              if (index >= 12 && index <= 16) {
                if (index === 13){
                  return (
                    <tr key={index} className="h-[50px]">
                      {row.time === '●' ? (
                        <td className="text-[#0b5cd5] p-2 text-s font-bold font-inter text-center">
                          ●
                        </td>
                      ) : (
                        <td className="bg-[#0b5cd5] text-white p-2 rounded-xl text-s font-bold font-inter text-center ">
                          {row.time}
                        </td>
                      )}
                      
                      <td className="p-2 border border-[#0b5cd5] border-opacity-50 rounded-xl bg-white text-[#0b5cd5]" rowSpan={3}>
                        <div className="text-s font-bold font-inter text-center">
                          Surprise De-stressing Event
                        </div>
                      </td>
                      <td className="p-2 border border-[#0b5cd5] border-opacity-50 rounded-xl bg-white text-[#0b5cd5]" rowSpan={2}>
                        <div className="text-s font-bold font-inter text-center">
                          Workshop
                        </div>
                      </td>
                  </tr>
                  );
                }
              }
              if (index >= 5 && index <= 10) {
                if (index === 5) {
                  return (
                    <tr key={index} className="h-[50px]">
                      {row.time === '●' ? (
                        <td className="text-[#0b5cd5] p-2 text-s font-bold font-inter text-center">
                          ●
                        </td>
                      ) : (
                        <td className="bg-[#0b5cd5] text-white p-2 rounded-xl text-s font-bold font-inter text-center ">
                          {row.time}
                        </td>
                      )}
                      {renderTableCell(row.tandonGym)}
                      <td 
                        className="p-2 border border-[#0b5cd5] border-opacity-50 rounded-xl bg-white text-[#0b5cd5]" rowSpan={6}>
                        <div className="text-s font-bold font-inter text-center">
                          HackNYU 2026 Booth
                        </div>
                      </td>
                    </tr>
                  );
                } 
                if (index === 9){
                  return (
                    <tr key={index} className="h-[50px]">
                      {row.time === '●' ? (
                        <td className="text-[#0b5cd5] p-2 text-s font-bold font-inter text-center">
                          ●
                        </td>
                      ) : (
                        <td className="bg-[#0b5cd5] text-white p-2 rounded-xl text-s font-bold font-inter text-center ">
                          {row.time}
                        </td>
                      )}
                      {renderTableCell(row.tandonGym)}
                      {renderTableCell(row.roomA)}
                      <td className="p-2 border border-[#0b5cd5] border-opacity-50 rounded-xl bg-white text-[#0b5cd5]" rowSpan={2}>
                        <div className="text-s font-bold font-inter text-center">
                          Lunch
                        </div>
                      </td>
                    </tr>
                  )
                }
              }
              if (index >= 12 && index <= 14) {
                if (index === 12){
                  return (
                    <tr key={index} className="h-[50px]">
                      {row.time === '●' ? (
                        <td className="text-[#0b5cd5] p-2 text-s font-bold font-inter text-center">
                          ●
                        </td>
                      ) : (
                        <td className="bg-[#0b5cd5] text-white p-2 rounded-xl text-s font-bold font-inter text-center ">
                          {row.time}
                        </td>
                      )}
                      {renderTableCell(row.tandonGym)}
                      <td className="p-2 border border-[#0b5cd5] border-opacity-50 rounded-xl bg-white text-[#0b5cd5]" rowSpan={2}>
                        <div className="text-s font-bold font-inter text-center">
                          Workshop
                        </div>
                      </td>
                  </tr>
                  );
                }
              }
              if (index >= 21 && index <= 23) {
                if (index === 21){
                  return (
                    <tr key={index} className="h-[50px]">
                      {row.time === '●' ? (
                        <td className="text-[#0b5cd5] p-2 text-s font-bold font-inter text-center">
                          ●
                        </td>
                      ) : (
                        <td className="bg-[#0b5cd5] text-white p-2 rounded-xl text-s font-bold font-inter text-center ">
                          {row.time}
                        </td>
                      )}
                      {renderTableCell(row.tandonGym)}
                      {renderTableCell(row.roomA)}
                      <td className="p-2 border border-[#0b5cd5] border-opacity-50 rounded-xl bg-white text-[#0b5cd5]" rowSpan={2}>
                        <div className="text-s font-bold font-inter text-center">
                          Rest Hour<br />
                          <span className="text-s">(to 7:30AM next day)</span>
                        </div>
                      </td>
                    {renderTableCell(row.roomB)}
                    {renderTableCell(row.food)}
                  </tr>
                  );
                }
              }
              if (index >= 20 && index <= 23) {
                if (index === 20){
                  return (
                    <tr key={index} className="h-[50px]">
                      {row.time === '●' ? (
                        <td className="text-[#0b5cd5] p-2 text-s font-bold font-inter text-center">
                          ●
                        </td>
                      ) : (
                        <td className="bg-[#0b5cd5] text-white p-2 rounded-xl text-s font-bold font-inter text-center ">
                          {row.time}
                        </td>
                      )}
                      {renderTableCell(row.tandonGym)}
                      {renderTableCell(row.roomA)}
                      {renderTableCell(row.roomB)}
                      <td className="p-2 border border-[#0b5cd5] border-opacity-50 rounded-xl bg-white text-[#0b5cd5]" rowSpan={3}>
                        <div className="text-s font-bold font-inter text-center">
                          Dinner
                        </div>
                      </td>
                    {renderTableCell(row.food)}
                  </tr>
                  );
                }
              }
              if (index >= 1 && index <= 3) {
                if (index === 1){
                  return (
                    <tr key={index} className="h-[50px]">
                      {row.time === '●' ? (
                        <td className="text-[#0b5cd5] p-2 text-s font-bold font-inter text-center">
                          ●
                        </td>
                      ) : (
                        <td className="bg-[#0b5cd5] text-white p-2 rounded-xl text-s font-bold font-inter text-center ">
                          {row.time}
                        </td>
                      )}
                      {renderTableCell(row.tandonGym)}
                      {renderTableCell(row.roomA)}
                      <td className="p-2 border border-[#0b5cd5] border-opacity-50 rounded-xl bg-white text-[#0b5cd5]" rowSpan={2}>
                        <div className="text-s font-bold font-inter text-center">
                          Breakfast
                        </div>
                      </td>
                      {renderTableCell(row.food)}
                  </tr>
                  );
                }
              }
              if (index >= 20 && index <= 23) {
                if (index === 20){
                  return (
                    <tr key={index} className="h-[50px]">
                      {row.time === '●' ? (
                        <td className="text-[#0b5cd5] p-2 text-s font-bold font-inter text-center">
                          ●
                        </td>
                      ) : (
                        <td className="bg-[#0b5cd5] text-white p-2 rounded-xl text-s font-bold font-inter text-center ">
                          {row.time}
                        </td>
                      )}
                      {renderTableCell(row.tandonGym)}
                      {renderTableCell(row.roomA)}
                      {renderTableCell(row.roomB)}
                      <td className="p-2 border border-[#0b5cd5] border-opacity-50 rounded-xl bg-white text-[#0b5cd5]" rowSpan={3}>
                        <div className="text-s font-bold font-inter text-center">
                          Dinner
                        </div>
                      </td>
                    {renderTableCell(row.food)}
                  </tr>
                  );
                }
              }
              return (
                <tr key={index} className="h-[50px]">
                  {row.time === '●' ? (
                    <td className="text-[#0b5cd5] p-2 text-s font-bold font-inter text-center">
                      ●
                    </td>
                  ) : (
                    <td className="bg-[#0b5cd5] text-white p-2 rounded-xl text-s font-bold font-inter text-center ">
                      {row.time}
                    </td>
                  )}
                  {renderTableCell(row.tandonGym)}
                  {renderTableCell(row.roomA)}
                  {renderTableCell(row.roomB)}
                  {renderTableCell(row.food)}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="sm:hidden">
        <div className="bg-[#0b5cd5] min-h-screen rounded-t-[32px] overflow-hidden pt-8 pb-16">
          <h2 className="text-white text-2xl font-bold font-inter px-5 pt-6 pb-2">Saturday</h2>
          <div className="h-[2px] bg-white/30 mx-6"></div>
          {renderMobileScheduleSections(saturdayMobileScheduleData)}
          
          <h2 className="text-white text-2xl font-bold font-inter px-5 pt-16 pb-2">Sunday</h2>
          <div className="h-[2px] bg-white/30 mx-6"></div>
          {renderMobileScheduleSections(sundayMobileScheduleData)}
        </div>
      </div>

      <div className="max-w-7xl mx-auto mb-12 sm:block hidden">
        <h2 className="text-[#0b5cd5] text-2xl md:text-4xl font-bold font-inter text-center mb-8 mt-12">Sunday Schedule</h2>
        
        <table className="w-full border-separate border-spacing-2 table-fixed">
          <thead>
            <tr>
              <th className="w-1/6"></th>
              <th className="w-1/6 bg-[#0b5cd5] text-white p-3 rounded-xl text-s font-bold font-inter text-center">Tandon Gym</th>
              <th className="w-1/6 bg-[#0b5cd5] text-white p-3 rounded-xl text-s font-bold font-inter text-center">Pfizer Auditorium</th>
              <th className="w-1/6 bg-[#0b5cd5] text-white p-3 rounded-xl text-s font-bold font-inter text-center">Food</th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                time: "9:00 AM - 10:00 AM",
                tandonGym: "",
                pfizer: "",
                food: ""
              },
              {
                time: "10:00 AM - 10:30 AM",
                tandonGym: "",
                pfizer: "",
                food: ""
              },
              {
                time: "●",
                tandonGym: "",
                pfizer: "",
                food: ""
              },
              {
                time: "●",
                tandonGym: "",
                pfizer: "",
                food: ""
              },
              {
                time: "11:30 AM - 12:00 PM",
                tandonGym: "Project Deadline (11:30)",
                pfizer: "",
                food: ""
              },
              {
                time: "12:00 PM - 12:30 PM",
                tandonGym: "",
                pfizer: "",
                food: ""
              },
              {
                time: "12:30 PM - 1:00 PM",
                tandonGym: "",
                pfizer: "",
                food: ""
              },
              {
                time: "1:00 PM - 1:30 PM",
                tandonGym: "",
                pfizer: "",
                food: ""
              },
              {
                time: "1:30 PM - 2:00 PM",
                tandonGym: "",
                pfizer: "",
                food: ""
              },
              {
                time: "●",
                tandonGym: "",
                pfizer: "",
                food: ""
              },
              {
                time: "●",
                tandonGym: "",
                pfizer: "",
                food: ""
              },
              {
                time: "●",
                tandonGym: "",
                pfizer: "",
                food: ""
              },
              {
                time: "3:00 PM - 3:30 PM",
                tandonGym: "",
                pfizer: "",
                food: ""
              },
              {
                time: "3:30 PM - 4:00 PM",
                tandonGym: "",
                pfizer: "",
                food: ""
              }
            ].map((row, index) => {
              if (index >= 3 && index <= 5) {
                if (index === 3){
                  return (
                    <tr key={index} className="h-[50px]">
                      {row.time === '●' ? (
                        <td className="text-[#0b5cd5] p-2 text-s font-bold font-inter text-center">
                          ●
                        </td>
                      ) : (
                        <td className="bg-[#0b5cd5] text-white p-2 rounded-xl text-s font-bold font-inter text-center ">
                          {row.time}
                        </td>
                      )}
                      {renderTableCell(row.tandonGym)}
                      {renderTableCell(row.pfizer)}
                      <td className="p-2 border border-[#0b5cd5] border-opacity-50 rounded-xl bg-white text-[#0b5cd5]" rowSpan={2}>
                        <div className="text-s font-bold font-inter text-center">
                          Brunch
                        </div>
                      </td>
                  </tr>
                  );
                }
              }
              if (index >= 5 && index <= 9) {
                if (index === 5){
                  return (
                    <tr key={index} className="h-[50px]">
                      {row.time === '●' ? (
                        <td className="text-[#0b5cd5] p-2 text-s font-bold font-inter text-center">
                          ●
                        </td>
                      ) : (
                        <td className="bg-[#0b5cd5] text-white p-2 rounded-xl text-s font-bold font-inter text-center ">
                          {row.time}
                        </td>
                      )}
                      <td className="p-2 border border-[#0b5cd5] border-opacity-50 rounded-xl bg-white text-[#0b5cd5]" rowSpan={4}>
                        <div className="text-s font-bold font-inter text-center">
                          Judging
                        </div>
                      </td>
                  </tr>
                  );
                }
              }
              if (index >= 11 && index <= 13) {
                if (index === 11){
                  return (
                    <tr key={index} className="h-[50px]">
                      {row.time === '●' ? (
                        <td className="text-[#0b5cd5] p-2 text-s font-bold font-inter text-center">
                          ●
                        </td>
                      ) : (
                        <td className="bg-[#0b5cd5] text-white p-2 rounded-xl text-s font-bold font-inter text-center ">
                          {row.time}
                        </td>
                      )}
                      {renderTableCell(row.tandonGym)}
                  </tr>
                  );
                }
              }
              if (index >= 12 && index <= 14) {
                if (index === 12){
                  return (
                    <tr key={index} className="h-[50px]">
                      <td className="bg-[#0b5cd5] text-white p-2 rounded-xl text-s font-bold font-inter text-center ">
                        {row.time}
                      </td>
                      {renderTableCell(row.tandonGym)}
                      <td className="p-2 border border-[#0b5cd5] border-opacity-50 rounded-xl bg-white text-[#0b5cd5]" rowSpan={2}>
                        <div className="text-s font-bold font-inter text-center">
                          Closing Ceremony
                        </div>
                      </td>
                  </tr>
                  );
                }
              }
              return(
              <tr key={index} className="h-[50px]">
                {row.time === '●' ? (
                  <td className="text-[#0b5cd5] p-2 text-s font-bold font-inter text-center">
                    ●
                  </td>
                ) : (
                  <td className="bg-[#0b5cd5] text-white p-2 rounded-xl text-s font-bold font-inter text-center ">
                    {row.time}
                  </td>
                )}
                {renderTableCell(row.tandonGym)}
                {renderTableCell(row.pfizer)}
                {renderTableCell(row.food)}
              </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Schedule;