import Logo from "../../assets/images/logo.png";
import Blob from "../../assets/images/blob-home.png";
import BlobRotate from "../../assets/images/blob-home-rotate.png";
import { media } from "../../config";

import { Box, Container, BoxImage, BlobBackground } from "./styles";

const Home = () => {
  const teste = media.tablet ? BlobRotate : Blob;
  return (
    <Container id="home">
      <Box>
        <h1>MARKETING PESSOAL</h1>
        <p>
          APRENDA A SE POSICIONAR NAS REDEs SOCIAIS. PALESTRA COM O FAMOSO
          ROBERTO VILLAREAL. Rua do Porto, 82 - Porto Velho-RO 10/12/2020 20h
        </p>
      </Box>
      <BoxImage src={Logo} />
      <BlobBackground src={teste} />
    </Container>
  );
};

export default Home;
