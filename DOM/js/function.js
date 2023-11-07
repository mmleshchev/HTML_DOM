const node_for_click = document.getElementById('for_click')

function find_edit() {
    const LastName = document.getElementsByTagName('span') [3]
    console.log(LastName.innerText)
    LastName.innerText = 'Leshchev'

    const name = document.getElementsByTagName('span') [4]
    console.log(name.innerText)
    name.innerText = 'Mikhail'

    const birth = document.getElementsByTagName('p') [6]
    console.log(birth.innerText)
    birth.innerText = 'Year of Birth 2004'

}
node_for_click.addEventListener('click', find_edit)

    const node_for_click1 = document.getElementById('for_click1')

function find_edit1() {
    const LastName = document.getElementsByTagName('span') [3]
    console.log(LastName.innerText)
    LastName.innerText = 'Лещёв'

    const name = document.getElementsByTagName('span') [4]
    console.log(name.innerText)
    name.innerText = 'Михаил'

    const birth = document.getElementsByTagName('p') [6]
    console.log(birth.innerText)
    birth.innerText = 'Год рождения 2004'



}


node_for_click1.addEventListener('click', find_edit1)
