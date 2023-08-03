import * as React from 'react';

export interface IHomeProps {
}

export default class Home extends React.Component<IHomeProps> {
  public render() {
    return (
      <div>
        <h2 className="p-x text-black uppercase">Home</h2>
      </div>
    );
  }
}
