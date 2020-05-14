<?php
$fieldArr=array("price","count","id");

if (!$_POST) {
    exit("Sorry, no data");
} else {
    $postArrIn=$_POST['cartData'];
    foreach ($fieldArr as $key=>$value) {
        if (isset($postArrIn[$value])) {
            $postArr[$value]=$postArrIn[$value];
        }
        else {
            exit("some data is lost!");
        }
    }

    $postArr['price']=(int) $postArr['price'];
    $postArr['count']=(int) $postArr['count'];
    if ($postArr['price']>0 && $postArr['count']>0) {
        $postArr['totalprice']=$postArr['price']*$postArr['count'];
    }
    else {
        exit("Wrong data!");
    }
    $data= [
        'totalprice'=>$postArr['totalprice'],
        'count'=>$postArr['count'],
        'price'=>$postArr['price'],
        'id'=>$postArr['id']
    ];
    $response=json_encode($data);

  //  var_dump($data);
    echo $response;
    exit;
}