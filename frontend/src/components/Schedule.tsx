import React from 'react';
import { TalkCard } from './TalkCard';
import './Schedule.css';

interface Talk {
  id: number;
  title: string;
  speakers: string[];
  categories: string[];
  duration: number;
  description: string;
  startTime: string;
  endTime: string;
}

interface ScheduleProps {
  talks: Talk[];
  searchTerm: string;
}

export const Schedule: React.FC<ScheduleProps> = ({ talks, searchTerm }) => {
  const filteredTalks = talks.filter(talk =>
    talk.categories.some(category =>
      category.toLowerCase().includes(searchTerm.toLowerCase())
    ) || talk.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (filteredTalks.length === 0 && searchTerm) {
    return <div className="no-results">No talks found for "{searchTerm}"</div>;
  }

  return (
    <div className="schedule-container">
      {filteredTalks.map(talk => (
        <TalkCard key={talk.id} talk={talk} />
      ))}
    </div>
  );
};
