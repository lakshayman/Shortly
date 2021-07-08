import styled from 'styled-components';
import Sec1 from './components/section1';
import NavBar from './components/navBar';
import Sec2 from './components/section2';
import Sboost from './components/boost';
import Footer from './components/footer';
import shortenBg from './components/images/bg-shorten-desktop.svg';
import shortenMBg from './components/images/bg-shorten-mobile.svg';
import { useEffect, useState } from 'react';
import axios from 'axios';
const Sbox = styled.div`
  background-color: #3b3054;
  background-image: url(${shortenBg});
  border-radius: 15px;
  height: 168px;
  width: 1110px;
  position: sticky;
  margin-top: 6%;
  margin-left: 10%;
  @media only screen and (max-width: 375px){
    height: 128px;
    width: 237px;
    background-image: url(${shortenMBg});
    margin-top: 70px;
    margin-left: 20%;
  }
`;

const SboxForm = styled.form`
  padding-top: 55px;
  padding-left: 70px;
  @media only screen and (max-width: 375px){
    display: flex;
    align-text: center;
    flex-direction: column;
    padding-top: 20px;
    padding-left: 8px;
  }
`;

const S2Div = styled.div`
    text-align: center;
    position: sticky;
    margin-left: 10.5%;
    height: 60px;
    width: 1050px;
    background-color: white;
    border-radius: 10px;
    margin-top: 30px;
    padding: 5px 30px;
    @media only screen and (max-width: 375px){
      width: 200px;
      height: 150px;
    }

`;

const SBOLink = styled.p`
    float: left;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 18px;
    color: black;
    @media only screen and (max-width: 375px){
      font-size: 10px;
      width: 150px;
      padding: 10px 15px;
      margin-left: 18px;
    }
`;

const SBS = styled.form`
    float: right;
    display: inline-flex;
    @media only screen and (max-width: 375px){
      flex-direction: column;
    }
`;

const SBSLink = styled.p`
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 18px;
    color: #2acfcf;
    @media only screen and (max-width: 375px){
      font-size: 10px;
      width: 150px;
      padding: 10px 15px;
      margin-left: 18px;
    }
`;

const SBUTTON = styled.button`
    background-color: #2acfcf;
    color: white;
    border-radius: 10px;
    border:none;
    padding: 0px 40px;
    margin-left: 20px;
    margin-bottom: 10px;
    margin-top: 10px;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 18px;
    &:hover{
    cursor: pointer;
      filter: brightness(115%);
    }
    @media only screen and (max-width: 375px){
      font-size: 10px;
      padding: 7px 4px;
      margin-left: 50px;
      width: 100px;
      margin-top: 10px;
    }
`;

function App() {
  const [links, setLinks] = useState([]);
  const [link, setLink] = useState('');
  const [isError, setIsError] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    console.log(links[Number(e.target.name)].slink);
    navigator.clipboard.writeText(links[Number(e.target.name)].slink);
    e.target.style.backgroundColor = "#232127";
    e.target.innerHTML = "Copied!"
  }
  const BUTTON = styled.button`
    background-color: #2acfcf;
    color: white;
    border-radius: 10px;
    border:none;
    padding: 10px 40px;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 18px;
    &:hover{
      filter: brightness(115%);
    }
    @media only screen and (max-width: 375px){
      font-size: 10px;
      padding: 7px 4px;
      margin-left: 50px;
      width: 100px;
      margin-top: 10px;
    }
`;
  const SBoxInput = styled.input`
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 18px;
    border-radius: 10px;
    border: ${isError ? 'solid':'none'};
    border-color: ${isError ? '#f46262' : 'transparent'};
    padding: 10px 20px;
    margin-right: 2%;
    width: 700px;
    color: #35323e;
    @media only screen and (max-width: 375px){
      font-size: 10px;
      width: 150px;
      padding: 10px 15px;
      margin-left: 18px;
    }
`;
const SE = styled.p`
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 14px;
  padding-left: 70px;
  display: ${isError?'block':'none'};
  margin-top: 5px;
  font-style: italic;
  color:#f46262;
  @media only screen and (max-width: 375px){
    font-size: 8px;
    padding-left: 20px;
    margin-right: 0px;
  }
`;
  useEffect(()=>{
    if(link !== ''){
      setIsError(false);
    }
  },[link]);
  const handleLink = (e)=>{
    setLink(e.target.value);
  }
  const handleSubmit = async (e)=>{
    e.preventDefault();
    if(link === ''){
      setIsError(true);
    }else{
      axios.get('https://api.shrtco.de/v2/shorten?url='+link)
        .then(res =>{
          const SLink = res.data.result.full_short_link;
          const OLink = res.data.result.original_link;
          setLinks([...links,{olink: OLink, slink: SLink}]);
          setLink('');
        });
    }
  }
  return (
    <div>
      <NavBar/>
      <Sec1 />
      <Sbox>
            <SboxForm onSubmit={handleSubmit}>
                <SBoxInput autoFocus placeholder="Shorten a link here..." name="link" value={link} onChange={handleLink}/>
                <BUTTON>Shorten It!</BUTTON>
            </SboxForm>
            <SE>Please add a link</SE>
        </Sbox>
        {links && links.map((link,index) => (
            <S2Div>
              <SBOLink>{link.olink}</SBOLink>
              <SBS>
                <SBSLink>{link.slink}</SBSLink>
                <SBUTTON name={index} onClick={handleClick}>Copy</SBUTTON>
              </SBS>
            </S2Div>
        ))}
      <Sec2 links={links}/>
      <Sboost/>
      <Footer/>
    </div>
  );
}

export default App;
