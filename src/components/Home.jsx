import VaporWaveCard from './VaporWaveCard';
function Home(props) {
  return (
    <div className="max-w-screen-2xl flex flex-wrap items-start justify-between mx-auto p-4 bg-[#1F2544] text-[#81689D] min-h-screen">
      <VaporWaveCard url="before:bg-[url('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg')]" />
    </div>
  );
}

export default Home;
