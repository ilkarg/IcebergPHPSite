<?php

use PHPExceptionHandler\ExceptionHandler;

class QueryController {
	public static function addFeedbackQuery(string $name, string $email, string $theme, string $message) {
        global $orm;
        $orm->connect();
        $feedback = R::dispense("feedbacks");
        $feedback->name = $name;
        $feedback->email = $email;
        $feedback->theme = $theme;
        $feedback->message = $message;
        R::store($feedback);
        return json_encode(array("response" => "Обращение успешно отправлено"));
    }
}