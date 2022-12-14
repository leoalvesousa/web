import { useLocalStorage } from "react-use";
import { Navigate } from "react-router-dom";

export const Home = () => {
    return (
        <div className='h-screen bg-red-700 text-white p-4 flex flex-col items-center space-y-6'>
            <header className='container max-w-5xl p-4 flex justify-center'>
                <img src='/images/logo-white.svg' className='w-40' />
            </header>

            <div className='container max-w-5xl p-4 flex-1 flex flex-col items-center md:flex-row md:space-y-0 md:space-x-6'>
                <div className='md:flex-1 flex justify-center'>
                    <img
                        src='/images/photo.png'
                        alt='two people photo'
                        className='w-full max-w-sm'
                    />
                </div>

                <div className='md:flex-1 flex flex-col space-y-6'>
                    <h1 className='text-3xl text-center font-bold md:text-left'>
                        Dê o seu palpite na Copa do Mundo do Catar 2022!
                    </h1>

                    <a
                        href='/signup'
                        className='text-center text-red-700 bg-white text-xl px-8 py-4 rounded-xl'
                    >
                        Criar minha conta
                    </a>

                    <a
                        href='/login'
                        className='text-center text-white border border-white text-xl px-8 py-4 rounded-xl'
                    >
                        Fazer Login
                    </a>
                </div>
            </div>
        </div>
    );
};
