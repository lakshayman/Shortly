import styled from "styled-components";
import imgboost from './images/bg-boost-desktop.svg';
import imgMboost from './images/bg-boost-mobile.svg';
const SSboost = styled.div`
    position: sticky;
    margin-right: -.6%;
    margin-left: -.6%;
    height: 250px;
    background-image: url(${imgboost});
    background-repeat: no-repeat;
    background-color: #3b3054;
    display: block;
    padding-top: 1px;
    @media only screen and (max-width: 375px){
        width: 375px;
        height: 300px;
        background-image: url(${imgMboost});
    }
`;

const BoostH1 = styled.h1`
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 200%;
    color: white;
    margin-left: 37%;
    margin-top: 60px;
    @media only screen and (max-width: 375px){
        margin-left: 15%;
        margin-top: 110px;
    font-size: 150%;

    }
`;

const BUTTON = styled.button`
    background-color: #2acfcf;
    color: white;
    border-radius: 25px;
    border:none;
    padding: 8px 33px;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 23px;
    margin-left: 43%;
    &:hover{
        filter: brightness(115%);
    }
    @media only screen and (max-width: 375px){
        font-size: 18px;
        margin-left: 28%;
    }
`;

function refreshPage(){
    window.location.reload();
} 

function Sboost(){
    return (
        <SSboost>
            <BoostH1>Boost your links today</BoostH1>
            <BUTTON onClick={refreshPage}>Get Started</BUTTON>
        </SSboost>
    );
}

export default Sboost;