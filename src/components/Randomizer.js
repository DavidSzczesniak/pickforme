import React from "react";
import "./Randomizer.css";
import Button from "./Button";
import RandItem from "./RandItem";

export default class Randomizer extends React.Component {
  constructor() {
    super();
    this.handleShowResults = this.handleShowResults.bind(this);
    this.handleCloseResults = this.handleCloseResults.bind(this);
    this.state = {
      listItem: "",
      listRandomized: false,
    };
  }

  handleShowResults() {
    this.setState({ listRandomized: true });
  }

  handleCloseResults() {
    this.setState({ listRandomized: false });
  }

  render() {
    const { itemList } = this.props;

    const listRandomized = this.state.listRandomized;
    let pageContent;

    const listItems = JSON.parse(localStorage.getItem("itemList"));

    if (listRandomized) {
      let randomizedResult =
        listItems.length > 0
          ? listItems[Math.floor(Math.random() * listItems.length)].text
          : "no items added";

      pageContent = (
        <div className="randomizer">
          <p>Result:</p>
          <h2 className="randomizer__result">{randomizedResult}</h2>
          <div className="randomizer__buttons">
            <div className="randomizer__edit">
              <Button
                click={this.handleCloseResults}
                btnStyle="solid"
                text="Edit"
              />
            </div>

            <div className="randomizer__pick-again">
              <Button
                click={this.handleShowResults}
                btnStyle="solid"
                text="Pick Again"
              />
            </div>
          </div>
        </div>
      );
    } else {
      pageContent = (
        <div className="randomizer">
          <form
            onSubmit={(e) => this.submitItem(e)}
            className="randomizer__add-item"
          >
            <input
              id="addItemInput"
              onChange={(e) => this.updateInput(e)}
              type="text"
              placeholder="Start typing..."
              autoComplete="off"
            />
            <Button type="submit" btnStyle="solid" text="Add Item" />
          </form>
          <div className="randomizer__item-list">
            {itemList.map((item, index) => {
              return (
                <RandItem
                  updateListFn={this.updateList}
                  key={index}
                  item={item}
                />
              );
            })}
          </div>
          <div className="randomizer__pick-button">
            <Button
              click={this.handleShowResults}
              btnStyle="solid"
              text="Pick for me"
            />
          </div>
        </div>
      );
    }

    return <div>{pageContent}</div>;
  }

  updateList = (item) => {
    this.props.updateListFn(item);
  };

  updateInput = (e) => {
    this.setState({ listItem: e.target.value });
  };

  submitItem = (e) => {
    e.preventDefault();
    if (this.state.listItem === "") {
      alert("please enter a value");
    } else {
      this.props.addItemFn(this.state.listItem);
      document.getElementById("addItemInput").value = "";
    }
  };
}
