import React from 'react';

import Icon1 from '../../assets/Icon1.png';
import Icon2 from '../../assets/Icon2.png';
import Icon3 from '../../assets/Icon3.png';
import Icon4 from '../../assets/Icon4.png';

const Tracks = () => {
  const trackData = [
    { id: 1, title: 'Track', description: 'Excepteur sint occaecat cupidat non proident sunt in culpam qui officia aliquip ex ea comm.', icon: Icon1 },
    { id: 2, title: 'Track', description: 'Excepteur sint occaecat cupidat non proident sunt in culpam qui officia aliquip ex ea comm.', icon: Icon2 },
    { id: 3, title: 'Track', description: 'Excepteur sint occaecat cupidat non proident sunt in culpam qui officia aliquip ex ea comm.', icon: Icon3 },
    { id: 4, title: 'Track', description: 'Excepteur sint occaecat cupidat non proident sunt in culpam qui officia aliquip ex ea comm.', icon: Icon4 }
  ];

  return (
    <div className="m-5 mx-auto p-5 text-center bg-no-repeat bg-center bg-cover bg-[url('../../assets/track.png')] w-4/5 h-[60vh] min-h-[300px] min-w-[500px]"
         style={{ fontFamily: 'Arial, sans-serif', color: '#0B5CD5' }}> 
      <div className="w-full">
        <h2 className="text-6xl font-bold mb-3">Tracks</h2>
      </div>
      <div className="grid grid-cols-2 gap-5 justify-center max-w-4xl mx-auto">
        {trackData.map(track => (
          <div key={track.id} className="p-5 text-left" aria-label={`Track ${track.id}`}>
            <div className="flex items-center justify-start mb-2">
              <img src={track.icon} alt={`Icon for track ${track.id}`} className="w-12 h-12 bg-blue-100 rounded-full mr-2" />
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
