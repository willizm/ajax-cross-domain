<?php
$callback = $_GET['callback'];
include '../inc/data.inc.php';
echo $callback . '(' . $data . ')';