import React from "react"

export default function WindowTracker() {

    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)
    /**
     * Challenge:
     * 1. Create state called `windowWidth`, default to
     *    `window.innerWidth`
     * 2. When the window width changes, update the state
     * 3. Display the window width in the h1 so it updates
     *    every time it changes
     */

    React.useEffect(() => {

        const watchWidth = () => {
            console.log("Setting up");
            setWindowWidth(window.innerWidth)
        }

        window.addEventListener("resize", watchWidth)

        return () => {
            console.log("Cleaning up...");
            window.removeEventListener("resize", watchWidth)
        }
    }, [])


    return (
        <h1>Window width: {windowWidth}</h1>
    )
}
