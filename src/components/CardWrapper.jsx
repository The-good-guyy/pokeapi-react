import { useEffect, useState } from 'react';
import VaporWaveCard from './VaporWaveCard';

function CardWrapper({ url }) {
  const [info, setInfo] = useState(null);
  useEffect(() => {
    const fetchData = async (url) => {
      const response = await fetch(url);
      const data = await response.json();
      extractData(data);
    };
    fetchData(url);
  }, []);
  const extractData = (data) => {
    const name = data.name;
    const order = data.order;
    const images = {
      dreamWorld: data.sprites.other.dream_world.front_default,
      default: data.sprites.other.home.front_default,
      shiny: data.sprites.other.home.front_shiny,
    };
    // console.log(urlImg);
    setInfo({ name, order, url: images });
  };
  return (
    <>
      {info && (
        <VaporWaveCard name={info.name} order={info.order} url={info.url} />
      )}
    </>
  );
}

export default CardWrapper;
