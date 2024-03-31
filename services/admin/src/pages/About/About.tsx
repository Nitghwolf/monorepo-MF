import { FC } from "react";
import { UserCard } from "@packages/shared/src/components/UserCard";

const About: FC = () => {
  return (
    <>
      <h1>About</h1>
      <UserCard username={"Admin"} />
    </>
  );
};

export default About;
