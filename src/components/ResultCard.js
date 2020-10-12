/* eslint-disable no-useless-concat */
import React from 'react';

const ResultCard = (props) => {
    const {option, votes, total_votes, styles} = props;
    return (
        <div className="card" style={{width: '20rem', background: styles.background, color: styles.color}}>
            <ul className="list-group" style={{height: '150px', width: '19rem', position: 'relative'}}>
                <li style={{width: '100%'}}>
                    <b>Would you rather {option.text}?</b>
                    <div className="content"></div>
                    <div className="progress" style={{height: '3rem', position: 'absolute', bottom: '0', marginBottom: '30px', width: '100%', background: 'darkgray'}}>
                        <div className="progress-bar bg-success" role="progressbar" style={{width: `${((votes / total_votes) * 100).toFixed(0)}`+'%', ariaValuemin: '0', ariaValuemax: '100' }} >
                            {((votes / total_votes) * 100).toFixed(0)}%
                        </div>
                    </div>
                    <div style={{textAlign: 'center', position: 'absolute', bottom: '0', marginBottom: '2px', width: '100%'}}>
                        <b>{votes} out of {total_votes} votes</b>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default ResultCard