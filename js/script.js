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
                // console.log(response);
                this.toDoList = response.data;
            })
        },
        tasksRemove(index){
            this.tasks.splice(index,1)
        },
        addNewTask(){
            if (this.newText === ''){
                return
            }
            const data = new FormData()
            data.append("task", this.newText)
            axios.post(this.apiUrl, data).then((response) =>{
            // console.log(response);
            this.toDoList = response.data;
            })
        },
        // revertDone(index){
        //     this.tasks[index].done = !this.tasks[index].done
        // },
    },
    mounted() {
        this.readList()
    }
}).mount('#app');