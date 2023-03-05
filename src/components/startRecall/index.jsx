import { Container } from './style'
import logo from '../../assets/logo.png'
export function StartRecall({setRecalling}){
    return (
        <Container>
            <img src={logo} alt="ZapRecall Logo" />
            <p>ZapRecall</p>
            <button onClick={() => setRecalling(true)} data-test="start-btn">
                Iniciar Recall
            </button>
        </Container>
    );
}