import { CardMatch, DateSelect, Icon } from "../../components";
import { useLocalStorage } from "react-use";
import { Navigate } from "react-router-dom";

export const Profile = () => {
    const [key, setKey] = useLocalStorage("key", {});

    if (key?.user?.id) {
        return <Navigate to='/dashboard' replace={true} />;
    }

    const logout = () => setKey({});
    return (
        <>
            <header className='bg-red-500 text-white'>
                <div className='container max-w-3xl flex justify-between p-4'>
                    <img src='/images/logo-red.svg' className='w-28 md:w-40' />
                    <div onClick={logout} className='p-2 cursor-pointer'>
                        Sair
                    </div>
                </div>
            </header>
            <main className='space-y-6'>
                <section className='bg-red-500 text-white'>
                    <div className='container max-w-3xl space-y-2 p-4'>
                        <a href='/dashboard'>
                            <Icon name='back' className='w-10' />
                        </a>
                        <h3 className='text-2xl font-bold'>User</h3>
                    </div>
                </section>

                <section id='content' className='container max-w-3xl p-4 space-y-4'>
                    <h2 className='text-red-500 text-xl font-bold'>Seus palpites</h2>

                    <DateSelect />

                    <div className='space-y-4'>
                        <CardMatch
                            teamA={{ slug: "sui" }}
                            teamB={{ slug: "cam" }}
                            matchHour={{ time: "7:00" }}
                        />
                        <CardMatch
                            teamA={{ slug: "uru" }}
                            teamB={{ slug: "cor" }}
                            matchHour={{ time: "10:00" }}
                        />
                        <CardMatch
                            teamA={{ slug: "por" }}
                            teamB={{ slug: "gan" }}
                            matchHour={{ time: "13:00" }}
                        />
                        <CardMatch
                            teamA={{ slug: "bra" }}
                            teamB={{ slug: "ser" }}
                            matchHour={{ time: "16:00" }}
                        />
                    </div>
                </section>
                <div className=''></div>
            </main>
        </>
    );
};
