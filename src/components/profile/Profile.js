import React from 'react'
import * as P from './ProfileStyle'

import RepositoryBox from './repository/RepositoryBox'

const GetMainRepository = () => {
    const result = [];
    const repos = P.data.repos;

    var i = 1;
        
    for (let index = 0; index < repos.length; index++) {
        if (repos[index].main) {
            result.push(<RepositoryBox num={i++} data={repos[index]} />);
        }
    }

    if (i === 1) {
        result.pop();
        return(
            <P.emptyBody>
                프로필 설정에서 메인 레포지토리를 등록해보세요.<br></br>
                레포지토리가 없다면 깃허브에서 첫 레포지토리를 등록해보세요!
            </P.emptyBody>
        );
    } else {
        return(
            <P.RepositoryBoxDiv>
                {result}
            </P.RepositoryBoxDiv>
        );
    }

}
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
                    <P.BodyTitle>
                        레포지토리
                    </P.BodyTitle>
                    <GetMainRepository />
                </P.Repository>
            </P.Container>
        );
    }
}
