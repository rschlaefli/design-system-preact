import React from "preact/compat";
import { Button as BFButton } from "@uzh-bf/design-system";

type Props = {
  text: string;
};

export const Button: React.FunctionComponent<Props> = ({ text }) => {
  return <BFButton onClick={() => console.log()}>{text}</BFButton>;
};
