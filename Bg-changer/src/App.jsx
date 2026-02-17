import { useState } from 'react';

function App() {
  const [color, setColor] = useState('grey');
  const colors = ['red', 'blue', 'yellow', 'orange', 'green', 'white'];

  const handleClick = (item) => {
    return setColor(item);
  };

  return (
    <div style={{ backgroundColor: color }} className="h-screen text-xl w-full">
      <h1 className='text-2xl bg-slate-300'>BackGround Changer</h1>
      <div className="flex items-center justify-center">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-2 py-2 rounded-xl">
          <ol>
            {colors.map((item) => {
              return (
                <li key={item}>
                  <button
                    onClick={() => handleClick(item)}
                    className={`border-2 px-4 py-2 ${
                      item === color
                        ? 'border-slate-950 text-slate-900'
                        : 'border-transparent'
                    }`}>
                    {item}
                  </button>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default App;
