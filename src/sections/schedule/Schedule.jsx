import {  locationLinks, 
          saturdayScheduleWeb, 
          sundayScheduleWeb,
          saturdayMobileScheduleData,
          sundayMobileScheduleData
        } from "./data.js";

const Schedule = () => {
  const thStyle = "w-1/5 bg-blue text-white p-3 rounded-xl text-s font-bold text-center"

  const renderTableCell = (content, isTimeColumn = false, locationLink = null) => {
    const isStarTime = content === "●";
    
    if (!content || isStarTime) {
      return (
        <td 
          className={`p-2 ${isStarTime ? 'bg-transparent' : ''} ${isTimeColumn ? 'h-[50px]' : ''}`}
        >
          {isStarTime ? "●" : ""}
        </td>
      );
    }
    
    return (
      <td className={`p-3 border border-blue border-opacity-50 rounded-xl bg-white text-blue ${isTimeColumn ? 'h-[50px] flex items-center justify-center' : 'flex flex-col'}`}>
        <div className={`text-s font-bold text-center ${isTimeColumn ? 'w-1/5' : ''}`}>
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
      <div className="w-full px-5">
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
                    {Object.hasOwn(locationLinks, section.location) ? (
                      <span className="text-sm">
                        <a 
                          href={locationLinks[section.location]} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="hover:underline cursor-pointer"
                        >
                          {section.location}
                        </a>
                      </span>
                    ) :
                    <span className="text-sm">{section.location}</span>
                    }
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/30" />
          </div>
        ))}
      </div>
    );
  };

  return (
    <section id="schedule" className="md:p-8 md:my-20 min-h-screen min-w-screen flex flex-col bg-white sm:bg-white font-inter"
      style={{
        transform: `scale(1)`,
        transformOrigin: 'center center',
        overflow: 'visible'
      }}
    >
      <div className="hidden sm:block max-w-7xl mx-auto mb-8">
        <h2 className="text-blue text-[32px] md:text-4xl font-bold text-center mb-8 mt-12">Saturday Schedule</h2>
        
        <table className="w-full border-separate border-spacing-2 table-fixed">
          <thead>
            <tr>
              <th className="w-1/5"></th>
              <th className={thStyle}>
                <a 
                  href={locationLinks['Tandon Gym']} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:underline cursor-pointer"
                >
                  Tandon Gym
                </a>
              </th>
              <th className={thStyle}>Room A</th>
              <th className={thStyle}>Room B</th>
              <th className={thStyle}>MakerSpace Foyer</th>
            </tr>
          </thead>
          <tbody>
            {saturdayScheduleWeb.map((row, index) => {
              if (index >= 0 && index <= 2) {
                if (index === 0){
                  return (
                    <tr key={index} className="h-[50px]">
                      {row.time === '●' ? (
                        <td className="text-blue p-2 text-s font-bold text-center">
                          ●
                        </td>
                      ) : (
                        <td className="bg-blue text-white p-2 rounded-xl text-s font-bold text-center ">
                          {row.time}
                        </td>
                      )}
                      
                      <td className="p-2 border border-blue border-opacity-50 rounded-xl bg-white text-blue" rowSpan={2}>
                        <div className="text-s font-bold text-center">
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
                        <td className="text-blue p-2 text-s font-bold text-center">
                          ●
                        </td>
                      ) : (
                        <td className="bg-blue text-white p-2 rounded-xl text-s font-bold text-center ">
                          {row.time}
                        </td>
                      )}
                      
                      <td className="p-2 border border-blue border-opacity-50 rounded-xl bg-white text-blue" rowSpan={2}>
                        <div className="text-s font-bold text-center">
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
                        <td className="text-blue p-2 text-s font-bold text-center">
                          ●
                        </td>
                      ) : (
                        <td className="bg-blue text-white p-2 rounded-xl text-s font-bold text-center ">
                          {row.time}
                        </td>
                      )}
                      
                      <td className="p-2 border border-blue border-opacity-50 rounded-xl bg-white text-blue" rowSpan={3}>
                        <div className="text-s font-bold text-center">
                          Surprise De-stressing Event
                        </div>
                      </td>
                      <td className="p-2 border border-blue border-opacity-50 rounded-xl bg-white text-blue" rowSpan={2}>
                        <div className="text-s font-bold text-center">
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
                        <td className="text-blue p-2 text-s font-bold text-center">
                          ●
                        </td>
                      ) : (
                        <td className="bg-blue text-white p-2 rounded-xl text-s font-bold text-center ">
                          {row.time}
                        </td>
                      )}
                      {renderTableCell(row.tandonGym)}
                      <td 
                        className="p-2 border border-blue border-opacity-50 rounded-xl bg-white text-blue" rowSpan={6}>
                        <div className="text-s font-bold text-center">
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
                        <td className="text-blue p-2 text-s font-bold text-center">
                          ●
                        </td>
                      ) : (
                        <td className="bg-blue text-white p-2 rounded-xl text-s font-bold text-center ">
                          {row.time}
                        </td>
                      )}
                      {renderTableCell(row.tandonGym)}
                      {renderTableCell(row.roomA)}
                      <td className="p-2 border border-blue border-opacity-50 rounded-xl bg-white text-blue" rowSpan={2}>
                        <div className="text-s font-bold text-center">
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
                        <td className="text-blue p-2 text-s font-bold text-center">
                          ●
                        </td>
                      ) : (
                        <td className="bg-blue text-white p-2 rounded-xl text-s font-bold text-center ">
                          {row.time}
                        </td>
                      )}
                      {renderTableCell(row.tandonGym)}
                      <td className="p-2 border border-blue border-opacity-50 rounded-xl bg-white text-blue" rowSpan={2}>
                        <div className="text-s font-bold text-center">
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
                        <td className="text-blue p-2 text-s font-bold text-center">
                          ●
                        </td>
                      ) : (
                        <td className="bg-blue text-white p-2 rounded-xl text-s font-bold text-center ">
                          {row.time}
                        </td>
                      )}
                      {renderTableCell(row.tandonGym)}
                      {renderTableCell(row.roomA)}
                      <td className="p-2 border border-blue border-opacity-50 rounded-xl bg-white text-blue" rowSpan={2}>
                        <div className="text-s font-bold text-center">
                          Rest Hour<br />
                          <span className="text-s">(to 7:30AM next day)</span>
                        </div>
                      </td>
                    {renderTableCell(row.roomB)}
                    {renderTableCell(row.makerspace)}
                  </tr>
                  );
                }
              }
              if (index >= 1 && index <= 3) {
                if (index === 1){
                  return (
                    <tr key={index} className="h-[50px]">
                      {row.time === '●' ? (
                        <td className="text-blue p-2 text-s font-bold text-center">
                          ●
                        </td>
                      ) : (
                        <td className="bg-blue text-white p-2 rounded-xl text-s font-bold text-center ">
                          {row.time}
                        </td>
                      )}
                      {renderTableCell(row.tandonGym)}
                      {renderTableCell(row.roomA)}
                      <td className="p-2 border border-blue border-opacity-50 rounded-xl bg-white text-blue" rowSpan={2}>
                        <div className="text-s font-bold text-center">
                          Breakfast
                        </div>
                      </td>
                  </tr>
                  );
                }
              }
              if (index >= 20 && index <= 23) {
                if (index === 20){
                  return (
                    <tr key={index} className="h-[50px]">
                      {row.time === '●' ? (
                        <td className="text-blue p-2 text-s font-bold text-center">
                          ●
                        </td>
                      ) : (
                        <td className="bg-blue text-white p-2 rounded-xl text-s font-bold text-center ">
                          {row.time}
                        </td>
                      )}
                      {renderTableCell(row.tandonGym)}
                      {renderTableCell(row.roomA)}
                      {renderTableCell(row.roomB)}
                      <td className="p-2 border border-blue border-opacity-50 rounded-xl bg-white text-blue" rowSpan={3}>
                        <div className="text-s font-bold text-center">
                          Dinner
                        </div>
                      </td>
                  </tr>
                  );
                }
              }
              return (
                <tr key={index} className="h-[50px]">
                  {row.time === '●' ? (
                    <td className="text-blue p-2 text-s font-bold text-center">
                      ●
                    </td>
                  ) : (
                    <td className="bg-blue text-white p-2 rounded-xl text-s font-bold text-center ">
                      {row.time}
                    </td>
                  )}
                  {renderTableCell(row.tandonGym)}
                  {renderTableCell(row.roomA)}
                  {renderTableCell(row.roomB)}
                  {renderTableCell(row.makerspace)}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="sm:hidden">
        <div className="bg-blue min-h-screen rounded-t-[32px] overflow-hidden pt-8 pb-16">
          <h2 className="text-white text-[32px] font-bold px-5 pt-6 pb-2">Saturday</h2>
          <div className="h-[2px] bg-white/30 mx-6"></div>
          {renderMobileScheduleSections(saturdayMobileScheduleData)}
          
          <h2 className="text-white text-[32px] font-bold px-5 pt-16 pb-2">Sunday</h2>
          <div className="h-[2px] bg-white/30 mx-6"></div>
          {renderMobileScheduleSections(sundayMobileScheduleData)}
        </div>
      </div>

      <div className="max-w-7xl mx-auto mb-12 sm:block hidden">
        <h2 className="text-blue text-[32px] font-bold text-center mb-8 mt-12">Sunday Schedule</h2>
        
        <table className="w-full border-separate border-spacing-2 table-fixed">
          <thead>
            <tr>
              <th className="w-1/5"></th>
              {Object.entries(locationLinks).map(([location, link], index) => (
                <th key={index}className={thStyle}>
                  <a
                    href={link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:underline cursor-pointer"
                  >
                    {location}
                  </a>
                </th>
              ))}
              <th className={thStyle}>MakerSpace Foyer</th>
            </tr>
          </thead>
          <tbody>
            {sundayScheduleWeb.map((row, index) => {
              if (index >= 2 && index <= 5) {
                if (index === 2){
                  return (
                    <tr key={index} className="h-[50px]">
                      {row.time === '●' ? (
                        <td className="text-blue p-2 text-s font-bold text-center">
                          ●
                        </td>
                      ) : (
                        <td className="bg-blue text-white p-2 rounded-xl text-s font-bold text-center ">
                          {row.time}
                        </td>
                      )}
                      <td className="p-2 border border-blue border-opacity-50 rounded-xl bg-white text-blue" rowSpan={4}>
                        <div className="text-s font-bold text-center">
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
                        <td className="text-blue p-2 text-s font-bold text-center">
                          ●
                        </td>
                      ) : (
                        <td className="bg-blue text-white p-2 rounded-xl text-s font-bold text-center ">
                          {row.time}
                        </td>
                      )}
                      {renderTableCell(row.tandonGym)}
                  </tr>
                  );
                }
              }
              if (index >= 9 && index <= 10) {
                if (index === 9){
                  return (
                    <tr key={index} className="h-[50px]">
                      <td className="bg-blue text-white p-2 rounded-xl text-s font-bold text-center ">
                        {row.time}
                      </td>
                      {renderTableCell(row.tandonGym)}
                      <td className="p-2 border border-blue border-opacity-50 rounded-xl bg-white text-blue" rowSpan={2}>
                        <div className="text-s font-bold text-center">
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
                  <td className="text-blue p-2 text-s font-bold text-center">
                    ●
                  </td>
                ) : (
                  <td className="bg-blue text-white p-2 rounded-xl text-s font-bold text-center ">
                    {row.time}
                  </td>
                )}
                {renderTableCell(row.tandonGym)}
                {renderTableCell(row.pfizer)}
                {renderTableCell(row.makerspace)}
              </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Schedule;