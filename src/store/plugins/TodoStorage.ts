import Task from '../../models/Task';

const STORAGE_KEY = 'todos-vuejs-2.0'

export default class TaskStorage {
    fetch(): Task[] {
        const todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')

        todos.forEach((todo: Task, index: number) => {
          todo._id = index
        })

        return todos
    }

    save(todos: Task[]) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
    }
}
