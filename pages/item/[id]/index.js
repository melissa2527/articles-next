import {useRouter} from 'next/router';
import Link from 'next/link';

const item = ({item}) => {
    // const router = useRouter()
    // const {id} = router.query

    return (
        <div>
            <h1>{item.title}</h1>
            <p>{item.body}</p>
            <br/>
            <Link href='/'>Go Back</Link>
        </div>
    )
}

export const getServerSideProps = async (context) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)

    const item = await res.json()
    
    return {
        props: {
            item
        }
    }
}

export default item
