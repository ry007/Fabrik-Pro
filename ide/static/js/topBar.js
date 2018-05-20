import React from 'react';
import ReactTooltip from 'react-tooltip';

class TopBar extends React.Component {
  render() {
    return (
      <div className="topBar">
        <div className="topbar-row">
            <div className="topbar-col">
              <div className="form-group">
                  <div className="dropdown">
                    <button id="topbar-icon" className="btn btn-default dropdown-toggle form-control" data-toggle="dropdown"
                    onClick={() => this.props.zooModal()} data-tip="Load from zoo">
                      <span className="glyphicon glyphicon-folder-open" aria-hidden="true"></span>
                    </button>
                  </div>
              </div>
            </div>
            <div className="topbar-col">
              <div className="form-group">
                  <div className="dropdown">
                    <button id="topbar-icon" className="btn btn-default dropdown-toggle form-control" data-toggle="dropdown"
                    onClick={() => this.props.textboxModal()} data-tip="Load from input">
                      <span className="glyphicon glyphicon-align-left" aria-hidden="true"></span>
                    </button>
                  </div>
              </div>
            </div>
            <div className="topbar-col">
              <div className="form-group">
                <div className="dropdown">
                  <button id="topbar-icon" className="btn btn-default dropdown-toggle form-control" data-toggle="dropdown" data-tip="Export">
                    <span className="glyphicon glyphicon-export" aria-hidden="true"></span>
                  </button>
                  <ul className="dropdown-menu">
                    <li><a className="btn" href="#" onClick={() => this.props.exportNet('caffe')}>Caffe</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="topbar-col">
              <div className="form-group">
                <div className="dropdown">
                  <button id="topbar-icon" className="btn btn-default dropdown-toggle form-control" data-toggle="dropdown" data-tip="Import">
                    <span className="glyphicon glyphicon-import" aria-hidden="true"></span>
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                        <a className="btn">
                        <label htmlFor="inputFilecaffe">Caffe</label>
                        <input id="inputFilecaffe" type="file" accept=".prototxt" onChange={() => this.props.importNet('caffe', '')}/>
                        </a>
                    </li>
                    <li><a className="btn" onClick={() => this.props.urlModal()}>URL</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="topbar-col">
              <div className="form-group">
                <button id="topbar-icon" className="btn btn-default dropdown-toggle form-control" data-toggle="dropdown"
                onClick={() => this.props.saveDb()} data-tip="Share">
                    <span className="glyphicon glyphicon-share" aria-hidden="true"></span>
                </button>
              </div>
            </div>
        </div>
      <ReactTooltip type="dark" multiline={true}/>
      </div>
    );
  }
}

TopBar.propTypes = {
  exportNet: React.PropTypes.func,
  importNet: React.PropTypes.func,
  saveDb: React.PropTypes.func,
  loadDb: React.PropTypes.func,
  zooModal: React.PropTypes.func,
  textboxModal: React.PropTypes.func,
  urlModal: React.PropTypes.func
};

export default TopBar;
