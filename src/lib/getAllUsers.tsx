import React from 'react'

export default async function getAllUsers() {

    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if(!response.ok) throw new Error("failed to fecth data");
    return response.json()
}
