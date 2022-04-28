import GalleryItem from './GalleryItem'

function Gallery(props){
    const display = props.data.map((item, index) => {
        return(
            <GalleryItem item={item} key={index} />
        )
    })

    return (
        <div style={{'text-align': 'center'}}>
            <div style={{'display': 'flex', 'flex-flow':'wrap row', 'justify-content': 'center'}}>
                {display}
            </div>

        </div>
    )
}

export default Gallery