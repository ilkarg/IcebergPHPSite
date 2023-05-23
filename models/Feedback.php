<?php

class Feedback extends Model {
	public string $name;
    public string $email;
    public string $theme;
    public string $message;

    public function __construct(string $name, string $email, string $theme, string $message) {
        $this->name = $name;
        $this->email = $email;
        $this->theme = $theme;
        $this->message = $message;
    }

    public function getName() : string {
        return $this->name;
    }

    public function getEmail() : string {
        return $this->email;
    }

    public function getTheme() : string {
        return $this->theme;
    }

    public function getMessage() : string {
        return $this->message;
    }
}