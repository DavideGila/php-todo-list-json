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
    },
    mounted() {
        this.readList()
    }
}).mount('#app');