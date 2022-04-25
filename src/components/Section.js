import React from 'react'
import styled from 'styled-components'


function Section( {title, description, rightBtnText, leftBtnText, backgroundImg} ) {
    return (
    <Wrap bgImage = {backgroundImg}>
        <ItemText>
            <h1>{title}</h1>
            <p>{description}</p>
        </ItemText>
        <Buttons>
            <ButtonGroup>
                <LeftButton>
                    {leftBtnText}
                </LeftButton>
                {rightBtnText &&
                    <RightButton>
                        {rightBtnText}
                    </RightButton>
                }
            </ButtonGroup>
            <DownArrow src="/images/down-arrow.svg"/>
        </Buttons>
    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
    width:100vw;
    height:100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: ${props => `url("/images/${props.bgImage}")`};
    //이미지들을 props로 받아오고 그 props를 bgImage로 받아서 사용해준다.
    display: flex;
    flex-direction: column;//플렉스로 텍스트와 버튼들을 세로로 설정해준다음
    justify-content: space-between;//양쪽끝으로 나열해준다
    align-items: center;//그리고 가로로 가운데에 정렬해준다.
`

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;


`
const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;
    @media (max-width: 768px){
        flex-direction: column; 
    }//반응형으로 크기가 줄어들면 세로로 버튼들이 나열된다.
`

const LeftButton = styled.div` 
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;//대문자
    font-size: 12px;
    cursor: pointer;
    margin: 8px;
`

const RightButton = styled(LeftButton)`
     background: white;
     opacity: 0.65;
     color: black;
`

const DownArrow = styled.img`
    height: 40px;
    overflow-x: hidden;
    animation: animateDown infinite 1.5s
    //밑에 화살표에 애니메이션 추가하여 1.5초에 움직이게끔 설정해둠.
`

const Buttons = styled.div`

`