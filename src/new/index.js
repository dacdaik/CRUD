import './NewMember.css';
function NewMember(props) {
    return (
        <div className="InfoName">
            <h2>Tên người dùng</h2>
            <input onChange={props.InputName} placeholder="Cao Ba Dac" typeof="text" className="textInput" />
            <h2>Mật Khẩu</h2>
            <input onChange={props.InputPass} placeholder="Nhập Mật khẩu" className="textInput" />
            <br />
            <input type="checkbox" />
            <label for="vehicle1"> Tôi đồng ý</label>
            <button className="btn"> SEND </button>
        </div>
    );
}

export default NewMember;
