<?php
$postArr=array("price","count","id");

if (!$_POST) {
    exit("Sorry, no data");
} else {
    $postArrIn=$_POST['cartData'];
    $price=(int) $postArrIn['price'];
    $count=(int) $postArrIn['count'];
    $id=$postArrIn['id'];
    //var_dump($postArrIn['id']);
    if ($price>0 || is_int($count)) {
        $totalprice=$price*$count;
    }
    else exit("Wrong data!");
    $data= [
        'totalprice'=>$totalprice,
        'count'=>$count,
        'price'=>$price,
        'id'=>$id
    ];
    $response=json_encode($data);
    //foreach($_POST as $key=>$value) {
    //    if (isset($postArr[$key])) {
    //        $data[$postArr[$key]]=$value;
    //    }
    //}
  //  var_dump($data);
    echo $response;
    exit;
}