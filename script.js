const links = document.querySelectorAll('.links a')
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', (e) => {
        e.preventDefault()
    })
}

const allprofiles = document.querySelectorAll('.videos')

function func1() {
    for (let i = 0; i < allprofiles.length; i++) {
        allprofiles[i].style.display = 'none'
    }
    document.querySelector('.first-video').style.display = 'block'
}
function func2() {
    for (let i = 0; i < allprofiles.length; i++) {
        allprofiles[i].style.display = 'none'
    }
    document.querySelector('.second-video').style.display = 'block'
}
function func3() {
    for (let i = 0; i < allprofiles.length; i++) {
        allprofiles[i].style.display = 'none'
    }
    document.querySelector('.third-video').style.display = 'block'

}
function func4() {
    for (let i = 0; i < allprofiles.length; i++) {
        allprofiles[i].style.display = 'none'
    }
    document.querySelector('.fourth-video').style.display = 'block'

}
function func5() {
    for (let i = 0; i < allprofiles.length; i++) {
        allprofiles[i].style.display = 'none'
    }
    document.querySelector('.fifth-video').style.display = 'block'

}
function func6() {
    for (let i = 0; i < allprofiles.length; i++) {
        allprofiles[i].style.display = 'none'
    }
    document.querySelector('.sixth-video').style.display = 'block'

}
function func7() {
    for (let i = 0; i < allprofiles.length; i++) {
        allprofiles[i].style.display = 'none'
    }
    document.querySelector('.seventh-video').style.display = 'block'

}




// rendering pages 

// translate
const googletransalte = document.querySelector('#google_translate_element')
const marque = document.querySelector('#movetext')
googletransalte.addEventListener('click', () => {
    marque.style.marginTop='4rem'
})