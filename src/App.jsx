import React from "react";
import ProfileCard from "./Components/ProfileCard";

const image =
  "https://media.licdn.com/dms/image/D5603AQEvK0OCztxhHw/profile-displayphoto-shrink_200_200/0/1714816434447?e=1720656000&v=beta&t=auBsR_Bu2XvaCwxeMSkgU565I8vpZE55n163mc7Rg8c";
const works_as = "front end webdeveloper";
const about =
  "Front-End Developer | Passion for Web & UI/UX Design | Constant Learner";
const App = () => {
  return (
    <div className="flex justify-center items-center mt-40">
      <ProfileCard name="Guru" job={works_as} image={image} about={about} />
    </div>
  );
};

export default App;
