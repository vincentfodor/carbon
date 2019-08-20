import React from 'react';

export function makeStory(storyName, themeSelector, extraMetadata, component, knobsFactory, children) {
  const storyComponent = () => React.createElement(component, knobsFactory(), children);
  const metadata = { themeSelector, ...extraMetadata };
  return [storyName, storyComponent, metadata];
}
