import { FC, MouseEventHandler, ReactNode, useEffect, useRef, useState } from "react";

interface OverlayTypes {
    onClick?: MouseEventHandler<HTMLDivElement>,
    className?: string,
    zVal?: string
    children?: ReactNode,
    enableTranslate?: boolean
}

const Overlay: FC<OverlayTypes> = ({
    onClick,
    className,
    zVal = "z-[35]",
    children,
    enableTranslate = false
}) => {

    const overlayRef = useRef<HTMLDivElement>(null);
    const [translate, setTranslate] = useState({ left: 0, top: 0 });

    useEffect(() => {
        if (enableTranslate && overlayRef.current) {
            const rect = overlayRef.current.getBoundingClientRect();
            setTranslate({ left: -rect.left, top: -rect.top });
        } else {
            setTranslate({ left: 0, top: 0 });
        }
    }, [enableTranslate]);


    return (
        <div
            ref={overlayRef}
            style={{ transform: `translate(${translate.left}px, ${translate.top}px)` }}
            className={`${zVal} OVERLAY bg-black opacity-30 top-0 left-0 w-screen fixed h-screen overflow-hidden ${className}`}
            onClick={onClick}
        >
            {children}
        </div>
    )
}

export default Overlay



