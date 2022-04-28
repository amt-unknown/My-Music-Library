import { useContext } from 'react'
import { DataContext } from '../context/DataContext'
import GalleryItem from './GalleryItem'

const Gallery = () => {
    const data = useContext(DataContext)

    const display =data.map((item, index) => {
        return(
            <GalleryItem item={item} key={index} />
        )
    })

    return (
        <div style={{'textAlign': 'center'}}>
            <div style={{'display': 'flex', 'flexFlow':'wrap row', 'justifyContent': 'center'}}>
                {display}
            </div>

        </div>
    )
}

export default Gallery