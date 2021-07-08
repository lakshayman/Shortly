import styled from "styled-components";
import facebook from './images/icon-facebook.svg';
import instagram from './images/icon-instagram.svg';
import twitter from './images/icon-twitter.svg';
import pininterest from './images/icon-pinterest.svg';
const Ffooter = styled.div`
    position: sticky;
    margin-right: -.6%;
    margin-left: -.6%;
    margin-bottom: -.6%;
    height: 300px;
    background-color: #232127;
    @media only screen and (max-width: 375px){
        width: 375px;
        height: inherit;
    }
`;

const Fdiv = styled.div`
    display: flex;
    position: sticky;
    padding: 50px 100px;
    @media only screen and (max-width: 375px){
        flex-direction: column;
    }
`;

const FooterH1 = styled.h1`
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 200%;
    color: white;
    margin-right: 15%;
`;

const FFDiv = styled.div`
    display: block;
    margin-left: 7%;
    h1{
        font-family: 'Poppins', sans-serif;
        font-weight: 700;
        font-size: 18px;
        color: white;
    }
    a{
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        font-size: 18px;
        color: #9e9aa7;
        text-decoration: none;
        display: block;
    }
`;

const SocialDiv = styled.div`
    display: flex;
    margin-left: 7%;
    margin-top: 1%;
    img{
        margin-left: 30%;
        height: 20px;
        width: 20px;
    }
    @media only screen and (max-width: 375px){
        margin-top: 7%;
        margin-left: 0px;
        img{
            margin-left: 20px;
            height: 20px;
            width: 20px;
        }
    }
`;

function refreshPage(){
    window.location.reload();
} 

function Footer(){
    return (
        <Ffooter>
            <Fdiv>
                <FooterH1>Shortly</FooterH1>
                <FFDiv>
                    <h1>Features</h1>
                    <a href="/">Link Shortening</a>
                    <a href="/">Branded Links</a>
                    <a href="/">Analytics</a>
                </FFDiv>
                <FFDiv>
                    <h1>Resources</h1>
                    <a href="/">Blog</a>
                    <a href="/">Developers</a>
                    <a href="/">Support</a>
                </FFDiv>
                <FFDiv>
                    <h1>Company</h1>
                    <a href="/">About</a>
                    <a href="/">Our Team</a>
                    <a href="/">Careers</a>
                    <a href="/">Contact</a>
                </FFDiv>
                <SocialDiv>
                    <img src={facebook} onClick={refreshPage} alt="facebook"/>
                    <img src={twitter} onClick={refreshPage} alt="twitter"/>
                    <img src={pininterest} onClick={refreshPage} alt="PI"/>
                    <img src={instagram} onClick={refreshPage} alt="insta"/>
                </SocialDiv>
            </Fdiv>
        </Ffooter>
    );
}

export default Footer;