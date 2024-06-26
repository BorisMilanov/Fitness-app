import React from "react";
import { useState } from "react";
import { Input } from "../assets/components/Input/Input";
import { Column } from "../assets/components/Column";
import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  closestCorners,
} from "@dnd-kit/core";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import "./Exercise"
export default function Exercise() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Add tests to homepage" },
    { id: 2, title: "Fix styling in about section" },
    { id: 3, title: "Learn how to center a div" },
  ]);

  const addTask = (title) => {
    setTasks((tasks) => [...tasks, { id: tasks.length + 1, title }]);
  };

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const getTaskPos = (id) => tasks.findIndex((task) => task.id === id);

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id === over.id) return;

    setTasks((tasks) => {
      const originalPos = getTaskPos(active.id);
      const newPos = getTaskPos(over.id);

      return arrayMove(tasks, originalPos, newPos);
    });
  };
  const [series, setSeries] = useState(['div'])
  function addNewSeries() {
    const currentSeries  = [...series]
    currentSeries.push('NewSeriesAdd')
    setSeries(currentSeries)
  }  function removeNewSeries() {
    const currentSeries  = [...series]
    currentSeries.pop('NewSeries')
    setSeries(currentSeries)
  }

  return (
   
      <div>
      <button onClick={() => addNewSeries()}>Add new series</button>

      {series?.map((currentSeries, index)=>{return <div key={currentSeries} id={`expese-${index}`}>  <Input onSubmit={addTask} />
      <DndContext
        sensors={sensors}
        collisionDetection={closestCorners}
        onDragEnd={handleDragEnd}
      >
        <Column id="toDo" tasks={tasks} />
      </DndContext>
    
      <button onClick={() => removeNewSeries()}>Remove new series</button>
    </div>})}
    </div>);
  
  }
