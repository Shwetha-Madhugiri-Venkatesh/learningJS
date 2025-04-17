<?php
    $myObj -> name="John";
    $myObj -> age = 30;
    $myObj -> city = "New York";
    $myObj -> marks=100;

    $myJson = json_encode($myObj);
    echo $myJson;
?>