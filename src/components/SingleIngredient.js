import React from 'react';
import { useState} from "react";


function SingleIngredient ({ inputType, ingredient }) {

    const [checked, setChecked] = useState(false);


    return (
        <div>

            <input
                type={inputType}
                onChange={() => setChecked(!checked)}

            />

            {checked
                ? <li><p className="checked">{ingredient}</p></li>
                : <li><p>{ingredient}</p></li>
            }




        </div>
    );
}

export default SingleIngredient;

