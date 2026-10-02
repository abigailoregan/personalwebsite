import { Link } from "react-router-dom"

interface LinkTileProps {
    title: string
    image: string
    link: string
}

function LinkTile({ title, image, link }: LinkTileProps) {
    return (
        <div className='cover-photo'>
            <img src={image} alt={title} />
            <Link to={link}>
                <div className='backdrop'>
                    <div className='text-desc'>{title}</div>
                </div>
            </Link>
        </div>
    )
}

export default LinkTile