import { Container } from "react-bootstrap";
import Logo from "../../assets/images/logo.png";
import Blob from "../../assets/images/blob-home.png";
import { Box, BoxImage, BlobBackground } from "./styles";

const Home = () => {

  return (
    <Container id="home" >
      <Box>
        <h1>MARKETING PESSOAL</h1>
        <p>
          APRENDA A SE POSICIONAR NAS REDEðs SOCIAIS. PALESTRA COM O FAMOSO
          ROBERTO VILLAREAL. Rua do Porto, 82 - Porto Velho-RO 10/12/2020 20h
        </p>
      </Box>
      <BoxImage src={Logo} />
      <BlobBackground src={Blob} />
    </Container>
  );
};

export default Home;
