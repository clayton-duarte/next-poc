import styled from 'styled-components';

const Title = styled.aside`
pointer-events: ${props => props.show ? 'auto' : 'none' };
opacity: ${props => props.show ? 1 : 0 };
transition: .3s ease;
position: absolute;
background: #222;
margin: -20px;
height: 100%;
width: 100%;
`

export default Title;