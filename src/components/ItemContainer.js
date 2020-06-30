import React from "react";

import { connect } from "react-redux";

class ItemContainer extends React.Component {
  state = {
    filters: {},
    items: [],
  };

  constructor(props) {
    super(props);
    this.listRef = React.createRef();
  }
  componentWillReceiveProps(prevProps) {
    if (prevProps.filters !== this.props.filters) {
      this.setState({ filters: this.props.filters });
      console.log(this.props.filters);
    }
  }
  componentDidMount() {
    this.setState(this.props);
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.filters !== this.state.filters) {
      this.setState({ filters: this.props.filters });
      console.log(this.props.filters);
    }
  }

  render() {
    console.log(this.props);
    console.log(this.state);
    console.log(this.listRef);
    return (
      <div>
        <h1>items</h1>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  items: state.items,
  filters: state.filters,
});
export default connect(mapStateToProps)(ItemContainer);
