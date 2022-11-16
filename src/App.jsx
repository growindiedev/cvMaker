import React, { useState } from "react";
import styled from "styled-components";
import Button from "./components/common/Button";
import Form from "./components/Form";
import Preview from "./components/Preview";
import { useForm, FormProvider } from "react-hook-form";

const Wrapper = styled.div`
  display: grid;
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0369a1;
  color: white;
  font-size: 3rem;
  height: 10vh;
`;

const BtnContainer = styled.div`
  display: flex;
  height: 12vh;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

function App() {
  const [isEditMode, setIsEditMode] = useState(true);
  const methods = useForm();

  console.log("values", methods.getValues());
  const handleMode = (e) => {
    e.preventDefault();
    setIsEditMode(!isEditMode);
  };

  const autofill = {
    //personal
    firstName: "Naval",
    lastName: "Ravikant",
    jobTitle: "Founder Angel.co",
    email: "naval@angel.co",
    phone: "+0897979797",
    linkedin: "https://www.linkedin.com/in/navalr",
    github: "naval",
    personalDescription:
      "Naval Ravikant is an Indian-American entrepreneur and investor. He is the co-founder, chairman and former CEO of AngelList. He has invested early-stage in over 200 companies including Uber, FourSquare, Twitter, Wish.com, Poshmark, Postmates, Thumbtack, Notion, SnapLogic, Opendoor, Clubhouse, Stack Overflow, Bolt, OpenDNS, Yammer, and Clearview AI, with over 70 total exits and more than 10 Unicorn companies",

    experience: [
      {
        title: "CEO",
        companyName: "AngelList LLP",
        startDate: "2010",
        description: "startups don't funt themselves",
      },
    ],
    education: [
      {
        degree: "BA Computer Science",
        school: "MIT, Boston",
        startDate: "1994",
        endDate: "1998",
        description: "Learnt how to code and built software that scales",
      },
    ],

    skillCategory: ["Programming"],
    skill: [["Java", "Python"]],
  };

  return (
    <Wrapper>
      <Header>CV Generator</Header>
      <FormProvider {...methods}>
        {isEditMode ? (
          <BtnContainer>
            <Button onClick={handleMode}>Preview Mode</Button>
            <Button
              onClick={() =>
                methods.reset(autofill, { keepDefaultValues: true })
              }
            >
              Auto Fill
            </Button>
            <Button
              onClick={() => {
                window.location.reload(false);
              }}
            >
              Reset
            </Button>
          </BtnContainer>
        ) : (
          <BtnContainer>
            <Button onClick={handleMode}>Edit Mode</Button>
          </BtnContainer>
        )}
        {isEditMode ? <Form /> : <Preview />}
      </FormProvider>
    </Wrapper>
  );
}

export default App;
