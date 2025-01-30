import {  useEffect,useCallback, useState } from 'react';

function App() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [character, setCharacter] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGen = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (number) str += "0123456789";
    if (character) str += "!()*+,-./:;<=>?@[\]^_{|}~";
    
    for (let i = 1; i <= length; i++) {
      let ch = Math.floor(Math.random() * str.length);
      pass += str.charAt(ch);
    }
    setPassword(pass);
  }, [number, character, length]);

  useEffect(()=>{
    passwordGen()
  },[length, number, character, passwordGen]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <h1 className="text-2xl font-bold mb-4">Password Generator</h1>
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex items-center space-x-2 mb-4">
          <input 
            type="text" 
            value={password} 
            readOnly 
            className="w-full px-3 py-2 rounded bg-gray-700 text-white border border-gray-600" 
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm">Password Length: {length}</label>
          <input 
            type="range" 
            min={6} 
            max={50} 
            value={length} 
            onChange={(e) => setLength(Number(e.target.value))} 
            className="w-full cursor-pointer"
          />
        </div>
        <div className="flex items-center space-x-4">
          <label className="flex items-center">
            <input 
              type="checkbox" 
              checked={number} 
              onChange={() => setNumber(!number)} 
              className="mr-2" 
            />
            Include Numbers
          </label>
          <label className="flex items-center">
            <input 
              type="checkbox" 
              checked={character} 
              onChange={() => setCharacter(!character)} 
              className="mr-2" 
            />
            Include Symbols
          </label>
        </div>
      </div>
    </div>
  );
}

export default App;
