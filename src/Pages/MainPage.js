import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './MainPage.css';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';
function MainLogic() {
    let [functions, setFunctions] = useState(["Euler","Macy"]);
    useEffect(() => {
        fetch('./math.json').then(response => { return response.json(); }).then((data) => { setFunctions(data.maths); }).catch(e => console.log(e));
    }, []);
   
    return (<>
        <h1>This is a website to teach you cool math tricks!</h1>
        <h2 className="FuncOfDayHeader">Math Concepts Of The Day</h2>
        <table className="FuncOfDay">
            {functions.filter(a => a.funcOfDay === true).map((a, h) => <tr className="functions" key={h}>Math Function about {a.id}: <BlockMath>{a.math}</BlockMath><br /><br /><Link to={a.path} key={a.id}><img src={a.image} width="auto" height="auto" /></Link></tr>)}
            </table>
    </>);
}



export function MainDisplay() {
    let colors = ["yellow", "blue", "red", "green"];
    let [colorDisplay, setColorDisplay] = useState("visible");
   
    useEffect(() => {
        let interval = setInterval(() => { setColorDisplay(colors[Math.floor(Math.random() * (colors.length - 1))]); }, 1000);
        return () => { clearInterval(interval) };
    }, []);
    return(
        <>
            <h1 id="title" style={{ color: colorDisplay }}>Cool Math Concepts</h1>
            <MainLogic />
    </>);
}