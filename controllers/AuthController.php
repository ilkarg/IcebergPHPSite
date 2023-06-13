<?php

class AuthController {
    public static function login() {
        global $router;
        $data = $router->getPostRouteData();
        if ($data == null) {
            $user_model = User($data["login"], $data["password"]);
            $user = QueryController::loginQuery(
                $user_model->login,
                $user_model->password
            );
            echo $user;
        } else {
            echo json_encode(["response" => "Данные не дошли или неверные имена полей"]);
        }
    }

    public static function logout() {
        session_start();
        unset($_SESSION["user"]);
        echo json_encode(["response" => "OK"]);
    }

    public static function isAuth() {
        session_start();
        echo json_encode(["response" => isset($_SESSION["user"])]);
    }
}