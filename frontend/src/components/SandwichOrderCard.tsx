import {Sandwich} from "../model/Sandwich";
import "./SandwichOrderCard.css"
import {Link} from "react-router-dom";

type SandwichOrderCard = {
    sandwich:Sandwich;
    deleteSandwich : (id: string) => void;
}

export default function SandwichOrderCard(props:SandwichOrderCard){
    return(
        <div className={"sandwich-order-card"}>
            <button onClick={() => props.deleteSandwich(props.sandwich.id)}>X</button>
            <Link to={"/"+ props.sandwich.id}>
                <p className="name">{props.sandwich.name}</p>
            </Link>
        </div>
    )
}