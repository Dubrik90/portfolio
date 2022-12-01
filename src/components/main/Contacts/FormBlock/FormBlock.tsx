import React from 'react';
import sForm from '../FormBlock/FormBlock.module.scss';


export const FormBlock = () => {
    return (
        <div className={sForm.formBlock}>
            <form className={sForm.form} action="src/components/main/Main#">
                <input className={sForm.input} aria-required="true" aria-invalid="false" type="text"
                       placeholder="Name *"/>
                <input className={sForm.input} aria-required="true" aria-invalid="false" type="tel"
                       placeholder="Phone *"/>
                <textarea className={sForm.inputTextarea} aria-required="true" aria-invalid="false"
                          placeholder="Subject *"/>
                <button type="submit" className={sForm.formBlockButton}>Get in touch</button>
            </form>
        </div>
    );
};

