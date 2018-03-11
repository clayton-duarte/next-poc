import styled from 'styled-components';

const Title = styled.h1`
pointer-events: ${props => props.show ? 'none' : 'auto' };
top: ${props => props.show ? 'calc(50% - 24px)' : '20px'};
font-family: StarJedi, sans-serif;
text-transform: uppercase;
transition: .3s ease;
position: absolute;
text-align: center;
font-weight: 400;
margin: 0 -20px;
font-size: 2.5em;
display: block;
width: 100%;
color: #222;
text-shadow: 
    -1px -1px 0 #FF0,  
    1px -1px 0 #FF0,
    -1px 1px 0 #FF0,
    1px 1px 0 #FF0;
`

export default Title;