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
      rank: 1,
    },
  ],
  [
    {
      name: "incogni",
      path: "incogni.png",
      rank: 3,
    },
    {
      name: "Saily",
      path: "saily.png",
      rank: 3,
    },
  ],
  [
    {
      name: "NordVPN",
      path: "nordvpn.png",
      rank: 4,
    },
    {
      name: "NordPass",
      path: "nordpass.png",
      rank: 4,
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
      name: "Stand Out Stickers",
      path: "standOutStickers.png",
      rank: 6,
    },
  ],
];

const Sponsor = ({ name, path, rank }) => {
  Sponsor.propTypes = {
    name: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    rank: PropTypes.number.isRequired,
  };
  return (
    <div
      className={
        rank == 1
          ? `w-3/5 flex justify-center items-center`
          : "md:w-1/6 w-full flex justify-center items-center self-stretch mx-4"
      }>
      <img alt={name} src={`/src/assets/sponsors/${path}`} className="object-contain w-full" />
    </div>
  );
};

const Sponsors = () => {
  return (
    <section className="p-8" id="Sponsors">
      <h1 className="text-[32px] font-bold text-blue md:text-center mb-12">Sponsors</h1>
      <div className>
        {entries.map((row, i) => (
          <div className="flex items-center justify-center mb-8" key={i}>
            {row.map((entry, j) => (
              <Sponsor key={j} name={entry.name} path={entry.path} rank={entry.rank} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Sponsors;
