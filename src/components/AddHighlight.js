import React from 'react';
import Popular from './Popular';
import New from './New';

export default function AddHighlight(Component) {
    return class extends React.Component {
        render() {
            if(this.props.views >= 1000) {
                return (
                    <Popular>
                        <Component {...this.props}/>
                    </Popular>
                )
            } else if(this.props.views < 100) {
                return (
                    <New>
                        <Component {...this.props}/>
                    </New>
                )
            } else {
                return <Component {...this.props}/>
            }
        }
    }
}
