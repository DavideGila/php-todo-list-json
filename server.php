<?php
$filecontent = file_get_contents("todo-list.json");

// var_dump($filecontent);

$list = json_decode($filecontent, true);

?>