import React from 'react';
import Card from '../Components/Card';
import { useCharContext } from '../utils/global.context';

const Home = () => {
  const { state } = useCharContext();

  return (
    <main className={`home-container ${state.theme}`}>
      <h1>Home</h1>
      <div className='card-grid'>
        {state.data.map((dentist) => (
          <Card key={dentist.id} name={dentist.name} username={dentist.username} id={dentist.id} />
        ))}
      </div>
    </main>
  );
};

export default Home;
