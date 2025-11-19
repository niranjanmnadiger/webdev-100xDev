export const Input = ({ type = "text", placeholder }) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            className="
        rounded-2xl
        border-2 border-yellow-700
        text-4xl
        px-8 py-3
        text-center text-white
        cursor-pointer
        bg-blue-200
      "
        />
    );
};