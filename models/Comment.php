<?php

class Comment extends Model {
	public string $name;
    public string $message;

    public function __construct(string $name, string $message) {
        $this->name = $name;
        $this->message = $message;
    }

    public function getName() : string {
        return $this->name;
    }

    public function getMessage() : string {
        return $this->message;
    }
}