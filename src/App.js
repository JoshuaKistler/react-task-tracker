import { useState } from 'react'

import Header from "./components/Header";
import Tasks from './components/Tasks'
  const App = () => {
    const [tasks, setTasks] = useState([
        {
          id: 1,
          text: 'Das ist ein Test',
          day: 'Feb 5 at 1989',
          reminder: true
        },
        {
          id: 2,
          text: 'Das ist ein Test',
          day: 'Feb 5 at 1989',
          reminder: true
        }
    ])

    //Delete Task
    const deleteTask= (id) => {
      setTasks(tasks.filter((task) => task.id !==
      id))
    }
    // Toggle Reminder
    const toggleReminder = (id) => {
      setTasks(tasks.map((task) => task.id === id 
    ? {...task, reminder:
       !task.reminder } : task
      )
    )
  }
  return (
    <div className="container">
      <Header title={'Task Tracker'} />
      {tasks.length > 0 ? (
      <Tasks tasks={tasks} onDelete=
      {deleteTask} onToggle={toggleReminder}/> 
      ) : (
        'No Tasks to Show'
      )}
    </div>
  )
}

export default App;
