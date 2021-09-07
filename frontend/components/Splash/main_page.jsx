import React from "react";

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
    };
  }

  //   componentDidMount() {
  //     this.setState({ images });
  //   }

  render() {
    const { images } = this.state;
    return (
      <div>
        <ul className="mainPageContent">
          {images.map((image) => (
            <li className="product-img">{image}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default MainPage;
