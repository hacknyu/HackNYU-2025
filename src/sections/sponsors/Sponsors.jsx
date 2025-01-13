import React from "react";
import PropTypes from "prop-types";

const entries = [
  [
    {
      name: "google",
      path: "google.png",
      rank: 1,
    },
  ],
  [
    {
      name: "Capital One",
      path: "capitalOne.png",
      rank: 2,
    },
  ],
  [
    {
      name: "incogni",
      path: "incogni.png",
      rank: 3,
      link: "https://incogni.com"
    },
    {
      name: "Saily",
      path: "saily.png",
      rank: 3,
      link: "https://saily.com"
    },
  ],
  [
    {
      name: "NordVPN",
      path: "nordvpn.png",
      rank: 3,
      link: "https://nordvpn.com/hackathons"
    },
    {
      name: "NordPass",
      path: "nordpass.png",
      rank: 3,
      link: "https://nordpass.com",
    },
  ],
  [
    {
      name: "NYU IT",
      path: "it.png",
      rank: 5,
    },
    {
      name: "NYU",
      path: "nyu.png",
      rank: 5,
    },
    {
      name: "NYU Department of Campus Safety",
      path: "campusSafety.png",
      rank: 5,
    },
  ],
  [
    {
      name: "NYU Wasserman",
      path: "wasserman.png",
      rank: 6,
    },
    {
      name: "StandOut Stickers",
      path: "standOutStickers.png",
      rank: 6,
      link: "http://hackp.ac/mlh-StandOutStickers-hackathons"
    },
  ],
];

const Sponsor = ({ name, path, rank, link }) => {
  Sponsor.propTypes = {
    name: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    rank: PropTypes.number.isRequired,
    link: PropTypes.string
  };
  return (
    <div
      className={
        rank == 1
          ? `w-4/5 flex justify-center items-center`
          : rank == 2 ? "w-3/5 flex justify-center items-center"
          : rank == 3 ? "md:w-2/6  w-1/2 flex justify-center items-center mx-4" : "md:w-2/12 w-1/4 flex justify-center items-center md:mx-4 mx-2"
      }>
        <a href={link} target="_blank">
      <img alt={name} src={`/src/assets/sponsors/${path}`} className={rank <= 3 ? "object-contain" : "object-contain max-h-12"} />
        </a>
    </div>
  );
};

const Sponsors = () => {
  return (
    <section className="p-8" id="Sponsors">
      <h1 className="text-[32px] font-bold text-blue md:text-center mb-12">Sponsors</h1>
      <div className>
        {entries.map((row, i) => (
          <div className="flex items-center justify-center mb-12" key={i}>
            {row.map((entry, j) => (
              <Sponsor key={j} name={entry.name} path={entry.path} rank={entry.rank} link={entry.link} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Sponsors;
