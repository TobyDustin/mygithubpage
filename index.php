<?php
$imgageArray = ['img1','img2'];
$random1 = rand(0,length($imgageArray)-1);

?>

<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Tobias Dustin</title>
    <link rel="stylesheet" type="text/css" href="css/style.css">
</head>
<body   onresize="checkSize()" style="background: url('img/<?php echo $imgageArray[$random1] ?>.jpg') no-repeat fixed right;">
<div id="wrap"></div>
    <div id="quote">
        <h1>Im not funny</h1>
    </div>
</div>
<script>
    q = document.getElementById("quote");
    function checkSize()
    {
        if (window.innerWidth < 1000) {
            q.style.backgroundColor = "#fff";
        }
    }
</script>
</body>
</html>
