<?php
// Get hi-res-cookie value if set
$hi_res_cookie = "";
if (isset($_COOKIE["hi_res"]))
  $hi_res_cookie = $_COOKIE["hi_res"];
	
// If hi res cookie set, echo @2x
$hi_res = "";
if ($hi_res_cookie)
	$hi_res = "@2x";	
?>
<!DOCTYPE HTML>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>Untitled Document</title>
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
<script type="text/javascript" src="js/hi-res-imgs.js"></script>
<script type="text/javascript">
$(document).ready(function() {
	hi_res_init();	
});
</script>
</head>

<body>
<img src="jpg-img<?php echo $hi_res ?>.jpg" class="hi-res">
<br>
<?php 
if (isset($_COOKIE["hi_res"]))
	echo "Cookie has been set, browser will only load hi-res image";
?>
</body>
</html>