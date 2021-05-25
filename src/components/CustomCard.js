import { Card, CardBody, Image } from "grommet";

export default function CustomCard({ imageSrc, title }) {
  return (
    <Card
      height="medium"
      width="small"
      overflow="hidden"
      background="dark-1"
      margin="small"
      style={{ flexShrink: 0 }}
    >
      <CardBody pad="small">
        <Image src={imageSrc} fit="cover" />
        {title || ""}
      </CardBody>
    </Card>
  );
}
