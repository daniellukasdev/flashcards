import { deleteDeck } from "../../utils/api";

export default function deleteHandler(id, isDeck=false) {
    const result= window.confirm(
        "Do you want to delete this deck?\n\nYou will not be able to recover it."
        );
    if (result && isDeck) deleteDeck(id);
    
}