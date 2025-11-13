// import React from "react";
// import { useNavigate } from "react-router-dom";

// export default function SelectRole() {
//   const navigate = useNavigate();

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-[#F5F5F5] px-4">
//       {/* Logo */}
//       <h1 className="text-xl font-semibold mb-2 tracking-wide">LOGO</h1>

//       {/* Title */}
//       <h2 className="text-lg md:text-2xl font-bold text-center mb-1">
//         Ready To Dive Into A World Of Opportunities
//       </h2>

//       <p className="text-sm md:text-base font-medium text-gray-700 mb-6">
//         Create Account As
//       </p>

//       {/* Card container */}
//       <div className="flex flex-col md:flex-row gap-6 w-full max-w-3xl justify-center">
//         {/* Freelancer Card */}
//         <div
//           onClick={() => navigate("/register-freelancer")}
//           className="flex flex-col items-center justify-center bg-white rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer p-6 md:p-8 flex-1 border border-gray-100"
//         >
//           <div className="text-4xl mb-3">👤</div>
//           <h3 className="text-base md:text-lg font-semibold mb-1">
//             I’m Freelancer
//           </h3>
//           <p className="text-sm text-gray-600 text-center">
//             Ready To Hustle And Get Paid.
//           </p>
//         </div>

//         {/* Client Card */}
//         <div
//           onClick={() => navigate("/register-client")}
//           className="flex flex-col items-center justify-center bg-white rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer p-6 md:p-8 flex-1 border border-gray-100"
//         >
//           <div className="text-4xl mb-3">💼</div>
//           <h3 className="text-base md:text-lg font-semibold mb-1">I’m Client</h3>
//           <p className="text-sm text-gray-600 text-center">
//             Looking For Pros To Turn Your Ideas Into Reality! We’ve Got You
//             Covered.
//           </p>
//         </div>
//       </div>

//       {/* Login link */}
//       <p className="mt-8 text-sm text-gray-700 text-center">
//         Already Here?{" "}
//         <span
//           onClick={() => navigate("/login")}
//           className="text-black font-semibold cursor-pointer hover:underline"
//         >
//           Log In
//         </span>
//         : Jump Back Into The Action.
//       </p>
//     </div>
//   );
// }



import React from "react";
import styled from "styled-components";
import { User, Briefcase } from "lucide-react";

const Account = () => {
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

        <Card>
          <User size={50} className="icon" />
          <h4>I’m Freelancer</h4>
          <p>Ready To Hustle And Get Paid.</p>
        </Card>

        <Card>
          <Briefcase size={50} className="icon" />
          <h4>I’m Client</h4>
          <p>Looking For Pros To Turn Your Ideas Into Reality? We’ve Got You Covered.</p>
        </Card>
      </CardContainer>

      <LoginText>
        Already Here? <span className="login-link">Log In</span>: Jump Back Into The Action.
      </LoginText>
    </Container>
  );
};

export default Account;

/* Styled Components */
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
