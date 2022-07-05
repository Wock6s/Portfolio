const sections = document.querySelectorAll('.section'); // Get all sections
const sectBtns = document.querySelectorAll('.controls'); // Get all section buttons
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelectorAll('.main-content')[0]; 

function sectionTransition() {

    for (let i = 0; i < sectBtn.length; i++) {
  
      sectBtn[i].addEventListener("click", function () {
  
        let activeBtn = document.querySelector(".active-btn");
  
        if (activeBtn !== null) {
  
          activeBtn.classList.remove("active-btn");
  
        }
  
        this.classList += " active-btn";
  
      });
  
    }

    // sections active class
    allSections.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        if (id) {
            // remove selected fromt he othe rbuttons
            sectBtns.forEach((btn) => {
                btn.classList.remove('active');
            })
            e.target.classList.add('active')

            // hide other sects
            sections.forEach((section) => {
                section.classList.remove('active')
            })

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })

    // theme toggle
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click', () => {
        let element = document.body;
        element.classList.toggle('light-mode');
    })
}

sectionTransition();