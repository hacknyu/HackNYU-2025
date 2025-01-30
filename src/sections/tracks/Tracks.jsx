import PropTypes from "prop-types";
import FintechIcon from "../../assets/tracks/fintech.svg?react";
import SustainabilityIcon from "../../assets/tracks/sustainability.svg?react";
import SecurityIcon from "../../assets/tracks/lock.svg?react";
import InternetIcon from "../../assets/tracks/internet.svg?react";

const tracksData = [
  {
    title: "FinTech/Quant: Best Financial Hack",
    subtitle: "Sponsored by Capital One",
    description: "Bring the Wall Street in you to create projects revolving around financial stability, NFTs, financial literacy, quant strat, and money, money, money.",
    Icon: FintechIcon,
  },
  {
    title: "Interactive Media Arts: Mixed Reality (AR/VR)",
    description:
      "Craft dynamic user experiences with augmented and virtual reality technologies, combining artistry with technical expertise.",
    Icon: InternetIcon,
  },
  {
    title: "Security & Privacy",
    subtitle: "Sponsored by Nord Security",
    description: "Develop solutions to enhance security and privacy to protect users and the digital ecosystem.",
    Icon: SecurityIcon,
  },
  {
    title: "Healthcare and Sustainability",
    description:
      "Create impactful projects that advance the fields of healthcare or promote sustainability for a greener future.",
    Icon: SustainabilityIcon,
  },
];

const TrackInfo = ({ title, subtitle, description, Icon }) => {
  TrackInfo.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    Icon: PropTypes.elementType.isRequired,
  };
  return (
    <div>
      <div className="flex flex-row gap-2 items-center">
        <div className="bg-blue-200 p-2 rounded-full flex items-center justify-center">
          <Icon className="w-5 h-5 fill-blue" />
        </div>
        <div className="flex flex-col">
          <h2 className="text-blue text-2xl font-bold">{title}</h2>
          <i className="text-blue">{subtitle}</i>
        </div>
      </div>
      <p className="text-blue mt-4 max-w-xl">{description}</p>
    </div>
  );
};

const Tracks = () => {
  return (
    <section id="tracks" className="p-8 md:my-20">
      <h1 className="text-[32px] font-bold text-blue md:text-center mb-12">Tracks</h1>
      <div className="md:flex items-start md:items-center justify-center">
        <div className="flex flex-col gap-8 md:gap-4 md:grid md:grid-cols-2">
          {tracksData.map((track, i) => (
            <TrackInfo key={i} title={track.title} subtitle={track.subtitle} description={track.description} Icon={track.Icon} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tracks;
