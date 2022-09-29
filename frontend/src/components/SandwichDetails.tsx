import "./SandwichDetails.css"
import {Sandwich} from "../model/Sandwich";
import {Link, useParams} from "react-router-dom";

type SandwichDetailsProps = {
    sandwiches: Sandwich[];
}

export default function SandwichDetails(props: SandwichDetailsProps) {

    const params = useParams();
    const id = params.id;

    if(id===undefined){
        return <>ID is not defined!</>
    }
    const sandwich = props.sandwiches.find(sandwich => sandwich.id === id);

    if(sandwich === undefined){
        return <>No sandwich was found!</>
    }

    return (
        <div className={"sandwich-card"}>
            <Link to={"/"}>❮ Back</Link>
            <p className="name">{sandwich.name}</p>
            <p className="left-side">Bullete: </p><p>{sandwich.patty} </p>
            <p className="left-side">Anzahl von Bulleten: </p><span>{sandwich.numberOfPatties} </span>
            <p className="left-side">Brot gegrillt: </p><span>{String(sandwich.grilled)} </span>
            <p className="left-side">Extrawünsche: </p><span>{sandwich.extraWishes} </span>
        </div>
    )
}