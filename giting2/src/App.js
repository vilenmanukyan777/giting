import { useEffect, useState } from "react"

const App = () => {
  const [isValid, setIsValid] = useState(false);
  const [name, setName] = useState('');

  useEffect(() => {
      name === 'Narek' ? setName('Vilen') : setName('Narek')
  },[isValid])
  

  const changeIsValid = () => setIsValid(!isValid)


  return (
    <section>
         <p> {name} </p>
         <button onClick={changeIsValid}> changeName </button>
    </section>
  )
}

export default App