import React from 'react'
import getAllUsers from '@/lib/getAllUsers'
import Link from 'next/link';

export default async function Users() {

    const userData : Promise<User[]> = await getAllUsers();
    const users = await userData;

    const content = (
        <section>
            <h2>
                <Link href={'/'}> Back to Home</Link>
            </h2>
            <br/>
            {users.map(user => {
                return (
                    <>
                        <Link href={`/users/${user.id}`} key={user.id}>{user.name}</Link>  
                        <br/>
                    </>
                        
                )
            })}
        </section>
    )

    return content;
  
}
