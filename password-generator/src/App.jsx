import { useEffect, useState, useCallback, useRef} from 'react'
import copy from './assets/copy.png';
function App() {
  const [length,setLength] = useState('10');
  const [lowercase,setLowercase] = useState(false);
  const [uppercase,setUppercase] = useState(true);
  const [number,setNumber] = useState(false);
  const [symbol,setSymbol] = useState(false);
  const [password,setPassword] = useState();


  const passwordGenerator = useCallback(() => {
    let pass = "";
    let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if(lowercase) upper += "abcdefghijklmnopqrstuvwxyz";
    if(number) upper += "0123456789";
    if (symbol) upper += "!@#$%^&*-_+=[]{}~`";

    for(let i = 1 ; i <= length ; i++){
      let char = Math.floor(Math.random() * upper.length + 1);
      pass += upper.charAt(char);
    }
    setPassword(pass);

  },[length,uppercase,lowercase,number,symbol,setPassword]);

  let passwordRef = useRef(null);

  useEffect(() => {passwordGenerator()},[length,uppercase,lowercase,number,symbol,passwordGenerator]);

  const clipboardcopy = useCallback(() => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange();
    window.navigator.clipboard.writeText(password);
  },[password]);

  return (
    <div className='h-screen w-screen flex items-center justify-center flex-col bg-orange-300 '> 
        <div className='border-solid border-8 border-orange-200 p-4 bg-amber-300 sm:p-8'>
        <h1 className='text-3xl text-orange-900'>Random Password Generator</h1>
      <div>
         <div className='flex py-4'>
         <input type="text" placeholder='  Your Password' readOnly className='rounded-md w-full h-8' value={password} ref={passwordRef}/>
          <img src={copy} title='copy' className='h-6 mx-2 mt-1 cursor-pointer active:translate-y-1' onClick={clipboardcopy} />
         </div>

         <input type="range" min={6} max={100} value={length} className='cursor-pointer' onChange={(e) =>{setLength(e.target.value)}} />
 
        <h3 className=' text-xl'>Length : {length}</h3>
        <div className='flex gap-10 text-xl'>
        <label htmlFor="lowercase" >LowerCase:</label>
        <input type="checkbox" defaultChecked={lowercase} onChange={() => {setLowercase((prev) => !prev)}} />
        </div>
        <div className='flex gap-10 text-xl'>
        <label htmlFor="uppercase" >UpperCase:</label>
        <input type="checkbox" defaultChecked={uppercase} onChange={() => {setUppercase((prev) => !prev)}} />
        </div>
        <div className='flex gap-[4rem] text-xl'>
        <label htmlFor="number">Number:</label>
        <input type="checkbox" defaultChecked={number} onChange={() => {setNumber((prev) => !prev)}}/>
        </div>
        <div className='flex gap-[4.5rem] text-xl'>
        <label htmlFor="symbol">Symbol:</label>
        <input type="checkbox" defaultChecked={symbol} onChange={() => {setSymbol((prev) => !prev)}} />
        </div>
        </div>
        </div>
    </div>
  )
}

export default App;
