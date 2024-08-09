import React from 'react';
import LightButton from '../../assets/darkmode/lightmode1.png';
import DarkButton from '../../assets/darkmode/darkmode1.png';

const DarkMode = () => {
  const [theme, setTheme] = React.useState(
    localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light'
  );

  const element = document.documentElement; //Access to html element

// adding theme to localStorage and html element
  React.useEffect(() => {
    localStorage.setItem('theme', theme);
    if (theme === 'dark') {
      element.classList.add('dark');
      element.classList.remove('light');
    } else {
      element.classList.add('light');
      element.classList.remove('dark');
    }
  }, [theme, element]);

  return (
    <div className="relative">
      <img
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        src={theme === 'light' ? LightButton : DarkButton}
        alt=""
        className={`w-12 cursor-pointer absolute right-0 z-10 transition-all duration-300 ${
          theme === 'dark' ? 'opacity-100' : 'opacity-0'
        }`}
      />
      <img
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        src={theme === 'dark' ? DarkButton : LightButton}
        alt=""
        className={`w-12 cursor-pointer transition-all duration-300 ${
          theme === 'dark' ? 'opacity-0' : 'opacity-100'
        }`}
      />
    </div>
  );
};

export default DarkMode;
