import React from "react";
import "./styles/Contacts.sass";
import { Stack, Card, CardContent, Typography, Link, TextField, Button } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';

export const Contacts = () => {
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
        </Stack>
    );
}