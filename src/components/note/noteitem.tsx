import {Donnee} from "./NotesListes";
import React from "react";

interface Props{
    note: Donnee;
}

const NoteItem: React.FC<Props> = (props: Props) => {

    const {note}= props;
    return(
    <div>
        <div>{note.title}</div>
        <p>{note.content}</p>
    </div>
    );
};

export default NoteItem;

