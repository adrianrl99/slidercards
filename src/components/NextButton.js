import { Button } from "grommet";

export default function NextButton({
  stepWidth,
  end,
  current,
  setCurrent,
  icon,
}) {
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
      {icon}
    </Button>
  );
}
