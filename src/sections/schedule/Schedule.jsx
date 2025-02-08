import {
  locationLinks,
  saturdayScheduleWeb,
  sundayScheduleWeb,
  saturdayMobileScheduleData,
  sundayMobileScheduleData,
} from "./data.js"

const Schedule = () => {
  const thStyle = "w-1/5 bg-blue text-white p-3 rounded-3xl text-s font-bold text-center"

  const renderTableCell = (content, isTimeColumn = false, locationLink = null) => {
    const isStarTime = content === "●"

    if (!content || isStarTime) {
      return (
        <td className={`p-2 ${isStarTime ? "bg-transparent" : ""} ${isTimeColumn ? "h-[50px]" : ""}`}>
          {isStarTime ? "●" : ""}
        </td>
      )
    }

    return (
      <td
        className={`p-3 border border-blue border-opacity-50 rounded-3xl bg-white text-blue ${isTimeColumn ? "h-[50px] flex items-center justify-center" : "flex flex-col"}`}
      >
        <div className={`text-s font-bold text-center ${isTimeColumn ? "w-1/5" : ""}`}>{content}</div>
      </td>
    )
  }

  const filterAdditionalMobileEvents = (scheduleData, predefinedSectionsInput = null) => {
    const predefinedSections = predefinedSectionsInput || scheduleData
    return { predefinedSections }
  }

  const renderMobileScheduleSections = (scheduleData, predefinedSectionsInput = null) => {
    const { predefinedSections } = filterAdditionalMobileEvents(scheduleData, predefinedSectionsInput)

    return (
      <div className="w-full px-5">
        {predefinedSections.map((section, index) => (
          <div key={`predefined-${index}`} className="relative w-full">
            <div className="flex flex-col py-6 w-full text-white">
              <div className="flex items-start">
                <div className="flex flex-col mr-16 min-w-[120px]">
                  <span className="text-xl font-bold">{section.startTime}</span>
                  <span className="text-sm">{section.endTime}</span>
                </div>

                <div className={`flex flex-col ${section.location === undefined ? "self-center" : "items-start"}`}>
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
                      {section.locationAlt? 
                        <span>{", "}
                          <a
                            href={locationLinks[section.locationAlt]}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline cursor-pointer"
                          >
                            {section.locationAlt}
                          </a>
                        </span>
                       : (<span/>)}
                    </span>
                  ) : (
                    <span className="text-sm">{section.location}</span>
                  )}

                  {/* Combined events with same time and different locations (add some margin between events in same slot) */}
                  {section.location2 ? <span className="mt-4" />: <span/>}
                  <span className="text-xl font-bold">{section.description2}</span>
                  {Object.hasOwn(locationLinks, section.location2) ? (
                    <span className="text-sm">
                      <a
                        href={locationLinks[section.location2]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline cursor-pointer"
                      >
                        {section.location2}
                      </a>
                    </span>
                  ) : (
                    <span></span>
                    // <span className="text-sm">{section.location2}</span>
                  )}
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/30" />
          </div>
        ))}
      </div>
    )
  }

  return (
    <section
      id="schedule"
      className="md:p-8 md:my-20 min-h-screen min-w-screen flex flex-col bg-white sm:bg-white font-Inter"
      style={{
        transform: `scale(1)`,
        transformOrigin: "center center",
        overflow: "visible",
      }}
    >
      <div className="hidden sm:block max-w-6xl mx-auto mb-8">
        <h2 className="text-blue text-[32px] font-bold text-center mb-8 mt-12">Saturday Schedule</h2>

        <table className="w-full border-separate border-spacing-3 table-fixed">
          <thead>
            <tr>
              <th className="w-1/5"></th>
              <th className={thStyle}>
                <a
                  href={locationLinks["NYU Tandon Gym"]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline cursor-pointer"
                >
                  NYU Tandon Gym
                </a>
              </th>
              <th className={thStyle}>
                <a
                  href="https://g.co/kgs/JTetX92"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline cursor-pointer"
                >
                  MakerSpace Foyer
                </a>
              </th>
              <th className={thStyle}>
                <a
                  href="https://engineering.nyu.edu/classrooms-event-spaces/rh-116-maker-eventspace"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline cursor-pointer"
                >
                  Maker EventSpace
                </a>
              </th>
              <th className={thStyle}>
                <a
                  href="https://engineering.nyu.edu/classrooms-event-spaces/rh-201"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline cursor-pointer"
                >
                  RH201
                </a>
              </th>
            </tr>
          </thead>
          <tbody>
            {saturdayScheduleWeb.map((row, index) => {
              if (index >= 0 && index <= 3) {
                if (index === 0) {
                  return (
                    <tr key={index} className="h-[50px]">
                      {row.time === "●" ? (
                        <td className="text-blue p-2 text-s font-bold text-center">●</td>
                      ) : (
                        <td className="bg-blue text-white p-2 rounded-3xl text-s font-bold text-center ">{row.time}</td>
                      )}

                      <td
                        className="p-2 border border-blue border-opacity-50 rounded-3xl bg-white text-blue"
                        rowSpan={3}
                      >
                        <div className="text-s font-bold text-center">Check-In</div>
                      </td>
                      <td
                        className="p-2 border border-blue border-opacity-50 rounded-3xl bg-white text-blue"
                        rowSpan={3}
                      >
                        <div className="text-s font-bold text-center">Breakfast</div>
                      </td>
                    </tr>
                  )
                }
              }
              if (index >= 3 && index <= 5) {
                if (index === 3) {
                  return (
                    <tr key={index} className="h-[50px]">
                      {row.time === "●" ? (
                        <td className="text-blue p-2 text-s font-bold text-center">●</td>
                      ) : (
                        <td className="bg-blue text-white p-2 rounded-3xl text-s font-bold text-center ">{row.time}</td>
                      )}

                      <td
                        className="p-2 border border-blue border-opacity-50 rounded-3xl bg-white text-blue"
                        rowSpan={2}
                      >
                        <div className="text-s font-bold text-center">Opening Ceremony</div>
                      </td>
                      <td className=""> </td>
                      <td
                        className="p-2 border border-blue border-opacity-50 rounded-3xl bg-white text-blue"
                        rowSpan={2}
                      >
                        <div className="text-s font-bold text-center">Late Check-In</div>
                      </td>
                    </tr>
                  )
                }
              }
              if (index >= 6 && index <= 11) {
                if (index === 6) {
                  return (
                    <tr key={index} className="h-[50px]">
                      {row.time === "●" ? (
                        <td className="text-blue p-2 text-s font-bold text-center">●</td>
                      ) : (
                        <td className="bg-blue text-white p-2 rounded-3xl text-s font-bold text-center ">{row.time}</td>
                      )}

                      <td
                        className="p-2 border border-blue border-opacity-50 rounded-3xl bg-white text-blue"
                        rowSpan={6}
                      >
                        <div className="text-s font-bold text-center">Sponsor Fair</div>
                      </td>
                    </tr>
                  )
                }
              }
              if (index >= 9 && index <= 11) {
                if (index === 9) {
                  return (
                    <tr key={index} className="h-[50px]">
                      {row.time === "●" ? (
                        <td className="text-blue p-2 text-s font-bold text-center">●</td>
                      ) : (
                        <td className="bg-blue text-white p-2 rounded-3xl text-s font-bold text-center ">{row.time}</td>
                      )}
                      {renderTableCell(row.tandonGym)}
                      {renderTableCell(row.tandonGym)}
                      <td
                        className="p-2 border border-blue border-opacity-50 rounded-3xl bg-white text-blue"
                        rowSpan={2}
                      >
                        <div className="text-s font-bold text-center">Solana Workshop</div>
                      </td>
                    </tr>
                  )
                }
              }
              if (index >= 7 && index <= 11) {
                if (index === 7) {
                  return (
                    <tr key={index} className="h-[50px]">
                      {row.time === "●" ? (
                        <td className="text-blue p-2 text-s font-bold text-center">●</td>
                      ) : (
                        <td className="bg-blue text-white p-2 rounded-3xl text-s font-bold text-center ">{row.time}</td>
                      )}

                      <td
                        className="p-2 border border-blue border-opacity-50 rounded-3xl bg-white text-blue"
                        rowSpan={2}
                      >
                        <div className="text-s font-bold text-center">Lunch</div>
                      </td>
                    </tr>
                  )
                }
              }
              if (index >= 15 && index <= 16) {
                if (index === 15) {
                  return (
                    <tr key={index} className="h-[50px]">
                      {row.time === "●" ? (
                        <td className="text-blue p-2 text-s font-bold text-center">●</td>
                      ) : (
                        <td className="bg-blue text-white p-2 rounded-3xl text-s font-bold text-center ">{row.time}</td>
                      )}

                      <td
                        className="p-2 border border-blue border-opacity-50 rounded-3xl bg-white text-blue"
                        rowSpan={2}
                      >
                        <div className="text-s font-bold text-center">Big Nerds Time!</div>
                      </td>
                      <td
                        className="p-2 border border-blue border-opacity-50 rounded-3xl bg-white text-blue"
                        rowSpan={3}
                      >
                        <div className="text-s font-bold text-center">Snacks</div>
                      </td>
                      {renderTableCell(row.tandonGym)}
                    </tr>
                  )
                }
              }
              if (index >= 14 && index <= 19) {
                if (index === 14) {
                  return (
                    <tr key={index} className="h-[50px]">
                      {row.time === "●" ? (
                        <td className="text-blue p-2 text-s font-bold text-center">●</td>
                      ) : (
                        <td className="bg-blue text-white p-2 rounded-3xl text-s font-bold text-center ">{row.time}</td>
                      )}
                      {renderTableCell(row.tandonGym)}
                      {renderTableCell(row.tandonGym)}
                      {renderTableCell(row.tandonGym)}
                      <td
                        className="p-2 border border-blue border-opacity-50 rounded-3xl bg-white text-blue"
                        rowSpan={2}
                      >
                        <div className="text-s font-bold text-center">Figma Workshop</div>
                      </td>
                    </tr>
                  )
                }
              }
              if (index >= 11 && index <= 15) {
                if (index === 11) {
                  return (
                    <tr key={index} className="h-[50px]">
                      {row.time === "●" ? (
                        <td className="text-blue p-2 text-s font-bold text-center">●</td>
                      ) : (
                        <td className="bg-blue text-white p-2 rounded-3xl text-s font-bold text-center ">{row.time}</td>
                      )}
                      {renderTableCell(row.tandonGym)}
                      <td
                        className="p-2 border border-blue border-opacity-50 rounded-3xl bg-white text-blue"
                        rowSpan={2}
                      >
                        <div className="text-s font-bold text-center">Destress with HackNYU!</div>
                      </td>
                    </tr>
                  )
                }
              }
              if (index >= 12 && index <= 15) {
                if (index === 12) {
                  return (
                    <tr key={index} className="h-[50px]">
                      {row.time === "●" ? (
                        <td className="text-blue p-2 text-s font-bold text-center">●</td>
                      ) : (
                        <td className="bg-blue text-white p-2 rounded-3xl text-s font-bold text-center ">{row.time}</td>
                      )}
                      {renderTableCell(row.tandonGym)}
                      {renderTableCell(row.tandonGym)}
                      <td
                      className="p-2 border border-blue border-opacity-50 rounded-3xl bg-white text-blue"
                      rowSpan={2}
                    >
                      <div className="text-s font-bold text-center">GitHub Copilot Workshop</div>
                    </td>
                    </tr>
                  )
                }
              }
              if (index >= 7 && index <= 14) {
                if (index === 7) {
                  return (
                    <tr key={index} className="h-[50px]">
                      {row.time === "●" ? (
                        <td className="text-blue p-2 text-s font-bold text-center">●</td>
                      ) : (
                        <td className="bg-blue text-white p-2 rounded-3xl text-s font-bold text-center ">{row.time}</td>
                      )}
                      {renderTableCell(row.tandonGym)}
                      <td
                        className="p-2 border border-blue border-opacity-50 rounded-3xl bg-white text-blue"
                        rowSpan={2}
                      >
                        <div className="text-s font-bold text-center">Workshop</div>
                      </td>
                    </tr>
                  )
                }
              }
              if (index >= 17 && index <= 18) {
                if (index === 17) {
                  return (
                    <tr key={index} className="h-[50px]">
                      {row.time === "●" ? (
                        <td className="text-blue p-2 text-s font-bold text-center">●</td>
                      ) : (
                        <td className="bg-blue text-white p-2 rounded-3xl text-s font-bold text-center ">{row.time}</td>
                      )}
                      {renderTableCell(row.tandonGym)}
                      <td
                        className="p-2 border border-blue border-opacity-50 rounded-3xl bg-white text-blue"
                        rowSpan={2}
                      >
                        <div className="text-s font-bold text-center">FUN-TIVITY (WIN $$$)</div>
                      </td>
                      {renderTableCell(row.Maker_EventSpace)}
                    </tr>
                  )
                }
              }
              if (index >= 22 && index <= 24) {
                if (index === 22) {
                  return (
                    <tr key={index} className="h-[50px]">
                      {row.time === "●" ? (
                        <td className="text-blue p-2 text-s font-bold text-center">●</td>
                      ) : (
                        <td className="bg-blue text-white p-2 rounded-3xl text-s font-bold text-center ">{row.time}</td>
                      )}
                      {renderTableCell(row.tandonGym)}
                      <td
                        className="p-2 border border-blue border-opacity-50 rounded-3xl bg-white text-blue"
                        rowSpan={3}
                      >
                        <div className="text-s font-bold text-center">Dinner</div>
                      </td>
                    </tr>
                  )
                }
              }
              return (
                <tr key={index} className="h-[50px]">
                  {row.time === "●" ? (
                    <td className="text-blue p-2 text-s font-bold text-center">●</td>
                  ) : (
                    <td className="bg-blue text-white p-2 rounded-3xl text-s font-bold text-center ">{row.time}</td>
                  )}
                  {renderTableCell(row.tandonGym)}
                  {renderTableCell(row.MakerSpace_Foyer)}
                  {renderTableCell(row.Maker_EventSpace)}
                </tr>
              )
            })}
          </tbody>
        </table>
        <div className="text-blue-600 text-lg mt-5 font-bold font-Inter">
          Note: 9:00 PM - 9:00 AM (Next day) - Rest Hour -{" "}
          <a 
            href="https://engineering.nyu.edu/classrooms-event-spaces/rh-202" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:underline"
          >
             RH202
          </a>
          <span>, </span>
          <a 
            href="https://engineering.nyu.edu/classrooms-event-spaces/rh-204" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:underline"
          >
            {" "}RH204
          </a>
        </div>
      </div>

      <div className="sm:hidden">
        <div className="bg-blue min-h-screen overflow-hidden pt-8 pb-16 font-Inter rounded-t-[40px]">
          <h2 className="text-white text-[32px] font-bold px-5 pt-6 pb-2">Saturday</h2>
          <div className="h-[2px] bg-white/30 mx-6"></div>
          {renderMobileScheduleSections(saturdayMobileScheduleData)}

          <h2 className="text-white text-[32px] font-bold px-5 pt-16 pb-2">Sunday</h2>
          <div className="h-[2px] bg-white/30 mx-6"></div>
          {renderMobileScheduleSections(sundayMobileScheduleData)}
        </div>
      </div>

      <div className="max-w-6xl mx-auto mb-12 sm:block hidden">
        <h2 className="text-blue text-[32px] font-bold text-center mb-8 mt-12">Sunday Schedule</h2>

        <table className="w-full border-separate border-spacing-3 table-fixed">
          <thead>
            <tr>
              <th className="w-1/5"></th>
              {Object.entries(locationLinks).filter(([location, _]) => (
                location === "NYU Tandon Gym" || location === "MakerSpace Foyer" || location === "Pfizer Auditorium"
              )).map(([location, link], index) => (
                <th key={index} className={thStyle}>
                  <a href={link} target="_blank" rel="noopener noreferrer" className="hover:underline cursor-pointer">
                    {location}
                  </a>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sundayScheduleWeb.map((row, index) => {
              if (index >= 0 && index <= 10) {
                if (index === 0) {
                  return (
                    <tr key={index} className="h-[50px]">
                      {row.time === "●" ? (
                        <td className="text-blue p-2 text-s font-bold text-center">●</td>
                      ) : (
                        <td className="bg-blue text-white p-2 rounded-3xl text-s font-bold text-center ">{row.time}</td>
                      )}
                      {renderTableCell(row.tandonGym)}
                      <td
                        className="p-2 border border-blue border-opacity-50 rounded-3xl bg-white text-blue"
                        rowSpan={3}
                      >
                        <div className="text-s font-bold text-center">Brunch</div>
                      </td>
                    </tr>
                  )
                }
              }
              if (index >= 4 && index <= 9) {
                if (index === 4) {
                  return (
                    <tr key={index} className="h-[50px]">
                      {row.time === "●" ? (
                        <td className="text-blue p-2 text-s font-bold text-center">●</td>
                      ) : (
                        <td className="bg-blue text-white p-2 rounded-3xl text-s font-bold text-center ">{row.time}</td>
                      )}
                      <td
                        className="p-2 border border-blue border-opacity-50 rounded-3xl bg-white text-blue"
                        rowSpan={4}
                      >
                        <div className="text-s font-bold text-center">Judging</div>
                      </td>
                    </tr>
                  )
                }
              }
              if (index == 8) {
                return (
                  <tr key={index} className="h-[50px]">
                    <td className="bg-blue text-white p-2 rounded-3xl text-s font-bold text-center ">{row.time}</td>
                    {renderTableCell(row.tandonGym)}
                    {renderTableCell(row.tandonGym)}
                    <td
                      className="p-2 border border-blue border-opacity-50 rounded-3xl bg-white text-blue"
                      rowSpan={1}
                    >
                      <div className="text-s font-bold text-center">A Day in the Life Panel</div>
                    </td>
                  </tr>
                )
              }
              if (index >= 9 && index <= 13) {
                if (index === 9) {
                  return (
                    <tr key={index} className="h-[50px]">
                      <td className="bg-blue text-white p-2 rounded-3xl text-s font-bold text-center ">{row.time}</td>
                      {renderTableCell(row.tandonGym)}
                      {renderTableCell(row.tandonGym)}
                      <td
                        className="p-2 border border-blue border-opacity-50 rounded-3xl bg-white text-blue"
                        rowSpan={2}
                      >
                        <div className="text-s font-bold text-center">Closing Ceremony</div>
                      </td>
                    </tr>
                  )
                }
              }
              return (
                <tr key={index} className="h-[50px]">
                  {row.time === "●" ? (
                    <td className="text-blue p-2 text-s font-bold text-center">●</td>
                  ) : (
                    <td className="bg-blue text-white p-2 rounded-3xl text-s font-bold text-center ">{row.time}</td>
                  )}
                  {renderTableCell(row.tandonGym)}
                  {renderTableCell(row.pfizer)}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default Schedule