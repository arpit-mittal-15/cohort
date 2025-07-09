import { useEffect, useState } from 'react';

function useDebounce(inputValue){
  const [debounceValue, setDebounceValue] = useState('');

  useEffect(() => {
    const delay = setTimeout(() => {
      setDebounceValue(inputValue);
    }, 500);

    return () => {
      clearTimeout(delay);
    }
  }, [inputValue]);

  return debounceValue;
}

function App() {
  const [inputValue, setInputValue] = useState('');
  const debounceValue = useDebounce(inputValue);

  return (
    <>
      <input type='text' value={inputValue} onChange={e => setInputValue(e.target.value)} />
      {debounceValue}
    </>
  )
}

export default App;
