import { Icon, Input } from "../../components";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const validationSchema = Yup.object().shape({
    name: Yup.string().required("Preencha seu nome"),
    email: Yup.string().required("Preencha com o seu email").email("Preencha com um email valido"),
    username: Yup.string().required("Preencha um nome de usuario"),
    password: Yup.string()
        .required("Preencha a sua senha")
        .min(6, "A sua senha deve ter no minimo 6 caracteres"),
});

export const Signup = () => {
    const formik = useFormik({
        onSubmit: async (values) => {
            const { data } = await axios({
                method: "post",
                baseURL: "http://localhost:3000",
                url: "/auth/register",
                data: values,
            });
            console.log(data);
        },

        initialValues: {
            name: "",
            email: "",
            username: "",
            password: "",
        },
        validationSchema,
    });
    return (
        <div>
            <header className='p-4 border border-b border-red-300'>
                <div className='container max-w-xl flex justify-center'>
                    <img src='/images/logo.svg' className='w-32 md:w-40' />
                </div>
            </header>

            <main className='container max-w-xl p-4'>
                <div className=' p-4 flex space-x-4 items-center '>
                    <a href='/'>
                        <Icon name='back' className='h-6' />
                    </a>
                    <h2 className='text-xl font-bold'>Crie sua conta</h2>
                </div>

                <form className='p-4 space-y-6' onSubmit={formik.handleSubmit}>
                    <Input
                        type='text'
                        name='name'
                        label='Seu nome'
                        placeholder='Digite seu nome'
                        error={formik.touched.name && formik.errors.name}
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <Input
                        type='text'
                        name='email'
                        label='Seu e-mail'
                        placeholder='Digite seu e-mail'
                        error={formik.touched.email && formik.errors.email}
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />

                    <Input
                        type='text'
                        name='username'
                        label='Seu Nome de usuário'
                        placeholder='Digite um nome de usuario'
                        error={formik.touched.username && formik.errors.username}
                        value={formik.values.username}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />

                    <Input
                        type='password'
                        name='password'
                        label='Sua senha'
                        placeholder='Digite sua senha'
                        value={formik.touched.password && formik.values.password}
                        error={formik.errors.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />

                    <button
                        type='submit'
                        disabled={!formik.isValid}
                        className='block w-full text-center text-white bg-red-500 px-6 py-3 rounded-xl disabled:opacity-50'
                    >
                        Criar minha conta
                    </button>
                </form>
            </main>
        </div>
    );
};
