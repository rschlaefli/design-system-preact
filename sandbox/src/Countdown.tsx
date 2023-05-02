import React from "preact/compat";
import { Countdown as BFCountdown } from "@uzh-bf/design-system";

type Props = {
  duration: number;
};

export const Countdown: React.FunctionComponent<Props> = ({ duration }) => {
  return <BFCountdown countdownDuration={duration} />;
};
