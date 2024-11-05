import React from 'react';
import './Tracks.css'; 

const Tracks = () => {
  const trackData = [
    { id: 1, icon: '', title: 'Track', description: 'Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia aliquip ex ea comm.' },
    { id: 2, icon: '', title: 'Track', description: 'Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia aliquip ex ea comm.' },
    { id: 3, icon: '', title: 'Track', description: 'Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia aliquip ex ea comm.' },
    { id: 4, icon: '', title: 'Track', description: 'Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia aliquip ex ea comm.' }
  ];

  return (
    <div className="track-container">
      <h2>Tracks</h2>
      <div className="track-list">
        {trackData.map(track => (
          <div key={track.id} className="track-card">
            <div className="track-icon">{track.icon}</div>
            <h3 className="track-title">{track.title}</h3>
            <p className="track-description">{track.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tracks;
