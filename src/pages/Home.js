import React from "react";
import "./Home.css";
import Step from "../components/Step";
import Button from "../components/Button";
import BodyIntro from "../components/BodyIntro";
import { NavLink } from "react-router-dom";
import {
  faDirections,
  faListUl,
  faRandom,
} from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const stepsText = [
    {
      title: "Step 1",
      description: "Navigate to the Create page.",
      icon: faDirections,
    },
    {
      title: "Step 2",
      description:
        "Start adding items to the list that you want to choose from.",
      icon: faListUl,
    },
    {
      title: "Step 3",
      description:
        "Click the 'Pick for me' button to pick a random item out of the list!",
      icon: faRandom,
    },
  ];

  const introText = {
    title: "The super awesome app!",
    blurb:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  };

  return (
    <article>
      <BodyIntro title={introText.title} blurb={introText.blurb} />
      <section className="body__get-started">
        <NavLink exact activeClassName="current" to="/create">
          <Button text="Get Started" btnStyle="solid" />
        </NavLink>
      </section>
      <section className="body__steps">
        {stepsText.map((step, index) => {
          return (
            <Step
              key={index}
              title={step.title}
              desc={step.description}
              icon={step.icon}
            />
          );
        })}
      </section>
    </article>
  );
};

export default Home;
