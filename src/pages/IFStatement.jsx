import { useState } from "react";

function IfStatement() {

    const [isHasLogin, setIsHasLogin] = useState(true);

    return (
        <div className=" flex flex-col h-[80vh] justify-center p-24">
            <div>
                <div className="text-3xl font-bold text-slate-800">Hello this form user, status isHasLogin = {`${isHasLogin}`}</div>
                {isHasLogin ? (
                    <div className="text-md font-medium mt-3">Aku melihat kamu sudah login. mau logout?</div>

                ) : (
                    <div className="text-md font-medium mt-3">Aku melihat kamu belum login. mau bikin account?</div>
                )}

                {isHasLogin ? (
                    // buttton logout
                    <button type="button" class="mt-3 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Logout Button</button>
                ) : (
                    
                    // buttton create account
                    <button type="button" class="mt-3 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Create Account</button>
                )}

            </div>

        </div>
    )


}

export default IfStatement;