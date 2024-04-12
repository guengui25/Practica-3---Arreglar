import { IS_BROWSER } from "$fresh/runtime.ts";
import { FunctionComponent } from "https://esm.sh/v128/preact@10.19.6/src/index.js";
import { Signal } from "@preact/signals";

type HiSignals = {
  name: Signal<string>;
  surname: Signal<string>;
};

type HiButtonProps = {
  name: string;
  surname: string;
  HiSignals: HiSignals;
};


const HiButton: FunctionComponent<HiButtonProps> = (
  { type, children },
) => {
  const audio = IS_BROWSER ? new Audio("./hihihi.mp3") : null;
  return (
    <button
      class="trippyBackgroundAnimated"
      type={type}
      onClick={(e) => {
        e.preventDefault();
        if (audio && audio.paused) {
          audio.play();
        } else if (audio) {
          audio.pause();
        }



      }}
    >
      {children}
    </button>
  );
};

export default HiButton;
