import styled from 'styled-components';

const Content = styled.div`
max-width: ${props => props.show ? '30vw' : '100vw'};
@media only screen and (max-width: 768px) {
    max-width: calc(90vw - 40px);
    width: calc(90vw - 40px);
    font-size: 15px;
}
overflow: ${props => props.show ? 'hidden' : 'auto'};
box-shadow: 0 0 16px rgba(0, 0, 0, 0.2);
font-family: AnakinMono, sans-serif;
border: 2px solid yellow;
transition: .3s ease;
letter-spacing: 1px;
margin-bottom: 20px;
position: relative;
font-weight: 300;
background: #222;
min-width: 30vw;
font-size: 20px;
padding: 20px;
@font-face {
    font-family: AnakinMono;
    src: url(../static/fonts/anakinmono.ttf);
}
@font-face {
    font-family: StarJedi;
    src: url(../static/fonts/starjedi.otf);
}
`

export default Content;