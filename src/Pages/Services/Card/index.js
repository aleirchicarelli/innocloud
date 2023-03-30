import { CardContent, Icon, Text } from './style'

function Card({ icon, title }) {
  return (
    <CardContent>
      <Icon src={icon} />
      <Text>{title}</Text>
    </CardContent>
  );
}

export default Card;