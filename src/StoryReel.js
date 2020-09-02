import React from 'react';
import './StoryReel.css';
import Story from './Story';

function StoryReel() {
    return (
        <div className="storyReel">
            {/* Story */}
            <Story
                image="https://dvblobcdnjp.azureedge.net//Content/Upload/Popular/Images/2019-05/73d8e066-3800-4fc9-94d3-ca6c41bc4321_m.jpg"
                profileSrc="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/c111-1557212209.jpg?crop=0.502xw:1.00xh;0.498xw,0&resize=640:*"
                title="Tony Stark"
            />
            <Story
                image="https://dvblobcdnjp.azureedge.net//Content/Upload/Popular/Images/2019-05/16c3dad3-f721-4a1c-a8e8-b5ded49a127e_m.jpg"
                profileSrc="https://assets.juksy.com/files/articles/95619/800x_100_w-5db63cc4574e7.jpg"
                title="Steven Rogers"
            />
            <Story
                image="https://static.newmobilelife.com/wp-content/uploads/2014/07/thor-1024x754.jpg"
                profileSrc="https://s.yimg.com/ny/api/res/1.2/C9XnXdJX.QsvXknAi0rC4w--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAw/https://media.zenfs.com/ko/cnews.com.tw/bed44df8c4336dbdefc2bec3849a2b59"
                title="Thor"
            />
            <Story
                image="https://i1145.photobucket.com/albums/o516/shaberri/5227589149_dc1edc59ea_b.jpg"
                profileSrc="https://i.pinimg.com/736x/1a/c0/34/1ac03482333af9b71cb5ad2bbc62eaa3.jpg"
                title="Natasha Romanoff"
            />
            <Story
                image="https://img.ruten.com.tw/s2/8/a7/e8/21639753372648_442.jpg"
                profileSrc="https://image-cdn.hypb.st/https%3A%2F%2Fhk.hypebeast.com%2Ffiles%2F2018%2F08%2Fmarvel-doctor-strange-2-benedict-cumberbatch-salary-1.jpg?q=75&w=800&cbr=1&fit=max"
                title="Doctor Strange"
            />
            <Story
                image="https://i1.wp.com/popbee.com/image/2020/01/marvel-kevin-feige-avengers-endgame-most-powerful-character-scarlet-witch-teaser-copy.jpg?quality=95&"
                profileSrc="https://image-cdn.hypb.st/https%3A%2F%2Fhk.hypebeast.com%2Ffiles%2F2018%2F05%2Felizabeth-olsen-want-avengers-costume-cover-cleavage-00-1.jpg?q=75&w=800&cbr=1&fit=max"
                title="Scarlet Witch"
            />
            <Story
                image="https://assets2.rappler.com/2020/08/1598677325-Chadwick-Boseman.jpeg"
                profileSrc="https://cdn.mos.cms.futurecdn.net/42w787V3WLW7rsaJKzaLSV-1200-80.jpg"
                title="T'Challa"
            />
        </div>
    )
}

export default StoryReel