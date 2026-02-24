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
      status,
      notes,
    };
    const allReadyExist = interviewlist.find(
      (item) => item.compName == cardInfo.compName,
    );
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
            <h3 class="comp-name text-[#002C5C] text-xl font-bold">Mobile First Corp</h3>
            <p class="delete text-[#64748B] rounded-full bg-white shadow p-1">
              <i class="fa-solid fa-trash-can"></i>
            </p>
          </div>
          <span class="stack text-[1rem] text-[#64748B] py-2 inline-block"
            >React Native Developer</span
          >
          <p class="type text-[1rem] text-[#64748B] py-2">
            Remote • Full-time • $130,000 - $175,000
          </p>
          <button
            id="Not-Applied-btn"
            class="status bg-[#EEF4FF] py-2 px-3 rounded-md"
          >
            Not Applied
          </button>
          <p class="notes text-[14px] text-[#323B49] py-2">
            Build cross-platform mobile applications using React Native. Work on
            products used by millions of users worldwide.
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
  }
}
