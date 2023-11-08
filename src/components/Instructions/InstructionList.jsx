import { Link } from 'react-router-dom';
import MyButton from '../UI/button/MyButton';
import InstructionItem from './InstructionItem';
import classes from './Instructions.module.css';

const InstructionList = () => {

    const instructionItems = [
        { id: 1, text: 'Чтобы почистить кэш нажмите комбинацию клавиш CTRL+ALT+DELETE' },
        { id: 2, text: 'Инструкция 2' },
        { id: 3, text: 'Инструкция 3' },
        { id: 4, text: 'Инструкция 4' },
        { id: 5, text: 'Инструкция 5' },

    ]

    return (
        <div className={classes.instructionList}>
            <ul>
                {
                    instructionItems.map(obj => {
                        console.log(obj)
                        return (<InstructionItem text={obj.text} key={obj.id} id={obj.id} />)
                    })
                }
            </ul>
                <MyButton target={'_self'} path={'/'}>На главную</MyButton>
        </div>
    );
}

export default InstructionList;
