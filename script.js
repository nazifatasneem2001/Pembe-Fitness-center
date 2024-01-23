                                           //  show me


const navMenu = document.getElementById('nav-menu');
navToggle = document.getElementById('nav-toggle');
navClose =document.getElementById('nav-close');


// menu show

// validate if constant exits


if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu')
    })
}

// menu hidden
// validate if constant exits

if(navClose){
     navClose.addEventListener('click',()=>{
    navMenu.classList.remove('show-menu')    
})
}

// remove menu mobile

const navLink=document.querySelectorAll('.nav__link')


const linkAction =()=>{
    const navMenu =document.getElementById('nav-menu')
    // when we click on each nav_link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n=> n.addEventListener('click',linkAction))


                                // change background header


  const scrollHeader =( ) => {
    const header =document.getElementById('header')

    // when the scroll is greater than 50 viewport height ,add the scroll-header class to the header tag

    this.scrollY >=50? header.classList.add('bg-header')
    : header.classList.remove('bg-header')
}                    
 window.addEventListener('scroll',scrollHeader)




//scroll section active link

const sections = document.querySelectorAll('section[id]')

const scrollActive =() =>{
  const scrollDown =window.scrollY

  sections.forEach(current =>{
const sectionHeight = current.offsetHeight,
      sectionTop=     current.offsetTop-58,
      sectionId=      current.getAttribute('id'),
      sectionsClass=  document.querySelector('.nav__menu a[href*='+sectionId+']')  
      
      if(scrollDown >sectionTop && scrollDown <=sectionTop + sectionHeight){
        sectionsClass.classList.add('active-link')
      }else{
        sectionsClass.classList.remove('active-link')
      }



  })
}
window.addEventListener('scroll',scrollActive)





// show scroll up

const scrollUp =() =>{
  const scrollUp= document.getElementById('scroll-up')

  //when the scrollup higher than 350 viewport high, add the show-scroll class to the a tag with the scrollup class
  
  this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                                :scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll',scrollUp)




// scrollrevel animation

const sr= ScrollReveal({
  origin:'top',
  distance:'60px',
  duration: 2500,
  delay:400,
})

sr.reveal(`.home__data , .footer__container, .footer__group`)

sr.reveal(`.home__img`,{delay:700, origin:'bottom'})
sr.reveal(`.logos__img`,{delay:700, origin:'bottom'})
sr.reveal(`.logos__img, .programe__card, .pricing__card`,{interval:100})
sr.reveal(`.choose__image, .calculate__content`,{origin:'left'})
sr.reveal(`.choose__content , calculate__img`,{origin:'right'})




//  calculate js



const calculateForm =document.getElementById('calculate-form'),
calculateCm= document.getElementById('calculate-cm'),
calculateKg=document.getElementById('calculate-kg'),
calculateMessage=document.getElementById('calculate-message')

const calculateBmi =(e) => {
    e.preventDefault()

    // check if the fields have a value
    if(calculateCm.value ===''||calculateKg.value===''){
        //add or remove color
        calculateMessage.classList.remove('color-green')
        calculateMessage.classList.add('color-red')

        //show message
        calculateMessage.textContent= 'Fill in the Height and Weight '
        
        //remove message within  three second 
        setTimeout(()=>{
            calculateMessage.textContent=''
        },3000)
    }else{
        //bmi formula
        const cm= calculateCm.value / 100,
              kg= calculateKg.value,
              bmi=Math.round(kg /(cm*cm))  
              //show your health status
              if (bmi>18.5) {
                //add color or display  message 
                calculateMessage.classList.add('color-green')
                calculateMessage.textContent=`your BMI is ${bmi} and you are skinny`
              }  else if(bmi<25){
                calculateMessage.classList.add('color-green')
                calculateMessage.textContent=`your BMI is ${bmi} and you are healthy`

              } else{
                calculateMessage.classList.add('color-green')
                calculateMessage.textContent=`your BMI is ${bmi} and you are overweight`
              }  
              //to clear the input field
              calculateCm.value=''
              calculateKg.value=''

              //remove message four seconds
              setTimeout(()=>{
                calculateMessage.textContent=''
              },4000)
    }
}
calculateForm.addEventListener('submit',calculateBmi)

                                 // EMAIL JS

 const contactForm= document.getElementById('contact-form'),
 
 contactMessage= document.getElementById('contact-message'),
 contactUser=document.getElementById('contact-user')


 const sendEmail =(e) =>{

  e.preventDefault()

  //check is the field has a value

  if(contactUser.value===''){
    //add and remove color

    contactMessage.classList.remove('color-green')
    contactMessage.classList.add('color-red')

    //show message

    contactMessage.textContent='You Must Enter Your Email.................'



    //remove message three seconds
    setTimeout(()=>{
      contactMessage.textContent=''
    },3000)
  } else{


// serviceID - templateID - #form - publicKey
emailjs.sendForm('service_cv4r84j', 'template_di5r2xs','#contact-form' ,'eNirDafhGI0B07gZT')

 .then(() =>{

  //show message and add color

  contactMessage.classList.add('color-green')
  contactMessage.textContent='You Registered Sucessfully'

//remove message after three second 

setTimeout(()=>{
  contactMessage.textContent=''
},3000)

},(error)=>{
  //mail sending error

  alert('OPPS! SOMETHING HAS FAILED...',error)
})

//to clear the input file

contactUser.value=''

  } 

 }
 contactForm.addEventListener('submit',sendEmail)