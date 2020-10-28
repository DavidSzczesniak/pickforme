import React from "react";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class RandItem extends React.Component {
  render() {
    const { item } = this.props;

    return (
      <div className="rand-item">
        <p>{item.text}</p>
        <button className="rand-item__remove" onClick={this.removeItem}>
          <FontAwesomeIcon icon={faTimes} size="lg" />
        </button>
      </div>
    );
  }

  removeItem = () => {
    this.props.updateListFn(this.props.item);
  };
}
