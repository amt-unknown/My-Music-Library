import GalleryItem from './GalleryItem'

function Gallery(props){
    const display = props.data.map((item, index) => {
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