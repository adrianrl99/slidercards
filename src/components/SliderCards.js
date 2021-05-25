import PreviousButton from "./PreviousButton";
import NextButton from "./NextButton";
import { Box } from "grommet";
import { Next, Previous } from "grommet-icons";
import { useEffect, useRef, useState } from "react";

export default function SliderCards({
  stepWidth = 100,
  title,
  previous = <Previous />,
  next = <Next />,
  children,
}) {
  const contentRef = useRef();
  const sliderRef = useRef();
  const [start] = useState(0);
  const [end, setEnd] = useState(0);
  const [current, setCurrent] = useState(0);
  const [show, setShow] = useState(false);

  useEffect(() => {
    setWidth();

    addEventListener("resize", () => {
      setWidth();
    });
  }, []);

  const setWidth = () => {
    if (sliderRef.current.clientWidth > contentRef.current.clientWidth) {
      setShow(true);
    }
    setEnd(sliderRef.current.clientWidth - contentRef.current.clientWidth);
  };

  return (
    <Box overflow={{ horizontal: "hidden" }} ref={contentRef}>
      <Box flex={true} direction="row">
        <Box flex={true}>{title}</Box>
        {show && (
          <Box flex={{ shrink: 0 }} direction="row" justify="end">
            {current > start && (
              <Box style={{ marginRight: 20 }}>
                <PreviousButton
                  stepWidth={stepWidth}
                  current={current}
                  setCurrent={setCurrent}
                  start={start}
                  icon={previous}
                />
              </Box>
            )}
            {current < end && (
              <Box>
                <NextButton
                  stepWidth={stepWidth}
                  current={current}
                  setCurrent={setCurrent}
                  end={end}
                  icon={next}
                />
              </Box>
            )}
          </Box>
        )}
      </Box>
      <Box
        flex={true}
        direction="row"
        overflow={{ horizontal: "hidden" }}
        width={{ max: "initial" }}
        alignSelf="start"
        ref={sliderRef}
        style={{
          transform: `translate(-${current}px)`,
          transition: "transform 0.2s ease 0s",
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
