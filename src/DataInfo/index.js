function Data(props) {
    return (
        <>
            {props.API.map((item, index) => {
                return (
                    <div>
                        <button>Xóa</button>
                        <button>Sửa</button>
                        <input type="checkbox" />
                        <label for="vehicle1"> Đánh dấu</label>
                        <h2>Người thứ: {item.id}</h2>
                        <p>Họ Và Tên : {item.name} </p>
                        <p>Mật Khẩu : {item.pass} </p>
                        <p>Đồng Ý : {item.checker ? 'Có' : 'Không'} </p>
                    </div>
                );
            })}
        </>
    );
}

export default Data;
