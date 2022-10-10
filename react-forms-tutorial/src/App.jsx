import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import FormInput from './components/FormInput';

const App = () => {
  const [username, setUsername] = useState('')
  console.log
  return <div className= 'app'>
    <form>
     <FormInput placeholder='Username'/>
     <FormInput placeholder='Email'/>
     <FormInput placeholder='Full Name'/>
     <FormInput placeholder='Relationship Status'/>


    </form>


  </div>
}

export default App
