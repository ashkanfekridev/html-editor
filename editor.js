var editorContent = document.getElementById('editor-content');

// create html element
document.getElementById("editor-header_create-p").addEventListener('click', () => {
    let elm = document.createElement('p');
    elm.appendChild(document.createTextNode('پاراگراف جدید...'));
    // elm.setAttribute('contenteditable', 'true');
    editorContent.appendChild(elm)
    resetDom()

});

document.getElementById("editor-header_create-h1")
    .addEventListener('click', () => {
        let elm = document.createElement('h1');
        elm.appendChild(document.createTextNode('متن هد شماره 1 جدید...'));
        // elm.setAttribute('contenteditable', 'true');
        editorContent.appendChild(elm)
        resetDom()

    });


let resetDom = () => {
    // dlete html element
    Array.from(editorContent.children)
        .forEach((item) => {
            item.addEventListener('contextmenu', (elm) => {
                console.log(item.remove())
            })
            console.log(item)
        })


    // content editble

    Array.from(editorContent.children)
        .forEach((item) => {


            item.addEventListener('dblclick', (elm) => {

                Array.from(editorContent.children)
                    .forEach((i) => {
                        i.removeAttribute('contenteditable');
                    })

                item.setAttribute('contenteditable', 'true');
            })
        })
}

resetDom();
