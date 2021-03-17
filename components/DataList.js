import DataItem from './DataItem';
import dataStyles from '../styles/Data.module.css';

const DataList = ({data}) => {
    return (
        <div className={dataStyles.grid}>
             {data.map(item => <DataItem item={item}/>)}
        </div>
    )
}

export default DataList