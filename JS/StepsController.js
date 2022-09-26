
class StepsController
{
    constructor(StepsView,StepsModel)
    {
        this.stepsView = StepsView;
        this.stepsModel= StepsModel;
    };
    NextStep()
    {
        if(this.stepsModel.GetStep() < 4 )
        {
          //  if(this.stepsModel.StepStringLikeChecker(this.stepsModel.GetStep()) === false ||
          //     this.stepsModel.StepSelectChecker(this.stepsModel.GetStep()) === false)
          //  {
          //   this.stepsView.Alert('Por favor preencha todos os campos');
          //  }
          //  else
          //  {
            this.stepsView.NextStep(this.stepsModel.GetStep());
            this.stepsModel.NextStep();
          //  }
        };
    };
    PreviousStep(){
      if(this.stepsModel.GetStep() > 0  )
      {
        this.stepsView.PreviousStep(this.stepsModel.GetStep());
        this.stepsModel.PreviousStep();
      };
    };
    ChangeLevel(target_value,level_id){
      this.stepsView.ChangeLevel(target_value,level_id)
    }
    CloseModal()
    {
      this.stepsView.CloseModal()
    };
    submit()
    {
      this.stepsModel.Submit()
      this.stepsView.Alert('Cadastro Realizado com sucesso')
    };
};
export default StepsController;
