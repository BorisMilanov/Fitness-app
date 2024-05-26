import { useState } from 'react'
import './App.css'
import { DndContext, closestCorners } from "@dnd-kit/core"
import { Column } from './assets/compunents/Column'
function App() {
  const [tasks, setTasks] = useState([
    {id: 1, title: "add tasks"}, 
    {id: 2, title: "add tasks"}, 
    {id: 3, title: "add tasks to 2"},
    ])
  return (
    <div className='Main task'>
    

      <div><p>Hi</p></div>
      <DndContext collisionDetection={closestCorners}><Column tasks={tasks}/></DndContext>
    </div>
  )
}

export default App
