import Button from "./Button"
import PropTypes from "prop-types"
import AddTask from "./AddTask"
import { useState } from "react"


const Header = ({title, addTask}) => {
   //toggle AddTask component visibility function
    const [showAddTask, setShowAddTask] = useState(false)
    const toggleAddTask = () => {
        setShowAddTask(!showAddTask)
        console.log('toggleAddTask')
    }
    return (
        <div>
            <div className='header animClass'>
                <h1>{title}</h1>
                <Button text='add form' color='rgb(0, 180, 70)' onClicked={toggleAddTask}/>
            </div>
            {showAddTask?<AddTask onAdd={addTask}/>:''}
        </div>
    )
}

export default Header

Header.defaultProps = {
    title:'Task Tracker'
}
Header.propTypes={
    title:PropTypes.string.isRequired
}