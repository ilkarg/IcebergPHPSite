<?php

// Подключение системных библиотек
include __DIR__ . '/app/PHPRouter/Router.php';
include __DIR__ . '/app/PHPOrm/SQLite.php';
include __DIR__ . '/app/PHPTemplater/Template.php';
include __DIR__ . '/app/PHPView/View.php';
include __DIR__ . '/app/PHPRequester/Request.php';
include __DIR__ . '/app/PHPModel/Model.php';

// Подключение системных пространств имен
use PHPRouter\Router;
use PHPSystem\System;

System::addCors();

// Создание системных объектов
$router = new Router();
$orm = new SQLite(__DIR__ . "/db/iceberg.db");

// Подключение контроллеров
include __DIR__ . '/controllers/CommentController.php';
include __DIR__ . '/controllers/QueryController.php';

// Подключение файла с маршрутами
include __DIR__ . '/routes/web.php';

$router->exec();
