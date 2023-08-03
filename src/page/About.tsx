import * as React from 'react';

export interface IAboutProps {
}

export default class About extends React.Component<IAboutProps> {
  public render() {
    return (
      <div>
        <h2 className='text-black p-2 uppercase'>about</h2>
      </div>
    );
  }
}
