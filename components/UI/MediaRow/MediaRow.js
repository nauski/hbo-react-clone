import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios'
import { shuffleArray } from '../../utilities';


const MediaRow = (props) => {

    const [loadingData, setLoadingData] = useState(true)
    const [moviesData, setMoviesData] = useState([])

    useEffect(() => {
        const results = axios.post(`/api/path/${props.endpoint}`, {
            path: `https://api.themoviedb.org/3/discover/${props.endpoint}`
        })
            .then(function (response) {
                // handle success
                setMoviesData(shuffleArray(response.data.results))
                setLoadingData(false)
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])

    const loopComp = (comp, digit) => {
        let thumbnails = []
        for (let i = 1; i < digit; i++) {
            thumbnails.push(comp)
        }
        return thumbnails;
    }
    const showThumbnails = () => {

        return loadingData
            ? loopComp((<Skeleton />), 10)
            : moviesData.map((movie) => {
                return <Thumbnail key={movie.id} movieData={movie} />
            })
    }
    return (
        <div className={`media-row ${props.type}`}>
            <h3 className="media-row__title">{props.title}</h3>
            <div className="media-row__thumbnails">
                {showThumbnails()}
            </div>
        </div>
    );
};

const Thumbnail = (props) => {
    return (
        <div className="media-row__thumbnail">
            <img src={`https://image.tmdb.org/t/p/original/${props.movieData.poster_path}`} alt="" />
            <div className="media-row__top-layer">
                <i className="fas fa-play" />
            </div>
        </div>
    )
}

const Skeleton = () => {
    return (
        <div className="media-row__thumbnail-skeleton">
            <div className="media-row__thumbnail-skeleton-img">

            </div>
        </div>
    )
}

export default MediaRow;