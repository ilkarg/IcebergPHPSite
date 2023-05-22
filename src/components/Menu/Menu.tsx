import "./styles/Menu.sass";
import { Stack, Box, AppBar, Toolbar, IconButton, Typography, Divider, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

export const AppMenuBar = () => {
    return (
        <Stack>
            <Box sx={{ flexGrow: 1, m: -1, mb: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2, display: "none" }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            IcebergPHP
                        </Typography>
                        <Divider />
                        <List sx={{ display: "flex" }}>
                            <ListItem key="Home" disablePadding>
                                <ListItemButton href="/" sx={{ textAlign: "center" }}>
                                    <ListItemText primary="Главная" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem key="Docs" disablePadding>
                                <ListItemButton href="/docs" sx={{ textAlign: "center" }}>
                                    <ListItemText primary="Документация" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem key="Install" disablePadding>
                                <ListItemButton href="https://github.com/mrProger/IcebergPHP/blob/master/README.md#%D0%A3%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BA%D0%B0" sx={{ textAlign: "center" }}>
                                    <ListItemText primary="Установка" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem key="Contacts" disablePadding>
                                <ListItemButton href="/contacts" sx={{ textAlign: "center" }}>
                                    <ListItemText primary="Контакты" />
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </Toolbar>
                </AppBar>
            </Box>
        </Stack>
    );
}