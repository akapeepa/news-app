import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

const News = (props) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);

    const updateNews = async () => {
        props.setProgress(10)
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&pageSize=${props.pageSize}&page=${page}`
        // setState({ loading: true })
        let data = await fetch(url);
        props.setProgress(30)
        let parsedData = await data.json();
        props.setProgress(50)
        setArticles(parsedData.articles)
        setLoading(false)
        // setPageSize()
        setTotalResults(parsedData.totalResults)
        props.setProgress(100)
    }

    useEffect(() => {
        updateNews()
        // eslint-disable-next-line
    }, []);

    // handleNext = async () => {
    //     setState({ page: state.page + 1 })
    //     updateNews()

    // }

    // handlePrevious = async () => {
    //     setState({ page: state.page - 1 })
    //     updateNews()
    // }

    const fetchMoreData = async () => {
        // updateNews()
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&pageSize=${props.pageSize}&page=${page + 1}`
        setPage(page + 1)
        setLoading(false)
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
        setLoading(false)
    };

    return (
        <>
            <h2 className='text-center my-3 t-90'>Top {props.category} Headlines</h2>
            {loading && <Spinner />}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />}
            >
                <div className="container">
                    <div className="row">
                        {articles.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <NewsItem source={element.source.name} date={element.publishedAt} author={element.author} title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} />
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>
            {/* <div className="container d-flex justify-content-between">
                    <button disabled={state.page <= 1} type='button' className="btn btn-dark" onClick={handlePrevious}>&larr; Previous</button>
                    <button disabled={state.page + 1 > Math.ceil(state.totalResults / props.pageSize)} type='button' className="btn btn-dark" onClick={handleNext}>Next &rarr;</button>
                </div> */}
        </>
    )
}

News.defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general',
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}

export default News
