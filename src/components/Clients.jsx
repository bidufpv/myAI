import React from 'react'
import { clients } from '../constants';

function Clients({className}) {
  return (
    <div className={className}>
      <h5 className='tagline mb-6 text-center text-n-1/50'>
      Empowering creators to craft stunning content effortlessly.
      </h5>
      <ul className="flex">
        {clients.map((logo, index) => (
          <li
            className="flex items-center justify-center flex-1 h-[8.5rem]"
            key={index}
          >
            <img src={logo} width={134} height={28} alt={logo} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Clients
