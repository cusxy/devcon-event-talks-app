import React from 'react';
import './TalkCard.css';

interface TalkCardProps {
  talk: {
    id: number;
    title: string;
    speakers: string[];
    categories: string[];
    description: string;
    startTime: string;
    endTime: string;
  };
}

export const TalkCard: React.FC<TalkCardProps> = ({ talk }) => {
  const isBreak = talk.categories.includes('Break');

  if (isBreak) {
    return (
      <div className="break-line">
        <span className="break-text">{talk.title} ({talk.startTime} - {talk.endTime})</span>
      </div>
    );
  }

  return (
    <div className="talk-card">
      <div className="talk-time">
        {talk.startTime} - {talk.endTime}
      </div>
      <h3 className="talk-title">{talk.title}</h3>
      <p className="talk-speakers">
        <strong>Speakers:</strong> {talk.speakers.join(', ')}
      </p>
      <p className="talk-categories">
        <strong>Categories:</strong> {talk.categories.join(', ')}
      </p>
      <p className="talk-description">{talk.description}</p>
    </div>
  );
};