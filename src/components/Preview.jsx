import React from "react";
import { useFormContext } from "react-hook-form";
import styled from "styled-components";

const Wrapper = styled.div`
  > * {
    //border: 1px solid red;
    margin: 1rem 0;
  }
  width: 80vw;
  //border: 1px solid green;
  justify-self: center;
  margin-bottom: 3rem;
  .head {
    border-bottom: 2px solid silver;
    padding-bottom: 0.5rem;
  }

  .obj-container {
    margin: 0.7rem 0.4rem;
  }

  .cv-main {
    font-size: 1.2rem;
    font-weight: bold;
  }
  .cv-sub {
    margin-bottom: 0.4rem;
  }
`;

const Header = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
`;

const Preview = () => {
  const { getValues } = useFormContext();
  return (
    <Wrapper>
      <Header>
        <div>{`Mail:  ${getValues("email")}`}</div>
        <div>{`Phone:  ${getValues("phone")}`}</div>
        <div>{`LinkedIn:  ${getValues("linkedin")}`}</div>
        <div>{`Github:  ${getValues("github")}`}</div>
      </Header>
      <div className="head">
        <h1>{`${getValues("firstName")} ${getValues("lastName")}`}</h1>
        <h3>{`${getValues("jobTitle")}`}</h3>
      </div>
      <div className="cv-about">
        <h2>About</h2>
        <div>{`${getValues("personalDescription")}`}</div>
      </div>
      <div className="cv-skills">
        <h2>Skills</h2>
        {getValues("skillCategory") &&
          getValues("skillCategory").map((category, i) => (
            <div key={i} className="obj-container">
              <div className="cv-main">{`${category}`}</div>
              {getValues(`skill.${i}`) &&
                getValues(`skill.${i}`).map((skill, i) => (
                  <div className="cv-sub" key={i}>
                    {skill}
                  </div>
                ))}
            </div>
          ))}
      </div>
      <div className="cv-experience">
        <h2>Experience</h2>
        {getValues("experience") &&
          getValues("experience").map((obj, i) => (
            <div className="obj-container" key={i}>
              <div>{obj.title}</div>
              <div>{obj.companyName}</div>
              <div>{`${obj.startDate} - ${obj.endDate}`}</div>
              <div>{obj.description}</div>
            </div>
          ))}
      </div>
      <div className="cv-education">
        <h2>Education</h2>
        {getValues("education") &&
          getValues("education").map((obj, i) => (
            <div className="obj-container" key={i}>
              <div>{obj.degree}</div>
              <div>{obj.school}</div>
              <div>{`${obj.startDate} - ${obj.endDate}`}</div>
              <div>{obj.description}</div>
            </div>
          ))}
      </div>
    </Wrapper>
  );
};

export default Preview;
