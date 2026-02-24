let total = document.getElementById("total");
let interview = document.getElementById("interview");
let rejected = document.getElementById("rejected");
let notAppliedBtn = document.getElementById("Not-Applied-btn");

let card = document.getElementById("card");
let allFilterBtn = document.getElementById("all-filter-btn");
let interviewFilterBtn = document.getElementById("interview-filter-btn");
let rejectFilterBtn = document.getElementById("reject-filter-btn");
let mainContainer = document.querySelector("main");
const fillteredSection = document.getElementById("filltered-section");

let interviewlist = [];

function calculateJobs() {
  total.innerText = card.children.length;
}
calculateJobs();

function togglestyle(id) {
  allFilterBtn.classList.remove("bg-sky-600", "text-white");
  interviewFilterBtn.classList.remove("bg-sky-600", "text-white");
  rejectFilterBtn.classList.remove("bg-sky-600", "text-white");

  allFilterBtn.classList.add("bg-white", "text-[#64748B]");
  interviewFilterBtn.classList.add("bg-white", "text-[#64748B]");
  rejectFilterBtn.classList.add("bg-white", "text-[#64748B]");

  let select = document.getElementById(id);
  select.classList.remove("bg-white", "text-[#64748B]");
  select.classList.add("bg-sky-600", "text-white");

  if(id == 'interview-filter-btn'){
    card.classList.add("hidden")
    fillteredSection.classList.remove("hidden")
  }
  else if(id == "all-filter-btn"){
  card.classList.remove("hidden")
  fillteredSection.classList.add("hidden")
  }



}
mainContainer.addEventListener("click", function (event) {

  if (event.target.classList.contains("interview-btn")) {
    const parenNode = event.target.parentNode.parentNode;
    const compName = parenNode.querySelector(".comp-name").innerText;
    console.log(compName);
    const deleteBtn = parenNode.querySelector("delete");
    const stack = parenNode.querySelector(".stack").innerText;
    const type = parenNode.querySelector(".type").innerText;
    const status = parenNode.querySelector(".status").innerText;
    const notes = parenNode.querySelector(".notes").innerText;

    const cardInfo = {
      compName,
      stack,
      type,
      status:"Interview",
      notes,
    };
    const allReadyExist = interviewlist.find(
      (item) => item.compName == cardInfo.compName,
    );
    parenNode.querySelector(".status").innerText='Interview';
    parenNode.querySelector(".status").classList.remove("bg-[#EEF4FF]")
    parenNode.querySelector(".status").classList.add("border", "border-green-500","text-green-600")
    if (!allReadyExist) {
      interviewlist.push(cardInfo);
    }
    renderInterview();
  }
});

function renderInterview() {
  fillteredSection.innerHTML = " ";

  for (let interview of interviewlist) {
    console.log(interview);

    let div = document.createElement("div");
    div.className = "card shadow rounded-md p-5";
    div.innerHTML = `
        <div class="flex justify-between">
            <h3 class="comp-name text-[#002C5C] text-xl font-bold">${interview.compName}</h3>
            <p class="delete text-[#64748B] rounded-full bg-white shadow p-1">
              <i class="fa-solid fa-trash-can"></i>
            </p>
          </div>
          <span class="stack text-[1rem] text-[#64748B] py-2 inline-block"
            >${interview.stack}</span
          >
          <p class="type text-[1rem] text-[#64748B] py-2">
            ${interview.type}
          </p>
          <button
            id="Not-Applied-btn"
            class="status bg-[#EEF4FF] py-2 px-3 rounded-md"
          >
            ${interview.status}
          </button>
          <p class="notes text-[14px] text-[#323B49] py-2">
            ${interview.notes}
          </p>
          <div>
            <button
              id="interview-btn"
              class="border border-green-500 py-2 px-2 text-green-500 font-semibold uppercase"
            >
              interview
            </button>
            <button
              id="rejected-btn"
              class="border border-red-500 py-2 px-2 text-red-500 font-semibold uppercase ml-2"
            >
              Rejected
            </button>
          </div>
        `;
        fillteredSection.appendChild(div)
  }
}
