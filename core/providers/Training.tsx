import React, { PropsWithChildren, createContext, useEffect, useState } from 'react';

export const TrainingContext = createContext<any>(null);

export const TrainingProvider = (props: PropsWithChildren<{}>) => {
    const [training, setTraining] = useState({});

    useEffect(() => {
        const fetchTraining = async () => {
            const training = await fetch('https://training.bpj.workers.dev').then((response) => response.json());

            setTraining(training);
        };

        fetchTraining();
    }, []);

    return <TrainingContext.Provider value={training}>{props.children}</TrainingContext.Provider>;
};
