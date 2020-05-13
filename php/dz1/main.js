$(document).ready(() =>{
    let productCount=$('#countProduct'),
        price=$('#priceProduct'),
        id=$('#idProduct'),
        addCart=$('#addCart');

    $(addCart).click(function() {
        console.log(id.val());
       let data={
           cartData:{
               price: price.text(),
               count: productCount.val(),
               id: id.val()
           }
       }
       $.ajax({
           url: 'check.php',
           method: 'post',
           data: data,
           success: (rdata)=> {
                var responseData=JSON.parse(rdata);
               $("#success").append("заказ добавлен<br/>Общая стоимость:" + responseData['totalprice'] + "<br/>")
           }
       });
    });
});