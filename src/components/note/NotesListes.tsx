import NoteItem from "./noteitem";
import React from "react";
const NotesListes: React.FC = () => {
    return(
    <div>
        {
            (data.map((item) =>
                <NoteItem note={item} key={item.id}/>
            ))
        }
    </div>
    )
};
export default NotesListes;

const data: Donnee[] = [
    {
        id: 1,
        title: "titre 1",
        content: "content 1"
    },
    {
        id: 2,
        title: "titre 2",
        content: "content 2"
    },
    {
        id: 3,
        title: "titre 3",
        content: "content 3"
    },

];

export interface Donnee {
    id: number,
    title:string,
    content:string
}