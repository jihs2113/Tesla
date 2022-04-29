import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom';



function Kakao() {
  const { naver } = window;

  const initializeNaverLogin = () => {
    const naverLogin = new naver.LoginWithNaverId({
      clientId: "RU3IXaEg10YCAg80qZDC",
      callbackUrl: "http://localhost:3000/", 
      isPopup: false, 
      loginButton: { color: "green",type: 3, height: 40},
      callbackHandle: true,
    });
    naverLogin.init();
    naverLogin.logout();
    naverLogin.getLoginStatus( (status) => {
        if(status){
            console.log("Naver 로그인 상태 ", naverLogin.user);
            const {id, email, gender} = naverLogin.user;
            
            if(gender == undefined){
                alert(" 성별은 필수 동의 입니다. 정보제공을 동의해주세요. ");
                naverLogin.reprompt();
                return;
            }
        } else{
            console.log("naver 비 로그인 상태")
        }
    })
  };
    
  useEffect(() => {
    initializeNaverLogin();
  }, []);

  return (
    <div id="naverIdLogin" />
  )
}

export default Kakao