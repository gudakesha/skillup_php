<?php
	//require_once  "class/car.php";

spl_autoload_register(function($class_name) {
	require_once 'class/'.$class_name.'.php';
});

//$acar= new ACar();

//$car= new Car(2,2,2);
//$jeep= new Jeep(2,2,2);
//$car->go();
//echo $car->displayWheel();
//echo $jeep->jump();
//echo $jeep->color;
//echo $car->displayWheel();
//echo $car->displayDoors();

//$man= new Man();
//$man->sayHello();

//echo Man::EYES;

$ferrari=new ferrari("super spoiler");
$ferrari->go();
