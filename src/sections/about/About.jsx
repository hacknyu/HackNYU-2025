import React from 'react'

const About = () => {
  const info = [
    {
      header: "15k+",
      subheader: "Universities",
      description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis"
    },
    {
      header: "250+",
      subheader: "Countries",
      description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis"
    },
    {
      header: "86+",
      subheader: "Students",
      description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis"
    },
    {
      header: "120+",
      subheader: "Sponsors",
      description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis"
    }
  ];

  return (
    <section className="md:flex md:flex-col md:justify-center md:items-center bg-blue md:rounded-t-[100px] p-5 text-white w-full">
      <h2 className="text-[32px] font-bold">About Us</h2>
      <h3>There are many variations of passages of Lorem Ipsum</h3>
      <br/>
      <div className="md:flex md:justify-center md:items-center">
        {info.map((item, index) => {
          return (
            <div key={index} className="md:text-center">
              <h2 className="text-[32px] font-bold">{item.header}</h2>
              <h3 className="font-semibold">{item.subheader}</h3>
              <p>{item.description}</p>
              <br/>
              {index !== info.length - 1 ? <hr className="bg-blue opacity-[.3] h-[2px] md:hidden"/> : null}
              <br/>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default About