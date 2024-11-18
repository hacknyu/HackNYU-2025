import React from 'react'
import icon from '../../assets/react.svg'

const Tracks = () => {
  const trackData = [
    { id: 1, title: 'Track', description: 'Excepteur sint occaecat cupidat non proident sunt in culpam qui officia aliquip ex ea comm.', icon: icon },
    { id: 2, title: 'Track', description: 'Excepteur sint occaecat cupidat non proident sunt in culpam qui officia aliquip ex ea comm.', icon: icon },
    { id: 3, title: 'Track', description: 'Excepteur sint occaecat cupidat non proident sunt in culpam qui officia aliquip ex ea comm.', icon: icon },
    { id: 4, title: 'Track', description: 'Excepteur sint occaecat cupidat non proident sunt in culpam qui officia aliquip ex ea comm.', icon: icon }
  ];

  return (
    <div className="w-full flex flex-col justify-center items-center text-blue p-5">
      <h2 className="text-3xl font-bold mb-5">Tracks</h2>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {trackData.map(track => (
          <div key={track.id} aria-label={`${track.title}`} className="mb-10 md:p-5">
            <div className="flex items-center text-left mb-5">
              <img src={track.icon} alt={`${track.title}`} className="w-12 h-12 bg-blue-100 rounded-full mr-2" />
              <h3 className="text-xl font-bold">{track.title}</h3>
            </div>
            <p className="text-sm">{track.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tracks;
