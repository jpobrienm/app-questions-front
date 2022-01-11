import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import '../../node_modules/react-quill/dist/quill.snow.css';


const TextEditor = ({body, setBody}) => {


    const handlerBody = e => {
        setBody(e);
    }



    return (
        <div>
            <form>
                <ReactQuill
                    placeholder='Escribe acá'
                    modules={TextEditor.modules}
                    formats={TextEditor.formats}
                    onChange={handlerBody}
                    value={body}
                    className='texto-enriquecido'
                />
            </form>
        </div>
    )
}

TextEditor.modules = {
    toolbar: [
        [{ header: "1" }, {header: "2"}, {header: [3, 4, 5, 6]}, {font: []}],
        [{ size: [] }],
        [ "bold", "italic", "underline", "strike", "blockquote" ],
        [{ list: "ordered", }, { list: "bullet" }],
        ["link", "image", "video"],
        ["clean"],
        ["code-block"],
    ],
};

TextEditor.formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
    "image",
    "video",
    "code-block"
];

export default TextEditor;