import styled from "styled-components";
import Button from "./components/Button";
import Icon from "./components/Icon";
import Input from "./components/Input";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

function App() {
  const FacebookBackground =
    "linear-gradient(to right, #0546A0 0%, #0546A0 40%, #663FB6 100%)";
  const InstagramBackground =
    "linear-gradient(to right, #A12AC4 0%, #ED586C 40%, #F0A853 100%)";
  const TwitterBackground =
    "linear-gradient(to right, #56C1E1 0%, #35A9CE 50%)";
  return (
    <MainContainer>
      <WelcomeText>Welcome</WelcomeText>
      <InputContainer>
        <Input type="text" placeholder="Enter your Login Id" />
        <Input type="password" placeholder="Enter Password" />
      </InputContainer>
      <Label>
        <Input1 defaultChecked />
        Remember Me
      </Label>
      <ForgotPassword>Forgot Password ?</ForgotPassword>
      <ButtonContainer>
        <Button content="Sign In" />
      </ButtonContainer>
      <Sign>Not an user?     <u>Register</u></Sign>

      <Or>or</Or>
      <LoginWith>SIGNUP Using</LoginWith>

      <IconsContainer>
        <Icon color={FacebookBackground}>
          <FaFacebookF />
        </Icon>
        <Icon color={InstagramBackground}>
          <FaInstagram />
        </Icon>
        <Icon color={TwitterBackground}>
          <FaTwitter />
        </Icon>
      </IconsContainer>

    </MainContainer>
  );
}

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 80vh;
  width: 30vw;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(0,0,0);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border-radius: 10px;
  color: #000000;
  text-transform: uppercase;
  letter-spacing: 0.4rem;
  @media only screen and (max-width: 320px) {
    width: 80vw;
    height: 90vh;
    hr {
      margin-bottom: 0.3rem;
    }
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 360px) {
    width: 80vw;
    height: 90vh;
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 411px) {
    width: 80vw;
    height: 90vh;
  }

  @media only screen and (min-width: 768px) {
    width: 80vw;
    height: 80vh;
  }
  @media only screen and (min-width: 1024px) {
    width: 70vw;
    height: 50vh;
  }
  @media only screen and (min-width: 1280px) {
    width: 30vw;
    height: 80vh;
  }
`;

const WelcomeText = styled.h2`
  margin: 2rem 0 2rem 0;
`;
const Sign = styled.h5`
letter-spacing: 0.05em;
cursor:pointer
`;
const InputContainer = styled.div`
  display: flex;
  
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 20%;
  width: 100%;
`;

const ButtonContainer = styled.div`
  margin: 1rem 0 1rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginWith = styled.h5`
 
  letter-spacing: 0.05em;
`;


const Or = styled.h5`
letter-spacing: 0.05em;
margin:0.5rem 
`
const IconsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 0.5rem 0 1rem 0;
  width: 80%;
`;

const ForgotPassword = styled.h5`
letter-spacing: 0.05em;
  cursor: pointer;
  margin: 1rem 0 0.5rem 0;
`;
const Input1 = styled.input.attrs({ type: "checkbox" })``;

const Label = styled.label`
  align-items: center;
  display: flex;
  // gap: 8px;
  text-transform: lowercase;
  font-size:15px;
  font-weight:bold;
  letter-spacing: 0.01em;
  margin: 1rem 0 0rem 0;
`

export default App;
