import React, {ReactElement, useState} from "react";
import styles from './GetConsultation.module.scss';
import dots from "../../assets/img/dots2.svg";
import Button from "../shared/button/Button";
import {useMask} from "@react-input/mask";
import Modal from "../shared/modal/Modal";
import ErrorModal from "./components/ErrorModal";

type GetConsultationFormState = {
    input: {
        name?: string;
        companyName?: string;
        email?: string;
        phoneNumber?: string;
        question?: string;
        agreeTheRules?: boolean;
    },
    errors: {
        name?: boolean;
        companyName?: boolean;
        email?: boolean;
        phoneNumber?: boolean;
        agreeTheRules?: boolean;
    }

}

const phoneOptions = {
    mask: '+_ (___) ___-__-__',
    replacement: {_: /\d/},
};

const phoneRegexp = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
const emailRegexp = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;


const GetConsultation: React.FC = (): ReactElement => {

    const inputPhoneRef = useMask(phoneOptions);
    const [wasButtonClickedState, setWasButtonClickedState] = useState<boolean>(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [formState, setFormState] = useState<GetConsultationFormState>({
        input: {
            name: '',
            companyName: '',
            email: '',
            phoneNumber: '',
            question: '',
            agreeTheRules: false
        },
        errors: {
            name: true,
            phoneNumber: true,
            email: true,
            companyName: true,
            agreeTheRules: true
        }
    });


    const onFormChange: (event: any) => void = (event: any) => {
        const field = event.target.name;
        const value = field !== 'agreeTheRules' ? event.target.value : event.target.checked;
        let isValid;
        switch (field) {
            case 'phoneNumber':
                isValid = phoneRegexp.test(value);
                break;
            case 'agreeTheRules':
                isValid = value;
                break;
            case 'email':
                isValid = emailRegexp.test(value);
                break;
            case 'question':
                isValid = true;
                break;
            default:
                isValid = !!value.length;
                break;
        }

        const newStateInput = {...formState.input, [field]: value};
        const newStateErrors = {...formState.errors, [field]: !isValid};
        setFormState({input: newStateInput, errors: newStateErrors});
    }


    const submit: (event: any) => void = (event: any) => {
        event.preventDefault();
        setWasButtonClickedState(true);
        if (Object.values(formState.errors).some((field) => field)) {
            return;
        }
        setIsModalOpen(true);
    }

    const errorModalComponent: () => any = () => {
        const childComponent = <ErrorModal onClose={() => setIsModalOpen(false)}/>
        return <Modal onClose={() => setIsModalOpen(false)} component={childComponent}/>
    }

    return (
        <section className={styles.container}>
            {isModalOpen && errorModalComponent()}

            <div className={styles.content}>
                <img className={styles.dots} src={dots} alt="dots"/>
                <h2 className={styles.header}>Получить консультацию</h2>
                <div className={styles['get-consultation-container']}>
                    <form>
                        <input name='name' value={formState.input.name} onChange={onFormChange} placeholder="Ваше имя"
                               className={wasButtonClickedState && formState.errors.name ? styles['base-input_error'] : styles['base-input']}
                               type="text"/>
                        <input name='companyName' value={formState.input.companyName} onChange={onFormChange}
                               className={wasButtonClickedState && formState.errors.companyName ? styles['base-input_error'] : styles['base-input']}
                               placeholder="Ваша компания" type="text"/>
                        <input name='email' value={formState.input.email} onChange={onFormChange}
                               className={wasButtonClickedState && formState.errors.email ? styles['base-input_error'] : styles['base-input']}
                               placeholder="Электронная почта" type="email"/>
                        <input
                            name='phoneNumber' value={formState.input.phoneNumber} onChange={onFormChange}
                            className={wasButtonClickedState && formState.errors.phoneNumber ? styles['base-input_error'] : styles['base-input']}
                            placeholder="Номер телефона" ref={inputPhoneRef}
                            type="text"/>
                        <input name='question' value={formState.input.question} onChange={onFormChange}
                               placeholder="Ваши вопросы или идеи" className={styles['big-input']} type="text"/>
                        <label className={styles.accept}>
                            <input name='agreeTheRules'
                                   className={wasButtonClickedState && formState.errors.agreeTheRules ? styles['checkbox_error'] : styles['checkbox']}
                                   value={formState.input.agreeTheRules === true ? 'true' : 'false'}
                                   onChange={onFormChange} type="checkbox"/>
                            Даю согласие на <span>обработку персональных данных</span>
                        </label>
                        {Object.values(formState.errors).some((field) => field) && wasButtonClickedState ?
                            (<p className={styles['user-message']}>Заполните обязательные поля</p>) : null
                        }
                        <div className={styles['form-button']}>
                            <Button caption='Отправить' onClick={submit}/>
                        </div>
                    </form>
                    <aside className={styles.contacts}>
                        <h3 className={styles['contacts__header']}>Удобнее связаться напрямую?</h3>
                        <p className={styles['contacts__description']}>Всегда рады ответить на ваши вопросы и
                            обсудить ваши идеи, позвоните или напишите нам.</p>
                        <p>
                            <a className={styles['contacts__mail-to']}
                               href="mailto:contact@businesscity.ru">contact@businesscity.ru</a>
                        </p>
                        <p>
                            <a className={styles['contacts__phone']} href="callto:+996770365303">+996 770 365 303</a>
                        </p>

                    </aside>
                </div>
            </div>
        </section>
    );
}

export default GetConsultation;
