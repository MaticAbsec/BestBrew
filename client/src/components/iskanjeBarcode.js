import React from "react";
import BarcodeScannerComponent from "react-qr-barcode-scanner";
import { Card } from "react-bootstrap";
import { motion } from 'framer-motion';
import "../App.css"


function IskanjeBarcode() {
  const [data, setData] = React.useState("Pivo ni bilo najdeno.");
  const [stopStream, setStopStream] = React.useState(false);

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%", transition: { duration: 0.5 } }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
      >
      <center>
        <Card>
          <h1>Iskanje ~ Barcode</h1>
          <div className="w-full h-12">

            <BarcodeScannerComponent
              width={500}
              height={500}
              stopStream={stopStream}
              onUpdate={(err, result) => {
                if (result) {
                  setData(result.text);
                  setStopStream(true);
                } else {
                  setData("Not Found");
                }
              }}
            />
          </div>
          <h2 style={{fontSize: 'h2'}}>{data}</h2>
        </Card>
      </center>
    </motion.div>
  );
}

export default IskanjeBarcode;