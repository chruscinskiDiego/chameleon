import { Request, Response } from "express";
import * as yup from 'yup';

interface ICampaign{
  name: string;
}

const bodyValidation: yup.ObjectSchema<ICampaign> = yup.object().shape({
  name: yup.string().required('O campo name é obrigatório').min(3),
});

export const create =  async (req: Request<{}, {}, ICampaign >, res: Response) => {

  let validatedData : ICampaign | undefined = undefined;

  try{
    validatedData = await bodyValidation.validate(req.body);
  }
  catch(error){

    const yupError = error as yup.ValidationError;

    return res.json({
      error: {
        default: yupError.message,
      }
    })
  }
  console.log(validatedData);


};