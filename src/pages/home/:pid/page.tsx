import { useParams } from "react-router"

export default function Page() {
    const params = useParams();
    return (
        <div>나야나! 니 자식!{params.pid}</div>
    )
}