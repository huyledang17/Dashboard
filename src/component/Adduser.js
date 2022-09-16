import React, { Component } from "react";

export default class Adduser extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      trangthainutthem: true,
      id: "",
      name: "",
      tel: "",
      Permission: 0,
    };
  }
  xulyTrangthai = () => {
    this.setState({
      trangthainutthem: !this.state.trangthainutthem,
    });
  };
  hienNut = () => {
    if (this.state.trangthainutthem === true)
      return (
        <div
          onClick={() => this.xulyTrangthai()}
          className="btn btn-outline-info btn-block"
        >
          Thêm mới
        </div>
      );
    else
      return (
        <div
          onClick={() => this.xulyTrangthai()}
          className="btn btn-outline-secondary btn-block"
        >
          Đóng
        </div>
      );
  };
  getData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  };

  addUser = () => {
    this.props.getUser(this.state.name, this.state.tel, this.state.Permission);
    this.setState({
      name: "",
      tel: "",
      Permission: 0,
    });
  };

  kiemtraTrangthai = () => {
    if (this.props.hienthiForm === true)
      return (
        <div className="card border-primary mb-3" style={{ maxWidth: "18rem" }}>
          <div className="card-header">Thêm thành viên</div>
          <div className="card-body text-primary">
            <div className="form-group">
              <input
                type="text"
                value={this.state.name}
                onChange={this.getData}
                className="form-control"
                name="name"
                id
                placeholder="Tên user"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                value={this.state.tel}
                onChange={this.getData}
                className="form-control"
                name="tel"
                id
                placeholder="Số điện thoại"
              />
            </div>
            <div className="form-group">
              <select value={this.state.Permission} onChange={this.getData} className="form-control" name="Permission" id>
                <option defaultValue={0}>Choose...</option>
                <option value={1}>Admin</option>
                <option value={2}>User</option>
                <option value={3}>Modrater</option>
              </select>
            </div>
            <div className="form-group">
              {/* Muốn reset dùng attr reset của input */}
              <div className="btn btn-block btn-primary"onClick={() => this.addUser()}
              >addUser
              </div>
            </div>
          </div>
        </div>
      );
  };
  render() {
    return (
      <div className="col-3">


        {this.kiemtraTrangthai()}
      </div>
    );
  }
}