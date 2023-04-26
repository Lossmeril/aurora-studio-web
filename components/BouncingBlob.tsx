import { Component } from "react";
import * as React from "react";

interface BlobState {
  x: number;
  y: number;
  xSpeed: number;
  ySpeed: number;
  bounceCooldown: number;
}

interface BlobProps {
  blobWidth: number;
  blobHeight: number;
  canWidth: number;
  canHeight: number;
  color: "pink" | "blue" | "purple";
}

const MS_PER_FRAME = 20;

class BouncingBlob extends Component<BlobProps, BlobState> {
  constructor(props: BlobProps) {
    super(props);

    this.state = {
      x: BouncingBlob.getRandomNumber(
        0,
        this.props.canWidth - this.props.blobWidth
      ),
      y: BouncingBlob.getRandomNumber(
        0,
        this.props.canHeight - this.props.blobHeight
      ),
      xSpeed: 0.5,
      ySpeed: 0.5,
      bounceCooldown: 50,
    };
  }

  static getRandomNumber(min: number, max: number): number {
    return Math.random() * (max - min) + min;
  }

  componentDidMount() {
    setInterval(() => this.moveBlob(), MS_PER_FRAME);
  }

  moveBlob() {
    this.setState({
      x: this.state.x + this.state.xSpeed,
      y: this.state.y + this.state.ySpeed,
      bounceCooldown:
        this.state.bounceCooldown != 0
          ? this.state.bounceCooldown - 1
          : this.state.bounceCooldown,
    });

    if (
      (this.state.x + this.props.blobWidth > this.props.canWidth ||
        this.state.x <= 0) &&
      this.state.bounceCooldown == 0
    ) {
      this.setState({
        xSpeed: -this.state.xSpeed,
        bounceCooldown: 50,
      });
    }

    if (
      (this.state.y + this.props.blobHeight > this.props.canHeight ||
        this.state.y <= 0) &&
      this.state.bounceCooldown == 0
    ) {
      this.setState({
        ySpeed: -this.state.ySpeed,
        bounceCooldown: 50,
      });
    }

    console.log(this.state.bounceCooldown);
  }

  render() {
    const { x, y } = this.state;
    const { blobWidth, blobHeight, color } = this.props;
    return (
      <div
        className={"blob blob-" + color}
        style={{
          left: x + "px",
          top: y + "px",

          width: blobWidth + "px !important",
          height: blobHeight + "px !important",
        }}
      ></div>
    );
  }
}

export default BouncingBlob;
