//react component for adding a task(id,text,day,reminder) with a form and add it to Tasks component
import { useState } from 'react';
function AddTask({ onAdd }) {
    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text || !day) {
            alert('task or day can`t be empty')
            return;
        }
        onAdd({
            id: Math.floor(Math.random() * 100),
            text,
            day,
            reminder,
        });
        setText('');
        setDay('');
        setReminder(false);
    };
    return (
        <form className='add-form' onSubmit={handleSubmit}>
            <div className='form-control'>
                <label>Task</label>
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </div>

            <div className='form-control'>
                <label>Day</label>
                <input
                    type="text"
                    value={day}
                    onChange={(e) => setDay(e.target.value)}
                />
            </div>
            
            <div className="form-control-check">
                <label>Set reminder</label>
                <input className="task reminder"
                    type="checkbox"
                    checked={reminder}
                    onChange={(e) => setReminder(e.currentTarget.checked)}
                />
            </div>
            <button className='btn btn-add' type="submit">Add</button>
        </form>
    );
}
export default AddTask;