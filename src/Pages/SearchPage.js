import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./SearchPage.css";
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';
export function SearchBar() {
    let [permSearchList, setPermSearchList] = useState([]);
    let [barValue, setBarValue] = useState(["lol","hi"]);
    useEffect(() => {
        fetch("./math.json").then(response => response.json()).then(data => { setPermSearchList(data.maths); }).catch(e => { console.log(e); });
    }, []);
    return (
        <>
        <header id="searchHead"><h4>Search For Math Functions</h4></header>
        <body id="searchHolder">
            <input type="text" id="searchBar" height="60" width="200" onChange={(e) => { setBarValue(e.target.value); }} />
            <table class="searchResults">
                {permSearchList.filter((a) => {
                    if (a.id.toLowerCase().includes(barValue.toString().toLowerCase()) &&barValue!=='' && barValue!==' ') {
                        return true;
                    }
                    else {
                        return false;
                    }
                }
                ).map(
                    (a, h) => <tr key={h}>Math Function about {a.id}:<BlockMath math={a.math}/><br /><br /><Link to={a.path} key={a.id}><img src={a.image} width="auto" height="auto" /></Link></tr>
                )}
            </table>
            </body>
            </>
        );
}
