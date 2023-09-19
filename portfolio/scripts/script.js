window.addEventListener('DOMContentLoaded', () => {
    window.scrollBy(0,1);
    const wrapper =document.querySelector('#wrapper');
    const home=document.querySelector('#gthome');
    const home2=document.querySelector('#logo');
    const about=document.querySelector('#gtabout');
    const services=document.querySelector('#gtservices');
    const projects=document.querySelector('#gtportfolio');
    const contact=document.querySelector('#gtcontact');
    const dark=document.querySelector('#darkMode');
    const toDark=document.querySelector('#dMode');
    const nav=document.querySelector('nav');

    const homeDiv = document.querySelector('#home');
    const servicesDiv = document.querySelector('#services');
    const aboutDiv = document.querySelector('#reviews');
    const projectsDiv = document.querySelector('#portfolio');
    const images = document.querySelectorAll('#wrapper #services #servicesWrapper div img');
    const grid = document.querySelector('.grid-container');


    home.addEventListener('click', () => { scrollTo({ top: 0, behavior: "smooth" }); });
    home2.addEventListener('click', () => { scrollTo({ top: 0, behavior: "smooth" }); });
    about.addEventListener('click', () => { aboutDiv.scrollIntoView({ behavior: "smooth" }); });
    services.addEventListener('click', () => { servicesDiv.scrollIntoView({ behavior: "smooth" }); });
    about.addEventListener('click', () => { aboutDiv.scrollIntoView({ behavior: "smooth" }); });
    projects.addEventListener('click', () => { projectsDiv.scrollIntoView({ behavior: "smooth" }); });
    contact.addEventListener('click', () => { scrollTo({ top: document.body.scrollHeight, behavior: "smooth" }); });
    window.addEventListener('scroll', () => { 
        if(window.scrollY > 0) {
        nav.style.backgroundColor = '#5d5cdcdd';
        if(!isLight){nav.style.backgroundColor = '#000000dd';}
         }
        else {
            nav.style.backgroundColor = 'transparent'; }
        //check if at the bottom of the page
        if(window.scrollY + window.innerHeight >= document.body.scrollHeight) { if(isLight){contact.style.color = '#feb12f';} else{contact.style.color = '#8F1D68';} } else {contact.style.color = '#fff';}
        chngClrIfInView(homeDiv, home);
        chngClrIfInView(servicesDiv, services);
        chngClrIfInView(aboutDiv, about);
        chngClrIfInView(projectsDiv, projects);


    });
    function chngClrIfInView(elementDiv, element){
        if((elementDiv.getBoundingClientRect().top <= 100 && elementDiv.getBoundingClientRect().bottom >= 50) && !(window.scrollY + window.innerHeight >= document.body.scrollHeight))
        {
            if(isLight){element.style.color = '#feb12f';}
            else{element.style.color = '#8F1D68';}
        } else {
            element.style.color = '#fff';
        }
    }


    let isLight = true;
    dark.addEventListener('click', () => { 
        
        if(isLight){
        toDark.href = 'styles/dark-styles.css';
        document.querySelector('#darkMode img').src = 'images/light.svg' ;
        images[0].src = 'images/ml-dark2.svg';
        images[2].src = 'images/nlp-dark.png';
        isLight = false;
        } else {
        toDark.href = '';
        document.querySelector('#darkMode img').src = 'images/dark.svg' ;
        images[0].src = 'images/ml.svg';
        images[2].src = 'images/nlp.png';
        isLight = true;
    }
    window.scrollBy(0,1);
     });
     dark.click();
     let boxes = document.querySelectorAll('#servicesWrapper div');
     //let boxes2 = document.querySelectorAll('.feedback');
     let maxHeight = 0;
     //let maxHeight2 = 0;
     for (var i = 0; i < boxes.length; i++) {
       if (boxes[i].offsetHeight > maxHeight) {
         maxHeight = boxes[i].offsetHeight;
       }
       //if (boxes2[i].offsetHeight > maxHeight2) {
      //  maxHeight2 = boxes2[i].offsetHeight;
      //}
     }
     for (var i = 0; i < boxes.length; i++) {
       boxes[i].style.height = maxHeight + 'px';
      // boxes2[i].style.height = maxHeight2 + 'px';
     }
   
   


    const bt1 = document.querySelector('.butt1');
    const bt2 = document.querySelector('.butt2');
    const bt3 = document.querySelector('.butt3');
    const bt4 = document.querySelector('.butt4');
    const bt5 = document.querySelector('.butt5');

    const boxcont = document.querySelectorAll('.boxcontent');

    function handleClick(elem) {
        let clickedElement = document.querySelector('.clicked');
        let select = '';
        clickedElement.classList.remove('clicked');
        elem.classList.add('clicked');

        switch(elem) {
            case bt1:
                select = 'boxcontent';
                break;
            case bt2:
                select = 'AI';
                break;
            case bt3:
                select = 'PROG';
                break;
            case bt4:
                select = 'WEB';
                break;
            case bt5:
                select = 'HW';
                break;
        }
        
        for(let i = 0; i < boxcont.length; i++) {
            if(boxcont[i].classList.contains(select)) {
                boxcont[i].classList.remove('hide');
            } else {
                boxcont[i].classList.add('hide');
            }
        }
        if(select != 'boxcontent') {
            grid.style.gridTemplateRows = 'auto';
        }
        else {
            grid.style.gridTemplateRows = '700px 700px 700px';
        }
    }

    bt1.addEventListener('click', () => { handleClick(bt1) });
    bt2.addEventListener('click', () => { handleClick(bt2) });
    bt3.addEventListener('click', () => { handleClick(bt3) });
    bt4.addEventListener('click', () => { handleClick(bt4) });
    bt5.addEventListener('click', () => { handleClick(bt5) });
    
    

});