import * as React from 'react'
import './App.css'

export default function App() {
  function printString(a){
   console.log(a); 
  
}
  async function printMyAsync(){
   printString("one")
   printString("two")
  await printString("three")
}
  return (
    <main>
      <button onClick={printMyAsync}>no</button>
      React⚛️ + Vite⚡ + Replit
    </main>
  )
}