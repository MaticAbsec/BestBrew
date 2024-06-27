import React from "react";
import { Card, Container } from "react-bootstrap";
import SeznamPriljubljenihPiv from "./seznamPriljubljenih";
import '../App.css'

import { motion } from 'framer-motion';

function MojaPiva() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
            exit={{ opacity: 0, transition: { duration: 0.1 } }}
        >
            <Container fluid className="marginTopMojaPiva">
                <Card>
                    <Card.Text>
                    </Card.Text>
                </Card>
                <Container>
                    <SeznamPriljubljenihPiv />
                </Container>
            </Container>
        </motion.div>
    )
}

export default MojaPiva;