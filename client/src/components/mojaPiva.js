import React from "react";
import { Card, Container } from "react-bootstrap";
import SeznamPriljubljenihPiv from "./seznamPriljubljenih";


import { motion } from 'framer-motion/dist/framer-motion';

function MojaPiva() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
            exit={{ opacity: 0, transition: { duration: 0.1 } }}
        >
            <Card>
                <Card.Text>
                </Card.Text>
            </Card>
            <Container>
                <SeznamPriljubljenihPiv />
            </Container>
        </motion.div>
    )
}

export default MojaPiva;