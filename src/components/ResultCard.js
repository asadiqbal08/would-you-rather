/* eslint-disable no-useless-concat */
import React from 'react';

const ResultCard = (props) => {
    const {option, votes, total_votes, styles} = props;
    return (
        <div className="card" style={{width: '20rem', background: styles.background, color: styles.color}}>
            <ul className="list-group">
                <li>
                    <b>Would you rather {option.text}?</b>
                    <div className="content"></div>
                    <div className="progress">
                        <div className="progress-bar bg-success" role="progressbar" style={{width: `${((votes / total_votes) * 100).toFixed(0)}`+'%', ariaValuemin: '0', ariaValuemax: '100' }} >
                            {((votes / total_votes) * 100).toFixed(0)}%
                        </div>
                    </div>
                    <div className='votes'>
                        <b>{votes} out of {total_votes} votes</b>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default ResultCard