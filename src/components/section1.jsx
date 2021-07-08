import styled from 'styled-components';
import work from './images/illustration-working.svg'
const BUTTON = styled.button`
    background-color: #2acfcf;
    color: white;
    border-radius: 25px;
    border:none;
    padding: 8px 33px;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 23px;
    margin-top: 2%;
    &:hover{
        filter: brightness(115%);
    }
    @media only screen and (max-width: 375px){
        margin-right: 15%;
    }
    
`;

const S1 = styled.section`
    display: inline-flex;
    margin-top: 5%;
    margin-left: 10%;
    margin-right: -7%;
    @media only screen and (max-width: 375px){
        flex-direction: column-reverse;
        margin-left: 3%;
    }
`;

const S1Div = styled.div`
    width: 100%;
    @media only screen and (max-width: 375px){
        text-align: center;
    }
`;

const S1H1 = styled.h1`
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 500%;
    line-height: 110%;
    color: #35323e;
    margin-bottom: 0%;
    padding-right: 50px;
    @media only screen and (max-width: 375px){
        padding-right: 50px;
        font-size: 200%;
        text-align: center;
    }
`;

const S1P = styled.p`
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 23px;
    color: #9e9aa7;
    margin-top: 0%;
    padding-right: 150px;
    @media only screen and (max-width: 375px){
        padding-left: 20%;
        font-size: 10px;
        text-align: center;
    }
`;

const S1Img = styled.img`
    width: 650px;
    @media only screen and (max-width: 375px){
        width: 400px;
    }
`;

function refreshPage(){
    window.location.reload();
} 

function Sec1(){
    return(
        <S1>
            <S1Div>
                <S1H1>More than just shorter links</S1H1>
                <S1P>Build your brand's recognition and get detailed insights on how your links are performing.</S1P>
                <BUTTON onClick={refreshPage}>Get Started</BUTTON>
            </S1Div>
            <S1Img src={work} className="imgsize"></S1Img>
        </S1>
    );
}
export default Sec1;