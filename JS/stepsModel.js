
class StepsModel
{
    constructor(currentStep)
    {
        this.currentStep = currentStep;
    }

    NextStep(){
       
        this.currentStep++
        this.currentStep >= 4 ?  this.currentStep = 4 : this.currentStep = this.currentStep
        return this.currentStep

    }
    PreviousStep()
    {
        this.currentStep--
        
    }
    GetStep(){
        return this.currentStep
    }
    

    StepStringLikeChecker(currentStep)
    {
        let currentStep_children = Array.from(document.getElementsByClassName('form-body_step'))[currentStep]
        .querySelector('.step_content')
        .querySelectorAll('input[type=text],input[type=password],input[type=email],input[type=tel],input[type=date]')
        
        currentStep_children = Array.from(currentStep_children)

        return currentStep_children.every((element ) => 
        {
            return element.value != 0 
        })
    }
    StepSelectChecker()
    {
        const selectInput = document.getElementById('estado')

        if(this.currentStep == 1 && selectInput.value[0] === "-")
        {
             return false
        };
        return true
    }
    Submit()
    {
        let obj = this.AllFormValues();
        
        localStorage.setItem("cadastro",obj)
    }
    AllFormValues()
    {
        const formData = document.body.querySelectorAll('[name]')
        const _array_com_genero = Array.from(formData)
    
        const fieldValues        = CreateObjFromArray(_array_com_genero,"genero")
        let genero_selecionado   = CutArrayElementsByName(_array_com_genero,'genero')
     
            genero_selecionado   = ReturnCheckedRadio(genero_selecionado)

            fieldValues['genero'] = genero_selecionado
         

        function CreateObjFromArray(arr,exception)
        {
            const obj = {}
            arr.forEach((element) =>
            {
                element.name === exception ? '' : obj[element.id] = element.value
            })
            return obj
        }
        function CutArrayElementsByName(arr,elementName)
        {
            return arr.filter((element) => 
            {
                return element.name === elementName
            }); 
        }
        function ReturnCheckedRadio(arr)
        {
            return arr.filter((element) => 
            {
                return element.checked === true
            })[0].id;
        }
             return fieldValues
   
    }
}
export default StepsModel


