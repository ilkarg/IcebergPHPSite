<?php

include __DIR__ . '/../models/Feedback.php';

class FeedbackController {
	public static function addFeedback() {
        global $router;
        $data = $router->getPostRouteData();
        if ($data != null) {
            $feedback_model = new Feedback(
                $data["name"],
                $data["email"],
                $data["theme"],
                $data["message"]
            );
            $feedback = QueryController::addFeedbackQuery(
                $feedback_model->name,
                $feedback_model->email,
                $feedback_model->theme,
                $feedback_model->message
            );
            echo $feedback;
        } else {
            echo json_encode(array("response" => "Данные не дошли или неверные имена полей"));
        }
    }
}