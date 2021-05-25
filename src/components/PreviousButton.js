import { Button } from "grommet";

export default function PrevoiusButton({
  stepWidth,
  start,
  current,
  setCurrent,
  icon,
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
      {icon}
    </Button>
  );
}
