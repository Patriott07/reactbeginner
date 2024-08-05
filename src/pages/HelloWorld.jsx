import { useState } from "react";

let judul = "Hello World";

function HelloWorld(){
    const [paragraf, setParagraf] = useState("Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore magni, iusto impedit quasi quod error facere soluta voluptates optio adipisci!");
    return(
        <div>
            <h1>{judul}</h1>
            <p>{paragraf}</p>
        </div>
    )
}

export default HelloWorld;