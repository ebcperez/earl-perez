import React from 'react';

class MyModal extends React.Component {
    makeId (modalTitle) {
        return "#" + modalTitle;
    }

    render () {
        return (
            <div className="col-sm-4 gallery">
                <div className="hovereffect gallery-image">
                    <img className="img-responsive" src={this.props.img} alt={this.props.modalTitle}/>
                    <div className="overlay" >
                        <h2>{this.props.modalTitle}</h2>
                        <h3>{this.props.caption}</h3>
                        <button type="button" 
                        className="btn btn-default" 
                        data-target={this.makeId(this.props.modalId)} 
                        data-toggle="modal">
                        More Details
                        </button>
                    </div>
                </div>
                
                <div className="modal fade" id={this.props.modalId} role="dialog">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                                <h4 className="modal-title">{this.props.modalTitle}</h4>
                            </div>
                            <div className="modal-body">
                                <img className="img-responsive" src={this.props.img} />
                                <p>{this.props.modalDetails}</p>
                                <a href={this.props.link.project} target="_blank" type="button" className="btn btn-default" >Link to project.</a>
                                <a href={this.props.link.github} target="_blank" type="button" className="btn btn-default" >Link to GitHub.</a>
                            </div>
                                <div className="modal-footer">
                                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default MyModal;