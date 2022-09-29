import SandwichDetails from "./SandwichDetails";
import {Sandwich} from "../model/Sandwich";
import "./SandwichOverview.css"
import SandwichOrderCard from "./SandwichOrderCard";

type SandwichOverviewProps = {
    sandwiches : Sandwich[];
    deleteSandwich : (id: string) => void;
}

export default function SandwichOverview(props : SandwichOverviewProps){

    return (
        <div className="menu-list">
            {props.sandwiches.map((sandwich) =>
                <SandwichOrderCard key={sandwich.id} sandwich={sandwich} deleteSandwich={props.deleteSandwich} /> ) }
        </div>
    )

}