import React from "react";
import "./styles/Contacts.sass";
import { Stack, Card, CardContent, Typography, Link, TextField, Button } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import FeedbackIcon from '@mui/icons-material/Feedback';

export const Contacts = () => {
    const [feedbackData, setFeedbackData] = React.useState({
        name: "",
        email: "",
        theme: "",
        message: ""
    });

    React.useEffect(() => {
        document.title = 'Контакты - IcebergPHP';
    }, []);

    return (
        <Stack
            justifyContent="center"
            alignItems="center"
        >
            <Card sx={{ boxShadow: "0 0 10px rgba(0,0,0,0.5)", width: 500 }}>
                <CardContent>
                    <Stack
                        alignItems="center"
                        justifyContent="center"
                        direction="column"
                    >
                        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                            <Stack
                                alignItems="center"
                                justifyContent="center"
                                direction="row"
                            >
                                <EmailIcon />
                                Email
                                <EmailIcon />
                            </Stack>
                        </Typography>
                        <Typography variant="h6" sx={{ mt: 1 }}>
                            <Link
                                underline="hover"
                                href="mailto:ilya.kargapolov02@mail.ru"
                            >ilya.kargapolov02@mail.ru</Link>
                        </Typography>
                        <Typography variant="h6">
                            <Link
                                underline="hover"
                                href="mailto:zkhrebtovilya@gmail.com"
                            >zkhrebtovilya@gmail.com</Link>
                        </Typography>
                        <Typography variant="h6">
                            <Link
                                underline="hover"
                                href="mailto:iceberg.web.official@gmail.com">
                                iceberg.web.official@gmail.com
                            </Link>
                        </Typography>
                    </Stack>
                </CardContent>
            </Card>
            <Card sx={{ mt: 1.5, boxShadow: "0 0 10px rgba(0,0,0,0.5)", width: 500 }}>
                <CardContent>
                    <Stack
                        alignItems="center"
                        justifyContent="center"
                        direction="column"
                    >
                        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                            <Stack
                                alignItems="center"
                                justifyContent="center"
                                direction="row"
                            >
                                <GitHubIcon />
                                GitHub
                                <GitHubIcon />
                            </Stack>
                        </Typography>
                        <Typography variant="h6" sx={{ mt: 1 }}>
                            <Link
                                underline="hover"
                                href="https://github.com/mrProger"
                            >GitHub разработчика</Link>
                        </Typography>
                        <Typography variant="h6">
                            <Link
                                underline="hover"
                                href="https://github.com/mrProger/IcebergPHP"
                            >GitHub фреймворка</Link>
                        </Typography>
                    </Stack>
                </CardContent>
            </Card>
            <Card sx={{ mt: 1.5, boxShadow: "0 0 10px rgba(0,0,0,0.5)", width: 500 }}>
                <CardContent>
                    <Stack
                        alignItems="center"
                        justifyContent="center"
                        direction="column"
                    >
                        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                            <Stack
                                alignItems="center"
                                justifyContent="center"
                                direction="row"
                            >
                                <FeedbackIcon />
                                Обратная связь
                                <FeedbackIcon />
                            </Stack>
                        </Typography>
                        <TextField
                            label="Имя"
                            sx={{ mt: 1, width: 450 }}
                            value={feedbackData.name}
                            onChange={(event: any) => setFeedbackData({...feedbackData, name: event.target.value})}
                        />
                        <TextField
                            label="Email"
                            sx={{ mt: 1, width: 450 }}
                            value={feedbackData.email}
                            onChange={(event: any) => setFeedbackData({...feedbackData, email: event.target.value})}
                        />
                        <TextField
                            label="Тема"
                            sx={{ mt: 1, width: 450 }}
                            value={feedbackData.theme}
                            onChange={(event: any) => setFeedbackData({...feedbackData, theme: event.target.value})}
                        />
                        <TextField
                            label="Сообщение"
                            multiline
                            rows="5"
                            sx={{ mt: 1, width: 450 }}
                            value={feedbackData.message}
                            onChange={(event: any) => setFeedbackData({...feedbackData, message: event.target.value})}
                        />
                        <Button
                            sx={{ mt: 1.5, mb: -0.8 }}
                            variant="contained"
                            onClick={() => fetch("http://127.0.0.1/api/v1/addFeedback", {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify({
                                    name: feedbackData.name,
                                    email: feedbackData.email,
                                    theme: feedbackData.theme,
                                    message: feedbackData.message
                                })
                            }).then((response) => {
                                return response.json().then((resp) => {
                                    alert(resp.response);
                                    if (resp.response === "Обращение успешно отправлено") {
                                        window.location.reload();
                                    }
                                });
                            })}
                        >Отправить</Button>
                    </Stack>
                </CardContent>
            </Card>
        </Stack>
    );
}