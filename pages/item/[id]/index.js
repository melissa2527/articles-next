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

// getServerSideProps

// if created api - api file, you can switch the await fetch()

export const getStaticProps = async (context) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)

    const item = await res.json()
    
    return {
        props: {
            item
        }
    }
}

export const getStaticPaths = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const items = await res.json()
    const ids = items.map(item => item.id)
    const paths = ids.map(id => ({params: {id: id.toString()}}))

    return {
        paths,
        fallback: false
    }
}

export default item
