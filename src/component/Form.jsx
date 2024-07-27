import ButtonSubmit from "./ButtonSubmit";

function Form(props) {
    const { action, textBtn } = props; // action ini bisa login / register

    return (
        <form className="flex flex-col h-[95vh] justify-center items-center">
            <div className="min-w-[500px] p-6 rounded-md shadow-2xl">
                <div className="my-4 text-slate-800 font-bold text-[20px]">
                    Form {action}
                </div>
                {action != 'login' ? (
                    // terjadi pengecekan jika actionnya != login 
                    // maka tampilkan input username
                    <div class="mb-3">
                        <label for="text" class="block mb-2 text-sm font-medium 
                        text-gray-900 dark:text-white">Username</label>
                        <input type="email" id="email" class="bg-gray-50 border 
                        border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
                        focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 
                        dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
                        dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required />
                    </div>

                    // apabila actionnya == login. kita tidak ingin menampilkan apapun
                    // kita dapat tulis sebagai null
                ) : null}
                <div class="mb-3">
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
                    <input type="email" id="email" class="bg-gray-50 border 
                    border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
                    focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 
                    dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    placeholder="john.doe@company.com" required />
                </div>
                <div class="mb-3">
                    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                    <input type="password" id="password" class="bg-gray-50 border 
                    border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
                    focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 
                    dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                     placeholder="•••••••••" required />
                </div>
                <ButtonSubmit actionBtn={action} text={textBtn} />
                {/* 
                kita masukan data ke dalam component ButtonSubmit agar dapat di gunakan
                di komponent ButtonSubmit */}

            </div>
        </form>
    )
}

export default Form;