import { useEffect, useState } from "react";

export default function CustomCursor() {
    const [pos, setPos] = useState({ x: -100, y: -100 });
    const [active, setActive] = useState(false);

    useEffect(() => {
        const onMove = (e) => setPos({ x: e.clientX, y: e.clientY });
        const onOver = (e) =>
            setActive(Boolean(e.target.closest("a, button, input, textarea, [role='button']")));

        window.addEventListener("pointermove", onMove, { passive: true });
        window.addEventListener("pointerover", onOver, { passive: true });

        return () => {
            window.removeEventListener("pointermove", onMove);
            window.removeEventListener("pointerover", onOver);
        };
    }, []);

    return (
        <div
            aria-hidden="true"
            className={"custom-cursor " + (active ? "is-active" : "")}
            style={{ transform: `translate(${pos.x - 6}px, ${pos.y - 6}px)` }}
        />
    );
}
