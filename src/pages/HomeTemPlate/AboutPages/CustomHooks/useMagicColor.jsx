import { useState, useEffect } from "react"
const useMagicColor = () => {
    const [color, setColor] = useState("red");

    useEffect(() => {
        const interval = setInterval(() => {
            const colorNew = Math.floor(Math.random() * 999999);
            console.log(colorNew);
            setColor(`#${colorNew}`);
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);
    return color;
};


export { useMagicColor };