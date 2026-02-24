let total = document.getElementById('total');
let interview = document.getElementById('interview')
let rejected = document.getElementById('rejected')
let notAppliedBtn = document.getElementById('Not-Applied-btn')

let card = document.getElementById('card')
let allFilterBtn = document.getElementById('all-filter-btn')
let interviewFilterBtn =document.getElementById('interview-filter-btn')
let rejectFilterBtn=document.getElementById('reject-filter-btn')
let mainContainer = document.querySelector('main')



let interviewlist = []

function calculateJobs() {
    total.innerText=card.children.length
}
calculateJobs();

function togglestyle(id) {
    allFilterBtn.classList.remove('bg-sky-600', 'text-white')
    interviewFilterBtn.classList.remove('bg-sky-600','text-white')
    rejectFilterBtn.classList.remove('bg-sky-600','text-white')


    allFilterBtn.classList.add('bg-white', 'text-[#64748B]')
    interviewFilterBtn.classList.add('bg-white','text-[#64748B]')
    rejectFilterBtn.classList.add('bg-white','text-[#64748B]')

    let select = document.getElementById(id);
    select.classList.remove('bg-white', 'text-[#64748B]')
    select.classList.add('bg-sky-600', 'text-white')

    
}
mainContainer.addEventListener("click", function(event){
    const parenNode = event.target.parentNode.parentNode
    const compName = parenNode.querySelector(".comp-name").innerText
    console.log(compName)
    const deleteBtn = parenNode.querySelector("delete")
    const stack=parenNode.querySelector(".stack").innerText
    const type = parenNode.querySelector(".type").innerText
    const status  = parenNode.querySelector(".status").innerText
    const notes = parenNode.querySelector(".notes").innerText

    const cardInfo ={
        compName,
        stack,
        type,
        status,
        notes
    }
    const allReadyExist = interviewlist.find(item=> item.compName == cardInfo.compName)
    if (!allReadyExist) {
        interviewlist.push(cardInfo);
    }
})
