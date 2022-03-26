import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Container from "@mui/material/Container";

const Page = ({ children }: { children: React.ReactNode }) => (
  <Container disableGutters>
    <Header />
    <Main>{children}</Main>
    <Footer />
  </Container>
);

export default Page;
