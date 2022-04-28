import React from 'react'
import * as P from './RepositoryBoxStyle'

export class RepositoryBox extends React.Component {
    render() {
        
        return (

            <P.container num={this.props.num}>
                <P.repositoryHeader>
                    <P.title>
                        {this.props.data.name}
                    </P.title>
                </P.repositoryHeader>
                <P.body>
                    {this.props.data.description}
                </P.body>
            </P.container>
        );
    }
}

export default RepositoryBox;