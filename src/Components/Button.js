import React from "react";

class Button extends React.Component {
  shouldComponentUpdate(nextProps) {
    const { change: currentChange, locale: currentLocale } = this.props;
    const { change: nextChange, locale: nextLocale } = nextProps;
    if (currentChange === nextChange && nextLocale === currentLocale) {
      return false;
    } else {
      return true;
    }
  }

  render() {
    // console.log("button rendered");
    const { change, locale, show } = this.props;
    return (
      <>
        <button type="button" onClick={() => change(locale)}>
          {locale === "bn-BD" ? "Change Clock" : "Ghori Bangla"}
        </button>
        {show && <p>Hello</p>}
      </>
    );
  }
}
export default Button;
