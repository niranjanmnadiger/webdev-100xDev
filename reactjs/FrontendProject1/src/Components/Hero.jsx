import { LeftComponent } from "./LeftComponent";
import { MiddleComponent } from "./MiddleComponent";
import { RightComponent } from "./RightComponent";

export const Hero = () => {
    return (
        <div className="flex max-h-screen bg-gray-100 px-6 py-4 gap-6">


            <aside className="w-98">
                <RightComponent />

            </aside>


            <main className="flex-1 max-w-2xl">
                <MiddleComponent />
            </main>


            <aside className="w-80">
                <LeftComponent />
            </aside>

        </div>
    );
};