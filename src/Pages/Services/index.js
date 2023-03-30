import { Container, BoxCard } from "./styles";
import Card from "./Card";
import { cardProps } from './Mock'



function Services() {
  return (
    <Container >
      <h2>SERVIÇOS</h2>
      <BoxCard>
        {
          cardProps.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              icon={item.icon}
            />
          ))
        }
      </BoxCard>


    </Container>
  );
}

export default Services;