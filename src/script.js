document.addEventListener("DOMContentLoaded", () => {
  const addSkillBtn = document.querySelector(".addskill");
  const skillModal = document.querySelector(".skillmodal");

  const skills = document.querySelector(".skills");

  //functions
  //create the list item element

  const createListItem = (text) => {
    const li = document.createElement("li");
    li.draggable = true;

    li.innerHTML = `<span>${text}</span><button>&times;</button>`;

    li.addEventListener("dragstart", (event) => {
      event.target.classList.add("dragging");
    });

    li.addEventListener("dragend", (event) => {
      event.target.classList.remove("dragging");

      // update local storage
      saveItems();
    });

    return li;
  };

  //update the ranking
  const updateCounter = () => {
    skills.style.counterReset = "none";

    setTimeout(() => {
      skills.style.counterReset = "rank";
    }, 0);
  };

  // save list item to local storage
  const saveItems = () => {
    const items = [...skills.querySelectorAll("li span")].map(
      (span) => span.textContent
    );

    // console.log(items);

    localStorage.setItem("top-skills", JSON.stringify(items));
  };

  // load the list from local storage
  const localItems = () => {
    const items = JSON.parse(localStorage.getItem("top-skills") || []);

    //clear the skills
    skills.innerHTML = "";

    items.forEach((item) => {
      skills.appendChild(createListItem(item));
    });
  };

  localItems();

  //event listners

  ///display modal
  addSkillBtn.addEventListener("click", () => {
    skillModal.showModal();
  });
  //hidemodal
  skillModal.addEventListener("click", (event) => {
    if (event.target === event.currentTarget) {
      skillModal.close();
    }
  });

  ///handle form submit

  skillModal.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();

    const skill = skillModal.querySelector("#skill").value.trim();

    if (skill) {
      //console.log(skill)
      //create the list item to skill list
      skills.appendChild(createListItem(skill));

      ///close the modal

      skillModal.close();

      /// reset the form
      event.target.reset();

      // update local storage
      saveItems();
    }
  });

  //handle remove item

  skills.addEventListener("click", (event) => {
    //check if the clicked element is the remove button

    if (event.target.tagName === "BUTTON") {
      console.log(event.target);

      const li = event.target.closest("li");

      //remove the list from skills
      skills.removeChild(li);

      //update thr ranking after the list is modified
      updateCounter();

      // update local storage
      saveItems();
    }
  });

  // handle dragging over other items

  skills.addEventListener("dragover", (event) => {
    //console.log(event.target)
    event.preventDefault(); //allow drop

    const target = event.target.closest("li");
    const draggedItem = document.querySelector(".dragging");

    if (target && target !== draggedItem) {
      const { top, height } = target.getBoundingClientRect();
      ///console.log(top, height)

      const midPoint = top + height / 2;

      if (event.clientY > midPoint) {
        target.after(draggedItem);
      } else {
        target.before(draggedItem)

      }


    }
  });


skills.addEventListener('drop', (event) => {
    event.preventDefault() //allow drop

     // update local storage
     saveItems();
    
})
  
     
});
