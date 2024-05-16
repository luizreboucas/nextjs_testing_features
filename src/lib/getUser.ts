import React from 'react'

export default async function getUser(id : string) {

    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    if(!response.ok) throw new Error("failed to fecth data");
    return response.json()
}
