import styled from "styled-components";
import logo from './images/logo.svg';
import ham from './images/ham.png';
const Nav = styled.nav`
    margin-right: 10%;
    margin-left: 10%;
    margin-top: 3%;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    img{
        float: left;
    }
    @media only screen and (max-width: 375px){
        display: none; 
    }
`;

const Nav2 = styled.nav`
    margin-right: 3px;
    margin-left: 10%;
    margin-top: 10%;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;

    height: 100px;
    @media only screen and (min-width: 1440px){
        display: none; 
    }
`;

const Nav2Img = styled.img`
    float: left;
`;

const Nav2Ham = styled.img`
    float: right;
    height: 20px;
    width: 20px;
`;

const A = styled.a`
    margin-left: 15px;
    margin-right: 15px;
    text-decoration: none;
    color: #9e9aa7;
    &:hover{
        color: #35323e;
    }
`;

 const LDIV = styled.div`
    margin-left: 2%;
    margin-top: .2%;
    float: left;
 `;

 const RDIV = styled.div`
    float: right;
 `;

 const BUTTON = styled.button`
    background-color: #2acfcf;
    color: white;
    border-radius: 20px;
    border:none;
    padding: 10px 15px;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    &:hover{
        filter: brightness(115%);
    }
 `;
function refreshPage(){
    window.location.reload();
} 
function NavBar(){
    return (
        <div>
        <Nav>
            <img src={logo} alt='Logo'/>
            <LDIV>
                <A href="/">Feature</A>
                <A href="/">Pricing</A>
                <A href="/">Resource</A>
            </LDIV>
            <RDIV>
                <A href="/">Login</A>
                <BUTTON onClick={refreshPage}>Sign Up</BUTTON>
            </RDIV>
        </Nav>
        <Nav2>
            <Nav2Img src={logo} alt='Logo'/>
            <Nav2Ham src={ham} alt='ham'/>
        </Nav2>
        </div>
    );
}
 export default NavBar;