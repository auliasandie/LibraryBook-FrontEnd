import React, { Component } from 'react';
import NaviBar from '../Navbar/Navbar';
import Carousel from '../carousel/Carousel';
import Cards from '../card/Card';
import books from '../Helpers/books';
import Modal from '../Modal/Modal';

import M from 'materialize-css';
import { timingSafeEqual } from 'crypto';

class Home extends Component {

  constructor(){
    super()
    this.state = {
      book: books
    }
   }

  componentDidMount() {
    M.AutoInit();

    const elems = document.querySelectorAll('.carousel');
    const options = {
      duration: 100
    };
    M.Carousel.init(elems, options);
  }

  render() {
    const CardMapping = this.state.book.map((b, index) => {
      return (
        <Cards
          alt={b.title.trim()}
          to={{
            pathname: `details/${index}`,
            state: {
              book: this.state.book
            }
          }}
          key={index}
          title={b.title}
          img={b.image_url}
          description={b.description}
        />
      );
    });
    return (
      <div className='home-page'>
        <Modal modalId='addNovelModal' title='Add Data'></Modal>
        <NaviBar />
        <Carousel />
        <div className='container'>
          <h4
            style={{
              marginBottom: '30px',
              paddingLeft: '10px',
              fontSize: '25px'
            }}>
            List Books
          </h4>
          <div className='row'>{CardMapping }</div>
        </div>
      </div>
    );
  }
}

export default Home;