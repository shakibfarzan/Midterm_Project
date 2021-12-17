import React from "react";
import Content from "./common/content";
import Card from "./common/card";
const AboutPage = () => {
  return (
    <>
      <Content>
        A little bit about me and how I became the designer I am today
      </Content>
      <div className="about-cards-container row">
        <div className="col">
          <Card
            title={"Birth"}
            text={
              "I was born in a small town in Texas called Lorem. Ipsum dolor sit amet, consectetuer adipiscing elitdolor sit. Aenean commodo ligula eget dolor."
            }
          />
        </div>
        <div className="col">
          <Card
            title={"First Steps"}
            text={
              "I took my first steps in enim justo, rhoncus ut, imperdiet a, dolor sit venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt."
            }
          />
        </div>
        <div className="col">
          <Card
            title={"College"}
            text={
              "I started college in 2001. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus."
            }
          />
        </div>
      </div>
    </>
  );
};

export default AboutPage;
