import Head from 'next/head';
import React from 'react'

const User = ({user}: any) => {
  return (
    <>
      <Head>
        <meta name="og:name" content={user?.name}/>
        <meta name="og:desciption" content={user?.username}/>
        <title>test</title>
      </Head>
      <div>{user?.name}</div>
    </>
  )
}

export default User;

export const getStaticProps = async ({ params }: any) =>  {
  const user = await fetch('https://jsonplaceholder.typicode.com/users/' + params?.id)
  .then(res => res.json())
  
  return {
    props: {
      user
    }
  };
};

export const getStaticPaths = async () => {
  const users = await fetch('https://jsonplaceholder.typicode.com/users');
  /* .then(res => res.json()); */

  return {
    paths: [{ params: { id: '1' } }, { params: { id: '2' } }],   
    fallback: 'blocking' // false or 'blocking'
  };
};

