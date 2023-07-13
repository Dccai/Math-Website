import React from 'react';
import { json } from '../../node_modules/react-router/dist/index';
import preval from 'babel-plugin-preval/macro';
import './AddFunc.css';
export function AddMath() {
     function handleSubmit(e) {
         e.preventDefault();
        let formData = new FormData(e.currentTarget);
        let newData = Object.fromEntries(formData);
         newData.funcOfDay = false;
         let jsonData = JSON.stringify(newData);
         console.log(newData);
        //let fs = require('fs');
        //let data = fs.readFileSync('math.json');
        //let myObject = JSON.parse(data);
        //myObject.push(newData)
        //let jsonData = JSON.stringify(myObject);
        //fs.writeFile('math.json', jsonData, err => {
        //    if (err) throw err;

          //  console.log("New data added");
        //});
        fetch('http://localhost:3000/math.json', { method: "POST", headers: { 'Content-Type': 'application/json' }, body: jsonData }).then(response => response.json()).then(data=>console.log(data)).catch(e => console.log(e));
    }
    return (
        <main id="body">
            <form onSubmit={handleSubmit}>
                <label htmlFor="id">Math Concept</label>
                <input type="text" name="id" />
                <label htmlFor="math">Math Latex</label>
                <input type="text" name="math" />
                <label htmlFor="image">Image of Math Concept</label>
                <input type='text' name="image" />
                <input type="submit"/>
            </form>
        </main>
        );

}
