import React from "react";
import "./styles/Docs.sass";
import { Stack, Card, CardContent, CardActions, Typography, Link } from "@mui/material";

export const Docs = () => {
    React.useEffect(() => {
        document.title = 'Документация - IcebergPHP';
    }, []);

    return (
        <Stack>
            <Card sx={{ boxShadow: "0 0 10px rgba(0,0,0,0.5)" }}>
                <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                        PHPExceptionHandler
                    </Typography>
                </CardContent>
                <CardActions sx={{ ml: 0.8 }}>
                    <Link
                        variant="h6"
                        href="https://github.com/mrProger/IcebergPHP/blob/master/docs/PHPExceptionHandler.md"
                        underline="hover"
                    >Подробнее</Link>
                </CardActions>
            </Card>
            <Card sx={{ mt: 1.5, boxShadow: "0 0 10px rgba(0,0,0,0.5)" }}>
                <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                        PHPHash
                    </Typography>
                </CardContent>
                <CardActions sx={{ ml: 0.8 }}>
                    <Link
                        variant="h6"
                        href="https://github.com/mrProger/IcebergPHP/blob/master/docs/PHPHash.md"
                        underline="hover"
                    >Подробнее</Link>
                </CardActions>
            </Card>
            <Card sx={{ mt: 1.5, boxShadow: "0 0 10px rgba(0,0,0,0.5)" }}>
                <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                        PHPMailer
                    </Typography>
                </CardContent>
                <CardActions sx={{ ml: 0.8 }}>
                    <Link
                        variant="h6"
                        href="https://github.com/mrProger/IcebergPHP/blob/master/docs/PHPMailer.md"
                        underline="hover"
                    >Подробнее</Link>
                </CardActions>
            </Card>
            <Card sx={{ mt: 1.5, boxShadow: "0 0 10px rgba(0,0,0,0.5)" }}>
                <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                        PHPOrm
                    </Typography>
                </CardContent>
                <CardActions sx={{ ml: 0.8 }}>
                    <Link
                        variant="h6"
                        href="https://github.com/mrProger/IcebergPHP/blob/master/docs/PHPOrm.md"
                        underline="hover"
                    >Подробнее</Link>
                </CardActions>
            </Card>
            <Card sx={{ mt: 1.5, boxShadow: "0 0 10px rgba(0,0,0,0.5)" }}>
                <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                        PHPRequester
                    </Typography>
                </CardContent>
                <CardActions sx={{ ml: 0.8 }}>
                    <Link
                        variant="h6"
                        href="https://github.com/mrProger/IcebergPHP/blob/master/docs/PHPRequester.md"
                        underline="hover"
                    >Подробнее</Link>
                </CardActions>
            </Card>
            <Card sx={{ mt: 1.5, boxShadow: "0 0 10px rgba(0,0,0,0.5)" }}>
                <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                        PHPRouter
                    </Typography>
                </CardContent>
                <CardActions sx={{ ml: 0.8 }}>
                    <Link
                        variant="h6"
                        href="https://github.com/mrProger/IcebergPHP/blob/master/docs/PHPRouter.md"
                        underline="hover"
                    >Подробнее</Link>
                </CardActions>
            </Card>
            <Card sx={{ mt: 1.5, boxShadow: "0 0 10px rgba(0,0,0,0.5)" }}>
                <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                        PHPSystem
                    </Typography>
                </CardContent>
                <CardActions sx={{ ml: 0.8 }}>
                    <Link
                        variant="h6"
                        href="https://github.com/mrProger/IcebergPHP/blob/master/docs/PHPSystem.md"
                        underline="hover"
                    >Подробнее</Link>
                </CardActions>
            </Card>
            <Card sx={{ mt: 1.5, boxShadow: "0 0 10px rgba(0,0,0,0.5)" }}>
                <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                        PHPTemplater
                    </Typography>
                </CardContent>
                <CardActions sx={{ ml: 0.8 }}>
                    <Link
                        variant="h6"
                        href="https://github.com/mrProger/IcebergPHP/blob/master/docs/PHPTemplater.md"
                        underline="hover"
                    >Подробнее</Link>
                </CardActions>
            </Card>
            <Card sx={{ mt: 1.5, boxShadow: "0 0 10px rgba(0,0,0,0.5)" }}>
                <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                        PHPView
                    </Typography>
                </CardContent>
                <CardActions sx={{ ml: 0.8 }}>
                    <Link
                        variant="h6"
                        href="https://github.com/mrProger/IcebergPHP/blob/master/docs/PHPView.md"
                        underline="hover"
                    >Подробнее</Link>
                </CardActions>
            </Card>
        </Stack>
    );
}