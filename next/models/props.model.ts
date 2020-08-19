import { PropsWithChildren } from 'react';

export type CustomProps<T> = PropsWithChildren<T> & {
    className?: string;
};
