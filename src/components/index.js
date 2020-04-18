import React from "react";

import CareersList from "src/components/careers/CareersList";
import ProgramsList from "src/components/careers/ProgramsList";
import useVisualMode from "src/hooks/useVisualMode";

const CHANGE = "CHANGE";

export default function Paths() {
const { mode, transition, back } = useVisualMode(
);

{mode === CHANGE && (
<CareersList
onClick={() => transition(ProgramsList)}
/>
)}
}