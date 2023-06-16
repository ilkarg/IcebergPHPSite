<?php

include __DIR__ . '/../models/Comment.php';

class CommentController {
	public static function addComment() {
        global $router;
        $data = $router->getPostRouteData();
        if ($data != null) {
            $comment_model = new Comment(
                $data["name"],
                $data["message"]
            );
            $comment = QueryController::addCommentQuery(
                $comment_model->name,
                $comment_model->message
            );
            echo $comment;
        } else {
            echo json_encode(["response" => "Данные не дошли или неверные имена полей"]);
        }
    }

    public static function getComments() {
        $comments = QueryController::getCommentsQuery();
        echo $comments;
    }
}