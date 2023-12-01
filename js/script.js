const {createApp} = Vue;

createApp({
    data() {
        return {
            apiUrl:'server.php',
            toDoList: [],
            newIds: 3,
            newText: ''
        }
    },
    methods: {
        readList(){
            axios.get(this.apiUrl).then((response) =>{
                console.log(response);
                this.toDoList = response.data;
            })
        },
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
    mounted() {
        this.readList()
    }
}).mount('#app');