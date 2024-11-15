// src/components/NeedsList.js
import { useContext } from 'react';
import { NeedsContext } from '../context/NeedsContext';
import CardNeeds from './CardNeeds';

const NeedsList = () => {
  const { needs } = useContext(NeedsContext);

  return (
    <div className='container'>
      <ul className='container-card'>
        {needs.map((need, index) => (
          <div key={index}>  
           <CardNeeds data={need} />
          </div>
          
        ))}
      </ul>
    </div>
  );
};

export default NeedsList;
