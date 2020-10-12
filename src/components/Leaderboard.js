/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component, Fragment } from 'react';
import PropType from 'prop-types';
import { connect } from 'react-redux';

export class Leaderboard extends Component {
  static propType = {
    users: PropType.array.isRequired
  };
  render() {
    const { users } = this.props;

    const data = Object.values(users)
      .map(user => ({
        id: user.id,
        name: user.name,
        avatarURL: user.avatarURL,
        answerCount: Object.values(user.answers).length,
        createdQuestionCount: user.questions.length,
        total: Object.values(user.answers).length + user.questions.length
      }))
      .sort((a, b) => a.total - b.total)
      .reverse()
      .slice(0, 4);

    return (
          <div className="leaderboard">
          {data.map((user, id) => (
            <Fragment key={id}>
              <div className="card">
              <div className="card-body">
                <h4 className="card-title border rounded">{user.name}</h4>
                <div className='container'>
                    <div className='row'>
                      <div className='col-sm-3 card-img-col'>
                        <img className="card-img" src={user.avatarURL} alt="User image"/>
                      </div>
                      <div className='col-sm-5 paragraphs'>
                        <div className='row'>
                          <div className="card-text">Answered Questions<span className='float-right'>{user.answerCount}</span></div>
                        </div>
                        <hr/>
                        <div className='row'>
                          <div className="card-text">Created Questions <span className='float-right'>{user.createdQuestionCount}</span></div>
                        </div>
                      </div>
                      <div className='col border rounded score'>
                        <h6 className="border-bottom mt-2 mb-2">SCORE</h6>
                        <div className="total">
                          {user.total}
                        </div>
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </Fragment>  
          ))}
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    users,
  };
}

export default connect(mapStateToProps)(Leaderboard);
