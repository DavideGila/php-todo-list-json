<?php
$filecontent = file_get_contents("todo-list.json");

// var_dump($filecontent);

$list = json_decode($filecontent, true);

if(isset($_POST["task"])){
    $new_task = [
        "text" => $_POST["task"],
        "done" => false,
    ];
    array_push($list, $new_task);
    file_put_contents("todo-list.json", json_encode($list));
}

header('Content-Type: application/json');

echo json_encode($list);
?>