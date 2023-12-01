const {createApp} = Vue;

createApp({
    data() {
        return {
            tasks: [
                {
                    id: 1,
                    text: 'Mission 1',
                    done: false
                },
                {
                    id: 2,
                    text: 'Mission 2',
                    done: true
                },
                {
                    id: 3,
                    text: 'Mission 3',
                    done: false
                }
            ],
            newIds: 3,
            newText: ''
        }
    },
    methods: {
        tasksRemove(index){
            this.tasks.splice(index,1)
        },
        addNewTask(){
            this.newIds++;
            const newTask = {
                id: this.newIds,
                text: this.newText,
                done: false
            }
            this.tasks.push(newTask);
            this.newText = '';
        },
        revertDone(index){
            this.tasks[index].done = !this.tasks[index].done
        },
    },
}).mount('#app');