import Foto from '../../assets/images/profissional.png'
import Blob from '../../assets/images/blob-white.png'

import {
  Container,
  Professional,
  BlobWhite,
  Content,
  BoxEnterprise,
  BoxProfessional,
  BoxContent
} from './styles'




const About = () => {
  return (
    <Container id="foto">
      <h2>SOBRE</h2>
      <Content>

        <Professional src={Foto} />

        <BoxContent>
          <BoxEnterprise>
            <p className='texto'>Esse ‘flerte’ do presidente com líderes da América Latina que não respeitam a democracia está causando uma verdadeira crise de imagem para o político. Lula sempre se esquiva de perguntas que o confrontam sobre seu posicionamento em relação a esses países, e sua falta de declarações repudiando tais atos faz com que uma parte da sociedade questione o motivo disso.</p>
            <h3> INNOCLOUD</h3>
          </BoxEnterprise>

          <BoxProfessional>
            <p>Esse ‘flerte’ do presidente com líderes da América Latina que não respeitam a democracia está causando uma verdadeira crise de imagem para o político. Lula sempre se esquiva de perguntas que o confrontam sobre seu posicionamento em relação a esses países, e sua falta de declarações repudiando tais atos faz com que uma parte da sociedade questione o motivo disso.</p>
            <h3>Jonatas Costa</h3>
          </BoxProfessional>
        </BoxContent>
      </Content>
      <BlobWhite src={Blob} />
    </Container>
  )
}

export default About;