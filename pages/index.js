import { Container } from 'reactstrap'
import { container } from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <div className={container}>Home Page Here is a container from module style</div>
      <Container >Here is a container from reactstrap</Container>
    </div>
  )
}
