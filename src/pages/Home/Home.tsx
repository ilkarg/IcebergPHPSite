import React from "react";
import { Stack } from "@mui/material";
import "./styles/Home.sass";

export const Home = () => {
    React.useEffect(() => {
        document.title = 'Главная - IcebergPHP';
    }, []);

    return (
        <Stack>
            
        </Stack>
    );
}
