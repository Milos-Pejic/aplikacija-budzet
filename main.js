const selcet = document.querySelector('#select')

const inputOpis = document.querySelector('#txt')
const inputIzns = document.querySelector('#num')
const btn = document.querySelector('#dodaj')

const saldo = document.querySelector('#saldo')
const plus = document.querySelector('#plus')
const minus = document.querySelector('#minus')

const ulPrihod = document.querySelector('#prihodi')

const ulRashodi = document.querySelector('#rashodi')

const procenta = document.querySelector('#procenat')


let prihodi = []
let rashodi = []

btn.addEventListener('click', () => {
    if (selcet.value == 0) {
        alert('Niste izabrali unos')
    }
    if (inputIzns.vale <= 0) {
        alert('Morate uneti poziivan broj')
    }
    if (inputOpis.value.length == 0) {
        alert('niste uneli opis')
    }
    if (inputIzns.value.length == 0) {
        alert('niste uneli iznos')
    }
    if (selcet.value == 1) {
        dodajPrihod()
    }
    if (selcet.value == 2) {
        dodajRashod()
    }

})

function dodajPrihod() {
    let prihod = {
        opis: inputOpis.value,
        iznos: Number(inputIzns.value)
    }

    prihodi.push(prihod)

    console.log(prihodi)

    const p = `
    <p><span>${prihod.opis}:</span><span id="iznos">+ ${prihod.iznos}</span></p>
    `
    const li = document.createElement('li')
    li.innerHTML = p



    const btnDel = document.createElement('button')
    btnDel.className = "hide show"
    btnDel.textContent = 'Delete'
    li.appendChild(btnDel)
    btnDel.addEventListener('click', () => {
        li.remove()
        prihodi.splice(prihodi.indexOf(prihod), 1)
        console.log(prihodi)
    })

    ulPrihod.appendChild(li)

    izaracunajBudzet()
}

function dodajRashod() {
    let rashod = {
        opis: inputOpis.value,
        iznos: Number(inputIzns.value)
    }
    rashodi.push(rashod)
    const p = `
    <p><span>${rashod.opis}:</span><span id="iznosrashod">- ${rashod.iznos}</span></p>
    `
    const li = document.createElement('li')
    li.innerHTML = p

    const btnDel = document.createElement('button')
    btnDel.className = "hide show"
    btnDel.textContent = 'Delete'
    li.appendChild(btnDel)
    btnDel.addEventListener('click', () => {
        li.remove()
        rashodi.splice(rashodi.indexOf(rashod), 1)
        console.log(rashodi)
    })

    ulRashodi.appendChild(li)

    izaracunajBudzet()
}

function izaracunajBudzet() {
    let ukupanBuzdet = 0;
    let ukupuanPrihod = 0;
    let ukupanRashod = 0;
    for (let prihod of prihodi) {
        ukupuanPrihod += prihod.iznos
    }
    for (let rashod of rashodi) {
        ukupanRashod += rashod.iznos
    }
    ukupanBuzdet = ukupuanPrihod - ukupanRashod


    saldo.textContent = ukupanBuzdet
    plus.textContent = ukupuanPrihod
    minus.textContent = ukupanRashod
    let x = ((ukupanRashod / ukupuanPrihod) * 100)


    procenat.textContent = x.toFixed(2)


    selcet.value = ''
    inputIzns.value = ''

    inputOpis.value = ''


    console.log(ukupuanPrihod)
    console.log(ukupanRashod)
    console.log(ukupanBuzdet)
}