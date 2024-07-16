import React from 'react';
import { Link } from 'react-router-dom';
import pokeball from '../../public/pokeball.svg';
function VaporWaveCard({ url, name = 'Bulbalsaur', order = '1' }) {
  //   const myElement = document.querySelector('#root .weird_name');
  return (
    <Link to={`/home`}>
      <div className="vaporWaveCard md:w-[400px] w-full mx-5 my-4 transition-all XXsm:max-w-lg sm:w-[440px] min-h-96 shadow-[5px_5px_0px_0px_rgba(240,46,170,0.5)] hover:shadow-[rgba(240,46,170,0.4)_5px_5px,rgba(240,46,170,0.3)_10px_10px,rgba(240,46,170,0.2)_15px_15px,rgba(240,46,170,0.1)_20px_20px,rgba(240,46,170,0.05)_25px_25px]">
        <header className={`before:bg-center ${url}`}>
          <div className="title">
            {' '}
            <span className="en">Pokemon</span>
            <hr />
            <span className="jp">ポケモン</span>
          </div>
        </header>
        <div className="desc mb-4 h-20">
          <span className="h-2/4 flex flex-row">
            <img src={pokeball} alt="" className="max-h-full mr-4" />
            <p>{order}</p>
          </span>
          <span className="line-clamp-2 text-lg font-semibold text-black h-2/4">
            {name}
          </span>
        </div>
      </div>
    </Link>
  );
}

export default VaporWaveCard;
