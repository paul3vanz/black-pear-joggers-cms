import { PropsWithChildren, createRef, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Key } from '../core/enums/keyCodes';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

interface Props {
    opener?: any;
    title: string;
    onClose: any;
}

export const Dialog = (props: PropsWithChildren<Props>) => {
    const modalRef = createRef<HTMLDivElement>();

    useEffect(() => {
        modalRef.current.setAttribute('tabIndex', '-1');
        modalRef.current.focus();
        modalRef.current.removeAttribute('tabIndex');

        const keyListener = (e: KeyboardEvent) => {
            switch (e.key) {
                case Key.Escape:
                    return props.onClose();
                case Key.Tab:
                    return handleTabPress(e);
            }
        };

        document.addEventListener('keydown', keyListener);

        return () => document.removeEventListener('keydown', keyListener);
    });

    const handleTabPress = (e: KeyboardEvent) => {
        const focusableElements = modalRef.current.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        ) as NodeListOf<HTMLElement>;
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey && document.activeElement === firstElement) {
            lastElement.focus();
            e.preventDefault();
        } else if (document.activeElement === lastElement) {
            firstElement.focus();
            e.preventDefault();
        }
    };

    const handleKeyPress = (e) => {
        console.log('keypress', e);
    };

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
                        ref={modalRef}
                        className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="modal-headline">
                        <div className="m-4 sm:m-8">
                            <h2 id="modal-headline" className="text-2xl font-bold">
                                {props.title}
                            </h2>

                            {props.children}

                            <button
                                className="absolute top-3 right-3 cursor-pointer"
                                onClick={() => props.onClose()}
                                onKeyDown={() => handleKeyPress}>
                                <FontAwesomeIcon icon={faTimesCircle} size="lg" />
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
