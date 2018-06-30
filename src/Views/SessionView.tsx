import * as React from 'react'
import { Session } from '../Models/Session';

export class SessionView extends React.Component<{}, { session: Session }> {
    constructor(props) {
        super(props)
        this.state = {
            session: new Session()
        }
    }

    render() {
        return <div>
            
        </div>
    }
}