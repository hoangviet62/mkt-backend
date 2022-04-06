import Header from "./Header";
import MobileHeader from "./mobile/Header";
import Main from "./Main";
import Footer from "./Footer";
import Container from "@mui/material/Container";
import React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Menu from "./Menu";

const Page = ({ children }: { children: React.ReactNode }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Container disableGutters>
      {matches ? <MobileHeader /> : <Header />}
      <Menu />
      <Main>{children}</Main>
      <Footer />
    </Container>
  );
};

export default Page;
