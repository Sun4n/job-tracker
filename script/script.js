let total = document.getElementById('total');
let interview = document.getElementById('interview')
let rejected = document.getElementById('rejected')
let notAppliedBtn = document.getElementById('Not-Applied-btn')

let card = document.getElementById('card')
let allFilterBtn = document.getElementById('all-filter-btn')
let interviewFilterBtn =document.getElementById('interview-filter-btn')
let rejectFilterBtn=document.getElementById('reject-filter-btn')

function calculateJobs() {
    total.innerText=card.children.length
}
calculateJobs();

let c1=0;
let toggle=true;
document.getElementById('interview-btn').addEventListener("click",function(){
    c1++
    if(total.innerText>=c1){
        interview.innerText=c1
    }
    if (toggle) {
        notAppliedBtn.innerText="Interview"
        toggle=false;
    }
    
})
let c2=0
document.getElementById('rejected-btn').addEventListener("click",function(){
    c2++
    if(total.innerText>=c2){
        rejected.innerText=c2
    }
    if (!toggle) {
        notAppliedBtn.innerText="rejected"
        toggle=true;
    }
    
})



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
