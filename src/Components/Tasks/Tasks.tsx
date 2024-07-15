import { FormEvent, useContext, useEffect, useState } from 'react'
import styles from './styles.module.scss'
import { TasksContext } from '../../Context/TasksContext';



export const Tasks: React.FC = () => {
    const [TaskTitle, SetTaskTitle] = useState("")
    

    const { tasks, setTasks } = useContext(TasksContext)
    

    //função disparada quando o usuario deseja adicionar uma nova tarefa.
    function handleSubmitAddTask(event: FormEvent) {
        event.preventDefault();

        if (TaskTitle.length >= 3){
            //adicionar a tarefa
            const NewTasks = [
                ...tasks, //pegue todas as tarefas que já existiam e coloque nesse novo valor do estado de tarefas
                { id: new Date().getTime(), title: TaskTitle, done: false }
            ]
            setTasks(NewTasks)
            localStorage.setItem('tasks', JSON.stringify(NewTasks))
            SetTaskTitle('')

        } else{
            alert('A tarefa necessita de no mínimo 3 caracteres.')
            return
        }
    }

    function handleToggleTaskDone(taskId: number) {
        const updatedTasks = tasks.map(task => {
            if (task.id === taskId) {
                return { ...task, done: !task.done }
            }
            return task

        })  
        setTasks(updatedTasks)
        localStorage.setItem('tasks', JSON.stringify(updatedTasks))
    }




    return(
        <section className={styles.container}>
            <form onSubmit={handleSubmitAddTask}>
                <div>
                   <label htmlFor="task-title">Adicionar Tarefa</label>
                    <input value={TaskTitle} 
                    
                    onChange={(event) => {
                        SetTaskTitle(event.target.value)
                    }}

                    type="text" 
                    id="task-title" 
                    placeholder='Título da tarefa'/> 
                </div>
                <button type='submit'>Adicionar</button>
            </form>

            <ul>
                {tasks.map(task => {
                    return (
                    <li key={task.id}>
                        <input
                        type="checkbox" id={`task-${task.id}`}
                        onChange={() => handleToggleTaskDone(task.id)}
                        checked={task.done}
                        
                        />
                        <label className={task.done === true ? styles.done : ''} htmlFor="task">{task.title}</label>
                    </li>  
                    )
                })}

            </ul>

        </section>
    )
}