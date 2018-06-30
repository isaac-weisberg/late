import * as React from 'react'
import { Session } from '../Models/Session';

export interface SessionViewProps {
    session?: Session
}

export class SessionView extends React.Component<SessionViewProps, { session: Session }> {
    constructor(props: SessionViewProps) {
        super(props)
        this.state = {
            session: props.session || new Session()
        }
    }

    render() {
        return <div>
            {
                this.state.session.languages.length == 0
                ? "No languages"
                : this.state.session.languages.map(language => <div key={language}>{language}</div>)
            }
        </div>
    }
}