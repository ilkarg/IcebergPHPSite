import { Stack, Typography } from "@mui/material";
import "./styles/Tagline.sass";

export const Tagline = () => {
    return (
        <>
            <Stack
                alignItems="center"
                justifyContent="center"
                direction="column"
            >
                <Typography
                    className="tagline1"
                    sx={{
                        fontSize: {
                            xs: 30,
                            md: 30,
                            xl: 40
                        },
                        textAlign: "center",
                        mt: {
                            xs: 2,
                            sm: 2,
                            md: 12,
                            lg: 20,
                            xl: 28
                        },
                        mr: {
                            md: 10,
                            lg: -10
                        }
                    }}
                >ПРОФЛИНГВИСТИКА ДЛЯ ВСЕХ</Typography>
                <Typography
                    sx={{
                        fontSize: {
                            xs: 20,
                            md: 20,
                            xl: 25
                        },
                        textAlign: "center",
                        mt: {
                            xs: 1
                        },
                        mr: {
                            md: 10,
                            lg: -10
                        }
                    }}
                    className="tagline2"
                >Лингвистический тренажёр профессиональных терминов.</Typography>
            </Stack>
        </>
    );
}