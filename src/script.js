document.addEventListener("DOMContentLoaded", () => {
  const addSkillBtn = document.querySelector(".addskill");
  const skillModal = document.querySelector(".skillmodal");

  const skills = document.querySelector('.skills')


  //functions
  //create the list item element

  const createListItem = (text) => {
    const li = document.createElement('li')
    li.innerHTML = `<span>${text}</span><button>&times;</button>`

    return li
  }

  //update the ranking 
const  updateCounter = () => {
    skills.style.counterReset = "none";


    setTimeout(() => {
        skills.style.counterReset = "rank";
      }, 0);

}


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

  skillModal.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();


    const skill = skillModal.querySelector('#skill').value.trim()

    if(skill) {
        //console.log(skill)
        //create the list item to skill list
        skills.appendChild(createListItem(skill));

        ///close the modal

        skillModal.close()

        /// reset the form
        event.target.reset()

    }
  })

  //handle remove item

  skills.addEventListener('click', (event) => {

    //check if the clicked element is the remove button

    if(event.target.tagName === 'BUTTON' ){
        console.log(event.target);

        const li = event.target.closest('li');

        //remove the list from skills
        skills.removeChild(li)

        //update thr ranking after the list is modified
        updateCounter()

    }


  })
});
