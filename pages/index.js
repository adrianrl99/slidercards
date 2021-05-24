import { Anchor, Box, Heading, Paragraph } from "grommet";
import CustomCard from "../src/components/CustomCard";
import SliderCards from "../src/components/SliderCards";

export default function Home() {
  return (
    <Box margin="large">
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
