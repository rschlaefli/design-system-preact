// @ts-ignore
import register from "preact-custom-element";
import { Countdown as BFCountdown } from "@uzh-bf/design-system";

import { Button } from "./Button";
import { Countdown } from "./Countdown";

register(Button, "x-button", ["text", "onClick"], {
  shadow: false
});

register(Countdown, "x-countdown", ["text"], {
  shadow: false
});

register(BFCountdown, "x-bf-countdown", ["countdownDuration"], {
  shadow: false
});
