import React from 'react';
import {connectToAnswer, Item, Label, Errors} from 'flexiform-fill-ui';

class MyTextField extends Item {

 constructor(props) {
    super(props);
  }

  onChangeText(event) {
    let value = event.target.value;
    if (value === '') {
      value = null;
    }
    this.props.answerQuestion(this.props.question[0], value);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({value: nextProps.question[1].get('value')});
  }

  render() {
    // Item.question provides current question data. 
    // Note! it's Immutable.JS Map type.
    let q = this.question;
    if (!q) {
      return null;
    }
    // Item.getStyles processes basic item classes and some special classes 
    // Item.isRequired() returns true, if question answer is required
    return (
      <div className={this.getStyles()}>
        <input name={q.get('id')} type={'text'} value={q.get('value')} onChange={this.onChangeText.bind(this)} />
        <Label htmlFor={q.get('id')} required={this.isRequired()}>{q.get('label')}</Label>
        <Errors errors={q.get('errors')} />
      </div>
    );
  }
}

// add this.props.answerQuestion(questionId, answer) on component
const MyTextFieldConnected = connectToAnswer(MyTextField);
export {
  MyTextFieldConnected as default
};