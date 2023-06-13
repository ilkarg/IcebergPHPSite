<?php

use PHPExceptionHandler\ExceptionHandler;
use PHPSystem\System;
use PHPHash\Hash;

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
        return json_encode(["response" => "Обращение успешно отправлено"]);
    }

    public static function getFeedbacksQuery() {
        global $orm;
        $orm->connect();
        $feedbacks = R::findAll("feedbacks");
        if ($feedbacks == null) {
            return json_encode(["response" => "Обращения не найдены"]);
        }
        return json_encode($feedbacks);
    }

    public static function loginQuery(string $login, string $password) {
        session_start();
        if (isset($_SESSION["user"])) {
            return json_encode(["response" => "Вы уже находитесь в аккаунте"]);
        }
        global $orm;
        $orm->connect();
        $user = R::find("users", "login = ? AND password = ?", [$login, Hash::sha256($password, "", 1)]);
        $user = $user[array_key_first($user)];
        if ($user == null) {
            return json_encode(["response" => "Неверные логин или пароль"]);
        }
        $_SESSION["user"] = $user;
        return json_encode(["response" => "Вы успешно вошли в аккаунт"]);
    }
}