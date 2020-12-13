import React from 'react';
import "./SearchPage.css";
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage-filter">
                <TuneOutlinedIcon />
                <h2>FILTER</h2>
            </div>
            <hr />

            <ChannelRow
                image="https://yt3.ggpht.com/a/AATXAJyYNqJwk4aGRpnCGiyZIS29DW_UvzZGkdkazzoPeA=s176-c-k-c0x00ffffff-no-rj-mo"
                channel="Coding Addict"
                verified
                subs="79.2K"
                noOfVideos={514}
                description="Join us and Learn how to code in Six months. you will Learn from Basics to Advanced on HTML, CSS, JAVASCRIPT and REACT.js"
            />
            <hr />

            <VideoRow
                views="2M"
                subs="800K"
                description="React Projects Source Code - www.johnsmilga.com Tutorial Video - https://youtu.be/iZhV0bILFb0 Intro 00:00 Starter Project"
                timestamp="3 days ago"
                channel=" Coding Addict"
                title="React Projects"
                image="https://www.theladders.com/wp-content/uploads/coder_190517.jpg"
            />
            <VideoRow
                views="4M"
                subs="600K"
                description="React Projects Source Code - www.johnsmilga.com Tutorial Video - https://youtu.be/iZhV0bILFb0 Intro 00:00 Starter Project"
                timestamp="5 years ago"
                channel=" Coding Addict"
                title="Responsive Website HTML5 and CSS3 ..."
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSkUpwTsaFN18gjm8Pibq5Ws5ATQzvjAJjWTg&usqp=CAU"
            />
            <VideoRow
                views="233K"
                subs="100K"
                description="React Projects Source Code - www.johnsmilga.com Tutorial Video - https://youtu.be/iZhV0bILFb0 Intro 00:00 Starter Project"
                timestamp="1 week ago"
                channel=" Coding Addict"
                title="Tag: javascript tutorial for beginners ..."
                image="https://i2.wp.com/acroschools.com/wp-content/uploads/2019/12/txhP5nBUbYwmaxresdefault.jpg?resize=780%2C440&ssl=1"
            />
            <VideoRow
                views="6M"
                subs="900K"
                description="React Projects Source Code - www.johnsmilga.com Tutorial Video - https://youtu.be/iZhV0bILFb0 Intro 00:00 Starter Project"
                timestamp="2 weeks ago"
                channel=" Coding Addict"
                title="How to Code (or How to become an Addict ..."
                image="https://tekedia-website.s3.us-east-2.amazonaws.com/wp-content/uploads/2019/09/06170203/code-coding-girl.png"
            />
            <VideoRow
                views="1.2M"
                subs="700K"
                description="React Projects Source Code - www.johnsmilga.com Tutorial Video - https://youtu.be/iZhV0bILFb0 Intro 00:00 Starter Project"
                timestamp="3 days ago"
                channel=" Coding Addict"
                title="Tag: javascript tutorial for beginners ..."
                image="https://i2.wp.com/acroschools.com/wp-content/uploads/2018/10/57fEh3KbuqMmaxresdefault.jpg?resize=780%2C440&ssl=1"
            />
            <VideoRow
                views="2.2M"
                subs="20K"
                description="React Projects Source Code - www.johnsmilga.com Tutorial Video - https://youtu.be/iZhV0bILFb0 Intro 00:00 Starter Project"
                timestamp="5 days ago"
                channel=" Coding Addict"
                title="16 front-end projects (with designs) to ..."
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTU1O_kl_9cZgqz_kszPeWc3FyKTiZYYj713A&usqp=CAU"
            />
            <VideoRow
                views="5K"
                subs="200K"
                description="React Projects Source Code - www.johnsmilga.com Tutorial Video - https://youtu.be/iZhV0bILFb0 Intro 00:00 Starter Project"
                timestamp="4 days ago"
                channel=" Coding Addict"
                title="coding events helped me get an awesome job"
                image="https://i.ytimg.com/vi/Ddte8M-pl5k/maxresdefault.jpg"
            />
            <VideoRow
                views="2.9M"
                subs="50K"
                description="React Projects Source Code - www.johnsmilga.com Tutorial Video - https://youtu.be/iZhV0bILFb0 Intro 00:00 Starter Project"
                timestamp="2 months ago"
                channel=" Coding Addict"
                title="9 Programming Careers for Coding"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT8U1OaOk4xcXlxzypTOLN77Zk-DFTYlw2Y8w&usqp=CAU"
            />
        </div>
    );
}

export default SearchPage;
