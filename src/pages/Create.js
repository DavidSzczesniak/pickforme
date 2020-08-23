import React from "react";
import BodyIntro from "../components/BodyIntro";
import Randomizer from "../components/Randomizer";

export default class Create extends React.Component {
  constructor() {
    super();
    this.state = {
      itemList: [],
    };
    this.bodyTitle = "Create your randomizer";
    this.bodyText = "This is some placeholder text for the randomizer page.";
  }

  render() {
    return (
      <article>
        <BodyIntro title={this.bodyTitle} blurb={this.bodyText} />
        <Randomizer
          updateListFn={this.updateList}
          itemList={this.state.itemList}
          addItemFn={this.addItem}
        />
      </article>
    );
  }

  componentDidMount = () => {
    const itemList = localStorage.getItem("itemList");
    if (itemList) {
      const savedList = JSON.parse(itemList);
      this.setState({ itemList: savedList });
    } else {
      console.log("doesn't have items");
    }
  };

  addItem = async (listItem) => {
    await this.setState({
      itemList: [
        ...this.state.itemList,
        {
          text: listItem,
          deleted: false,
        },
      ],
    });
    localStorage.setItem("itemList", JSON.stringify(this.state.itemList));
  };

  updateList = (listItem) => {
    const updatedList = this.state.itemList
      .map((item) => {
        if (listItem === item) {
          return {
            text: listItem.text,
            deleted: !listItem.deleted,
          };
        } else {
          return item;
        }
      })
      .filter((item) => {
        if (item.deleted === false) {
          return item;
        }
        return false;
      });

    this.setState({ itemList: updatedList });
    localStorage.setItem("itemList", JSON.stringify(updatedList));
  };
}
