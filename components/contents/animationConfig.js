
export const animationConfig = {
    mainAnimation: {
        initial: { x: 0, opacity: 0.7 },
        animate: { x: 0, opacity: 1 },
        exit: { x: 0, opacity: 0.7 },
        transition: {
            ease: "linear",
            duration: 0.5,
            x: { duration: 0.5 }
        }
    },
    gatesAnimation: {
        initial: { x: 0, opacity: 0.7},
        animate: { x: 0, opacity: 1},
        exit: { x: 0, opacity: 0.7},
        transition: {
            duration: 0.5
        }
    },
    headerAnimation: {
        initial: { x: 0, opacity: 1 },
        animate: { x: 0, opacity: 1 },
        exit: { x: 0, opacity: 0.7 },

    }
}