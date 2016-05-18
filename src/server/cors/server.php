<?php
/**
 * Created by IntelliJ IDEA.
 * User: w2ex
 * Date: 5/18/16
 * Time: 10:21 AM
 */
function add_cors_header() {
    $white_list = array(
        'a.com'
    );
    $origin = $_SERVER['HTTP_ORIGIN'];
    foreach ($white_list as $domain) {
        $domainReg = preg_replace('/\./', '\.', $domain);
        if (preg_match('/(.*\.)?' . $domainReg . '$/', $origin)) {
            header("Access-Control-Allow-Origin: $origin"); // HTTP/1.1
            break;
        }
    }
}

include '../inc/data.inc.php';

add_cors_header();
echo $data;