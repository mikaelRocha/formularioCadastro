
import StepView        from "./StepView.js"
import StepsController from "./StepsController.js"
import StepsModel      from "./stepsModel.js"


const stepsView    = new StepView()
const model        = new StepsModel(0)
const controller   = new StepsController(stepsView,model)

 const btn_next        = document.getElementById('btn_next')
 const btn_previous    = document.getElementById('btn_previous')
 const btn_modal_x     = document.getElementById('close-modal')
 const btn_submit      = document.getElementById('btn_submit')

 const html_skill_radio      = document.getElementById('html')
 const css_skill_radio       = document.getElementById('css')
 const js_skill_radio        = document.getElementById('javascript')
 

html_skill_radio.addEventListener('change',  function(event){controller.ChangeLevel(event.target.value  ,'html_level')})
css_skill_radio.addEventListener ('change',  function(event){controller.ChangeLevel(event.target.value  ,'css_level')})
js_skill_radio.addEventListener  ('change',  function(event){controller.ChangeLevel(event.target.value  ,'js_level')})


 btn_submit.addEventListener  ("click",(event) =>{  event.preventDefault();   controller.submit()})
 btn_modal_x.addEventListener ("click",(event) =>{  event.preventDefault();   controller.CloseModal()})
 btn_next.addEventListener    ("click",(event) =>{  event.preventDefault();   controller.NextStep()})
 btn_previous.addEventListener("click",(event) =>{  event.preventDefault();   controller.PreviousStep()})

