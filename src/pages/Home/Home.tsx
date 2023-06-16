import React from "react";
import { Stack, Card, CardContent, Typography, Link, Button, TextField } from "@mui/material";
import "./styles/Home.sass";
import FeedbackIcon from '@mui/icons-material/Feedback';

export const Home = () => {
    const [commentData, setCommentData] = React.useState({
        name: "",
        message: ""
    });

    const [comments, setComments] = React.useState<object[]>([])

    React.useEffect(() => {
        document.title = 'Главная - IcebergPHP';

        fetch("http://127.0.0.1:8001/api/v1/getComments", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }).then((response) => {
            return response.json().then((resp) => {
                let arr: object[] = [];
                Object.keys(resp).map((key: any) => {
                    arr.push(resp[key]);
                });
                setComments(arr);
            });
        });
    }, []);

    return (
        <Stack>
            <Card sx={{ boxShadow: "0 0 10px rgba(0,0,0,0.5)" }}>
                <Stack
                    justifyContent="flex-start"
                    alignItems="flex-start"
                >
                    <CardContent>
                        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                            Что такое IcebergPHP?
                        </Typography>
                        <Typography sx={{ fontSize: 18, mt: 1, mb: -0.5 }}>
                            IcebergPHP - это Backend-фреймворк на языке программирования PHP разработанный в России
                        </Typography>
                    </CardContent>
                </Stack>
            </Card>
            <Card sx={{ mt: 5, boxShadow: "0 0 10px rgba(0,0,0,0.5)" }}>
                <Stack
                    justifyContent="flex-end"
                    alignItems="flex-end"
                >
                    <CardContent>
                        <Stack
                            justifyContent="flex-end"
                            alignItems="flex-end"
                        >
                            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                                Отзывчивый
                            </Typography>
                            <Typography sx={{ fontSize: 18, mt: 1, mb: -0.5 }}>
                                Каждый может предложить идею и поучаствовать в разработке IcebergPHP
                            </Typography>
                        </Stack>
                    </CardContent>
                </Stack>
            </Card>
            <Stack
                justifyContent="center"
                alignItems="center"
                direction="row"
                sx={{ mt: 5 }}
            >
                <Link href="https://github.com/mrProger/IcebergPHP">
                    <Button variant="contained">
                        IcebergPHP на GitHub
                    </Button>
                </Link>
                <Link href="https://github.com/mrProger/IcebergPHP/issues/1">
                    <Button sx={{ ml: 2 }} variant="contained">
                        Предложить идею
                    </Button>
                </Link>
            </Stack>
            <Stack
                justifyContent="center"
                alignItems="center"
                sx={{ mt: 5 }}
            >
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
                                    Комментарий
                                    <FeedbackIcon />
                                </Stack>
                            </Typography>
                            <TextField
                                label="Имя"
                                sx={{ mt: 1, width: 450 }}
                                value={commentData.name}
                                onChange={(event: any) => setCommentData({ ...commentData, name: event.target.value })}
                            />
                            <TextField
                                label="Сообщение"
                                multiline
                                rows="5"
                                sx={{ mt: 1, width: 450 }}
                                value={commentData.message}
                                onChange={(event: any) => setCommentData({ ...commentData, message: event.target.value })}
                            />
                            <Button
                                sx={{ mt: 1.5, mb: -0.8 }}
                                variant="contained"
                                onClick={() => commentData.name.trim() !== "" && commentData.message.trim() !== "" ? fetch("http://127.0.0.1:8001/api/v1/addComment", {
                                    method: "POST",
                                    headers: {
                                        "Content-Type": "application/json"
                                    },
                                    body: JSON.stringify({
                                        name: commentData.name,
                                        message: commentData.message
                                    })
                                }).then((response) => {
                                    return response.json().then((resp) => {
                                        alert(resp.response);
                                        if (resp.response === "Комментарий успешно отправлен") {
                                            let arr = comments;
                                            arr.push({ name: commentData.name, message: commentData.message });
                                            setCommentData({ ...commentData, name: "", message: "" });
                                            setComments(arr);
                                        }
                                    });
                                }) : alert("Обнаружены пустые поля")}
                            >Отправить</Button>
                        </Stack>
                    </CardContent>
                </Card>
            </Stack>
            <Stack
                justifyContent="center"
                alignItems="center"
                sx={{ mt: 5 }}
            >
                <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                    Комментарии
                </Typography>
            </Stack>
            <Stack 
                justifyContent="center"
                alignItems="center"
                sx={{ mt: 2 }}
            >
                {
                    comments && comments.map((comment: any) => (
                        <Card sx={{ mt: 1.5, boxShadow: "0 0 10px rgba(0,0,0,0.5)", width: "80%" }}>
                            <Stack>
                                <CardContent>
                                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                                        Имя: {comment.name}
                                    </Typography>
                                    <Typography sx={{ fontSize: 18, mt: 1, mb: -0.5 }}>
                                        Комментарий: {comment.message}
                                    </Typography>
                                </CardContent>
                            </Stack>
                        </Card>
                    ))
                }
            </Stack>
        </Stack>
    );
}
