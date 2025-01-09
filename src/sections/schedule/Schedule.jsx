import React from "react";

const Schedule = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex justify-center items-center h-screen bg-white">
        <div className="w-[1280px] p-[80px] bg-[#0b5cd5] rounded-tl-[85px] rounded-tr-[85px] flex justify-between items-start gap-[120px]">
          {/* Saturday Schedule */}
          <div className="w-[50%]">
            <div className="pb-[20px] border-b border-white">
              <h3 className="text-white text-xl font-bold font-wix">Saturday</h3>
            </div>
            <div className="py-[16px] border-b border-white flex items-start">
              <div className="w-[150px] text-white text-xl font-bold font-wix flex-shrink-0">9:00 AM</div>
              <div className="text-white text-base font-normal font-wix leading-relaxed">
                Describe the item here. Include important features, pricing, and other relevant info.
              </div>
            </div>
            <div className="py-[16px] border-b border-white flex">
              <div className="w-[150px] text-white text-xl font-bold font-wix">10:00 AM</div>
              <div className="text-white text-base font-normal font-wix leading-relaxed">
                Light Breakfast
              </div>
            </div>
            <div className="py-[16px] border-b border-white flex">
              <div className="w-[150px] text-white text-xl font-bold font-wix">12:00 PM</div>
              <div className="text-white text-base font-normal font-wix leading-relaxed">
                Team Formation
              </div>
            </div>
            <div className="py-[16px] border-b border-white flex">
              <div className="w-[150px] text-white text-xl font-bold font-wix">12:30 PM</div>
              <div className="text-white text-base font-normal font-wix leading-relaxed">
                Workshop One
              </div>
            </div>
            <div className="py-[16px] border-b border-white flex">
              <div className="w-[150px] text-white text-xl font-bold font-wix">14:00 PM</div>
              <div className="text-white text-base font-normal font-wix leading-relaxed">Lunch</div>
            </div>
            <div className="py-[16px] border-b border-white flex">
              <div className="w-[150px] text-white text-xl font-bold font-wix">17:30 PM</div>
              <div className="text-white text-base font-normal font-wix leading-relaxed">
                Snacks and Fun-tivity
              </div>
            </div>
            <div className="py-[16px] border-b border-white flex">
              <div className="w-[150px] text-white text-xl font-bold font-wix">21:00 PM</div>
              <div className="text-white text-base font-normal font-wix leading-relaxed">Dinner</div>
            </div>
          </div>

          {/* Sunday Schedule */}
          <div className="w-[50%]">
            <div className="pb-[20px] border-b border-white">
              <h3 className="text-white text-xl font-bold font-wix">Sunday</h3>
            </div>
            <div className="py-[16px] border-b border-white flex">
              <div className="w-[150px] text-white text-xl font-bold font-wix">9:30 AM</div>
              <div className="text-white text-base font-normal font-wix leading-relaxed">Brunch</div>
            </div>
            <div className="py-[16px] border-b border-white flex">
              <div className="w-[150px] text-white text-xl font-bold font-wix">11:30 AM</div>
              <div className="text-white text-base font-normal font-wix leading-relaxed">
                Project Deadline
              </div>
            </div>
            <div className="py-[16px] border-b border-white flex">
              <div className="w-[150px] text-white text-xl font-bold font-wix">15:00 PM</div>
              <div className="text-white text-base font-normal font-wix leading-relaxed">
                Closing Ceremony
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <div className="flex justify-center items-center h-screen bg-white">
        <div class="w-[1280px] h-[1023.07px] relative bg-white overflow-hidden mb-12">
          <div class="w-[215.77px] h-[48.46px] left-[67px] top-[195.61px] absolute">
              <div class="w-[215.77px] h-[48.46px] left-0 top-0 absolute bg-[#0b5cd5] rounded-[27.88px] border border-white"></div>
              <div class="left-[20px] top-[13.39px] absolute text-center text-white text-lg font-semibold font-inter">9:00 AM - 10:00 AM</div>
          </div>
          <div class="w-[227.91px] h-[48.46px] left-[293.53px] top-[133px] absolute">
            <a 
              href="https://www.google.com/maps/place/Tandon+Gym/@40.6942345,-73.9865836,17z" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="block w-full h-full bg-[#0b5cd5] rounded-[27.88px]"
            >
              <div class="w-[120.28px] left-[51.47px] top-[12px] absolute text-center text-white text-lg font-semibold font-inter">
                Tandon Gym
              </div>
            </a>
          </div>
          <div class="w-[227.91px] h-[48.46px] left-[537px] top-[133px] absolute">
              <div class="w-[227.91px] h-[48.46px] left-0 top-0 absolute bg-[#0b5cd5] rounded-[27.88px]"></div>
              <div class="w-[120.28px] left-[53.47px] top-[12px] absolute text-center text-white text-lg font-semibold font-inter">Room A</div>
          </div>
          <div class="w-[227.91px] h-[48.46px] left-[781px] top-[133px] absolute">
              <div class="w-[227.91px] h-[48.46px] left-0 top-0 absolute bg-[#0b5cd5] rounded-[27.88px]"></div>
              <div class="w-[120.28px] left-[53.47px] top-[12px] absolute text-center text-white text-lg font-semibold font-inter">Room B</div>
          </div>
          <div class="w-[215.77px] h-[48.46px] left-[67px] top-[260px] absolute">
              <div class="w-[215.77px] h-[48.46px] left-0 top-0 absolute bg-[#0b5cd5] rounded-[27.88px] border border-white"></div>
              <div class="left-[17px] top-[13px] absolute text-center text-white text-lg font-semibold font-inter">10:00 AM - 11:00 AM</div>
          </div>
          <div class="w-[215.77px] h-[48.46px] left-[67px] top-[324px] absolute">
              <div class="w-[215.77px] h-[48.46px] left-0 top-0 absolute bg-[#0b5cd5] rounded-[27.88px] border border-white"></div>
              <div class="left-[20.86px] top-[13.60px] absolute text-center text-white text-lg font-semibold font-inter">11:30AM - 12:00 PM</div>
          </div>
          <div class="w-[215.77px] h-[48.46px] left-[67px] top-[388px] absolute">
              <div class="w-[215.77px] h-[48.46px] left-0 top-0 absolute bg-[#0b5cd5] rounded-[27.88px] border border-white"></div>
              <div class="left-[22.86px] top-[13.20px] absolute text-center text-white text-lg font-semibold font-inter">12:00 PM - 1:00 PM</div>
          </div>
          <div class="w-[215.77px] h-[48.46px] left-[67px] top-[452px] absolute">
              <div class="w-[215.77px] h-[48.46px] left-0 top-0 absolute bg-[#0b5cd5] rounded-[27.88px] border border-white"></div>
              <div class="left-[26.86px] top-[13.20px] absolute text-center text-white text-lg font-semibold font-inter">1:00 PM - 2:00 PM</div>
          </div>
          <div class="w-[215.77px] h-[48.46px] left-[67px] top-[516px] absolute">
              <div class="w-[215.77px] h-[48.46px] left-0 top-0 absolute bg-[#0b5cd5] rounded-[27.88px] border border-white"></div>
              <div class="left-[24.86px] top-[13.20px] absolute text-center text-white text-lg font-semibold font-inter">2:00 PM - 3:00 PM</div>
          </div>
          <div class="w-[215.77px] h-[48.46px] left-[67px] top-[580px] absolute">
              <div class="w-[215.77px] h-[48.46px] left-0 top-0 absolute bg-[#0b5cd5] rounded-[27.88px] border border-white"></div>
              <div class="left-[24.86px] top-[13.20px] absolute text-center text-white text-lg font-semibold font-inter">3:00 PM - 4:00 PM</div>
          </div>
          <div class="w-[215.77px] h-[48.46px] left-[67px] top-[644px] absolute">
              <div class="w-[215.77px] h-[48.46px] left-0 top-0 absolute bg-[#0b5cd5] rounded-[27.88px] border border-white"></div>
              <div class="left-[24.86px] top-[13.61px] absolute text-center text-white text-lg font-semibold font-inter">4:00 PM - 5:00 PM</div>
          </div>
          <div class="w-[215.77px] h-[48.46px] left-[67px] top-[708px] absolute">
              <div class="w-[215.77px] h-[48.46px] left-0 top-0 absolute bg-[#0b5cd5] rounded-[27.88px] border border-white"></div>
              <div class="left-[24.86px] top-[13.61px] absolute text-center text-white text-lg font-semibold font-inter">5:30 PM - 6:00 PM</div>
          </div>
          <div class="w-[215.77px] h-[48.46px] left-[67px] top-[772px] absolute">
              <div class="w-[215.77px] h-[48.46px] left-0 top-0 absolute bg-[#0b5cd5] rounded-[27.88px] border border-white"></div>
              <div class="left-[25.86px] top-[13.61px] absolute text-center text-white text-lg font-semibold font-inter">6:00 PM - 7:00 PM</div>
          </div>
          <div class="w-[215.77px] h-[48.46px] left-[66px] top-[836px] absolute">
              <div class="w-[215.77px] h-[48.46px] left-0 top-0 absolute bg-[#0b5cd5] rounded-[27.88px] border border-white"></div>
              <div class="left-[25.86px] top-[13.61px] absolute text-center text-white text-lg font-semibold font-inter">7:00 PM - 8:00 PM</div>
          </div>
          <div class="w-[768.17px] h-[832.66px] left-[93.03px] top-[155.77px] absolute">
              <div class="left-[438.17px] top-[694.44px] absolute text-center text-white text-2xl font-semibold font-inter">Project Submission Deadline at 8pm.</div>
          </div>
          <div class="w-[227.72px] h-[48.46px] left-[291px] top-[325px] absolute">
              <div class="w-[227.72px] h-[48.46px] left-0 top-0 absolute bg-white rounded-[33.20px] border border-[#0b5cd5]"></div>
              <div class="w-[220.41px] left-[3.46px] top-[13.39px] absolute text-center text-[#0b5cd5] text-lg font-semibold font-inter">Opening Ceremony</div>
          </div>
          <div class="w-[175.12px] h-[48.46px] left-[1021px] top-[709px] absolute">
              <div class="w-[175.12px] h-[48.46px] left-0 top-0 absolute bg-white rounded-[33.20px] border border-[#0b5cd5]"></div>
              <div class="w-[169.50px] left-[2.66px] top-[13.39px] absolute text-center text-[#0b5cd5] text-lg font-semibold font-inter">Snacks</div>
          </div>
          <div class="w-[230px] h-[60px] left-[539px] top-[568px] absolute">
              <div class="w-[230px] h-[60px] left-0 top-0 absolute bg-white rounded-[21px] border border-[#0b5cd5]"></div>
              <div class="w-[222.62px] h-[27.24px] left-[4px] top-[16.72px] absolute text-center text-[#0b5cd5] text-lg font-semibold font-inter">Workshop</div>
          </div>
          <div class="w-[230px] h-12 left-[779px] top-[644px] absolute">
              <div class="w-[230px] h-12 left-0 top-0 absolute bg-white rounded-[21px] border border-[#0b5cd5]"></div>
              <div class="w-[222.62px] h-[21.79px] left-[4px] top-[13.38px] absolute text-center text-[#0b5cd5] text-lg font-semibold font-inter">Workshop</div>
          </div>
          <div class="w-[175.12px] h-[48.46px] left-[1021px] top-[900px] absolute">
              <div class="w-[175.12px] h-[48.46px] left-0 top-0 absolute bg-white rounded-[33.20px] border border-[#0b5cd5]"></div>
              <div class="w-[169.50px] left-[2.66px] top-[13.39px] absolute text-center text-[#0b5cd5] text-lg font-semibold font-inter">Dinner</div>
          </div>
          <div class="w-[227.72px] h-[48.46px] left-[291px] top-[386px] absolute">
              <div class="w-[227.72px] h-[48.46px] left-0 top-0 absolute bg-white rounded-[33.20px] border border-[#0b5cd5]"></div>
              <div class="w-[220.41px] left-[3.46px] top-[13.39px] absolute text-center text-[#0b5cd5] text-lg font-semibold font-inter">Team Formation</div>
          </div>
          <div class="w-[227.72px] h-[48.46px] left-[291px] top-[196px] absolute">
              <div class="w-[227.72px] h-[48.46px] left-0 top-0 absolute bg-white rounded-[33.20px] border border-[#0b5cd5]"></div>
              <div class="w-[220.41px] left-[3.46px] top-[13.39px] absolute text-center text-[#0b5cd5] text-lg font-semibold font-inter">Check-In Opens</div>
          </div>
          <div class="w-[175.15px] h-[48.46px] left-[1031px] top-[251px] absolute">
              <div class="w-[175.15px] h-[48.46px] left-0 top-0 absolute bg-white rounded-[33.20px] border border-[#0b5cd5]"></div>
              <div class="w-[169.53px] left-[2.66px] top-[13.39px] absolute text-center text-[#0b5cd5] text-lg font-semibold font-inter">Breakfast</div>
          </div>
          <div class="w-[175.15px] h-[48.46px] left-[1034px] top-[516px] absolute">
              <div class="w-[175.15px] h-[48.46px] left-0 top-0 absolute bg-white rounded-[33.20px] border border-[#0b5cd5]"></div>
              <div class="w-[169.53px] left-[2.66px] top-[13.39px] absolute text-center text-[#0b5cd5] text-lg font-semibold font-inter">Lunch</div>
          </div>
          <div class="w-[230px] h-12 left-[291px] top-[708px] absolute bg-white rounded-xl border border-[#0b5cd5]"></div>
          <div class="w-[230px] h-[168px] left-[538px] top-[388px] absolute bg-white rounded-xl border border-[#0b5cd5]"></div>
          <div class="w-[175.15px] h-[48.46px] left-[1025px] top-[133px] absolute">
              <div class="w-[175.15px] h-[48.46px] left-0 top-0 absolute bg-[#0b5cd5] rounded-[27.88px]"></div>
              <div class="w-[47.83px] left-[64px] top-[12px] absolute text-center text-white text-lg font-semibold font-inter">Food</div>
          </div>
          <div class="w-[225px] h-[82px] left-[294px] top-[447px] absolute">
              <div class="w-[225px] h-[67.05px] left-0 top-0 absolute bg-white rounded-xl border border-[#0b5cd5]"></div>
              <div class="w-[212.22px] h-[58.33px] left-[5.23px] top-[23.67px] absolute text-center text-[#0b5cd5] text-lg font-semibold font-inter">Workshop</div>
          </div>
          <div class="w-[220.41px] left-[297px] top-[721px] absolute text-center text-[#0b5cd5] text-lg font-semibold font-inter">FUN-TIVITY</div>
          <div class="w-[220.41px] left-[544px] top-[465px] absolute text-center text-[#0b5cd5] text-lg font-semibold font-inter">HackNYU Booth</div>
          <div class="w-[0.66px] h-[0.66px] left-[733.03px] top-[282.58px] absolute"></div>
          <div class="w-[66.39px] h-[66.39px] left-[629.46px] top-[242.08px] absolute"></div>
          <div class="w-[205.81px] h-[578.26px] left-[302.16px] top-[394.11px] absolute rounded-[33.20px]"></div>
          <div class="w-[652px] left-[315px] top-[51px] absolute text-center text-[#0b5cd5] text-[32px] font-semibold font-inter leading-[54px]">Saturday Schedule</div>
          <div class="w-[215.77px] h-[48.46px] left-[67px] top-[900px] absolute">
              <div class="w-[215.77px] h-[48.46px] left-0 top-0 absolute bg-[#0b5cd5] rounded-[27.88px] border border-white"></div>
              <div class="left-[20.86px] top-[13.61px] absolute text-center text-white text-lg font-semibold font-inter">9:00 PM - 10:00 PM</div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center min-h-screen bg-white mb-12">
        <div class="w-[1280px] h-[1023.07px] relative bg-white  overflow-hidden">
          <div class="w-[215.77px] h-[48.46px] left-[67px] top-[195.61px] absolute">
              <div class="w-[215.77px] h-[48.46px] left-0 top-0 absolute bg-[#0b5cd5] rounded-[27.88px] border border-white"></div>
              <div class="left-[20px] top-[13.39px] absolute text-center text-white text-lg font-semibold font-inter">9:00 AM - 10:00 AM</div>
          </div>
          <div class="w-[227.91px] h-[48.46px] left-[293.53px] top-[133px] absolute">
            <a 
              href="https://www.google.com/maps/place/Tandon+Gym/@40.6942345,-73.9865836,17z" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="block w-full h-full bg-[#0b5cd5] rounded-[27.88px]"
            >
              <div class="w-[120.28px] left-[51.47px] top-[12px] absolute text-center text-white text-lg font-semibold font-inter">
                Tandon Gym
              </div>
            </a>
          </div>
          <div class="w-[227.91px] h-[48.46px] left-[612px] top-[133px] absolute">
            <a 
              href="https://www.google.com/maps/place/Pfizer+Auditorium/@40.6940237,-73.9862452,17z" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="block w-full h-full bg-[#0b5cd5] rounded-[27.88px]"
            >
              <div class="w-[191px] left-[22px] top-[12px] absolute text-center text-white text-lg font-semibold font-inter">
                Pfizer Auditorium
              </div>
            </a>
          </div>
          <div class="w-[215.77px] h-[48.46px] left-[67px] top-[260px] absolute">
              <div class="w-[215.77px] h-[48.46px] left-0 top-0 absolute bg-[#0b5cd5] rounded-[27.88px] border border-white"></div>
              <div class="left-[17px] top-[13px] absolute text-center text-white text-lg font-semibold font-inter">10:00 AM - 11:00 AM</div>
          </div>
          <div class="w-[215.77px] h-[48.46px] left-[67px] top-[324px] absolute">
              <div class="w-[215.77px] h-[48.46px] left-0 top-0 absolute bg-[#0b5cd5] rounded-[27.88px] border border-white"></div>
              <div class="left-[20.86px] top-[13.60px] absolute text-center text-white text-lg font-semibold font-inter">11:30AM - 12:00 PM</div>
          </div>
          <div class="w-[215.77px] h-[48.46px] left-[67px] top-[388px] absolute">
              <div class="w-[215.77px] h-[48.46px] left-0 top-0 absolute bg-[#0b5cd5] rounded-[27.88px] border border-white"></div>
              <div class="left-[22.86px] top-[13.20px] absolute text-center text-white text-lg font-semibold font-inter">12:00 PM - 1:00 PM</div>
          </div>
          <div class="w-[215.77px] h-[48.46px] left-[67px] top-[452px] absolute">
              <div class="w-[215.77px] h-[48.46px] left-0 top-0 absolute bg-[#0b5cd5] rounded-[27.88px] border border-white"></div>
              <div class="left-[26.86px] top-[13.20px] absolute text-center text-white text-lg font-semibold font-inter">1:00 PM - 2:00 PM</div>
          </div>
          <div class="w-[215.77px] h-[48.46px] left-[67px] top-[516px] absolute">
              <div class="w-[215.77px] h-[48.46px] left-0 top-0 absolute bg-[#0b5cd5] rounded-[27.88px] border border-white"></div>
              <div class="left-[24.86px] top-[13.20px] absolute text-center text-white text-lg font-semibold font-inter">2:00 PM - 3:00 PM</div>
          </div>
          <div class="w-[215.77px] h-[48.46px] left-[67px] top-[580px] absolute">
              <div class="w-[215.77px] h-[48.46px] left-0 top-0 absolute bg-[#0b5cd5] rounded-[27.88px] border border-white"></div>
              <div class="left-[24.86px] top-[13.20px] absolute text-center text-white text-lg font-semibold font-inter">3:00 PM - 4:00 PM</div>
          </div>
          <div class="w-[215.77px] h-[48.46px] left-[67px] top-[644px] absolute">
              <div class="w-[215.77px] h-[48.46px] left-0 top-0 absolute bg-[#0b5cd5] rounded-[27.88px] border border-white"></div>
              <div class="left-[24.86px] top-[13.61px] absolute text-center text-white text-lg font-semibold font-inter">4:00 PM - 5:00 PM</div>
          </div>
          <div class="w-[215.77px] h-[48.46px] left-[67px] top-[708px] absolute">
              <div class="w-[215.77px] h-[48.46px] left-0 top-0 absolute bg-[#0b5cd5] rounded-[27.88px] border border-white"></div>
              <div class="left-[24.86px] top-[13.61px] absolute text-center text-white text-lg font-semibold font-inter">5:30 PM - 6:00 PM</div>
          </div>
          <div class="w-[215.77px] h-[48.46px] left-[67px] top-[772px] absolute">
              <div class="w-[215.77px] h-[48.46px] left-0 top-0 absolute bg-[#0b5cd5] rounded-[27.88px] border border-white"></div>
              <div class="left-[25.86px] top-[13.61px] absolute text-center text-white text-lg font-semibold font-inter">6:00 PM - 7:00 PM</div>
          </div>
          <div class="w-[215.77px] h-[48.46px] left-[66px] top-[836px] absolute">
              <div class="w-[215.77px] h-[48.46px] left-0 top-0 absolute bg-[#0b5cd5] rounded-[27.88px] border border-white"></div>
              <div class="left-[25.86px] top-[13.61px] absolute text-center text-white text-lg font-semibold font-inter">7:00 PM - 8:00 PM</div>
          </div>
          <div class="w-[768.17px] h-[832.66px] left-[93.03px] top-[155.77px] absolute">
              <div class="left-[438.17px] top-[694.44px] absolute text-center text-white text-2xl font-semibold font-inter">Project Submission Deadline at 8pm.</div>
          </div>
          <div class="w-[227.72px] h-[48.46px] left-[291px] top-[325px] absolute">
              <div class="w-[227.72px] h-[48.46px] left-0 top-0 absolute bg-white rounded-[33.20px] border border-[#0b5cd5]"></div>
              <div class="w-[220.41px] left-[3.46px] top-[13.39px] absolute text-center text-[#0b5cd5] text-lg font-semibold font-inter">Project Deadline</div>
          </div>
          <div class="w-[227.72px] h-28 left-[294px] top-[388px] absolute">
              <div class="w-[227.72px] h-28 left-0 top-0 absolute bg-white rounded-[33.20px] border border-[#0b5cd5]"></div>
              <div class="w-[220.41px] h-[50.84px] left-[1px] top-[45px] absolute text-center text-[#0b5cd5] text-lg font-semibold font-inter">Judging</div>
          </div>
          <div class="w-[227.72px] h-[48.46px] left-[614px] top-[580px] absolute">
              <div class="w-[227.72px] h-[48.46px] left-0 top-0 absolute bg-white rounded-[33.20px] border border-[#0b5cd5]"></div>
              <div class="w-[220.41px] left-[6px] top-[13px] absolute text-center text-[#0b5cd5] text-lg font-semibold font-inter">Closing Ceremony</div>
          </div>
          <div class="w-[175.15px] h-[48.46px] left-[952px] top-[133px] absolute">
              <div class="w-[175.15px] h-[48.46px] left-0 top-0 absolute bg-[#0b5cd5] rounded-[27.88px]"></div>
              <div class="w-[47.83px] left-[64px] top-[12px] absolute text-center text-white text-lg font-semibold font-inter">Food</div>
          </div>
          <div class="w-[175px] h-[81px] left-[952px] top-[250px] absolute">
              <div class="w-[175px] h-[75.53px] left-0 top-0 absolute bg-white rounded-[21px] border border-[#0b5cd5]"></div>
              <div class="w-[165.31px] h-[58.75px] left-[5px] top-[22px] absolute text-center text-[#0b5cd5] text-lg font-semibold font-inter">Brunch</div>
          </div>
          <div class="w-[0.66px] h-[0.66px] left-[733.03px] top-[282.58px] absolute"></div>
          <div class="w-[205.81px] h-[578.26px] left-[302.16px] top-[394.11px] absolute rounded-[33.20px]"></div>
          <div class="w-[652px] left-[325px] top-[52px] absolute text-center text-[#0b5cd5] text-[32px] font-semibold font-inter leading-[54px]">Sunday Schedule</div>
          <div class="w-[215.77px] h-[48.46px] left-[67px] top-[900px] absolute">
              <div class="w-[215.77px] h-[48.46px] left-0 top-0 absolute bg-[#0b5cd5] rounded-[27.88px] border border-white"></div>
              <div class="left-[20.86px] top-[13.61px] absolute text-center text-white text-lg font-semibold font-inter">9:00 PM - 10:00 PM</div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Schedule;
