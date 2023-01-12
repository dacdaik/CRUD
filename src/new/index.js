import './NewMember.css';
function NewMember(props) {
    return (
        <div className="InfoName">
            <h2>Tên người dùng</h2>
            <input
                value={props.name}
                onChange={props.InputName}
                placeholder="Cao Ba Dac"
                typeof="text"
                className="textInput"
            />
            <h2>Mật Khẩu</h2>
            <input value={props.pass} onChange={props.InputPass} placeholder="Nhập Mật khẩu" className="textInput" />
            <br />
            <input type="checkbox" onChange={props.InputCheck} />
            <label for="vehicle1"> Tôi đồng ý</label>
            <button className="btn" onClick={props.postData} type="submit">
                {' '}
                SEND
            </button>
        </div>
    );
}

export default NewMember;
