import Emoji from "./Emoji";
export default class Text extends Emoji {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    const dacoratedText = this.addEmoji("I am Js", "💙");
    return super.render(dacoratedText);
  }
}
