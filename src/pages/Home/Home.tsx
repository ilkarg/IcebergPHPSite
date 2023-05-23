import React from "react";
import { Stack, Card, CardContent, Typography, Link, Button } from "@mui/material";
import "./styles/Home.sass";

export const Home = () => {
    React.useEffect(() => {
        document.title = 'Главная - IcebergPHP';
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
        </Stack>
    );
}
