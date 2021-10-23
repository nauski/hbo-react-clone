import React, { useEffect, useState } from 'react';
import axios from 'axios'

const CastInfo = (props) => {

    const [loadingData, setLoadingData] = useState(true)
    const [credits, setCredits] = useState([])

    useEffect(() => {
        axios.post(`/api/path/movie/${props.mediaId}`, {
            content: {
                path: `https://api.themoviedb.org/3/movie/${props.mediaId}`,
            }
        })
            .then(function (response) {
                // handle success
                setCredits(response.data.credits)
                setLoadingData(false)
            })
            .catch(function (error) {
                console.log(error)
            })
    }, [])

    const showCast = () => {
        if (!loadingData) {
            return (
                credits.cast.map((item) => {
                    return (
                        <ul key={item.credit_id} className="cast-info__crew">
                            <li>
                                {item.character}
                            </li>
                            <li>
                                {item.name}
                            </li>
                        </ul>
                    )
                })
            )
        } else {
            return (<div>Loading Cast</div>)
        }
    }

    const showCrew = () => {
        if (!loadingData) {
            return (
                credits.crew.map((item) => {
                    return (
                        <ul key={item.credit_id} className="cast-info__crew">
                            <li>
                                {item.name}
                            </li>
                            <li>
                                {item.job}
                            </li>
                        </ul>
                    )
                })
            )
        } else {
            return (<div>Loading Crew</div>)
        }
    }

    return (
        <div className="cast-info">
            <div className="cast-info__group-title">
                Cast
            </div>
            <div className="cast-info__list">
                {showCast()}
            </div>
            <div className="cast-info__group-title">
                Crew
            </div>
            <div className="cast-info__list">
                {showCrew()}
            </div>
        </div>
    );
};

export default CastInfo;

