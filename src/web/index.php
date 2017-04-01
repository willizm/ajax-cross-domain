<?php
    $params = $_GET;
    $page = '';
    if (isset($params['page'])) {
        $page_param = $params['page'];
        if (!empty($page_param)) {
            $page = $params['page'] . '.html';
        }
    }

    $title = 'AJAX Cross Domain';
    $pages = array(
        'CORS' => 'cors/test',
        'JSONP' => 'jsonp/test',
        'NativeP' => 'nativep/test',
        'Proxy' => 'proxy/test',
        'iFrame' => 'iframe/test'
    );
?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="initial-scale=1.0, width=device-width, height=device-height">
    <title><?php echo $title ?></title>
    <!-- style -->
    <link rel="stylesheet" href="assets/css/base.css">
    <link rel="stylesheet" href="assets/css/main.css">
    <link rel="stylesheet" href="assets/css/monitor.css">
    <!-- scripts -->
    <script src="assets/js/libs/underscore-min.js"></script>
    <script src="assets/js/libs/dom.js"></script>
    <script src="assets/js/libs/http.js"></script>
    <script src="assets/js/libs/jsonp.js"></script>
</head>
<body>
    <div id="wrapper">
        <header>
            <h1><?php echo $page ? $page : $title ?></h1>
        </header>
        <div id="nav">
            <?php if (empty($page)) {
                echo '<ul class="nav-pages">';
                    foreach ($pages as $title => $path) {
                        echo "<li><a href=\"?page=$path\">$title</a></li>";
                    }
                echo '</ul>';
            }?>
        </div>
        <div id="page">
            <?php if (!empty($page)) {
                include $page;
            } else {?>
                <script>
                    http.get('http://b.com/data/test.json', null, function (res) {
                        monitor.log(res);
                    })
                </script>
            <?php }?>
        </div>
    </div>
    <?php if (!empty($page)) {?>
    <script src="../assets/js/libs/monitor.js"></script>
    <?php }?>
</body>
</html>