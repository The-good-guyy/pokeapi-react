import { useEffect, useState } from 'react';
import sunIcon from '../../public/sun-192.svg';
function DarkModeButton() {
  const [theme, setTheme] = useState('light');
  let handleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);
  return (
    <div className="sticky bottom-14">
      <button onClick={handleTheme}>
        {theme === 'dark' ? (
          <img
            src={sunIcon}
            className="size-24 absolute right-8 bottom-8 hover:opacity-50"
          ></img>
        ) : (
          <img
            src="../../public/moon-100.png"
            alt=""
            className="size-24 absolute right-8 bottom-8 hover:opacity-50"
          />
        )}
      </button>
    </div>
  );
}

export default DarkModeButton;
