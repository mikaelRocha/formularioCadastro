
class StepView
{
    constructor()
    {
        this.allSteps   = Array.from(document.getElementsByClassName('form-body_step'));   
        this.circles    = document.getElementsByClassName("progress-circle");
        this.bars       = document.getElementsByClassName("progress-bar");
    };
    NextStep(currentStep)
    {
        this.FillBar(currentStep);
        this.FillCircle(currentStep);
        this.allSteps[currentStep].classList.remove('animate__bounceIn');
        this.allSteps[currentStep].classList.remove('animate__animated');
        this.allSteps[currentStep].classList.add('animate__animated');
        this.allSteps[currentStep].classList.add('animate__backOutLeft');
    };
    PreviousStep(currentStep)
    {
        this.ClearBar(currentStep -1);
        this.ClearCircle(currentStep);
        this.allSteps[currentStep].previousElementSibling.classList.remove('animate__backOutLeft');
        this.allSteps[currentStep].previousElementSibling.classList.remove('animate__animated');
        this.allSteps[currentStep].previousElementSibling.classList.add('animate__animated');
        this.allSteps[currentStep].previousElementSibling.classList.add('animate__bounceIn');
    };
    // #
    
    FillCircle(currentStep)
    {
      setTimeout(() => {
            this.circles[currentStep +1].style.background = 'var(--progress-done)';
        }, 500)
    };
    FillBar(currentStep)
    {
        
            this.bars[currentStep].firstElementChild.classList.add("fillbarClass");
         
    };
    // # 
    ClearCircle(currentStep)
    {
        this.circles[currentStep].style.background = 'var(--progress-to-do)';
    };
    ClearBar(currentStep)
    {
            this.bars[currentStep].firstElementChild.classList.remove('fillbarClass');
    };
    Alert(message){
       const alert = document.getElementById('modal-alert')
       alert.firstElementChild.textContent = ''
        alert.firstElementChild.insertAdjacentText('afterbegin', message)
        alert.classList.remove('invisible');
    };
    CloseModal()
    {
        const alert = document.getElementById('modal-alert')
        alert.firstElementChild.textContent = ''
        alert.classList.add('invisible')
    };
    ChangeLevel(target_value,level_id)
    {
       
            let level_description = document.getElementById(level_id)
    
            if(target_value  == 1)
            {
                   level_description.innerText = 'Basico'
           }
           else if(target_value  == 2)
           {
               level_description.innerText = 'Intermediario'
           }
           else if(target_value  == 3)
           {
               level_description.innerText = 'Avançado'
           }
        
    }
    
}
export default StepView;