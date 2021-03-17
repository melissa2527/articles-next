import Head from 'next/head'
import DataList from '../components/DataList'

export default function Home({data}) {
  // console.log(data)
  return (
    <div >
      <Head>
        <title>Next Practice</title>
        <meta name='keywords' content='web dev'/>
      </Head>
      <DataList data={data}/>
    </div>
  )
}


export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
  const data = await res.json()

  return {
    props: {
      data
    }
  }
}