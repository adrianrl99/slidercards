import { Box } from "grommet";
import { Github } from "grommet-icons";
import CustomCard from "../src/components/CustomCard";
import SliderCards from "../src/components/SliderCards";

export default function Home() {
  return (
    <Box margin="large">
      <Box flex={true} align="end" margin={"medium"}>
        <a
          href="https://github.com/adrianrl99/slidercards"
          target="_blank"
          title="Enlace a GitHub"
        >
          <Github />
        </a>
      </Box>
      <SliderCards title={"Carrusel"}>
        {Array(20)
          .fill()
          .map((_, index) => (
            <CustomCard
              key={index}
              imageSrc="/images/fondo.jpeg"
              title="Tarjeta"
            />
          ))}
      </SliderCards>
      <SliderCards title={"Carrusel sin botones"}>
        {Array(5)
          .fill()
          .map((_, index) => (
            <CustomCard
              key={index}
              imageSrc="/images/fondo.jpeg"
              title="Tarjeta"
            />
          ))}
      </SliderCards>
    </Box>
  );
}
