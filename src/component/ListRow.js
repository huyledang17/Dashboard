import React, { Component } from 'react'

export default class ListRow extends Component {
    cacQuyen=()=>{
        if(this.props.Permission==="1") {return "Admin";}
        else if(this.props.Permission===2) {return "Modrator";}
            else {return "Normal User";}
    }

  render() {
    return (
        <tr>
        <td scope="row">1</td>
        <td>{this.props.userName}</td>
        <td>{this.props.tel}</td>
        <td>{this.cacQuyen()}</td>
        <td>
          <div className="btn-group">
            <div className="btn btn-warning sua"><i className="fa fa-pencil" aria-hidden="true" />Sửa</div>
            <div className="btn btn-danger xoa"><i className="fa-solid fa-xmark" /> - Xóa</div>
          </div>
        </td>
      </tr>
    )
  }
}
