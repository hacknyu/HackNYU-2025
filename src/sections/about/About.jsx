import React from 'react'
import Card from '../../components/card/Card';

const About = () => {
  const info = [
    {
      header: '26+',
      subheader: 'Universities',
      description: 'Students from 26+ universities across the country have participated in our events, including University of Toronto, Northeastern University, and Columbia University.'
    },
    {
      header: '52+',
      subheader: 'Locations',
      description: 'Participants from 52+ locations have attended our events, including Jamaica, New Dehli, and Seoul.'
    },
    {
      header: '1000+',
      subheader: 'Participants',
      description: 'We have had over 1000 participants attend our events, including but not limited to those who are high school students, undergraduate students, and students from bootcamps.'
    },
    {
      header: '100+',
      subheader: 'Mentors',
      description: 'We have had over 100 mentors from companies like Google, Microsoft, and Amazon help our participants.'
    }
  ]
  
  return (
    <section className="md:flex md:flex-col md:justify-center md:items-center bg-blue md:rounded-t-[100px] p-10 text-white overflow-hidden">
      <h2 className="text-[32px] font-bold">About Us</h2>
      <br/>
      <div className="flex flex-col xl:flex-row md:justify-center md:items-center text-xl font-bold">
        <div className="md:flex">
          <Card info={info[0]}/>
          <br/>
          <span className="md:w-16 md:h-16"/>
          <Card info={info[1]}/>
        </div>
        <br/>
        <span className="md:w-16 md:h-16"/>
        <div className="md:flex">
          <Card info={info[2]}/>
          <br/>
          <span className="md:w-16 md:h-16"/>
          <Card info={info[3]}/>
        </div>
        {/* {index !== info.length - 1 ? <hr className="bg-blue opacity-[.3] h-[2px] md:hidden"/> : null} */}
      </div>
    </section>
  )
}

export default About