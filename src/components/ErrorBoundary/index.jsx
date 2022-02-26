import React from "react";
import * as S from "./style";

class ErrorBoundary extends React.Component {
  constructor() {
    super();

    this.state = {
      hasErrored: false,
    };
  }

  static getDerivedStateFromError() {
    return { hasErrored: true };
  }

  componentDidCatch(error) {
    console.log(error);
  }

  render() {
    if (this.state.hasErrored) {
      return (
        <S.ErrorImageOverlay>
          <S.ErrorImageContainer imageUrl="https://i.imgur.com/lKJiT77.png" />
          <S.ErrorImageText>
            A Dog Ate this Page!! Your dog is cute but honestly a menace. Where
            are my shoes? Where is my graduation certificate? Where is the
            chocolate cake I baked for my Aunt’s birthday? And why did you take
            your dog to the vet on that same Thursday?!
          </S.ErrorImageText>
        </S.ErrorImageOverlay>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
