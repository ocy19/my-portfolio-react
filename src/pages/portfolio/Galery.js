import React from 'react';
// import ReactDOM from 'react-dom';
// import axios from 'axios';
import './Galery.css';
import ReactModal from 'react-modal'



export default class Galery extends React.Component {
  constructor(props) {
    super(props);

    this.goPrevPage = this.goPrevPage.bind(this);
    this.goNextPage = this.goNextPage.bind(this);

    this.pageSize = 10;

    this.state = {
      currentPage : 1,
      selectedImage : null,
      showFullImageModal : false
    };
  }


    showFullImage(imageData) {
      this.setState(
        {
          selectedImage: imageData.id,
          showFullImageModal: true
        }
      );
    }

    goPrevPage() {
      if(this.state.currentPage > 1) {
        this.setState(prevState => {
          return {
            currentPage: prevState.currentPage - 1
          };
        });
      }
    }

    goNextPage() {
      const imageAuthorFilter = "Alejandro Escamilla";
      const filteredImages = this.props.picData.filter(image => image.author === imageAuthorFilter)
      const totalPages = Math.ceil(filteredImages.length / this.pageSize);
      if(this.state.currentPage < totalPages) {
        this.setState(prevState => {
          return {
            currentPage: prevState.currentPage + 1
          };
        });
      }
    }
  render() {
    // console.log(
    //   this.props.picData,"----------------------"
    //
    // );
    const imageAuthorFilter = "Alejandro Escamilla";
    const filteredImages = this.props.picData.filter(image => image.author === imageAuthorFilter)
    const totalPages = Math.ceil(filteredImages.length / this.pageSize);
    // console.log(
    //   this.filteredImages
    // );
    // Slice out a page of images for the current gallery view
    const currentSlice = filteredImages.slice((this.state.currentPage - 1) * this.pageSize, (this.state.currentPage * this.pageSize));

    // Set of clickable images, at 200x200 for thumbnail size
    const imageSet = currentSlice.map(image => {
      return <img alt="..." src={ "https://picsum.photos/200?image=" + image.id } />
    });

    // console.log(
    //   imageSet, 'uuuuuuuuuuuuuuuuuuuu'
    // );

    // These two values control what will be displayed in the modal when a thumbnail is clicked
    const chosenImage = this.state.selectedImage === null ? null : this.filteredImages.filter(img => img.id === this.state.selectedImage)[0];

    const fullImage = chosenImage != null ? <img alt="..." src={ "https://picsum.photos/" + Math.floor(chosenImage.width / 10) + "/" + Math.floor(chosenImage.height / 10) + "?image=" + chosenImage.id } /> : null;

    return (
      <div>
        <h2>Gallery</h2>
        <ReactModal
          isOpen={ this.state.showFullImageModal }
          onRequestClose={ () => {this.setState({ showFullImageModal: false })}}
          className="modal"
          style={{
            overlay: {
              background: 'black'
            },
            content: {}
          }}
          ariaHideApp={false}>
          { fullImage }
        </ReactModal>

        <div className="image-container">
          <div className={"gallery-nav" + (this.state.currentPage === 1 ? " disabled" : "")} onClick={this.goPrevPage}>&lang;</div>
          <div className="viewport">
          {imageSet}

          </div>
          <div className={"gallery-nav" + (this.state.currentPage === totalPages ? " disabled" : "")} onClick={this.goNextPage}>&rang;</div>
        </div>
      </div>
    );
  }

}
