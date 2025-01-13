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
          className={`p-4 ${isStarTime ? 'bg-transparent' : ''} ${isTimeColumn ? 'min-h-[50px] h-full' : ''}`}
        ></td>
      );
    }
    
    return (
      <td className={`p-4 border border-[#0b5cd5] border-opacity-50 rounded-xl bg-white text-[#0b5cd5] flex flex-col ${isTimeColumn ? 'min-h-[50px] h-full' : ''}`}>
        <div className={`text-xs font-bold font-inter text-center ${isTimeColumn ? 'w-[150px]' : ''}`}>
          {content}
        </div>
      </td>
    );
  };

  return (
    <div 
      className="min-h-screen min-w-screen flex flex-col bg-white p-4"
      style={{
        transform: `scale(${scale})`,
        transformOrigin: 'center center',
        overflow: 'visible'
      }}
    >
      <div className="max-w-7xl mx-auto mb-12">
        <h2 className="text-[#0b5cd5] text-2xl md:text-4xl font-bold font-inter text-center mb-8">Saturday Schedule</h2>
        
        <table className="w-full border-separate border-spacing-2 table-auto">
          <thead>
            <tr>
              <th className="w-[150px]"></th>
              <th className="bg-[#0b5cd5] text-white p-2 rounded-xl text-xs font-bold font-inter text-center">Tandon Gym</th>
              <th className="bg-[#0b5cd5] text-white p-2 rounded-xl text-xs font-bold font-inter text-center">Room A</th>
              <th className="bg-[#0b5cd5] text-white p-2 rounded-xl text-xs font-bold font-inter text-center">Room B</th>
              <th className="bg-[#0b5cd5] text-white p-2 rounded-xl text-xs font-bold font-inter text-center">Food</th>
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
                    <tr key={index}>
                      {row.time === '●' ? (
                        <td className="text-[#0b5cd5] p-2 text-xs font-bold font-inter text-center">
                          ●
                        </td>
                      ) : (
                        <td className="bg-[#0b5cd5] text-white p-2 rounded-xl text-xs font-bold font-inter text-center ">
                          {row.time}
                        </td>
                      )}
                      
                      <td className="p-4 border border-[#0b5cd5] border-opacity-50 rounded-xl bg-white text-[#0b5cd5]" rowSpan={2}>
                        <div className="text-xs font-bold font-inter text-center">
                          Check-In
                        </div>
                      </td>
                    {renderTableCell(row.tandonGym)}
                    {renderTableCell(row.roomA)}
                    {renderTableCell(row.roomB)}
                    {renderTableCell(row.food)}
                  </tr>
                );
              }}
              if (index >= 6 && index <= 8) {
                if (index === 6){
                  return (
                    <tr key={index}>
                      {row.time === '●' ? (
                        <td className="text-[#0b5cd5] p-2 text-xs font-bold font-inter text-center">
                          ●
                        </td>
                      ) : (
                        <td className="bg-[#0b5cd5] text-white p-2 rounded-xl text-xs font-bold font-inter text-center ">
                          {row.time}
                        </td>
                      )}
                      
                      <td className="p-4 border border-[#0b5cd5] border-opacity-50 rounded-xl bg-white text-[#0b5cd5]" rowSpan={2}>
                        <div className="text-xs font-bold font-inter text-center">
                          Workshop
                        </div>
                      </td>
                    {renderTableCell(row.tandonGym)}
                    {renderTableCell(row.roomA)}
                    {renderTableCell(row.roomB)}
                    {renderTableCell(row.food)}
                  </tr>
                  );
                }
              }
              if (index >= 13 && index <= 16) {
                if (index === 13){
                  return (
                    <tr key={index}>
                      {row.time === '●' ? (
                        <td className="text-[#0b5cd5] p-2 text-xs font-bold font-inter text-center">
                          ●
                        </td>
                      ) : (
                        <td className="bg-[#0b5cd5] text-white p-2 rounded-xl text-xs font-bold font-inter text-center ">
                          {row.time}
                        </td>
                      )}
                      
                      <td className="p-4 border border-[#0b5cd5] border-opacity-50 rounded-xl bg-white text-[#0b5cd5]" rowSpan={3}>
                        <div className="text-xs font-bold font-inter text-center">
                          Surprise De-stressing Event
                        </div>
                      </td>
                    {renderTableCell(row.tandonGym)}
                    {renderTableCell(row.roomA)}
                    {renderTableCell(row.roomB)}
                    {renderTableCell(row.food)}
                  </tr>
                  );
                }
              }
              if (index >= 5 && index <= 10) {
                if (index === 5) {
                  return (
                    <tr key={index}>
                      {row.time === '●' ? (
                        <td className="text-[#0b5cd5] p-2 text-xs font-bold font-inter text-center">
                          ●
                        </td>
                      ) : (
                        <td className="bg-[#0b5cd5] text-white p-2 rounded-xl text-xs font-bold font-inter text-center ">
                          {row.time}
                        </td>
                      )}
                      {renderTableCell(row.tandonGym)}
                      <td 
                        className="p-4 border border-[#0b5cd5] border-opacity-50 rounded-xl bg-white text-[#0b5cd5]" rowSpan={6}>
                        <div className="text-xs font-bold font-inter text-center">
                          HackNYU 2026 Booth
                        </div>
                      </td>
                      {renderTableCell(row.roomA)}
                      {renderTableCell(row.roomB)}
                      {renderTableCell(row.food)}
                    </tr>
                  );
                } 
              }
              if (index >= 12 && index <= 14) {
                if (index === 12){
                  return (
                    <tr key={index}>
                      {row.time === '●' ? (
                        <td className="text-[#0b5cd5] p-2 text-xs font-bold font-inter text-center">
                          ●
                        </td>
                      ) : (
                        <td className="bg-[#0b5cd5] text-white p-2 rounded-xl text-xs font-bold font-inter text-center ">
                          {row.time}
                        </td>
                      )}
                      {renderTableCell(row.tandonGym)}
                      <td className="p-4 border border-[#0b5cd5] border-opacity-50 rounded-xl bg-white text-[#0b5cd5]" rowSpan={2}>
                        <div className="text-xs font-bold font-inter text-center">
                          Workshop
                        </div>
                      </td>
                    {renderTableCell(row.roomA)}
                    {renderTableCell(row.roomB)}
                    {renderTableCell(row.food)}
                  </tr>
                  );
                }
              }
              if (index >= 14 && index <= 16) {
                if (index === 14){
                  return (
                    <tr key={index}>
                      {row.time === '●' ? (
                        <td className="text-[#0b5cd5] p-2 text-xs font-bold font-inter text-center">
                          ●
                        </td>
                      ) : (
                        <td className="bg-[#0b5cd5] text-white p-2 rounded-xl text-xs font-bold font-inter text-center ">
                          {row.time}
                        </td>
                      )}
                      {renderTableCell(row.roomA)}
                      <td className="p-4 border border-[#0b5cd5] border-opacity-50 rounded-xl bg-white text-[#0b5cd5]" rowSpan={2}>
                        <div className="text-xs font-bold font-inter text-center">
                          Workshop
                        </div>
                      </td>
                    {renderTableCell(row.roomB)}
                    {renderTableCell(row.food)}
                  </tr>
                  );
                }
              }
              if (index >= 21 && index <= 23) {
                if (index === 21){
                  return (
                    <tr key={index}>
                      {row.time === '●' ? (
                        <td className="text-[#0b5cd5] p-2 text-xs font-bold font-inter text-center">
                          ●
                        </td>
                      ) : (
                        <td className="bg-[#0b5cd5] text-white p-2 rounded-xl text-xs font-bold font-inter text-center ">
                          {row.time}
                        </td>
                      )}
                      {renderTableCell(row.tandonGym)}
                      {renderTableCell(row.roomA)}
                      <td className="p-4 border border-[#0b5cd5] border-opacity-50 rounded-xl bg-white text-[#0b5cd5]" rowSpan={2}>
                        <div className="text-xs font-bold font-inter text-center">
                          Rest Hour
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
                    <tr key={index}>
                      {row.time === '●' ? (
                        <td className="text-[#0b5cd5] p-2 text-xs font-bold font-inter text-center">
                          ●
                        </td>
                      ) : (
                        <td className="bg-[#0b5cd5] text-white p-2 rounded-xl text-xs font-bold font-inter text-center ">
                          {row.time}
                        </td>
                      )}
                      {renderTableCell(row.tandonGym)}
                      {renderTableCell(row.roomA)}
                      {renderTableCell(row.roomB)}
                      <td className="p-4 border border-[#0b5cd5] border-opacity-50 rounded-xl bg-white text-[#0b5cd5]" rowSpan={3}>
                        <div className="text-xs font-bold font-inter text-center">
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
                    <tr key={index}>
                      {row.time === '●' ? (
                        <td className="text-[#0b5cd5] p-2 text-xs font-bold font-inter text-center">
                          ●
                        </td>
                      ) : (
                        <td className="bg-[#0b5cd5] text-white p-2 rounded-xl text-xs font-bold font-inter text-center ">
                          {row.time}
                        </td>
                      )}
                      {renderTableCell(row.tandonGym)}
                      {renderTableCell(row.roomA)}
                      <td className="p-4 border border-[#0b5cd5] border-opacity-50 rounded-xl bg-white text-[#0b5cd5]" rowSpan={2}>
                        <div className="text-xs font-bold font-inter text-center">
                          Breakfast
                        </div>
                      </td>
                      {renderTableCell(row.food)}
                  </tr>
                  );
                }
              }
              if (index >= 4 && index <= 6) {
                if (index === 4){
                  return (
                    <tr key={index}>
                      {row.time === '●' ? (
                        <td className="text-[#0b5cd5] p-2 text-xs font-bold font-inter text-center">
                          ●
                        </td>
                      ) : (
                        <td className="bg-[#0b5cd5] text-white p-2 rounded-xl text-xs font-bold font-inter text-center ">
                          {row.time}
                        </td>
                      )}
                      {renderTableCell(row.tandonGym)}
                      {renderTableCell(row.roomA)}
                      {renderTableCell(row.roomB)}
                      <td className="p-4 border border-[#0b5cd5] border-opacity-50 rounded-xl bg-white text-[#0b5cd5]" rowSpan={2}>
                        <div className="text-xs font-bold font-inter text-center">
                          Lunch
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
                    <tr key={index}>
                      {row.time === '●' ? (
                        <td className="text-[#0b5cd5] p-2 text-xs font-bold font-inter text-center">
                          ●
                        </td>
                      ) : (
                        <td className="bg-[#0b5cd5] text-white p-2 rounded-xl text-xs font-bold font-inter text-center ">
                          {row.time}
                        </td>
                      )}
                      {renderTableCell(row.tandonGym)}
                      {renderTableCell(row.roomA)}
                      {renderTableCell(row.roomB)}
                      <td className="p-4 border border-[#0b5cd5] border-opacity-50 rounded-xl bg-white text-[#0b5cd5]" rowSpan={3}>
                        <div className="text-xs font-bold font-inter text-center">
                          Dinner
                        </div>
                      </td>
                    {renderTableCell(row.food)}
                  </tr>
                  );
                }
              }
              return (
                <tr key={index}>
                  {row.time === '●' ? (
                    <td className="text-[#0b5cd5] p-2 text-xs font-bold font-inter text-center">
                      ●
                    </td>
                  ) : (
                    <td className="bg-[#0b5cd5] text-white p-2 rounded-xl text-xs font-bold font-inter text-center ">
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

      <div className="max-w-7xl mx-auto mb-12">
        <h2 className="text-[#0b5cd5] text-2xl md:text-4xl font-bold font-inter text-center mb-8">Sunday Schedule</h2>
        
        <table className="w-full border-separate border-spacing-2 table-auto">
          <thead>
            <tr>
              <th className="w-[150px]"></th>
              <th className="bg-[#0b5cd5] text-white p-2 rounded-xl text-xs font-bold font-inter text-center">Tandon Gym</th>
              <th className="bg-[#0b5cd5] text-white p-2 rounded-xl text-xs font-bold font-inter text-center">Pfizer Auditorium</th>
              <th className="bg-[#0b5cd5] text-white p-2 rounded-xl text-xs font-bold font-inter text-center">Food</th>
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
              if (index >= 2 && index <= 4) {
                if (index === 2){
                  return (
                    <tr key={index}>
                      {row.time === '●' ? (
                        <td className="text-[#0b5cd5] p-2 text-xs font-bold font-inter text-center">
                          ●
                        </td>
                      ) : (
                        <td className="bg-[#0b5cd5] text-white p-2 rounded-xl text-xs font-bold font-inter text-center ">
                          {row.time}
                        </td>
                      )}
                      {renderTableCell(row.tandonGym)}
                      {renderTableCell(row.pfizer)}
                      <td className="p-4 border border-[#0b5cd5] border-opacity-50 rounded-xl bg-white text-[#0b5cd5]" rowSpan={2}>
                        <div className="text-xs font-bold font-inter text-center">
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
                    <tr key={index}>
                      {row.time === '●' ? (
                        <td className="text-[#0b5cd5] p-2 text-xs font-bold font-inter text-center">
                          ●
                        </td>
                      ) : (
                        <td className="bg-[#0b5cd5] text-white p-2 rounded-xl text-xs font-bold font-inter text-center ">
                          {row.time}
                        </td>
                      )}
                      <td className="p-4 border border-[#0b5cd5] border-opacity-50 rounded-xl bg-white text-[#0b5cd5]" rowSpan={4}>
                        <div className="text-xs font-bold font-inter text-center">
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
                    <tr key={index}>
                      {row.time === '●' ? (
                        <td className="text-[#0b5cd5] p-2 text-xs font-bold font-inter text-center">
                          ●
                        </td>
                      ) : (
                        <td className="bg-[#0b5cd5] text-white p-2 rounded-xl text-xs font-bold font-inter text-center ">
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
                    <tr key={index}>
                      <td className="bg-[#0b5cd5] text-white p-2 rounded-xl text-xs font-bold font-inter text-center ">
                        {row.time}
                      </td>
                      {renderTableCell(row.tandonGym)}
                      <td className="p-4 border border-[#0b5cd5] border-opacity-50 rounded-xl bg-white text-[#0b5cd5]" rowSpan={2}>
                        <div className="text-xs font-bold font-inter text-center">
                          Closing Ceremony
                        </div>
                      </td>
                  </tr>
                  );
                }
              }
              return(
              <tr key={index}>
                {row.time === '●' ? (
                  <td className="text-[#0b5cd5] p-2 text-xs font-bold font-inter text-center">
                    ●
                  </td>
                ) : (
                  <td className="bg-[#0b5cd5] text-white p-2 rounded-xl text-xs font-bold font-inter text-center ">
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