import React from "react";
import "./styles/Contacts.sass";
import { Stack } from "@mui/material";

export const Contacts = () => {
    React.useEffect(() => {
        document.title = 'Контакты - IcebergPHP';
    }, []);

    return (
        <Stack>
        </Stack>
    );
}