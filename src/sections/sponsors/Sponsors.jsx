import PropTypes from "prop-types";
import google from "../../assets/sponsors/google.png";
import capitalOne from "../../assets/sponsors/capitalOne.png";
import nordvpn from "../../assets/sponsors/nordvpn.png";
import nordpass from "../../assets/sponsors/nordpass.png";
import incogni from "../../assets/sponsors/incogni.png";
import saily from "../../assets/sponsors/saily.png";
import it from "../../assets/sponsors/it.png";
import nyu from "../../assets/sponsors/nyu.png";
import campusSafety from "../../assets/sponsors/campusSafety.png";
import wasserman from "../../assets/sponsors/wasserman.png";
import standOutStickers from "../../assets/sponsors/standOutStickers.png";

const entries = [
  [
    {
      name: "google",
      src: google,
      rank: 1,
    },
  ],
  [
    {
      name: "Capital One",
      src: capitalOne,
      rank: 2,
    },
  ],
  [
    {
      name: "NordVPN",
      src: nordvpn,
      rank: 3,
      link: "https://nordvpn.com/hackathons"
    },
    {
      name: "NordPass",
      src: nordpass,
      rank: 3,
      link: "https://nordpass.com",
    },
  ],
  [
    {
      name: "incogni",
      src: incogni,
      rank: 3,
      link: "https://incogni.com"
    },
    {
      name: "Saily",
      src: saily,
      rank: 3,
      link: "https://saily.com"
    },
  ],
  [
    {
      name: "NYU IT",
      src: it,
      rank: 5,
    },
    {
      name: "NYU",
      src: nyu,
      rank: 5,
    },
    {
      name: "NYU Department of Campus Safety",
      src: campusSafety,
      rank: 5,
    },
  ],
  [
    {
      name: "NYU Wasserman",
      src: wasserman,
      rank: 6,
    },
    {
      name: "StandOut Stickers",
      src: standOutStickers,
      rank: 6,
      link: "http://hackp.ac/mlh-StandOutStickers-hackathons"
    },
  ],
];

const Sponsor = ({ name, src, rank, link }) => {
  Sponsor.propTypes = {
    name: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    rank: PropTypes.number.isRequired,
    link: PropTypes.string
  };
  return (
    <div
      className={
        rank === 1
          ? `w-4/5 flex justify-center items-center`
          : rank === 2 ? "w-3/5 flex justify-center items-center"
          : rank === 3 ? "md:w-2/6 w-1/2 flex justify-center items-center mx-4" : "md:w-2/12 w-1/4 flex justify-center items-center md:mx-4 mx-2"
      }>
        <a href={link} target="_blank">
          <img alt={name} src={src} className={rank < 3 ? "object-contain" : rank === 3 ? "object-contain max-h-20" : "object-contain max-h-12"} />
        </a>
    </div>
  );
};

const Sponsors = () => {
  return (
    <section className="p-8" id="sponsors">
      <h1 className="text-[32px] font-bold text-blue md:text-center mb-12">Sponsors</h1>
      <div className>
        {entries.map((row, i) => (
          <div className="flex items-center justify-center mb-12" key={i}>
            {row.map((entry, j) => (
              <Sponsor key={j} name={entry.name} src={entry.src} rank={entry.rank} link={entry.link} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Sponsors;
