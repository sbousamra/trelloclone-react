import React from 'react';
import CreateBoard from './createBoard';
import classNames from 'classnames';
import * as lodash from 'lodash';

class BoardNameList extends React.Component { 

  render() {

    const list = lodash.map(this.props.boards, function(board, id) {

      const buttonClassNames = classNames({
        "btn": true,
        "btn-lg": true,
        "btn-primary": true,
        "btn-block": true,
        "btn-board": true,
        "btn-info": board.important
      })

      return (
        <div key={id} className="col-3 board-col">
          <a className="link-nounderline" href={"/boards/" + id}>
            <button className={buttonClassNames}>{board.name}</button>
          </a>
        </div>
      )
    })

    return (
      <div className="row">
      {list}
        <div className="col-3 board-col">
          <CreateBoard addBoard={this.props.addBoard}/>
        </div>
      </div>
    )
  }
}

export default BoardNameList;