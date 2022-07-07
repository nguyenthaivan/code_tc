let $ = document.querySelector.bind(document)

let input = $('.search-input')
let tag = $('.tag')
let removeAll = $('.remove-all')



let tags = ['React',]



let renderTag = () => {
    let html =''
    html = tags.map((value, index) => {
        return `
            <li>
                ${value}
                <i class="delete fa-solid fa-xmark" data-index="${index}"></i>
            </li>
        `
    }).join('')
    tag.innerHTML = html
} 


input.onkeydown = e => {
    let value = input.value
    if (e.which === 13 && value!== '') {
        tags.push(value)
        renderTag()
        input.value = null
    }
}

tag.onclick = e => {
    const deleteBtn = e.target.closest('.delete')
    if (deleteBtn) {
        const index = deleteBtn.dataset.index
        tags.splice(index,1)
        renderTag()
    }
}

removeAll.onclick = () => {
    tags = []
    renderTag()
}

renderTag()