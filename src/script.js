document.addEventListener("DOMContentLoaded", () => {
    addSkillBtn = document.querySelector('.addskill')
    const skillModal = document.querySelector('.skillmodal')


    ///display modal
    addSkillBtn.addEventListener("click", () => {
        skillModal.showModal()
    })
    //hidemodal
    skillModal.addEventListener('click', (event) => {
        if (event.target === event.currentTarget) {
            skillModal.close()
        }
    })
 





















})