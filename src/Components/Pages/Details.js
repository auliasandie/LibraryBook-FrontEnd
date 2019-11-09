import React, { Component } from "react";
import "../Styles/Style.css";
import M from 'materialize-css';
import { Link } from "react-router-dom";
import DetailNav from "../DetailNav/DetailNav";
import FloatingCard from "../DetailNav/BookCard";
import ContainerDetail from "../ContainerDetail/ContainerDetail";
import Modal from '../Modal/Modal'


class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      book: [],
      id: 0,
      detail: {
        title: '',
        description: '',
        image_url: '',
        author: '',
        book_year: '',
        book_status: '',
        genre:'',
    },
    isEdit: false,
    isDelete: false
  };
}

  componentDidMount() {
    M.AutoInit();
console.log(this.props);

    if (this.props.match.params) {
    const {id_book} = this.props.match.params;
    const { book} = this.props.location.state;
    console.log ({books: book});

    this.setState({
      book,
      id: id_book,
      detail: book[id_book]
    });
    }
  }
  render() {
    return (
      <div>
        <div
          className="top-cover"
          style={{
            backgroundImage: `url('${this.state.detail.image_url}')`,
            backgroundSize: "cover",
            width: "100%",
            height: "350px"
          }}
        >
          <DetailNav alert={this.props.match.params.index} />
          <FloatingCard image_url={this.state.detail.image_url}/>
          <button className="btn-large z-depth-3 right btn-borrow" style={{marginLeft:"187px",
    marginTop:"362px",
    marginRight: "-167px"}}>
            Borrow
          </button>
        </div>
        <div className="container">
          <div className="row">
            <div className="col m8">
            <ContainerDetail desc={this.state.detail.description} title={this.state.title} />
            </div>
          </div>
        </div>
        <div className="fixed-action-btn">
          <a href="#" className="btn-floating btn-large">
            <i className="large material-icons">add</i>
          </a>
        </div>
      </div>
    );
  }
}
export default Details;
