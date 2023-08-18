let form = document.forms.signup
let iminput = form.querySelectorAll('.iminputs')
let imtxt = form.querySelectorAll('.importantp')
let need = form.querySelectorAll('.needfill')
let warming = form.querySelectorAll('.wrongimmg')
let inps = form.querySelectorAll('input')
let filled = document.querySelector('.filled')
let unfilled = document.querySelector('.unfilled')
let filledneed = document.querySelector('.filledneed')

form.onsubmit = (event) => {
    event.preventDefault();

    let filledinputs = 0
    
    inps.forEach(inp => {
        if(inp.value.length > 0) {
            filledinputs++
            filled.innerHTML = filledinputs
            
            unfilled.innerHTML = 12 - filledinputs 
        }
    })
    
    
    
    let filledneeded = 0
    iminput.forEach((inp2, index) => {        
        if(inp2.value.length === 0) {
            inp2.style.borderColor = 'red'

            if(imtxt[index]) {
                imtxt[index].style.color = 'red'
            }

            if(need[index]) {
                need[index].style.color = 'red'
                need[index].innerHTML = 'Please, fill in the fields!'
            }

            if(warming[index]) {
                warming[index].style.display = 'block'
            }
        } else {
            inp2.style.borderColor = '#543FD3'

            if(imtxt[index]) {
                imtxt[index].style.color = '#4200FF'
            }

            if(need[index]) {
                need[index].style.color = '#595959'
                need[index].innerHTML = 'Need to fill'
            }
            if(warming[index]) {
                warming[index].style.display = 'none'
            }
        }

        if(inp2.value.length > 0) {
            filledneeded++
            filledneed.innerHTML = filledneeded
        }
    })
}


function submit() {
    let user = {}

    let fm = new FormData(form)

    fm.forEach((value, key) => {
        user[key] = value
    })
    
    console.log(user);
}

            



