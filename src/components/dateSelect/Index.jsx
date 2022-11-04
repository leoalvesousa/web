import { addDays, format, subDays, formatISO } from "date-fns";
import { ptBR } from "date-fns/locale";

import { Icon } from "../../components/icon";

export const DateSelect = ({ currentDate, onChange }) => {
    const prevDay = () => {
        const nextDate = subDays(new Date(currentDate), 1);
        onChange(formatISO(nextDate));
    };

    const nextDay = () => {
        const nextDate = addDays(new Date(currentDate), 1);
        onChange(formatISO(nextDate));
    };

    return (
        <div className='p-4 flex space-x-4 items-center justify-center'>
            <Icon name='arrowLeft' className='w-6 text-red-500 cursor-pointer' onClick={prevDay} />
            <span className='font-bold'>
                {format(new Date(currentDate), "d 'de' MMMM", { locale: ptBR })}
            </span>
            <div>
                <Icon
                    name='arrowRight'
                    className='w-6 text-red-500 cursor-pointer'
                    onClick={nextDay}
                />
            </div>
        </div>
    );
};
