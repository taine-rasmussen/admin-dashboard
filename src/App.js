import react from 'react';

const App = () => {

  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const handleDate = () => {

    console.log(data)

  };

  return (
    <div className="App">
      <button
        onClick={handleDate}
      >????</button>
    </div>
  );
}

export default App;
