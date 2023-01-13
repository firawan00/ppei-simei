import React from "react";

class Render extends React.PureComponent {
  render() {
    const Form = this.props.form;

    return <Form refdata={this.props.refdata} />;
  }
}

export default () => Render();
