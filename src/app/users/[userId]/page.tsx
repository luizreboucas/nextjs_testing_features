import getUser from '@/lib/getUser'
import getPosts from '@/lib/getUsersPost'
import React from 'react'
import { Suspense } from 'react'
import UserPosts from './components/UserPosts'
type Params = {
    params: {
       userId: string
    }
}

export default async function UserPage({params: {userId}}: Params) {
    const userData: Promise<User> = getUser(userId);
    const postData: Promise<any[]> = getPosts(userId);
    const user = await userData
  return (
    <>
    
    <div>{user.name}</div>
    <Suspense fallback={<h2>Loading ...</h2>}>
       <UserPosts promise={postData}/>
    </Suspense>
    
    </>
  )
}
