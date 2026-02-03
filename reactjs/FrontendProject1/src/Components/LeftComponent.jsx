import { NavItem } from "./Nav";

export const LeftComponent = () => {
    return (
        <div className="bg-white rounded-xl shadow-md p-4 w-64">
            <nav className="flex flex-col gap-2">
                <NavItem label="Jobs" />
                <NavItem label="Friends" />
                <NavItem label="News" />
                <NavItem label="Companies" />
                <NavItem label="Settings" />
            </nav>
        </div>
    );
};