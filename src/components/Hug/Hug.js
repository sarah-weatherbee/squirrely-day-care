import React from 'react';
import './Hug.scss';

class Hug extends React.Component {
  componentWillUpdate(nextProps) {
    if (nextProps.editHug !== this.props.editHug && nextProps.editHug.name) {
      this.setState({ squirrelId: nextProps.editHug.squirrelId, treeId: nextProps.editHug.treeId, date: nextProps.editHug.date });
    }
  }

  deleteHugEvent = (e) => {
    const { hug, deleteHugs } = this.props;
    e.preventDefault();
    deleteHugs(hug.id);
  }

  pickHug = (e) => {
    e.preventDefault();
    const { hug, selectHugToEdit } = this.props;
    selectHugToEdit(hug.id);
  }

  render() {
    const { hug } = this.props;
    return (
      <div className="Hug col-3">
        <div className="card m-3">
          <div className="card-body">
            <h3 className="card-text">{hug.date}</h3>
            <h4 className="card-text">{hug.treeId} hugs {hug.squirrelId}</h4>
            <button className="btn btn-danger" onClick={this.deleteHugEvent}>x</button>
            <button className="btn btn-info" onClick={this.pickHug}>Edit</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Hug;

// import React from 'react';
// import PropTypes from 'prop-types';
// import hugShape from '../../helpers/propz/hugShape';
// import './Hug.scss';

// const moment = require('moment');

// class Hug extends React.Component {
//   static propTypes = {
//     tree: hugShape,
//     deleteHug: PropTypes.func.isRequired,
//   }

//   deleteHugEvent = (e) => {
//     const { hug, deleteHug } = this.props;
//     e.preventDefault();
//     deleteHug(hug.id);
//   }


//   render() {
//     const { hug } = this.props;
//     const date = moment(hug.date).format('L');
//     const time = moment(hug.date).format('LT');

//     return (
//       <div className="Hug col-12 col-md-6 col-lg-4 m-3">
//         <div className="card">
//           <div className="card-body">
//             <h2 className="card-title">{date}</h2>
//             <h3>{time}</h3>
//             <ul className="list-group">
//               <li className="list-group-item">{hug.treeName}</li>
//               <li className="list-group-item">{hug.squirrelName}</li>
//               <li className="list-group-item"><button className="btn btn-danger" onClick={this.deleteHugEvent}>X</button></li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Hug;
