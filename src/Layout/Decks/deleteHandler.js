import { deleteDeck, deleteCard } from "../../utils/api";

export default function deleteHandler(id, isDeck=false) {
    let message = "";
    if (isDeck) {
        message = "Do you want to delete this deck?";
    } else {
        message = "Delete this card?"
    }

    const result= window.confirm(
        `${message}\n\nYou will not be able to recover it.`
        );
    if (result && isDeck) deleteDeck(id);
    if (result && !isDeck) deleteCard(id)
    
}