<?php

$router->get("api/v1/getFeedbacks", "FeedbackController::getFeedbacks");
$router->post("api/v1/addFeedback", "FeedbackController::addFeedback");
$router->post("api/v1/login", "AuthController::login");
$router->post("api/v1/isAuth", "AuthController::isAuth");