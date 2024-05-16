import React from 'react'

export default async function getPosts(id : string) {

    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
    if(!response.ok) throw new Error("failed to fecth data");
    return response.json()
}