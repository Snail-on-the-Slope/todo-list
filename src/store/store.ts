import Vuex from 'vuex';
import Vue from 'vue';
import Task from '../models/Task';
import StoragePlugin from './plugins/StoragePlugin'
import _ from 'lodash';

Vue.use(Vuex);

export const store = new Vuex.Store({
    plugins: [StoragePlugin()],
    state: {
        tasks: [
            {_id: 1, name: 'drink some beer', created_at: new Date(), updated_at: new Date(), completed: false},
        ] as Task[],
        deletedTasks: []  as Task[]
    },
    mutations: {
        setTask: (state, task) => state.tasks.push(task),
        deleteTask(state, task) {
            var taskIndex = _.findIndex(state.tasks, task);
            state.deletedTasks.push(state.tasks[taskIndex]);
            state.tasks.splice(taskIndex, ++taskIndex);
        },
        completeTask(state, task) { 
            var taskIndex = _.findIndex(state.tasks, task);
            state.tasks[taskIndex].completed = !state.tasks[taskIndex].completed;
        },
        emptyTrash:(state) => state.deletedTasks = [] as Task[],
        undo(state, task){
            var taskIndex = _.findIndex(state.deletedTasks, task);
            state.tasks.push(state.deletedTasks[taskIndex]);
            state.deletedTasks.splice(taskIndex, ++taskIndex);
        },
        replace(state, todos: Task[]) {
            state.tasks = todos
        },
    }
});

export default store;


