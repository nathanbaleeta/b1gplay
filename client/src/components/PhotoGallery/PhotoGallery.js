import React, { Fragment, Component } from "react";

import "./PhotoGallery.css";

const imgUrls1 = [
  "https://source.unsplash.com/PC_lbSSxCZE/800x600",
  "https://source.unsplash.com/lVmR1YaBGG4/800x600",
  "https://source.unsplash.com/5KvPQc1Uklk/800x600",
  "https://source.unsplash.com/GtYFwFrFbMA/800x600",
  "https://source.unsplash.com/Igct8iZucFI/800x600",
  "https://source.unsplash.com/M01DfkOqz7I/800x600",
  "https://source.unsplash.com/MoI_cHNcSK8/800x600",
  "https://source.unsplash.com/M0WbGFRTXqU/800x600",
  "https://source.unsplash.com/s48nn4NtlZ4/800x600",
  "https://source.unsplash.com/E4944K_4SvI/800x600",
  "https://source.unsplash.com/F5Dxy9i8bxc/800x600",
  "https://source.unsplash.com/iPum7Ket2jo/800x600"
];

const imgUrls = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];

export default class PhotoGallery extends Component {
  constructor(props) {
    super(props);
    this.state = { show: false, currentIndex: null };
    this.hideModal = this.hideModal.bind(this);
    this.findNext = this.findNext.bind(this);
    this.findPrev = this.findPrev.bind(this);
    this.renderImageContent = this.renderImageContent.bind(this);
  }

  componentDidMount() {}

  // Open the Modal
  showModal = () => {
    this.setState({ show: true });
    this.renderImageContent();
  };

  // Close the Modal
  hideModal = e => {
    if (e !== undefined) {
      e.preventDefault();
    }
    this.setState({ show: false, currentIndex: null });
  };

  onCurrentIndex = index => {
    this.setState({ currentIndex: index });
  };

  findPrev = e => {
    if (e !== undefined) {
      e.preventDefault();
    }
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1
    }));
  };

  findNext = e => {
    if (e !== undefined) {
      e.preventDefault();
    }
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1
    }));
  };

  renderImageContent() {
    return (
      <div>
        <h1>
          <p>Data</p>
        </h1>
      </div>
    );
  }

  render() {
    const { show } = this.state;

    const modal = (
      <Fragment>
        <div className={show ? "modal display-block" : "modal display-none"}>
          <section className="modal-main">
            <img
              src="/static/images/nature/11.png"
              alt=""
              className="modal-img"
            />
          </section>
          <section className="modal-comments">
            <p>#right content in there</p>
          </section>

          <span className="close" onClick={this.hideModal}>
            &times;
          </span>
        </div>
      </Fragment>
    );
    return (
      <Fragment>
        <br></br>
        <h2
          style={{
            textAlign: "center",
            fontWeight: "bold"
          }}
        >
          Photo grid
        </h2>

        {show ? modal : ""}

        {/* <!-- Images used to open the lightbox --> */}

        <div className="grid-container">
          {imgUrls1.map((pic, index) => (
            <div className="grid-item" key={index}>
              <img
                //src={`/static/images/nature/${pic}`}
                src={pic}
                alt=""
                className="grid-image"
                onClick={this.showModal}
              />
            </div>
          ))}
        </div>
        <GalleryModal
          closeModal={this.closeModal}
          findPrev={this.findPrev}
          findNext={this.findNext}
          hasPrev={this.state.currentIndex > 0}
          hasNext={this.state.currentIndex + 1 < imgUrls.length}
          src={imgUrls[this.state.currentIndex]}
        />
      </Fragment>
    );
  }
}

class GalleryModal extends Component {
  constructor() {
    super();
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }
  componentDidMount() {
    document.body.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    document.body.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown(e) {
    if (e.keyCode === 27) this.props.closeModal();
    if (e.keyCode === 37 && this.props.hasPrev) this.props.findPrev();
    if (e.keyCode === 39 && this.props.hasNext) this.props.findNext();
  }
  render() {
    const {
      closeModal,
      hasNext,
      hasPrev,
      findNext,
      findPrev,
      src
    } = this.props;
    if (!src) {
      console.log("whut");
      return null;
    }
    return (
      <div>
        <div className="modal-overlay" onClick={closeModal}></div>
        <div isopen="true" className="modal">
          <div className="modal-body">
            <a
              href={{}}
              className="modal-close"
              onClick={closeModal}
              onKeyDown={this.handleKeyDown}
            >
              &times;
            </a>
            {hasPrev && (
              <a
                href={{}}
                className="modal-prev"
                onClick={findPrev}
                onKeyDown={this.handleKeyDown}
              >
                &lsaquo;
              </a>
            )}
            {hasNext && (
              <a
                href={{}}
                className="modal-next"
                onClick={findNext}
                onKeyDown={this.handleKeyDown}
              >
                &rsaquo;
              </a>
            )}
            <img src={src} alt="" />
          </div>
        </div>
      </div>
    );
  }
}
