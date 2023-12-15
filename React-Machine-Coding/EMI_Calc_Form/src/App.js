import Button from "./Button";
import CheckboxGroup from "./CheckboxGroup";
import Checkbox from "./Checkbox";
import TextInput from "./TextInput";
import EmiCalc from "./EmiCalc";
import Slider from "./Slider";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Button label={"Copy"} />
      <CheckboxGroup
        options={[
          { label: "c1udsnidunskdisud", value: "c1", id: "c1" },
          { label: "c2", value: "c2", id: "c2" },
          { label: "c3", value: "c3", id: "c3" }
        ]}
      />
      <Slider label="hello" value="4" />
      <TextInput label={"text"} />
      {/* <Checkbox label="C1" id="C1" value="C1" /> */}

      <EmiCalc />
    </div>
  );
}
