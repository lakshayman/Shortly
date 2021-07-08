import styled from "styled-components";
import brandR from './images/icon-brand-recognition.svg';
import detail from './images/icon-detailed-records.svg';
import fully from './images/icon-fully-customizable.svg';


const S2Div1 = styled.div`
    padding-top: 50px;
    text-align: center;
    @media only screen and (max-width: 375px){
        
    }
`;

const S2H1 = styled.h1`
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 200%;
    @media only screen and (max-width: 375px){
        font-size: 150%;
    }
`;

const S2P = styled.p`
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 18px;
    color: #9e9aa7;
    margin-top: 0%;
    padding: 0px 500px;
    @media only screen and (max-width: 375px){
        font-size: 10px;
        padding: 0px 5px;
    }
`;

const S2Div2 = styled.div`
    margin-top: 250px;
    background-color: #2acfcf;
    height: 10px;
    margin-right: 30%;
    margin-left: 30%;
    margin-bottom: -6%;
    z-index: -1;
    @media only screen and (max-width: 375px){
        width:10px;
        height: 450px;
        margin-bottom: -600px;
        margin-left: 50%;
        
    }
`;

const S2Div3 = styled.div`
    padding: 0px 150px;
    display: inline-flex;
    margin-bottom: 6%;
    @media only screen and (max-width: 375px){
        flex-direction: column;
        padding: 0px 0px;
    }
`;

const S2D1 = styled.div`
    position: relative;
    
`;

const S2D2 = styled.div`
    position: relative;
    margin-top: 50px;
`;

const S2D3 = styled.div`
    position: relative;
    margin-top: 50px;
`;

const S2Icon1 = styled.div`
    height: 60px;
    position: absolute;
    width: 60px;
    border-radius: 30px;
    background-position: center;
    background-color: #3b3054;
    background-image: url(${brandR});
    background-size: 30px 30px;
    background-repeat: no-repeat;
    margin-top: -8%;
    z-index: 2;
    margin-left: 5%;
    @media only screen and (max-width: 375px){
        margin-left: 46%;
    }
    
`;

const S2Icon2 = styled.div`
    height: 60px;
    position: absolute;
    width: 60px;
    border-radius: 30px;
    background-position: center;
    background-color: #3b3054;
    background-image: url(${detail});
    background-size: 30px 30px;
    background-repeat: no-repeat;
    margin-top: -8%;
    z-index: 2;
    margin-left: 13%;
    @media only screen and (max-width: 375px){
        margin-left: 46%;
    }
`;

const S2Icon3 = styled.div`
    height: 60px;
    position: absolute;
    width: 60px;
    border-radius: 30px;
    background-position: center;
    background-color: #3b3054;
    background-image: url(${fully});
    background-size: 30px 30px;
    background-repeat: no-repeat;
    margin-top: -8%;
    z-index: 2;
    margin-left: 23%;
    @media only screen and (max-width: 375px){
        margin-left: 46%;
    }
`;

const S2Box1 = styled.div`
    width: 350px;
    height: 250px;
    background-color: white;
    border-radius: 5px;
    @media only screen and (max-width: 375px){
        
        
    }
`;

const S2Box2 = styled.div`
    width: 350px;
    height: 250px;
    background-color: white;
    margin-left: 8%;
    border-radius: 5px;
    @media only screen and (max-width: 375px){
        margin-left: 0%;
    }
`;

const S2Box3 = styled.div`
    width: 350px;
    height: 250px;
    background-color: white;
    margin-left: 16%;
    border-radius: 5px;
    @media only screen and (max-width: 375px){
        margin-left: 0%;
    }
`;

const S2TextDiv = styled.div`
    padding: 40px 20px;
`;

const S2TextH1 = styled.h1`
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
`;

const S2TextP = styled.p`
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 16px;
    color: #9e9aa7;
    margin-top: 0%;
`;

function Sec2({links}){
    console.log(links);
    const S2 = styled.section`
    background-color: #f2f1f4;
    position: static;
    margin-right: -.6%;
    margin-left: -.6%;
    z-index: -1;
    margin-top: ${'-'+ String(links.length*7 + 6) + '%'};
    height: inherit;
    padding-top: ${String(links.length*7 + 6) + '%'};
    @media only screen and (max-width: 375px){
        width: 375px;
    }
`;
    return (
        <S2>
            <S2Div1>
                <S2H1>Advanced Statistics</S2H1>
                <S2P>Teach how your links are performing across the web with our advanced statistics dashboard.</S2P>
            </S2Div1>
            <S2Div2/>
            <S2Div3>
                <S2D1>
                    <S2Icon1/>
                    <S2Box1>
                        <S2TextDiv>
                            <S2TextH1>Brand Recognition</S2TextH1>
                            <S2TextP>Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.</S2TextP>
                        </S2TextDiv>
                    </S2Box1>
                </S2D1>
                <S2D2>
                    <S2Icon2/>
                    <S2Box2>
                        <S2TextDiv>
                            <S2TextH1>Detailed Records</S2TextH1>
                            <S2TextP>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</S2TextP>
                        </S2TextDiv>
                    </S2Box2>
                </S2D2>
                <S2D3>
                    <S2Icon3/>
                    <S2Box3>
                        <S2TextDiv>
                            <S2TextH1>Fully Customizable</S2TextH1>
                            <S2TextP>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</S2TextP>
                        </S2TextDiv>
                    </S2Box3>
                </S2D3>
            </S2Div3>
        </S2>
    );
}

export default Sec2;