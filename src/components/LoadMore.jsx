import { useStore } from '../store';

function LoadMore() {
  const next = useStore((state) => state.next);
  const updateData = useStore((state) => state.increasePokedata);
  const updateNext = useStore((state) => state.updateLoadMore);
  const handleClick = async () => {
    const response = await fetch(next);
    if (response.ok) {
      const data = await response.json();
      updateData(data.results);
      data.next ? updateNext(data.next) : updateNext('');
    } else {
      updateNext('');
    }
  };
  return (
    <div className="flex justify-center items-center">
      {next && (
        <button
          className="bg-[#FFD0EC] text-[#81689D] p-5 my-5 text-lg rounded-3xl hover:bg-fuchsia-400 font-semibold shadow-[5px_5px_0px_0px_rgba(240,46,170,0.5)] hover:shadow-[rgba(240,46,170,0.4)_5px_5px,rgba(240,46,170,0.3)_10px_10px,rgba(240,46,170,0.2)_15px_15px,rgba(240,46,170,0.1)_20px_20px,rgba(240,46,170,0.05)_25px_25px]"
          onClick={handleClick}
        >
          Load more
        </button>
      )}
    </div>
  );
}

export default LoadMore;
