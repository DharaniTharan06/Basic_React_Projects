import {useForm} from 'react-hook-form'
//hook-form will help us with the form and submiting it 
import * as yup  from 'yup'
//yup will helps in the validation part of the form 
import { yupResolver } from '@hookform/resolvers/yup'
//This helps in the integration of two libraries like yup and hook-from
export const Form = ()=>{
    //We can use the function in yup library to make our schema, which is what specifies what goes where
    const schema = yup.object().shape({
        Fullname: yup.string().required("Your Fullname required"),//This specifies that we should give a name and it should be of type string
        Email: yup.string().email().matches(
                /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                "Email contains invalid characters or format"
            ).required("Enter a email"),//Yup has a function email that checks the email format
        Age: yup.number("Age should be a number").positive().integer("Age should be a integer").min(18).max(99).required("Please enter your age"),/*Here we specify that age should be whole number,positive
        and should have a input will value more than 18 and less than 99 */
        Password: yup.string().min(4).max(16).required("Enter an Password"),
        Confirm_Password: yup.string().oneOf([yup.ref("Password"),null],"Password does not match").required("Enter the password again")//specify that the input should be from the given array
        //yup.ref is used to reference the input using the array 
    })
    const { register , handleSubmit , formState:{errors} , reset } = useForm({//form state will get all the event in the form 
        resolver: yupResolver(schema) //Here we are using the yupResolver to intergrate and specify the validation for the form
    })
    //Register can be thinked as of to give a input in the part of validation 
    //HandleSubmit handles all the stuff preior to submitting and it takes a function as input which actually submits it with actions
    const onSubmit = (data)=>{//This data is the whole object of the form with id's and values
        console.log(data);
        reset();
    }
    //Since a form is submitted in form of a object we have to give id's to specify the values so we use register
    //These registers will later come in use for validations 
    
    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Full Name.."{...register("Fullname")}/>
            <p>{errors.Fullname?.message}</p>
            <input type="text" placeholder="Email.."{...register("Email")}/>
            <p>{errors.Email?.message}</p>
            <input type="number" placeholder="Age..."{...register("Age")}/>
            <p>{errors.Age?.message}</p>
            <input type="password" placeholder="Password.."{...register("Password")}/>
            <p>{errors.Password?.message}</p>
            <input type="password" placeholder="Confirm Password.."{...register("Confirm_Password")}/>
            <p>{errors.Confirm_Password?.message}</p>
            <input type="submit"/>
        </form>
    )
}