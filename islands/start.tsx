import { FunctionComponent } from "https://esm.sh/v128/preact@10.19.6/src/index.js";

// Lo muevo a Island pq tiene que ejecutar código en el cliente, y los componentes se renderizan en el servidor

const StartComp: FunctionComponent = () => {
  return (
    <div
      class="screen typewriter"
      onClick={() => window.location.assign("/lovers")}
    >
      <h1>
        Welcome to the abism of errors. You have a mission, solve them all. Good
        luck!
      </h1>
    </div>
  );
};

export default StartComp;
