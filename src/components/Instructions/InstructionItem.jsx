import classes from './Instructions.module.css';

const InstructionItem = ({text, id}) => {
    return (
        <li className={classes.instructionItem}>
            {id}. {text}
        </li>
    );
}

export default InstructionItem;
