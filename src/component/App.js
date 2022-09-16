import React, { Component } from "react";
import "../App.css";
import Adduser from "./Adduser";
import Header from "./Header";
import List from "./List";
import Search from "./Search";
import Datauser from "./Data.json";

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      hienthiForm: true,
      data: Datauser,
      searchResult: "",
    };
  }

  doiTrangThai = () => {
    this.setState({
      hienthiForm: !this.state.hienthiForm,
    });
  };
  checkConnect = (data) => {
    this.setState({ searchResult: data });
  };

  addInfo = (name, tel, permission) => {
    var pt = {};
    pt.id = 0;
    pt.name = name;
    pt.tel = tel;
    pt.Permission = permission;
    let newItem = this.state.data
    newItem.push(pt)
    this.setState({ data: newItem })
  };

  render() {
    var ketQua = [];
    this.state.data.forEach((item) => {
      if (item.name.indexOf(this.state.searchResult) !== -1) {
        ketQua.push(item);
      }
    });
    return (
      <div>
        <Header />
        <div className="container">
          <div className="row">
            <Search checkConnectProps={(dl) => this.checkConnect(dl)} ketNoi={() => this.doiTrangThai()} />
            <List dataUserProps={this.state.data} />
            <Adduser hienthiForm={this.state.hienthiForm} getUser={(name, tel, permission) => this.addInfo(name, tel, permission)} />
          </div>
        </div>
      </div>
    );
  }
}
export default App;