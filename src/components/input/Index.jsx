export const Input = ({ error, name, label, ...props }) => {
    return (
      <div className="flex flex-col">
        <label htmlFor={name}  className='text-sm font-bold text-gray-500 mb-2'>{label}</label>
        <input name={name} id={name} {...props} className={`{ text-base p-3 border border-gray-700 rounded-xl focus:outline focus:outline-1 focus: outline-gray-700 ${error && "border-red-300"}`} />
        <span className=" p-2 text-sm text-red-300 ">{error}</span>
      </div>
    );
  };