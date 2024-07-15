import React from 'react';
import { Header } from './Components/Header/Header';
import './styles/global.css'
import { Tasks } from './Components/Tasks/Tasks';
import { Refs } from './Components/Concepts/Refs';
import { Memoization } from './Components/Concepts/Memoization';
import { TasksProvider } from './Context/TasksContext';


function App() {
  return (
    
    <TasksProvider>
      <Header/>
      <Tasks /> 
      
    </TasksProvider>

);
}
{/* <Refs/>

<Memoization financialData={{ incomes: [50, 30, 20], outcomes: [20, 10, 1]}}/> */}

export default App;
