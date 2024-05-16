type Props = {
    promise: Promise<any[]>
}

export default async function UserPosts({promise}: Props){
    const posts = await promise;

    const content = posts.map(post => {
        return (
            <>
                <article>
                    <h2>{post.title}</h2>
                    <p>
                        {post.body}
                    </p>
                </article>
            </>
        )
    })
    return content
}