import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAsyncFn, useLocalStorage } from "react-use";
import axios from "axios";
import { format, formatISO } from "date-fns";

import { CardMatch, DateSelect, Icon } from "../../components";

export const Dashboard = () => {
    const [currentDate, setDate] = useState(formatISO(new Date(2022, 10, 20)));

    const [key] = useLocalStorage("key", {});

    const [state, doFetch] = useAsyncFn(async (params) => {
        const { data } = await axios({
            method: "get",
            baseURL: "http://localhost:3000",
            url: `game/${gameTime}`,
            params,
        });
        return data;
    });

    useEffect(() => {
        doFetch({ gameTime: currentDate });
    }, [currentDate]);

    if (!key.access_token) {
        return <Navigate to='/' replace={true} />;
    }
    return (
        <>
            <header className='bg-red-500 text-white'>
                <div className='container max-w-3xl flex justify-between p-4'>
                    <img src='/images/logo-red.svg' className='w-28 md:w-40' />
                    <a href='/profile'>
                        <Icon name='profile' className='w-10' />
                    </a>
                </div>
            </header>

            <main className='space-y-6'>
                <section className='bg-red-500 text-white'>
                    <div className='container max-w-3xl space-y-2 p-4'>
                        <span>Olá </span>
                        <h3 className='text-2xl font-bold'>Qual é o seu palpite?</h3>
                    </div>
                </section>

                <section id='content' className='container max-w-3xl p-4 space-y-4'>
                    <DateSelect currentDate={currentDate} onChange={setDate} />

                    <div className='space-y-4'>
                        {state.loading && "Carregando Jogos ... "}
                        {state.error && "Ops algo de errado ..."}

                        {!state.loading &&
                            !state.error &&
                            state.value?.map((game) => (
                                <CardMatch
                                    homeTeam={{ slug: game.homeTeam }}
                                    awayTeam={{ slug: game.awayTeam }}
                                    gameTime={{ time: format(new Date(game.gameTime), "H:mm") }}
                                />
                            ))}
                    </div>
                </section>
                <div className=''></div>
            </main>
        </>
    );
};
