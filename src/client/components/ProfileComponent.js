import React from 'react';
import "../css/index.css";

import profile from "../images/ic_profile_img.jpg";
import facebook from "../images/ic_facebook.png";
import twitter from "../images/ic_twitter.png";
import github from "../images/ic_github.png";
import linkedin from "../images/ic_linkedin.png";
import youtube from "../images/ic_youtube.png";

class ProfileComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className={'dashboard-header-container'}>
                <div className={'dashboard-banner-overlay'}></div>
                <div className={'dashboard-profile-div'}>
                    <div className={'dashboard-profile-img-container'}>
                        <img src={profile} className={'dashboard-profile-img'} />
                        <div className={'social-profile-container'}>
                            <a href="https://www.facebook.com/hackbotone/" target="_blank"><img src={facebook} className={'social-profile-icon'} /></a>
                            <a href="https://twitter.com/anspattnaik" target="_blank"><img src={twitter} className={'social-profile-icon'} /></a>
                            <a href="https://www.linkedin.com/in/anshuman123/" target="_blank"><img src={linkedin} className={'social-profile-icon'} /></a>
                            <a href="https://github.com/anshumanpattnaik" target="_blank"><img src={github} className={'social-profile-icon'} /></a>
                            <a href="https://www.youtube.com/anshumanpattnaik" target="_blank"><img src={youtube} className={'social-profile-icon'} /></a>
                        </div>
                    </div>
                    <div className={'dashboard-profile-details-container'}>
                        <p className={'dashboard-profile-name-label'}>Hello, I'm <span className={'dashboard-profile-name'}>Saurabh Bisht</span></p>
                        <p className={'dashboard-profile-deatils'}>
                        I am a passionate web developer currently studying for my B.Tech in Computer Science at Graphic Era Hill University. I have a strong foundation in full-stack development, particularly using languages like C++, JavaScript, and frameworks such as Node.js and React. One of my key projects is a social media platform where I implemented user authentication and data security using MongoDB. I also developed a dynamic web application called the Magma clone, where I used GSAP and Locomotive for smooth animations and scrolling effects, enhancing the user experience. Additionally, I created a Chrome extension to help users block distracting websites, which received great feedback for its user-friendly design                            </p>
                        <p className={'dashboard-profile-deatils'}>
                            To improve my skill sets in security I like to participate in various Bug Bounty programs (Bugcrowd, HackerOne & many others) In Bug Bounty programs, I found many vulnerabilities that come under OWASP top 10.
                            </p>
                    </div>
                </div>
                <img className={'dashboard-banner-img'} />
            </div>
        );
    }
}

export default ProfileComponent;