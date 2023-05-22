import { Stack, Typography, BottomNavigation } from "@mui/material";
import "./styles/Footer.sass";

export const Footer = () => {
    return (
        <Stack
            className="footer"
            alignItems="center"
            justifyContent="center"
        >
            <BottomNavigation 
                sx={{
                    ml: {
                        xs: 0,
                        sm: -2
                    },
                    width: {
                        xs: "104.2%",
                        sm: "110%",
                        md: "110%",
                        lg: "110%",
                        xl: "110%"
                    },
                    textAlign: "center"
                }}>
                <Typography
                    sx={{
                        mt: {
                            xs: 1,
                            sm: 2,
                            md: 2,
                            lg: 2,
                            xl: 2
                        }
                    }}
                >Copyright ©2023 All rights reserved | This template is made with by tg @Asalaa09 and @Yatov</Typography>
            </BottomNavigation>
        </Stack>
    );
}