import { Icon, Input } from "../../components/Index";
import { useFormik} from 'formik';
import * as Yup from 'yup';
import axios from "axios";

const validationSchema = Yup.object().shape({
  email: Yup.string().required("Preencha com o seu email").email("Preencha com um email valido"),
  password: Yup.string().required("Preencha a sua senha").min(6, "A sua senha deve ter no minimo 6 caracteres")
}) 


export const Login = () => {

   const formik = useFormik({
    onSubmit: async (values) =>{
     const res=  await axios.post("http://localhost:4000/auth/login",
        {auth: values})
        res.data 
  },
    
    initialValues:{
      name:"",
      email:"",
      username:"",
      password:""
    }, 
      validationSchema
        })
  return (
    <div>
      <header className="p-4 border border-b border-red-300">
        <div className="container max-w-xl flex justify-center">
          <img src="/images/logo.svg" className="w-32 md:w-40" />
        </div>
      </header>

      <main className="container max-w-xl p-4">
        <div className="flex space-x-4 items-center p-4">
          <a href="/">
            <Icon name="back" className="h-6" />
          </a>
          <h2 className="text-xl font-bold">Entre na sua conta</h2>
        </div>

        <form className="space-y-6 p-4">
          <Input
            type="text"
            name="email"
            label="Seu e-mail"
            platouchedceholder="Digite seu e-mail"
            error= {formik.touched.email && formik.errors.email}
            value = {formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          <Input
            type="password"
            name="password"
            label="Sua Senha"
            placeholder="Digite sua senha"
            error= {formik.touched.password && formik.errors.password}
            value = {formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <button type="submit" disabled= {!formik.isValid} className="block w-full text-center text-white bg-red-500 px-6 py-3 rounded-xl disabled:opacity-50"  > 
            Entrar
          </button>
        </form>
      </main>
    </div>
  );
};