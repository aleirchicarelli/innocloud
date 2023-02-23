import { Facebook, Instagram, LinkedIn, Localização, Whatsapp } from "../../assets/Icons"

import RedesIcon from './RedesIcon';

import {
  FooterItem,
  FooterBox
} from './styles'


const Footer = () => {
  return (
    <FooterBox>
      <FooterItem>
        <RedesIcon
          icon={Facebook}
          link= 'https://www.facebook.com/innocloudoficial/'
          text='Facebook'
          />

          <RedesIcon 
          icon={Instagram}
          link= 'https://www.instagram.com/innocloud_ti/?hl=zh-cn/'
          text='instagram' 
          />
          
          <RedesIcon
          icon={LinkedIn}
          link= 'https://www.linkedin.com/company/innocloud/?originalSubdomain=br'
          text='linkedIn' 
          />

          <RedesIcon
          icon={Whatsapp}
          link= 'https://wa.link/81l252'
          text='whatsapp' 
          />

          <RedesIcon
          icon={Localização}
          link= 'https://www.bing.com/maps?osid=30440af7-b2f8-49df-a35a-be699a996ba6&cp=-20.729197~-42.035704&lvl=17.1073&pi=0&imgid=0ca5c950-06f8-46b0-9a37-9f24fa90ecb9&v=2&sV=2&form=S00027'
          text='localização' 
          />

      </FooterItem>
      <p className="copyright">&copy; Copyright Esse site foi produzido por Fiori Solutions - 2023</p>
     

    </FooterBox>
  )
}
export default Footer;