import './tricks.css';
import Card from './cards'

function Tricks(props) {
    const { name } = props;

    return (
        <div className='tricks-container'>
            <Card />
            <Card />
            <Card />
        </div>
    )
}


export default Tricks;