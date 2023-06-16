<?php

$router->get("api/v1/getComments", "CommentController::getComments");
$router->post("api/v1/addComment", "CommentController::addComment");