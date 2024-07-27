import { useEffect, useState } from "react";

function Hooks() {
    // vriabel yang menampung array :
    const [products, setProducts] = useState([]); // default value nya []

    const handleAddProducts = () => {
        let products = [
            { name: 'products1' },
            { name: 'products2' },
            { name: 'products3' },
            { name: 'products4' },
        ];

        setProducts(products);
        // now the value of products is 
        /**
        [
            {name : 'products1'},
            {name : 'products2'},
            {name : 'products3'},
            {name : 'products4'},
        ]
         */
    }

    useEffect(() => {
        // .. write your logika app here..
        console.log('Halaman sudah dimuat');
    }, []);

    useEffect(() => {
        // .. write your logika app here..
        console.log('Variabel products telah berubah');
        console.log(products);
    }, [products]);

    return (
        <button onClick={handleAddProducts}>
            Click me to add Produtcs
        </button>
    )
}

export default Hooks;