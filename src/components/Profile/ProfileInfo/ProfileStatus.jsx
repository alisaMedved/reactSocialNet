import React, {Component} from 'react';


class ProfileStatus extends Component {
    state = {
        editMode: true
    }

    activateEditMode() {
        this.setState({
            editMode: false
        });
    }
    deactivateEditMode() {
        this.setState({
            editMode: true
        });
    }
    render() {
        return (
            <>
                {this.state.editMode
                    ? <div>
                        <p onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</p>
                    </div>
                    : <div>
                        <input autoFocus={false} onBlur={this.deactivateEditMode.bind(this)} type="text" value={this.props.status}/>
                    </div>
                }
            </>
        );
    }

}

export default ProfileStatus;
