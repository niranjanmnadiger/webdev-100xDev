export const Input = ({
    type = "text",
    placeholder,
    value,
    onChange,
    className = "",
}) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={`
        rounded-2xl
        border-2 border-yellow-700
        text-4xl
        px-8 py-3
        text-center
        text-white
        bg-blue-200
        ${className}
      `}
        />
    );
};
