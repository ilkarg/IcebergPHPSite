import React from "react";
import { Stack, Alert, Card, CardContent, CardActions, Typography, FormControl, TextField, Button } from "@mui/material";
import { AuthFormModel } from "../../Models";
import "./styles/AuthForm.sass";

export const AuthForm = (props: AuthFormModel) => {
    const { ControllerAuthForm } = props;
    const [data, setData] = React.useState({
        login: "",
        password: ""
    });

    return (
        <Stack
            alignItems="center"
            justifyContent="center"
            sx={{
                mt: {
                    xs: 8,
                    sm: 5,
                    md: 12,
                    lg: 20,
                    xl: 30
                },
                width: {
                    xs: 300,
                    sm: 300,
                    md: 300,
                    lg: 650,
                    xl: 650
                }
            }}
        >
            {
                ControllerAuthForm.authMessage !== "" &&
                <Alert
                    severity="error"
                    id="message"
                    onClose={ControllerAuthForm.handleAlertClose}
                    sx={{
                        minWidth: 270,
                        mb: 1
                    }}
                >{ControllerAuthForm.authMessage}</Alert>
            }
            <Card
                sx={{ minWidth: 300 }}
            >
                <Stack
                    alignItems="center"
                    justifyContent="center"
                    direction="column"
                >
                    <CardContent>
                        <Stack
                            alignItems="center"
                            justifyContent="center"
                            direction="column"
                        >
                            <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
                                Авторизация
                            </Typography>
                            <Typography sx={{ pt: 2.5 }}>
                                <FormControl>
                                    <TextField
                                        type="email"
                                        label="Почта"
                                        id="registration-email-input"
                                        onChange={
                                            (event) => setData({ ...data, login: event.target.value })
                                        }
                                    />
                                </FormControl>
                            </Typography>
                            <Typography sx={{ pt: 2.5 }}>
                                <FormControl>
                                    <TextField
                                        type="password"
                                        label="Пароль"
                                        id="registration-password-input"
                                        onChange={
                                            (event) => setData({ ...data, password: event.target.value })
                                        }
                                    />
                                </FormControl>
                            </Typography>
                        </Stack>
                    </CardContent>
                    <CardActions sx={{ pt: 2.5 }}>
                        <Button
                            variant="contained"
                            size="small"
                            onClick={
                                () => ControllerAuthForm.sendLoginRequest(data.login, data.password)
                            }
                            className="login-link"
                            sx={{ minWidth: 200, minHeight: 30 }}
                        >Войти</Button>
                    </CardActions>
                </Stack>
            </Card>
        </Stack>
    )
}