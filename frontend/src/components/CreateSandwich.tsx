import {ChangeEvent, useState} from "react";
import {Sandwich} from "../model/Sandwich";
import "./CreateSandwich.css"

type CreateSandwichProps = {
    addSandwich: (description: Sandwich) => void
}

export default function CreateSandwich(props: CreateSandwichProps) {

    const emptySandwichPlaceholder: Sandwich = {
        id: "",
        name: "",
        patty: "",
        numberOfPatties: 0,
        grilled: false,
        extraWishes: ""
    }

    const [sandwich, setSandwich] = useState(emptySandwichPlaceholder)

    /*
    * TODO: Aufgabe 3 -> Erstelle eine handleSubmit(event: FormEvent<HTMLFormElement>) Funktion,
    *  die props.addSandwich aufruft und das neue Sandwich-Objekt als Parameter übergibt
    **/

    /*
    * TODO: Aufgabe 2 -> Erstelle eine handleChange(event: ChangeEvent<HTMLInputElement>) Funktion,
    *  die Änderungen an der Form übernimmt und den Sandwich-State aktualisiert
    **/


    const handleChange=(event:ChangeEvent<HTMLInputElement>)=> {
        const inputFieldValue = event.target.value;
        const inputFieldType = event.target.type;
        const inputFieldName = event.target.name;

        setSandwich( oldSandwich =>(
            { ...oldSandwich,
                [inputFieldName]:
                    inputFieldType === "checkbox" ? event.target.checked
                        :inputFieldValue
            }
            )
        )
    }

    const handleSubmit = () => {
        props.addSandwich(sandwich)
    }

    /*
    * TODO: Aufgabe 1 -> Erstelle eine <form> mit der man alle Daten eines Burgers angeben kann
    **/
    return (
        <div>
            <form className={"form-order"} onSubmit={handleSubmit}>
                <label className={"form-label"}>
                    ID:
                    <input
                        name="id"
                        placeholder="ID"
                        type="text"
                        value={sandwich.id}
                        onChange={handleChange}
                    />
                </label>
                <label className={"form-label"}>
                    Name:
                    <input
                        name="name"
                        placeholder="name"
                        type="text"
                        value={sandwich.name}
                        onChange={handleChange}
                    />
                </label>
                <label className={"form-label"}>
                    Patty:
                    <input
                        name="patty"
                        placeholder="patty"
                        type="text"
                        value={sandwich.patty}
                        onChange={handleChange}
                    />
                </label>
                <label className={"form-label"}>
                    Number of Patties:
                    <input
                        name="numberOfPatties"
                        placeholder="number Of Patties"
                        type="text"
                        value={sandwich.numberOfPatties}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Grilled:
                    <input
                        name="grilled"
                        type="checkbox"
                        checked={sandwich.grilled}
                        onChange={handleChange}
                    />
                </label>
                <label className={"form-label"}>
                    Extra wishes:
                    <input
                        name="extraWishes"
                        placeholder="extra wishes"
                        type="text"
                        value={sandwich.extraWishes}
                        onChange={handleChange}
                    />
                </label>
                <input type={"submit"} value={"Bestellung hinzufügen"}/>
            </form>
            {/* TODO: onClick hier entfernen und props.addSandwich in handleSubmit verschieben */}
            {/*<button >Bestellung hinzufügen</button>*/}
        </div>
    )

    /* TODO: Bonusaufgabe 1 -> Füge dem Projekt Routing hinzu (click auf ein Sandwich, öffnet die Sandwich-Details wie bei Rick&Morty)  */
    /* TODO: Bonusaufgabe 2 -> Style das Projekt nach deinen Wünschen  */
    /* TODO: Bonusaufgabe 3 -> Gib dem Sandwich-Objekt mehr Attribute (im Frontend + Backend)  */
}