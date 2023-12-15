import "./styles.css";

import Galary from "./Galary";
import Modal from "./Modal";
import Navigation from "./Navigation";
import { useState } from "react";

export default function App() {
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(null);
  const handleShow = (item) => {
    console.log("i;", item);
    setVisible(true);
    setActive(item);
  };
  const handleClose = () => setVisible(false);

  return (
    <div className="App">
      <Galary
        data={["1", "2", "3", "4", "5", "6"]}
        onClick={handleShow}
        active={active}
      />
      {visible && (
        <Modal
          onClose={handleClose}
          content={active}
          title="Selected Item"
          children={active}
        >
          <div className="content">
            {active}
            <Navigation
              current={active}
              onNext={() => {
                if (Number(active) + 1 < 6) {
                  console.log("dd:", active);
                  setActive((act) => `${Number(act) + 1}`);
                }
              }}
              onPrev={() => {
                if (Number(active) - 1 > 0) {
                  setActive((act) => `${Number(act) - 1}`);
                }
              }}
            />
          </div>
        </Modal>
      )}
    </div>
  );
}
