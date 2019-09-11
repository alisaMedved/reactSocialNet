import React, {useState, useEffect} from 'react';


const ProfileStatusWithHooks = (props) => {
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    useEffect( () => {
        setStatus(props.status);
    }, [props.status]);

    const activateEditMode = () => {
        setEditMode(true);
        // setStatus(props.status);
    };
    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    };

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    };

    return (
        <>
            {!editMode && <div>
                <p onDoubleClick={activateEditMode}>{props.status || "---"}</p>
            </div>}
            {editMode && <div>
                <input onChange={onStatusChange} onBlur={deactivateEditMode} autoFocus={true}
                value={status}/>
            </div>}
        </>
    );
};

export default ProfileStatusWithHooks;
