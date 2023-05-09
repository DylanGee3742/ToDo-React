//Pass in props by setting value in the component tag
//Use the value by add props to the components parameters
import { useState } from "react"
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([
    {
       id: 1,
       text: "Doctors Appointment",
       day: "Feb 5th at 2:30pm",
       reminder: true
    },
    {
       id: 2,
       text: "Meeting at School",
       day: "Feb 6th at 1:30pm",
       reminder: true
    },
    {
       id: 3,
       text: "Food Shopping",
       day: "Feb 5th at 2:30pm",
       reminder: false
    }
   ])

   //Add Task
   const addTask = (task) => {
    //Random ID
    const id = Math.floor(Math.random() * 10000) + 1;
    //Variable containing ID + task values 
    const newTask = {id, ...task}
    //Set tasks to previous array + new Task
    setTasks([...tasks, newTask])
   }

   //Delete Task
   const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
   }

   //Toggle Reminder
   const toggleReminder = (id) => {
    //If task id is equal to id clicked then change then keep the rest of the task the same but flip the reminder value
    setTasks(tasks.map((task) => task.id === id 
    ? { ...task, reminder: !task.reminder} : task))
   }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'No Tasks To Show' }

    </div>
  );
}

export default App;