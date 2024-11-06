import {QRCodeSVG} from 'qrcode.react'
import { useState } from 'react';
import css from './QRgen.module.css';

const QrGen = () => {
    const [value, setValue] = useState();
    const [result, setResult] = useState('');
    


    const onclickHandler = (event) => {
        setResult(value);
        setValue('');
    }

    const onChangeHandler = (event) => {
        setValue(event.target.value);
        setResult('');
    }
    return (
        <div className={css.result__cont}>
            <div className={css.result__input}>
                
                <input type="text" value={value} onChange={onChangeHandler}/>
                <button type='button' onClick={onclickHandler}>Сгенирировать</button>
            </div>
            <div className={css.result__QR}>
                {result !== '' && (<QRCodeSVG value={result}/>)}
            </div>
        </div>
    )
}

export {QrGen}