import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import axios from 'axios'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Tasks from './Components/Tasks';
import About from './Components/About';
import NamesPics from './Components/NamesPics';
import { useState , useEffect } from 'react'
function App() {
  const [tasks, setTasks] = useState([])

//Fetching Tasks on page load from json server
useEffect(()=>{
axios.get('http://localhost:5000/tasks').then((response)=>{
  setTasks(response.data)
})
},[])

  //adding task function to be passed as a prop func
  const addTask = async (task) => {
    axios.post('http://localhost:5000/tasks',task).then((response)=>{
      setTasks([...tasks,response.data])
    }).catch((err)=>{
      console.log('err', err)
    })
    
  }

  //delete task function to be passed as a prop func
  const deleteTask = async (id)=>{
    console.log('delete',id)
    await fetch(`http://localhost:5000/tasks/${id}`,{
      method:'DELETE',
    })
    setTasks(tasks.filter((tasks)=>tasks.id!==id))
  }
  //toggle task reminder function to be passed as a prop func
  const toggleTask = (id)=>{
    console.log('Toggled Task',id)
    setTasks(tasks.map((task)=>task.id===id?{...task,reminder:!task.reminder}:task))
  }


  return (
    <Router>
      <div className="App container">
       
        <Routes>
          <Route path="/" exact element={
            <>
              <Header addTask={addTask}/>
              {tasks.length>0?
              <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleTask}/>
              :<h2>No Tasks</h2>}
            </>
          }/>
          <Route path='/about' element={<About/>}/>
          <Route path='/namespics' element={<NamesPics/>}/>
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
