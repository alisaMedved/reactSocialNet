import React, {Component} from 'react';


class ProfileStatus extends Component {

    state = {
        editMode: false
    }
    activateEditMode = () => {
        this.setState({
            editMode: true,
            status: this.props.status
        });
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status);
    }
    onStatusChange = (e) => {
        this.setState({status: e.currentTarget.value});
    }
    componentDidUpdate(prevProps, prevState) {
      if (prevProps.status !== this.props.status) {
          this.setState({status: this.props.status});
      }
    }

    render() {
        return (
            <>
                {this.state.editMode
                    ? <div>
                        <input onChange={this.onStatusChange}
                            autoFocus={true} onBlur={this.deactivateEditMode}
                            type="text" value={this.state.status}/>
                    </div>
                    : <div>
                        <p onDoubleClick={this.activateEditMode}>{this.props.status || "---"}</p>
                    </div>
                }
            </>
        );
    }

}

export default ProfileStatus;
