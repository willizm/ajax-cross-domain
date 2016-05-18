<?php
/**
 * Created by IntelliJ IDEA.
 * User: w2ex
 * Date: 5/18/16
 * Time: 1:30 PM
 */
$file = '../data/test.json';
$fp = fopen($file, 'r');
$data = fread($fp, filesize($file));
