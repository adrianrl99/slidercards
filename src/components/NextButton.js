import { Button } from "grommet";
import { Next } from "grommet-icons";

export default function NextButton({ stepWidth, end, current, setCurrent }) {
  return (
    <Button
      onClick={() => {
        if (current + stepWidth > end) {
          setCurrent(end);
        } else {
          setCurrent(current + stepWidth);
        }
      }}
    >
      <Next />
    </Button>
  );
}
