import React from 'react'

const NewsItems = (props) => {
    let { title, description, urlToImage, url, author, date, source } = props;
    return (
        <div className='my- 2'>
            <div className="card" >
                <img src={!urlToImage ? "https://bitsofco.de/content/images/2018/12/broken-1.png" : urlToImage} alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{!title ? "No title here..." : title}</h5><h6>Example heading <span className="badge bg-info text-dark-">New</span></h6>
                    <p className="card-text">{!description ? "No text here..." : description}</p> <strong> From : {source}</strong>
                    <p className="card-text"><small className="text-muted">By: {!author ? "Unknown" : author} ,On {new Date(date).toGMTString()}</small></p>
                    <a rel="noReferrer" href={url} target="_blank" className="btn btn-sm btn-dark">Read more...</a>
                </div>
            </div>
        </div>
    )

}

export default NewsItems
