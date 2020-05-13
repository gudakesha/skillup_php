<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>JS home work #1</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <!-- <link rel="stylesheet" href="main.css"> -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>

</head>
<body>
<div class="container">
    <div class="row">
        <img src="1.jpg" height="300">
    </div>
    <div class="row">
        <div class="form-group">
            <label>Price</label>
            <span id="priceProduct">100</span>
        </div>
    </div>
    <div class="row">
        <div class="form-group">
            <label for="countProduct">enter the number of products</label>
            <input class="form-control" type="text" id="countProduct" name="count" value="1"placeholder="1">
        </div>
    </div>
    <input type="hidden" id="idProduct" name="count" value="123abc">
    <button class="btn btn-primary" type="submit" id="addCart">Add Cart</button>
    <div id="success" style="color:green; font-size:16px;"></div>
</div>
<script src="./main.js"></script>
</body>
</html>

<?php
