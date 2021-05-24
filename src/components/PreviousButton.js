import { Button } from "grommet";
import { Previous } from "grommet-icons";

export default function PrevoiusButton({
  stepWidth,
  start,
  current,
  setCurrent,
}) {
  return (
    <Button
      onClick={() => {
        if (current - stepWidth < start) {
          setCurrent(start);
        } else {
          setCurrent(current - stepWidth);
        }
      }}
    >
      <Previous />
    </Button>
  );
}
