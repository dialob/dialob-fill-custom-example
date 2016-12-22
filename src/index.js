import Redirector from './Redirector';


  /*
   * item is an array of two items
   * item[0]: is item's id
   * item[1]: is item's ImmutableJS Map of item.
   *
   * item[1].toJS() return javascript object of item
   *
   * {
   *  className: [],
   *  id: "",
   *  valueSetId: "",
   *  items: [],
   *  label: "",
   *  readOnly: true/false,
   *  type: "",
   *  // Current answer
   *  value: ""
   * }
   *
   * Possible types are:
   * - 'text'
   *   if 'valueSetId' is defined -> select
   *     - 'autocomplete'
   *   otherwise:
   *     - 'textbox'
   *     - 'survey'
   * - 'number'
   * - 'decimal'
   * - 'boolean'
   * - 'list'
   * - 'date'
   * - 'time'
   * - 'note'
   * - 'group'
   *   - 'survey'
   * - 'rowgroup'
   * - 'array'
   *   - 'autocomplete'
   *
   */
function customComponentCreator(item, delegate) {
  if (!item) {
    return delegate(item);
  }
  let id = item[0];
  var jsItem = item[1].toJS();
  if (jsItem.type === 'note' && jsItem.className && jsItem.className.includes('redirect')) {
    return <Redirector key={id} question={item}/>;
  }
  return delegate(item);
}

export {
  customComponentCreator
};


