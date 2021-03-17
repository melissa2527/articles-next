import Link from 'next/link';
import dataStyles from '../styles/Data.module.css';

const DataItem = ({item}) => {
    return (
        <Link href="/item/[id]" as={`/item/${item.id}`}>
            <a className={dataStyles.card}>
                <h3>{item.title} &arr;</h3>
                <p>{item.body}</p>
            </a>
        </Link>
    )
}

export default DataItem
