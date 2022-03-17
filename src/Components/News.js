import React, { useEffect, useState } from 'react'
import Loder from './Loder';
import NewsItems from './NewsItems'
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";


const News = (props) => {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
    const [text, setText] = useState("")

    const changeHandler = (e) => {
        setText(e.target.value)
    }

    const capital = (s) => {
        return s.charAt(0).toUpperCase() + s.slice(1);
    }

    const updateNews = async () => {

        props.setProgress(9);
        const url2 = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=726edf410b6c4815abacdaf0a2543f4e&page=${page}`;
        setLoading(true);
        let data = await fetch(url2);
        props.setProgress(30);

        let parsedData = await data.json()
        props.setProgress(70);

        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        setLoading(false);
        console.log(parsedData);

        props.setProgress(100)

    }

    useEffect(() => {
        document.title = `NEWS MONKS - ${capital(props.category)}`;
        updateNews();
        console.log('use');
        // eslint-disable-next-line

    }, [])



    const fetchMoreData = async () => {

        const url2 = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=726edf410b6c4815abacdaf0a2543f4e&page=${page + 1}`;
        setPage(page + 1)
        // this.setState({ loading: true })
        let data = await fetch(url2);
        let parsedData = await data.json()
        // console.log(parsedData);
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
        setLoading(false)


    };


    // console.log('render');//second run this
    return (
        <>
            <div className="headline">
                <h2 className="my" style={{ marginLeft: '1rem' }}> <strong>NEWS MONKS :</strong> <span id='top'>Top News Of {capital(props.category)}</span> </h2>

                <input className="prompt " type="search" placeholder="Search News..." aria-label="Search" value={text} onChange={changeHandler} />

            </div>

            {loading && <Loder />}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Loder />}
            >
                <div className="container">

                    <div className="row my-3">
                        {articles.filter((val) => {
                            if (val.title.toLowerCase().includes(text.toLowerCase())) {
                                return val;
                            } else {
                                return "";
                            }
                        }).map((element) => {
                            return <div className="col-md-4 my-3" key={element.url}>
                                <NewsItems title={element.title} description={element.description} urlToImage={element.urlToImage} url={element.url} author={element.author} date={element.publishedAt}
                                    source={element.source.name} />
                            </div>
                        })}


                    </div>
                </div>
            </InfiniteScroll>

        </>

    )

}

News.defaultProps = {
    country: "in",
}
News.propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
}

export default News



