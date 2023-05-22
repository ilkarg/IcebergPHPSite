import { Stack } from "@mui/material";
import { AuthForm } from "../../components/AuthForm/AuthForm";
import { AuthFormController } from "../../components/AuthForm/controller/AuthForm";
import { Tagline } from "../../components/Tagline/Tagline";
import { Footer } from "../../components/Footer/Footer";
import scrollLock from "scroll-lock";
import "./styles/Home.sass";

export const Home = () => {
    const ControllerAuthForm = AuthFormController();
    scrollLock.disablePageScroll();
    return (
        <Stack>
            <Stack
                alignItems="center"
                justifyContent="center"
                sx={{
                    flexDirection: {
                        xs: "column",
                        sm: "column",
                        md: "row",
                        lg: "row",
                        xl: "row"
                    }
                }}
            >
                <Tagline />
                <AuthForm ControllerAuthForm={ControllerAuthForm} />
            </Stack>
            <Footer/>
        </Stack>
    );
}
