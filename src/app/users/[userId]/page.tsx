import getUser from '@/lib/getUser'
import getPosts from '@/lib/getUsersPost'
import React from 'react'
import { Suspense } from 'react'
import UserPosts from './components/UserPosts'
import { Metadata } from 'next'
type Params = {
    params: {
       userId: string
    }
}
export async function generateMetadata({params: {userId}}: Params): Promise<Metadata> {
  const userData: Promise<User> = getUser(userId);
  const user: User = await userData;
  return {
    title: user.name,
    description: `this is the page of the user ${user.id}`
  }
}

export default async function UserPage({params: {userId}}: Params) {
   
    const postData: Promise<any[]> = getPosts(userId);
    const user = await getUser(userId);
  return (
    <>
    
    <div>{user.name}</div>
    <Suspense fallback={<h2>Loading ...</h2>}>
       <UserPosts promise={postData}/>
    </Suspense>
    
    </>
  )
}
