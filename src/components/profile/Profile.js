import React from 'react'
import * as P from './ProfileStyle'


export class Profile extends React.Component {

    render() {
        return (
            <P.Container>
                <P.Main>
                    <P.imgDiv>
                        <P.img src={P.data.avatarUrl} alt='profile image'></P.img>
                    </P.imgDiv>
                    <P.profileDiv>
                        <P.mainProfile>
                            {P.data.nickname} {(P.data.name !== undefined) ? P.data.name : undefined}
                            <img src={'assets/profile/box-arrow-right.svg'} alt="update"></img>
                        </P.mainProfile>
                        <P.basicProfile>
                            {P.data.major}
                        </P.basicProfile>
                        <P.basicProfile>
                            {P.data.company}
                        </P.basicProfile>
                        <P.basicProfile>
                            {(P.data.graduate) ? "졸업" : "재학"}
                        </P.basicProfile>
                    </P.profileDiv>
                    <P.description>
                        {P.data.description}
                    </P.description>
                </P.Main>
                <P.Repository>
                    <P.mainProfile>
                        레포지토리
                    </P.mainProfile>
                    
                </P.Repository>
            </P.Container>
        );
    }
}
