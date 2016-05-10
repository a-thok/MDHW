import React, { Component } from 'react';

export default class ListItemComment extends Component {
  componentDidMount() {
    const content = this.refs.content;
    if (content.scrollHeight > 48) this.props.onTooLong(this.props.index);
  }

  handleUnfold() {
    this.props.onUnfold(this.props.index);
  }

  render() {
    const height = this.props.unfold ? 'auto' : '48px';
    const display = this.props.tooLong ? 'inline' : 'none';
    const text = this.props.unfold ? '收起' : '展开';
    return (
      <li className="list_item list_item-comment">
        <div className="list_item_img">
          <img src={`http://${UPLOAD_HOST}/img/${this.props.logo}`} alt={this.props.position} />
        </div>
        <div className="list_item_text">
          <h3 className="list_item_title">
            {this.props.position}
            <span
              className="list_item_unfold"
              style={{ display }}
              onClick={this.handleUnfold}
            >{text}</span>
          </h3>
          <p
            className="list_item_content"
            style={{ height }}
            ref="content"
          >{this.props.about}</p>
          <p className="list_item_para list_item_para-right">{this.props.time}</p>
        </div>
      </li>
    );
  }
}
