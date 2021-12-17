import React from "react";
import Content from "./common/content";
import Card from "./common/card";

const cards_data = [
  {
    id: 1,
    title: "Invitation!",
    text: "Welcome my Friends! This is your first post. Edit or delete it, then start blogging!",
    imgUrl:
      "https://kriesi.at/themes/enfold-elegant-portfolio/wp-content/uploads/sites/77/2018/04/mockup-6-705x666.jpg",
  },
  {
    id: 2,
    title: "Entry with Audio",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.…",
    imgUrl:
      "https://kriesi.at/themes/enfold-elegant-portfolio/wp-content/uploads/sites/77/2018/04/mockup-4-705x666.jpg",
  },
  {
    id: 3,
    title: "A small gallery",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.…",
    imgUrl:
      "https://kriesi.at/themes/enfold-elegant-portfolio/wp-content/uploads/sites/77/2018/04/logo-8-705x666.jpg",
  },
  {
    id: 4,
    title: "A nice entry",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean…",
    imgUrl:
      "https://kriesi.at/themes/enfold-elegant-portfolio/wp-content/uploads/sites/77/2018/04/mockup-3-705x666.jpg",
  },
  {
    id: 5,
    title: "Entry without preview image",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean…\nLorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean…",
    imgUrl: "",
  },
  {
    id: 6,
    title: "Entry with Post Format “Video”",
    text: "http://vimeo.com/groups/stockfootage/videos/41629603",
    imgUrl:
      "https://kriesi.at/themes/enfold-elegant-portfolio/wp-content/uploads/sites/77/2018/04/mockup-5-705x666.jpg",
  },
  {
    id: 7,
    title: "This is a post with post type “Link”",
    text: "Entries with this post type link to a different page with their headline. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
    imgUrl: "",
  },
  {
    id: 8,
    title: "A nice post",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean…",
    imgUrl:
      "https://kriesi.at/themes/enfold-elegant-portfolio/wp-content/uploads/sites/77/2018/04/mockup-1-705x666.jpg",
  },
];
const firstRow = cards_data.filter((c) => c.id < 5);
const secondRow = cards_data.filter((c) => c.id >= 5);
const BlogPage = () => {
  return (
    <>
      <Content>
        Blog – Here you can read the latest news regarding our projects and
        clients
      </Content>
      <div className="blog-cards-container">
        <div className="row">
          {firstRow.map((card) => (
            <div className="col">
              <Card
                key={card.id}
                title={card.title}
                text={card.text}
                imgUrl={card.imgUrl}
              />
            </div>
          ))}
        </div>
        <div className="row">
          {secondRow.map((card) => (
            <div className="col">
              <Card
                key={card.id}
                title={card.title}
                text={card.text}
                imgUrl={card.imgUrl}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogPage;
