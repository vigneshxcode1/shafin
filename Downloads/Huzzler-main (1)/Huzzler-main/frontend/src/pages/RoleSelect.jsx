// import { useNavigate } from 'react-router-dom';
// export default function RoleSelect(){ const nav = useNavigate();
//   return (
//     <div className="min-h-screen flex items-center justify-center">
//       <div className="p-8 border rounded">
//         <h2 className="text-xl font-bold mb-4">Register as</h2>
//         <div className="flex gap-4">
//           <button className="px-4 py-2 border" onClick={()=>nav('/register?role=client')}>Client</button>
//           <button className="px-4 py-2 border" onClick={()=>nav('/register?role=freelancer')}>Freelancer</button>
//         </div>
//       </div>
//     </div>
//   )
// }

import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { User, Briefcase } from "lucide-react";

export default function LoginSelect() {
  const nav = useNavigate();

  return (
    <Container>
      <Logo>LOGO</Logo>
      <Heading>Ready To Dive Into A World Of Opportunities</Heading>
      <SubHeading>Create Account As</SubHeading>

      <CardContainer>
        <CircleWrapper>
          <Circle className="yellow-circle blurred top-left" />
          <Circle className="yellow-circle solid top-left" />
          <Circle className="yellow-circle blurred bottom-right" />
          <Circle className="yellow-circle solid bottom-right" />
          <Circle className="yellow-circle solid first-card-bottom-right" />
          <Circle className="yellow-circle solid second-card-top-left" />
        </CircleWrapper>

        <Card onClick={() => nav("/register?role=freelancer")}>
          <User size={50} className="icon" />
          <h4>I’m Freelancer</h4>
          <p>Ready To Hustle And Get Paid.</p>
        </Card>

        <Card onClick={() => nav("/register?role=client")}>
          <Briefcase size={50} className="icon" />
          <h4>I’m Client</h4>
          <p>Looking For Pros To Turn Your Ideas Into Reality? We’ve Got You Covered.</p>
        </Card>
      </CardContainer>

      <LoginText>
        Already Here? <span className="login-link" onClick={() => nav("/login")}>Log In: </span>Jump Back Into The Action.
      </LoginText>
    </Container>
  );
}

/* ================== Styled Components ================== */
const Container = styled.div`
  margin: 0;
  font-family: "Poppins", sans-serif;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  text-align: center;
  overflow: hidden;
`;

const Logo = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Heading = styled.h3`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 8px;
`;

const SubHeading = styled.p`
  font-size: 16px;
  font-weight: 550;
  margin-bottom: 30px;
`;

const CardContainer = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 80px;
  margin-bottom: 40px;
  z-index: 10;
`;

const CircleWrapper = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
`;

const Circle = styled.div`
  position: absolute;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  &.yellow-circle {
    background: radial-gradient(circle, rgba(255, 230, 0, 0.4) 30%, rgba(255, 230, 0, 0.1) 80%);
    filter: blur(25px);
    opacity: 0.6;
  }
  &.blurred {
    background: radial-gradient(circle, rgba(255, 230, 0, 0.5) 30%, rgba(255, 230, 0, 0.05) 80%);
    filter: blur(20px);
  }
  &.solid {
    background-color: rgb(235, 235, 6);
    opacity: 0.8;
    filter: none;
  }
  &.top-left {
    top: 0;
    left: 0;
    transform: translate(-30%, -20%);
  }
  &.bottom-right {
    bottom: 0;
    right: 0;
    transform: translate(40%, 20%);
  }
  &.first-card-bottom-right {
    bottom: 30px;
    left: 28%;
    transform: translate(50%, 50%);
  }
  &.second-card-top-left {
    top: -65px;
    left: 43%;
    transform: translate(50%, 50%);
  }
`;

const Card = styled.div`
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  width: 260px;
  height: 200px;
  padding: 20px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  z-index: 10;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.2);
  }

  .icon {
    color: #000;
    margin-bottom: 10px;
  }

  h4 {
    margin-bottom: 8px;
    font-size: 18px;
  }

  p {
    font-size: 14px;
    font-weight: 600;
  }

  @media (max-width: 600px) {
    width: 90%;
    height: auto;
    padding: 25px;
  }
`;

const LoginText = styled.p`
  font-size: 14px;
  color: #333;
  .login-link {
    color: #000;
    font-weight: 600;
    cursor: pointer;
  }
`;
