import { useState } from 'react';

import { createStage } from '../createStage';

const useStage = () => {
    // set up same way as usePlayer for creating the stage
    const [stage, setStage] = useState(createStage());
    return [stage, setStage];
}

export default useStage;