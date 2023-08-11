import React, { Component } from 'react'

export class NewsItem extends Component {

    render() {
        let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
        return (
            <div className='my-3'>
                <div className="card">
                    <div style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        position: 'absolute',
                        right: '0'
                    }}>
                        <span className="badge rounded-pill bg-danger" style={{ left: '90%', zIndex: 1 }}>
                            {source}
                        </span>
                    </div>
                    <img src={!imageUrl?'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg':imageUrl} className="card-img-top" alt="news" />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className='text-muted'>By {!author ? "unknow" : author} on {new Date(date).toGMTString()}</small></p>
                        <a rel='noreferrer' href={newsUrl} target='_blank' className="btn btn-dark btn-sm">Read More</a>
                    </div>
                </div>
            </div >
        )
    }
}

export default NewsItem
