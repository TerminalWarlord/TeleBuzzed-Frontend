import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

export const ImageViewerWithCaption = ({ imageUrl, caption, classes, onError = null }) => {
    return (
        <figure style={{ textAlign: 'center' }}>
            <Zoom>
                <img
                    src={imageUrl}
                    alt={caption}
                    className={classes}
                    onError={onError}
                />
            </Zoom>
            <figcaption style={{ marginTop: '10px', fontSize: '14px', color: '#555' }}>
                {caption}
            </figcaption>
        </figure>
    )
}

export const ImageViewer = ({ imageUrl, caption, classes, onError = null }) => {
    return (
        <Zoom>
            <img
                src={imageUrl}
                alt={caption}
                className={classes}
                onError={onError}
            />
        </Zoom>
    )
}
