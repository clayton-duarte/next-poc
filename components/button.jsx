import styled from 'styled-components';

const Button = styled.button`
font-family: StarJedi, sans-serif;
background: transparent;
letter-spacing: 1px;
font-size: 2rem;
padding: .5rem;
color: #FFF;
border: 0;
&:focus {
    outline: 0;
}
&:hover {
    color: #333;
    text-shadow: 
    -1px -1px 0 #FFF,  
     1px -1px 0 #FFF,
    -1px 1px 0 #FFF,
     1px 1px 0 #FFF;
}
`

export default Button;