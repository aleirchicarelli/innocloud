import Blob from '../../assets/images/blob-blue.png'
import {
  Container,
  BlobBlue,
  Form,
  BoxForm,
  FormItem,
  BoxInput,
  BoxButtons,
} from './styles'

const Contatos = () => {
  return (
    <Container id='contact'>
      <BlobBlue src={Blob} />
      <Form>
        <h2>Contato</h2>
        <BoxForm>
          <FormItem>
            <BoxInput>
              <label htmlFor="email">E-mail:</label>
              <input type="email" id="Email" autoComplete='on' required />
            </BoxInput>
            <BoxInput>
              <label htmlFor="text">Mensagem:</label>
              <textarea cols="50" rows="10"
                id="mensagem" required />
            </BoxInput>
            <BoxButtons>
              <input type="reset" value='Cancelar' />
              <input type="submit" value='Enviar' />
            </BoxButtons>
          </FormItem>
        </BoxForm>
      </Form>
    </Container>


  )

}

export default Contatos;