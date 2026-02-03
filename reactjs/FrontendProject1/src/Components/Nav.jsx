export const NavItem = ({ label }) => {
    return (
        <button className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition">

            <span className="w-5 h-5 bg-blue-400 rounded-full" />

            {label}
        </button>
    );
};