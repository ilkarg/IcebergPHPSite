<?php

use PHPExceptionHandler\ExceptionHandler;
use PHPSystem\System;
use PHPHash\Hash;

class QueryController {
	public static function addCommentQuery(string $name, string $message) {
        global $orm;
        $orm->connect();
        $comment = R::dispense("comments");
        $comment->name = $name;
        $comment->message = $message;
        R::store($comment);
        return json_encode(["response" => "Комментарий успешно отправлен"]);
    }

    public static function getCommentsQuery() {
        global $orm;
        $orm->connect();
        $comments = R::findAll("comments");
        if ($comments == null) {
            return json_encode(["response" => "Обращения не найдены"]);
        }
        return json_encode($comments);
    }
}