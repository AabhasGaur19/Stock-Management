// export default function Settings() {
//     return (
//         <div className="w-full h-[90vh] flex items-center justify-center p-5">
//             <h1 className="text-3xl text-black">Settings Page</h1>
//         </div>
//     )
// }
import supabase from "../../supabase-client";

export default function Settings() {
    const handleSignOut = async () => {
        const { error } = await supabase.auth.signOut();
        if (error) {
            console.error("Error signing out :: ", error.message);
        } else {
            window.location.href = "/login"; 
        }
    };

    return (
        <div className="w-full h-[90vh] flex flex-col items-center justify-center p-5">
            <h1 className="text-3xl text-black mb-6">Settings Page</h1>
            <button 
                onClick={handleSignOut}
                className="px-6 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 transition-all"
            >
                Sign Out
            </button>
        </div>
    );
}
