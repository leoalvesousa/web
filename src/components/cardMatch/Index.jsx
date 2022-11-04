export const CardMatch = ({ homeTeam, awayTeam, gameTime }) => {
    return (
        <div className='border border-gray-300 rounded-xl p-4 text-center space-y-4'>
            <span className='text-sm md:text-base text-gray-700 font-bold'>{gameTime.time}</span>

            <div className='flex space-x-4 justify-center items-center'>
                <span className='uppercase'>{homeTeam.slug}</span>
                <img src={`/images/flags/${homeTeam.slug}.png`} />

                <input
                    type='number'
                    min={0}
                    className='bg-red-300/[0.2] w-[55px] h-[55px] text-red-700 text-xl text-center overflow-hidden '
                />

                <span className='mx-4 text-red-500 font-bold text-lg'>X</span>

                <input
                    type='number'
                    min={0}
                    className='bg-red-300/[0.2] w-[55px] h-[55px] text-red-700 text-xs text-center overflow-hidden '
                />

                <img src={`/images/flags/${awayTeam.slug}.png`} />
                <span className='uppercase'>{awayTeam.slug}</span>
            </div>
        </div>
    );
};
