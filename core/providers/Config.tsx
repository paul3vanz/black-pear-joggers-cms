import React, { PropsWithChildren, createContext, useEffect, useState } from 'react';

export interface ConfigContextProps {
    announcement: {};
}

export const ConfigContext = createContext<any>(null);

export const ConfigProvider = (props: PropsWithChildren<{}>) => {
    const [config, setConfig] = useState({});

    useEffect(() => {
        const fetchConfig = async () => {
            const config = await fetch('/config.json', {
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
            }).then((response) => response.json());

            setConfig(config);

            return config;
        };

        fetchConfig();

        console.log('effect');
    }, []);

    return <ConfigContext.Provider value={config}>{props.children}</ConfigContext.Provider>;
};

// const fetchConfig = { announcement: { title: 'from fetchConfig' } };
