import React from 'react'
import * as P from './ProfileStyle'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

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

const ReadMarkdown = (props) => {
    const blankStyle = {textAlign : "center"};
    if (props.readme === undefined) {
        return <div style={blankStyle}>{props.userName + " 레포지토리에서 README.md를 작성해보세요!"}</div>;
    } 
    return <ReactMarkdown style={P.MarkDown} children={P.mainReadMe} remarkPlugins={[remarkGfm]} ></ReactMarkdown>;
}
export class Profile extends React.Component {


    render() {
        alert("dd");
        alert(this.state.his);
        
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
                <P.Readme>
                    <P.BodyTitle>
                        ReadMe
                    </P.BodyTitle>
                    <P.MarkDown>
                            <ReadMarkdown readme={P.mainReadMe} userName={P.userName}></ReadMarkdown>
                        
                    </P.MarkDown>

                </P.Readme>
            </P.Container>
        );
    }
}
