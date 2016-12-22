import {Item} from 'dialob-fill-ui';

export default class Redirector extends Item {

 constructor(props) {
    super(props);
  }

  componentWillMount() {
    let url = this.props.question[1].get('label');
    if (url) {
      window.location = url;
    }
  }

  render() {
    return null; // Nothing to see here...
  }
}
