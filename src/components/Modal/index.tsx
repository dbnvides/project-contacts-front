import { createPortal } from "react-dom";
import { ReactNode, useEffect, useRef } from "react";
import { SWrapper } from "./styled";

interface ModalProps {
    toggleModal: (type: string) => void;
    type: string;
    children: ReactNode;
}

export const Modal = ({ toggleModal, children, type }: ModalProps) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClick = (event: MouseEvent) => {
            if (!ref.current) {
                return;
            }

            if (!event.target) {
                return;
            }

            if (!ref.current.contains(event.target as HTMLElement)) {
                toggleModal(type);
            }
        };

        window.addEventListener("mousedown", handleClick);

        return () => {
            window.removeEventListener("mousedown", handleClick);
        };
    }, [toggleModal]);

    return createPortal(
        <SWrapper>
            <div ref={ref}>{children}</div>
        </SWrapper>,
        document.body
    );
};
