import React, { useContext } from "react"
import styles from './styles.module.scss'
import { StatsCard } from "../StatsCard/StatsCard"
import { TasksContext } from "../../Context/TasksContext"

//styles.header

export const Header: React.FC = () => {
    const { tasks } = useContext(TasksContext)
    console.log(tasks)
    const totalTasks = tasks.length
    const totalPending = tasks.reduce((total, task) => {
        if (task.done === false) {
            return total = total + 1
        } else{
            return total
        }
    }, 0)
    const totalDone = tasks.reduce((totalfeitas, task) => {
        if (task.done === true){
            return totalfeitas + 1
        } else{
            return totalfeitas
        }
    }, 0)

    return (
    <header className={styles.header}>
        <div className={styles.container}>
            <div>
            <h1>MyTodo</h1>
            <span>Bem-vindo, Joca!</span>

            </div>

        <div >
            <StatsCard title='Total de tarefas' value={totalTasks} />    
            <StatsCard title='Tarefas pendentes' value={totalPending} />
            <StatsCard title='Tarefas concluídas' value={totalDone} />
        </div> 
        </div>

    </header>


    )
}