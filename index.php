<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <script src="https://unpkg.com/axios@1.1.2/dist/axios.min.js"></script>
    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
    <script src="js/script.js" type="module"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="./css/style.css">
    <title>PHP ToDo List JSON</title>
</head>

<body>
    <div id="app">
        <div class="container m-auto m-0">
            <header class="text-center">
                <img src="img/metal_slug_logo_4_a.jpg" alt="Logo" />
                <div class="my-3">
                    <input type="text" class="form-control w-50 d-inline-block mx-3" v-model="newText" @keyup.enter="addNewTask()" />
                    <button class="btn btn-primary align-middle" @click="addNewTask()">Add Task</button>
                </div>
            </header>
            <main>
                <ul class="list-group">
                    <li class="list-group-item list-group-item-action d-flex justify-content-between" v-for="task in toDoList">
                        <span>{{ task.text }}</span>
                        <i class="fa-solid fa-trash" style="cursor: pointer"></i>
                    </li>
                </ul>
            </main>
        </div>
    </div>
</body>

</html>