import { Icon, Input } from "../../components/Index";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useLocalStorage } from "react-use";
import { Navigate } from "react-router-dom";

const validationSchema = Yup.object().shape({
    email: Yup.string().required("Preencha com o seu email").email("Preencha com um email valido"),
    password: Yup.string()
        .required("Preencha a sua senha")
        .min(6, "A sua senha deve ter no minimo 6 caracteres"),
});

export const Login = () => {
    const [key, setKey] = useLocalStorage("key", {});

    const formik = useFormik({
        onSubmit: async (values) => {
            const { data } = await axios({
                method: "post",
                baseURL: "http://localhost:3000",
                url: "/auth/login",
                data: values,
            });
            setKey(data);
        },

        initialValues: {
            email: "",
            password: "",
        },
        validationSchema,
    });
    if (key) {
        return <Navigate to='/dashboard' replace={true} />;
    }
    return (
        <div>
            <header className='p-4 border border-b border-red-300'>
                <div className='container max-w-xl flex justify-center'>
                    <img src='/images/logo.svg' className='w-32 md:w-40' />
                </div>
            </header>

            <main className='container max-w-xl p-4'>
                <div className='flex space-x-4 items-center p-4'>
                    <a href='/'>
                        <Icon name='back' className='h-6' />
                    </a>
                    <h2 className='text-xl font-bold'>Entre na sua conta</h2>
                </div>

                <form className='space-y-6 p-4' onSubmit={formik.handleSubmit}>
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
                        type='password'
                        name='password'
                        label='Sua Senha'
                        placeholder='Digite sua senha'
                        error={formik.touched.password && formik.errors.password}
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <button
                        type='submit'
                        disabled={!formik.isValid}
                        className='block w-full text-center text-white bg-red-500 px-6 py-3 rounded-xl disabled:opacity-50'
                    >
                        {formik.isSubmitting ? "Carregando ..." : "Entrar"}
                    </button>
                </form>
            </main>
        </div>
    );
};
