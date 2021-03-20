import React, { PropsWithChildren } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

interface Props {
    title: string;
    open: boolean;
    onClose: any;
}

export const Dialog = (props: PropsWithChildren<Props>) => {
    if (!props.open) {
        return null;
    }

    return (
        <>
            <div className="fixed z-30 inset-0 overflow-y-auto">
                <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                        <div className="absolute inset-0 bg-black opacity-80"></div>
                    </div>

                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                        &#8203;
                    </span>

                    <div
                        className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="modal-headline">
                        <div className="m-4 sm:m-8">
                            <h2 id="modal-headline" className="text-2xl font-bold">
                                {props.title}
                            </h2>

                            {props.children}

                            <a className="absolute top-3 right-3 cursor-pointer" onClick={() => props.onClose()}>
                                <FontAwesomeIcon icon={faTimesCircle} size="lg" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
