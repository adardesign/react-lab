import React, { Component } from "react";
import timeAgo from "node-time-ago";
import orderBy from "lodash.orderBy";

class NewsList extends Component {
  state = {
    sortOrder: "upvotes"
  };

  setOrder(order, event) {
    event.preventDefault();
    this.setState({ sortOrder: order });
  }

  render() {
    const news = orderBy(this.props.news, this.state.sortOrder, "desc");

    return (
      <div className="newslist">
        {JSON.stringify(news)}
      </div>
    );
  }
}

export default NewsList;
