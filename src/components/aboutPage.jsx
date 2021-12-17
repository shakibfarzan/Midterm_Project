import React from "react";
import Content from "./common/content";
import Card from "./common/card";
import TextContent from "./common/textContent";
import ProgressBar from "./common/progressBar";

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
      <div className="text-content-container">
        <div className="row">
          <div className="col">
            <TextContent
              title={"What I can do for you"}
              paragraphs={[
                {
                  id: 1,
                  content:
                    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
                },
                {
                  id: 2,
                  content:
                    "Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
                },
              ]}
            />
          </div>
          <div className="col">
            <TextContent
              title={"How i usually work"}
              paragraphs={[
                {
                  id: 1,
                  content:
                    "Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
                },
                {
                  id: 2,
                  content:
                    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
                },
              ]}
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <TextContent
              title={"Skills"}
              paragraphs={[
                {
                  id: 1,
                  content:
                    "Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.",
                },
                {
                  id: 2,
                  content:
                    "Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
                },
              ]}
              list={[
                { id: 1, content: "Nullam felis eu pede mollis pretium." },
                {
                  id: 2,
                  content:
                    "Integer tincidunt. Cras dapibusc onsectetuer adipiscing eli.",
                },
                { id: 3, content: "Vivamus elementum semper nisi." },
                {
                  id: 4,
                  content:
                    "Lorem ipsum dolor sit amet. Aenean commodo ligula eget dolor.",
                },
              ]}
            />
          </div>
          <div className="col">
            <ProgressBar progress={"100%"} title={"LOGO DESIGN"} />
            <ProgressBar progress={"100%"} title={"BRAND DESIGN"} />
            <ProgressBar progress={"80%"} title={"WEB DESIGN"} />
            <ProgressBar progress={"70%"} title={"CONTENT CREATION"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
