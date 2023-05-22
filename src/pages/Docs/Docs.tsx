import React from "react";
import "./styles/Docs.sass";
import { Stack } from "@mui/material";

export const Docs = () => {
    React.useEffect(() => {
        document.title = 'Документация - IcebergPHP';
    }, []);

    return (
        <Stack>
        </Stack>
    );
}