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
//event listner



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


    const skill = skillModal.querySelector('#skill').ariaValueMax.trim()

    if(skill) {
        console.log(skill)
    }
  })
});
