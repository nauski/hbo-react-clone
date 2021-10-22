import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios'
import { shuffleArray } from '../../utilities';
import { useStateContext } from '../../HBOProvider';
import Link from 'next/link';

const MediaRow = (props) => {

    const globalState = useStateContext();

    const [loadingData, setLoadingData] = useState(true)
    const [moviesData, setMoviesData] = useState([])

    useEffect(() => {
        if (!props.pathId) {
            // If Path ID is not specified, then use DISCOVER route
            axios.post(`/api/path/discover/path`, {
                content: {
                    path: props.endpoint,
                }
            })
                .then(function (response) {
                    // handle success
                    setMoviesData(shuffleArray(response.data.results))
                    setLoadingData(false)
                })
                .catch(function (error) {
                    console.log(error)
                })
        } else {
            // If Path ID is specified, then use MOVIE route
            axios.post(`/api/path/movie/${props.pathId}`, {
                content: {
                    path: props.endpoint,
                }
            })
                .then(function (response) {
                    // handle success
                    setMoviesData(shuffleArray(response.data.similar.results))
                    setLoadingData(false)
                })
                .catch(function (error) {
                    console.log(error)
                })
        }

    }, [])

    const loopComp = (comp, digit) => {
        let thumbnails = []
        for (let i = 1; i < digit; i++) {
            thumbnails.push(comp)
        }
        return thumbnails;
    }
    const showThumbnails = (type) => {

        return loadingData
            ? loopComp((<Skeleton />), 10)
            : moviesData.map((movie) => {
                return <Thumbnail key={movie.id} movieData={movie} type={type} />
            })
    }

    return (

        <div className={`media-row ${props.type}`}>
            <h3 className="media-row__title">{props.title}</h3>
            <div className="media-row__thumbnails">
                {showThumbnails(props.type)}
            </div>
        </div>

    );
};

const Thumbnail = (props) => {
    const thumbSize = (type) => {
        if (type === 'large-v') {
            return '400';
        }
        if (type === 'small-v') {
            return '185';
        }
        if (type === 'large-h') {
            return '500';
        }
        if (type === 'small-h') {
            return '342';
        }
    }
    return (
        <Link href={`/movie/${props.movieData.id}`}>
            <a>
                <div className="media-row__thumbnail">
                    <img src={`https://image.tmdb.org/t/p/w${thumbSize(props.type)}${props.movieData.poster_path}`} alt="" />
                    <div className="media-row__top-layer">
                        <i className="fas fa-play" />
                    </div>
                </div>
            </a>
        </Link>
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