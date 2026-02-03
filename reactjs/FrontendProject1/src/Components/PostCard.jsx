export const PostCard = () => {
    return (
        <div className="bg-white rounded-xl shadow-sm p-4 mb-4">

            <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-blue-400 flex items-center justify-center text-white font-semibold">
                    NM
                </div>

                <div>
                    <p className="font-medium text-sm">Niri the coder</p>
                    <p className="text-xs text-gray-500">2h • Bengaluru</p>
                </div>
            </div>

            <p className="text-sm text-gray-700 mb-3">
                A quick revision of react tailwind everything!!
                goood going!
            </p>

            <div className="flex justify-between text-sm text-gray-500">
                <button className="hover:text-blue-500">Like</button>
                <button className="hover:text-blue-500">Comment</button>
                <button className="hover:text-blue-500">Share</button>
            </div>
        </div>
    );
};