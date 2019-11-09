import React from 'react';

const Modal = props => {
  const { image_url, title, author, genre, book_year, book_status, description, onChange, onSubmit, modalId, titleModal} = props;
  return (
    <div id={modalId} className='modal'>
      <div className='modal-content'>
        <h4>{titleModal}</h4>
        <div className='row'>
          <form onSubmit={onSubmit}>
            <div className='input-field col m12'>
              <i className='material-icons prefix'>image</i>
              <input name='image_url'
              id="image_url" type='text' className='validate' placeholder='Add Url Image' value={image_url} onChange={onChange}/>
              <label className='active' htmlFor ='image_url'>Image Url</label>
            </div>
            <div className='input-field col m12'>
              <i className='material-icons prefix'>menu_books</i>
              <input name="title" type='text' className='validate' placeholder="Input Title" value={title} onChange={onChange}/>
              <label className='active' htmlFor='title'>Title</label>
            </div>
            <div className='input-field col m12'>
              <i className='material-icons prefix'>account_box</i>
              <input name='author' type='text' className='validate' placeholder="Who's the author?" value={author} onChange={onChange}/>
              <label className='active' htmlFor ="author">Author</label>
            </div>
            <div className='input-field col m12'>
              <i className='material-icons prefix'>book</i>
              <input name="genre" type='text' className='validate' placeholder="Genre" value={genre} onChange={onChange}/>
              <label className='active' htmlFor="genre">Genre</label>
            </div>
            <div className='input-field col m12'>
              <i className='material-icons prefix'>date_range</i>
              <input name='book_year' type='text' className='validate' placeholder="Book Year" value={book_year} onChange={onChange}/>
              <label for='book_year' htmlFor="book_year">Book Year</label>
            </div>
            <div className='input-field col m12'>
              <i className='material-icons prefix'>event_available</i>
              <input name='book_status' type='text' className='validate' placeholder="Book Status" value={book_status} onChange={onChange} />
              <label for='book_status' htmlFor="book_status">Book Status</label>
            </div>
            <div className='input-field col m12'>
              <i className='material-icons prefix'>description</i>
              <textarea
                name="description"
                id="description"
                type='text'
                className='materialize-textarea'
                placeholder="Description"
                value={description}
                onChange={onChange}
              />
              <label className="active" htmlFor='description'>Description</label>
            </div>
          </form>
        </div>
      </div>
      <div className='modal-footer'>
        <a href='#!' className='modal-close btn-flat yellow'>
          Save
        </a>
      </div>
    </div>
  );
};

export default Modal;