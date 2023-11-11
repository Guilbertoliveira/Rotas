import { useParams } from "react-router-dom"
import listaPost from "../../../../../mock"



export function Post() {
    const { id } = useParams()
    return (

        <div>
            {
                listaPost.filter((post) => post.id === Number(id))
                    .map((post) => (
                        <div key={post.id}>
                            <h2>{post.title}</h2>
                            <p>{post.summary}</p>
                        </div>
                    ))

            }

        </div>
    )
}