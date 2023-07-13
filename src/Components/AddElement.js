import React from "react";
import { json } from "../../node_modules/react-router/dist/index";
import { InlineMath, BlockMath } from 'react-katex';
import katex from 'katex';
//(jsonElement, json)
export class ElementMaker extends React.Component {
    constructor(props) {
        super(props);
        this.mathLoader.bind(this);
        this.child=undefined; 
        this.main = undefined;
        this.compon = undefined;
    }
    mathLoader(math = 5) {
        let newChild = <InlineMath math={math}></InlineMath>;
        return newChild;
    }
    componentDidMount() {
        if (this.props.jsonElement.elementsToAdd.length !== 0) {
            for (let x = 0; x < this.props.jsonElement.elementsToAdd.length; x++) {
              this.compon = document.querySelector(this.props.jsonElement.elementIndentifier + x.toString());
              console.log(this.compon);
               this.compon.innerHTML = katex.renderToString(this.props.jsonElement.elementsToAdd[x]);
           }
        }
        
    }
    render() {
        this.child=(<><h1>{this.props.jsonElement.elementHeading}</h1><p>{this.props.jsonElement.elementAbout}</p><img src={this.props.json.image} min-width={300} min-height={300} width="auto" height="auto" /><h1>Applications</h1>
            <div id="mathOwner" dangerouslySetInnerHTML={{ __html: this.props.jsonElement.elementMain }} />    </>);
        this.main = React.createElement("div", { style: { color: "black", "minHeight": "800px", "marginTop": "-21px" } }, this.child);
        return this.main;
    }
}