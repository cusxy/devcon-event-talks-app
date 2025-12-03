import React, { useEffect, useState } from 'react';
import './App.css';
import { Schedule } from './components/Schedule';
import { SearchBar } from './components/SearchBar';

interface Talk {
  id: number;
  title: string;
  speakers: string[];
  categories: string[];
  duration: number; // in minutes
  description: string;
  startTime: string;
  endTime: string;
}

function App() {
  const [talks, setTalks] = useState<Talk[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTalks = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/talks');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: Talk[] = await response.json();
        setTalks(data);
      } catch (e: any) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTalks();
  }, []);

  if (loading) {
    return <div className="container">Loading schedule...</div>;
  }

  if (error) {
    return <div className="container error">Error: {error}</div>;
  }

  return (
    <div className="container">
      <h1>Technical Talks Schedule</h1>
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <Schedule talks={talks} searchTerm={searchTerm} />
    </div>
  );
}

export default App;