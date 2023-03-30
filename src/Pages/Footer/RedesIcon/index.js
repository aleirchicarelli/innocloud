
import {
  RedesContainer
} from './style'

function RedesIcon({icon, link, text}) {
  return (
    <RedesContainer>
      <img src={icon} alt='' />
      <a target='blank' href={link}>
        {text}
      </a>
    </RedesContainer>
  )
}

export default RedesIcon; 