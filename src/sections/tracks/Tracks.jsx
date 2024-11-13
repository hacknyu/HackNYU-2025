import React from 'react';
import './Tracks.css';

// Importing icons
import Icon1 from '../../assets/Icon1.png';
import Icon2 from '../../assets/Icon2.png';
import Icon3 from '../../assets/Icon3.png';
import Icon4 from '../../assets/Icon4.png';

const Tracks = () => {
  const trackData = [
    { id: 1, title: 'Track', description: 'Excepteur sint occaecat cupidat non proident sunt in culpam qui the officia aliquip ex ea comm.', icon: Icon1 },
    { id: 2, title: 'Track', description: 'Excepteur sint occaecat cupidat non proident sunt in culpam qui the officia aliquip ex ea comm.', icon: Icon2 },
    { id: 3, title: 'Track', description: 'Excepteur sint occaecat cupidat non proident sunt in culpam qui the officia aliquip ex ea comm.', icon: Icon3 },
    { id: 4, title: 'Track', description: 'Excepteur sint occaecat cupidat non proident sunt in culpam qui the officia aliquip ex ea comm.', icon: Icon4 }
  ];

  return (
    <div className="track-container" aria-label="Track List">
      <div className="track">
        <h2>Tracks</h2>
      </div>
      <div className="track-list">
        {trackData.map(track => (
          <div key={track.id} className="track-card" aria-label={`Track ${track.id}`}>
            <div className="track-header">
              <img src={track.icon} alt={`Icon for track ${track.id}`} className="track-icon" />
              <h3 className="track-title">{track.title}</h3>
            </div>
            <p className="track-description">{track.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tracks;
