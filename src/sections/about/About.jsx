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
      description: 'We have had over 1000 participants attend our events, including high school students, undergraduate students, and students from bootcamps.'
    },
  ]
  
  return (
    <section id="about" className="md:flex md:flex-col md:justify-center md:items-center bg-blue md:rounded-t-[100px] px-8 py-8 md:py-20 text-white overflow-hidden">
      <h2 className="text-[32px] font-bold mb-12">About Us</h2>
      <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center justify-center gap-5">
        {info.map((item, index) => (
          <Card key={index} info={item}/>
        ))}
      </div>
    </section>
  )
}

export default About