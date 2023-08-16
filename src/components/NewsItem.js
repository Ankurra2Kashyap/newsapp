import React from 'react'

 const NewsItem = (props)=> {
    let { title, description, imgUrl, newsUrl, author, date } =props;
    return (
      <div className="my-3">
        <div className="card">
          <img src={!imgUrl ? "https://th.bing.com/th/id/OIP.QQmD9zs88T2f1LHtBQ7D_AAAAA?pid=ImgDet&rs=1" :
            imgUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-body-secondary">By {!author ? "unknown" : author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
 
}

export default NewsItem
