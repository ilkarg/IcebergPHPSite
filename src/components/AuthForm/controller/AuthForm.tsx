import React from 'react';

export const AuthFormController = () => {
    const [authMessage, setAuthMessage] = React.useState("");

    const sendLoginRequest = (login: string, password: string) => {
        if (login === "admin" && password === "admin") {
            setAuthMessage("Вы успешно вошли!");
        } else {
            setAuthMessage("Неверные логин или пароль");
        }
    }

    const handleAlertClose = () => {
        setAuthMessage("");
    }

    return { sendLoginRequest, handleAlertClose, authMessage }
}
