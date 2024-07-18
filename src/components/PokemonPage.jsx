import styles from '../module.css/card.module.css';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { typeColor } from '../constraints/constraints';
import PageLayout from '../layout/PageLayout';
function PokemonPage() {
  const { id } = useParams();
  const [pageState, setPageState] = useState(null);
  const [types, setTypes] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const url = 'https://pokeapi.co/api/v2/pokemon/' + id;
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        const hp = data.stats[0].base_stat;
        const imgSrc = data.sprites.other.dream_world.front_default;
        const pokname = data.name[0].toUpperCase() + data.name.slice(1);
        const statAttack = data.stats[1].base_stat;
        const statDefence = data.stats[2].base_stat;
        const statSpeed = data.stats[5].base_stat;
        const themeColor = typeColor[data.types[0].type.name];
        const types = data.types;
        setPageState({
          hp,
          imgSrc,
          pokname,
          statAttack,
          statDefence,
          statSpeed,
          themeColor,
        });
        setTypes(types);
      }
    };
    fetchData();
  }, [id]);
  return (
    pageState && (
      <PageLayout>
        <div className={styles.container}>
          <div
            id={styles.card}
            className=""
            style={{
              background: `radial-gradient( circle at 50% 0%, ${pageState.themeColor} 36%, #ffffff 36%)`,
            }}
          >
            <p className={styles.hp}>
              <span>HP {pageState.hp}</span>
            </p>
            <img src={pageState.imgSrc} alt="Pockemon Image" />
            <h2 className={styles['poke-name']}>{pageState.pokname}</h2>
            <div className={styles.types}>
              {types &&
                types.map((type, index) => (
                  <span
                    key={index}
                    style={{ backgroundColor: `${pageState.themeColor}` }}
                  >
                    {type.type.name}
                  </span>
                ))}
            </div>
            <div className={styles.stats}>
              <div className="">
                <h3>{pageState.statAttack}</h3>
                <p>Attack</p>
              </div>

              <div className="">
                <h3>{pageState.statDefence}</h3>
                <p>Defense</p>
              </div>

              <div className="">
                <h3>{pageState.statSpeed}</h3>
                <p>Speed</p>
              </div>
            </div>
          </div>
        </div>
      </PageLayout>
    )
  );
  // return <div>Id</div>;
}

export default PokemonPage;
