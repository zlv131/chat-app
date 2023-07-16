import React from 'react';
import {
    Step,
    StepDescription,
    StepIcon,
    StepIndicator,
    StepNumber,
    StepSeparator,
    StepStatus,
    StepTitle,
    Stepper,
    Box,
} from '@chakra-ui/react'
import {useAppSelector} from "../../hooks/useAppSelector.ts";


const Steppers: React.FC = () => {

    const steps = useAppSelector(state => state.stepSlice.steps);
    const currentStep = useAppSelector(state => state.stepSlice.currentStep);

    return (
        <Stepper size='lg' index={currentStep}>
            {steps.map(( index) => (
                <Step key={index}>
                    <StepIndicator>
                        <StepStatus
                            complete={<StepIcon />}
                            incomplete={<StepNumber />}
                            active={<StepNumber />}
                        />
                    </StepIndicator>

                    <Box flexShrink='0'>
                        <StepTitle/>
                        <StepDescription/>
                    </Box>

                    <StepSeparator />
                </Step>
            ))}
        </Stepper>
    )
};

export default Steppers;