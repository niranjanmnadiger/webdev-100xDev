export const RightComponent = () => {
    return (
        <div className="bg-white rounded-xl shadow-md p-4 w-full max-w-sm">


            <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-full bg-blue-400 flex items-center justify-center text-white font-bold">
                    NM
                </div>

                <div>
                    <h1 className="text-lg font-semibold">
                        Niranjan M Nadiger (Niri the Coder!!)
                    </h1>
                    <p className="text-sm text-gray-500">
                        Software Engineer
                    </p>
                </div>
            </div>


            <p className="text-sm text-gray-600 mb-4">
                trying to build a better world with code!
            </p>


            <button className="w-full border border-blue-500 text-blue-500 rounded-lg py-2 text-sm font-medium hover:bg-blue-50">
                View Profile
            </button>

        </div>
    );
};