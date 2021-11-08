import { deleteDeck } from "../../utils/api";

export default function deleteDeckHandler(id) {
    const result= window.confirm("Do you want to delete this deck?");
    if (result) deleteDeck(id);
    
}