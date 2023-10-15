import { Text, Container } from "../../common/components";
import logo from "../../assets/images/pitica-tchau.png";
import { Image } from "../../common/components";

export const HomeRoute = "Home";

export const Home = () => {
  return (
    <Container>
      <Image source={logo} w={"250px"} h={"320px"} />
    </Container>
  );
};
