let total = document.getElementById("total");
let interview = document.getElementById("interview");
let rejected = document.getElementById("rejected");
let notAppliedBtn = document.getElementById("Not-Applied-btn");

let currentStatus = "all";
let card = document.getElementById("card");
let allFilterBtn = document.getElementById("all-filter-btn");
let interviewFilterBtn = document.getElementById("interview-filter-btn");
let rejectFilterBtn = document.getElementById("reject-filter-btn");
let mainContainer = document.querySelector("main");
const fillteredSection = document.getElementById("filltered-section");

let interviewlist = [];
let rejectedlist = [];

function calculateJobs() {
  total.innerText = card.children.length;
  interview.innerText = interviewlist.length;
  rejected.innerText = rejectedlist.length;
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
  currentStatus = id;
  select.classList.remove("bg-white", "text-[#64748B]");
  select.classList.add("bg-sky-600", "text-white");

  if (id == "interview-filter-btn") {
    card.classList.add("hidden");
    fillteredSection.classList.remove("hidden");
    renderInterview();
  } else if (id == "all-filter-btn") {
    card.classList.remove("hidden");
    fillteredSection.classList.add("hidden");
  } else if (id == "reject-filter-btn") {
    card.classList.add("hidden");
    fillteredSection.classList.remove("hidden");
    renderRejected();
  }
}
mainContainer.addEventListener("click", function (event) {
  if (event.target.classList.contains("interview-btn")) {
    const parenNode = event.target.parentNode.parentNode;
    const compName = parenNode.querySelector(".comp-name").innerText;
    const stack = parenNode.querySelector(".stack").innerText;
    const type = parenNode.querySelector(".type").innerText;
    const status = parenNode.querySelector(".status").innerText;
    const notes = parenNode.querySelector(".notes").innerText;

    const cardInfo = {
      compName,
      stack,
      type,
      status: "Interview",
      notes,
    };
    const allReadyExist = interviewlist.find(
      (item) => item.compName == cardInfo.compName,
    );
    parenNode.querySelector(".status").innerText = "Interview";
    parenNode.querySelector(".status").classList.remove("bg-[#EEF4FF]");
    parenNode
      .querySelector(".status")
      .classList.remove("border", "border-red-500", "text-red-600");

    parenNode.querySelector(".status").classList.remove("bg-[#EEF4FF]");
    parenNode
      .querySelector(".status")
      .classList.add("border", "border-green-500", "text-green-600");
    if (!allReadyExist) {
      interviewlist.push(cardInfo);
    }
    rejectedlist = rejectedlist.filter(
      (item) => item.compName != cardInfo.compName,
    );
    if ((currentStatus = "reject-filter-btn")) {
      renderRejected();
    }
    calculateJobs();
  } else if (event.target.classList.contains("rejected-btn")) {
    const parenNode = event.target.parentNode.parentNode;
    const compName = parenNode.querySelector(".comp-name").innerText;

    const stack = parenNode.querySelector(".stack").innerText;
    const type = parenNode.querySelector(".type").innerText;
    const status = parenNode.querySelector(".status").innerText;
    const notes = parenNode.querySelector(".notes").innerText;

    parenNode.querySelector(".status").innerText = "Rejected";
    parenNode.querySelector(".status").classList.remove("bg-[#EEF4FF]");
    parenNode
      .querySelector(".status")
      .classList.add("border", "border-red-500", "text-red-600");

    const cardInfo = {
      compName,
      stack,
      type,
      status: "Rejected",
      notes,
    };
    const allReadyExist = rejectedlist.find(
      (item) => item.compName == cardInfo.compName,
    );

    if (!allReadyExist) {
      rejectedlist.push(cardInfo);
    }
    interviewlist = interviewlist.filter(
      (item) => item.compName != cardInfo.compName,
    );
    if (currentStatus == "interview-filter-btn") {
      renderInterview();
    }
    calculateJobs();
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
            <p id="delete-btn" class="delete text-[#64748B] rounded-full bg-white shadow p-1">
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
              class="interview-btn border border-green-500 py-2 px-2 text-green-500 font-semibold uppercase"
            >
              interview
            </button>
            <button
              id="rejected-btn"
              class="rejected-btn border border-red-500 py-2 px-2 text-red-500 font-semibold uppercase ml-2"
            >
              Rejected
            </button>
          </div>
        `;
    fillteredSection.appendChild(div);
  }
}

function renderRejected() {
  fillteredSection.innerHTML = " ";

  for (let reject of rejectedlist) {
    console.log(reject);

    let div = document.createElement("div");
    div.className = "card shadow rounded-md p-5";
    div.innerHTML = `
        <div class="flex justify-between">
            <h3 class="comp-name text-[#002C5C] text-xl font-bold">${reject.compName}</h3>
            <p id="delete-btn" class="delete text-[#64748B] rounded-full bg-white shadow p-1">
              <i class="fa-solid fa-trash-can"></i>
            </p>
          </div>
          <span class="stack text-[1rem] text-[#64748B] py-2 inline-block"
            >${reject.stack}</span
          >
          <p class="type text-[1rem] text-[#64748B] py-2">
            ${reject.type}
          </p>
          <button
            id="Not-Applied-btn"
            class="status bg-[#EEF4FF] py-2 px-3 rounded-md"
          >
            ${reject.status}
          </button>
          <p class="notes text-[14px] text-[#323B49] py-2">
            ${reject.notes}
          </p>
          <div>
            <button
              id="interview-btn"
              class="interview-btn border border-green-500 py-2 px-2 text-green-500 font-semibold uppercase"
            >
              interview
            </button>
            <button
              id="rejected-btn"
              class="rejected-btn border border-red-500 py-2 px-2 text-red-500 font-semibold uppercase ml-2"
            >
              Rejected
            </button>
          </div>
        `;
    fillteredSection.appendChild(div);
  }
}
document.getElementById("delete-btn").addEventListener("click", function () {
  console.log("hello");

  // interviewlist.pop()
});
