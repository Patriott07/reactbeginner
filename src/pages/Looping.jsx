import { useEffect, useState } from 'react';
import '../App.css';

function Looping() {
    let messages = [
        {
            "from": "Daylen Hieler",
            "to": "SMKN 1 CIREBON",
            "title": "Tanya-tanya sekolah",
            "message": "Hello apakah masih tersedia untuk Jurusan PPLG tahun ini",
            "time": "2024-07-21"
        },
        {
            "from": "Avery Morgan",
            "to": "SMKN 1 CIREBON",
            "title": "Informasi Pendaftaran",
            "message": "Apakah pendaftaran siswa baru sudah dibuka?",
            "time": "2024-07-22"
        },
        {
            "from": "Jordan Kim",
            "to": "SMKN 1 CIREBON",
            "title": "Kurikulum Jurusan",
            "message": "Bisakah saya mendapatkan kurikulum untuk Jurusan PPLG?",
            "time": "2024-07-23"
        },
        {
            "from": "Taylor Lee",
            "to": "SMKN 1 CIREBON",
            "title": "Beasiswa",
            "message": "Apakah tersedia program beasiswa untuk siswa berprestasi?",
            "time": "2024-07-24"
        },
        {
            "from": "Alex Carter",
            "to": "SMKN 1 CIREBON",
            "title": "Kegiatan Ekstrakurikuler",
            "message": "Apa saja kegiatan ekstrakurikuler yang ditawarkan di sekolah ini?",
            "time": "2024-07-25"
        },
        {
            "from": "Sam Paterson",
            "to": "SMKN 1 CIREBON",
            "title": "Persyaratan Masuk",
            "message": "Apa saja persyaratan untuk masuk ke Jurusan PPLG?",
            "time": "2024-07-26"
        },
        {
            "from": "Riley Adams",
            "to": "SMKN 1 CIREBON",
            "title": "Lokasi Sekolah",
            "message": "Bisakah saya mendapatkan alamat lengkap SMKN 1 CIREBON?",
            "time": "2024-07-27"
        },
        {
            "from": "Morgan Blake",
            "to": "SMKN 1 CIREBON",
            "title": "Biaya Sekolah",
            "message": "Berapa biaya sekolah untuk tahun ajaran baru?",
            "time": "2024-07-28"
        }
    ]

    const [email, setEmail] = useState([]);

    useEffect(() => {
        setEmail(messages);
    }, [])

    return (
        <div className="flex flex-col gap-6 p-24">
            <h4 className="text-2xl font-bold">
                Our Client Email
            </h4>

            <div style={{ overflowX: 'auto' }}>
                <div className="flex gap-4">
                    {email.length > 0 ? ( // mengecek apakah email memiliki isi atau hanya array kosong []
                        email.map((val) => { // jika ada maka mapping (sama aja kaya forEach / for)

                            console.log(val)
                            /**
                             * val itu isinya seperti ini 
                             * {
                                "from": "Daylen Hieler",
                                "to": "SMKN 1 CIREBON",
                                "title": "Tanya-tanya sekolah",
                                "message": "Hello apakah masih tersedia untuk Jurusan PPLG tahun ini",
                                "time": "2024-07-21"
                               },
                             */
                            return ( // gunakan return agar element bisa tampil di browser
                                <div class="max-w-sm max-w-[400px] min-w-[400px] p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="m3.62 6.389 8.396 6.724 8.638-6.572-7.69-4.29a1.975 1.975 0 0 0-1.928 0L3.62 6.39Z" />
                                        <path d="m22 8.053-8.784 6.683a1.978 1.978 0 0 1-2.44-.031L2.02 7.693a1.091 1.091 0 0 0-.019.199v11.065C2 20.637 3.343 22 5 22h14c1.657 0 3-1.362 3-3.043V8.053Z" />
                                    </svg>

                                    <a href="#">
                                        <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{val.title}</h5>
                                    </a>
                                    <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">{val.message}</p>
                                    <a href="#" class="inline-flex font-medium items-center text-blue-600 hover:underline">
                                        From : {val.from}
                                        <svg class="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
                                        </svg>
                                    </a>
                                </div>
                            )
                        })
                    ) : null}
                </div>
            </div>

            <div className="text-lg text-gray-400 font-semibold">Scrool to see more Client Email</div>




        </div>
    )
}

export default Looping;