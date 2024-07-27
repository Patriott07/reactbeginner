function ButtonSubmit(props) {
    const { actionBtn, text } = props; 
    // actionBtn dan text akan berisi value yang kita definisikan di file lain

    return (
        <div>
            {actionBtn == 'login' ? (
                // ini seperti if statement.
                // jika kita mendifinisikan actionBtn sebagai login.
                // maka yang akan ditampilkan ialah button dibawah ini : 
                <button type="button" class="focus:outline-none text-white bg-purple-700 
                hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg 
                text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 
                dark:focus:ring-purple-900">{text}</button> // kita bisa menampilkan isi dari variabel dengan diawali {}
            ) : (
                // jika kita mendifinisikan actionBtn selain `login`.
                // maka yang akan ditampilkan ialah button dibawah
                <div class="mb-3">
                    <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4
                     focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 
                     dark:bg-blue-600 dark:hover:bg-blue-700 
                     focus:outline-none dark:focus:ring-blue-800">{text}</button>
                </div>
            )}

        </div>
    )
}

export default ButtonSubmit;