import React,{useState, useEffect} from 'react'
import mobileBG from './images/pattern-divider-mobile.svg'
import desktopBG from './images/pattern-divider-desktop.svg'
import dice from './images/icon-dice.svg'

function App() {

  const [advice, changeAdvice] = useState('');
  const [id, changeId] = useState(0)
  const [buttonState, changeButtonstate] = useState(0);

  useEffect(()=>{
    change()
  }, [buttonState])
  
  function change(){
    fetch("https://api.adviceslip.com/advice")
    .then(function(response){
      return (response.json())
    })
    .then(function(data){
        changeAdvice(data.slip.advice)
        changeId(data.slip.id)
    })
  }
  const nextQuote=()=>{changeButtonstate(buttonState+1)}

  const buttonStyle = "absolute left-[43%] sm:left-[45%] bg-neonGreen p-4 rounded-full sm:hover:shadow-neonGreen shadow-[0px_0px_35px_0px_neonGreen]"
  return (
    <div className='font-monorope bg-darkBlue h-screen flex items-center justify-center px-4 sm:px-0'>
      <div className='bg-white/10 p-9 max-w-[500px] rounded-xl shadow-[15px_15px_15px_0px_rgba(0,0,0,0.1)] relative'>
        <div className='flex flex-col items-center justify-center'>
          <h1 className='text-[12px] tracking-[.30rem] mb-4 text-neonGreen'>ADVICE #{id}</h1>
          <p className='text-lightCyan text-[23px] mb-7 text-center'>"{advice}"</p>
        </div>

        <div className='flex justify-center'>
        <picture>
          <source media="(min-width:760px )" srcSet={desktopBG} />
          <img src={mobileBG} alt="Divider" className='mb-9 '/>
        </picture>
        </div>

       
        <button onClick={nextQuote} className={buttonStyle}>
          <img src={dice} alt="next" />
        </button>
        

      </div>
    </div>
  );
}

export default App;
