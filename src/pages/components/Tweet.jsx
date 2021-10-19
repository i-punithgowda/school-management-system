import { Tweet } from 'react-fake-tweet'
import 'react-fake-tweet/dist/index.css'
import tweetPic from '../../images/Dhoni.jpg'
import tweetPic2 from '../../images/Virat.jpg'
import tweetPic3 from '../../images/Rohit_sharma.jpeg'

const tweet = {
   user:{
       profile_image_url:tweetPic,
       screen_name:"msdhoni",
       name:"MS Dhoni"
   },
text:"One of the best schools in the city, That helps student learn formal education along with practical ",
retweet_count:"3K",
favorite_count:"5k",
  }
  const tweet2 = {
    user:{
        profile_image_url:tweetPic3,
        screen_name:"ImRo45",
        name:"Rohit Sharma"
    },
 text:"Best faculties is one of the main aspects of this school , need quality education ? then go for it ",
 retweet_count:"1K",
 favorite_count:"2k",
   }

   const tweet3 = {
    user:{
        profile_image_url:tweetPic2,
        screen_name:"ImVkohli",
        name:"Virat Kohli"
    },
 text:"As a parent im completely satisfied with the service provided by this school",
 retweet_count:"2K",
 favorite_count:"6k",
   }

const Tweets = () => {
  let date1=new Date("2021-05-22T23:00:00-06:00");
  let date2=new Date("2021-05-21T17:00:00-06:00");
  let date3=new Date("2021-05-17T07:00:00-06:00");
  console.log(date1,date2,date3);
    return (
        <div className="tweetMain">
        <div className="tweet">
        <Tweet
        config={{
          user: {
            avatar: tweet.user.profile_image_url,
            nickname: tweet.user.screen_name,
            name: tweet.user.name
          },
          text: tweet.text,
          date: date1,
          retweets: tweet.retweet_count,
          likes: tweet.favorite_count
        }}
      />
      </div>
      <div className="tweet">
        <Tweet
        config={{
          user: {
            avatar: tweet2.user.profile_image_url,
            nickname: tweet2.user.screen_name,
            name: tweet2.user.name
          },
          text: tweet2.text,
          date: date2,
          retweets: tweet2.retweet_count,
          likes: tweet2.favorite_count
        }}
      />
      </div>
      <div className="tweet">
        <Tweet
        config={{
          user: {
            avatar: tweet3.user.profile_image_url,
            nickname: tweet3.user.screen_name,
            name: tweet3.user.name
          },
          text: tweet3.text,
          date: date3,
          retweets: tweet3.retweet_count,
          likes: tweet3.favorite_count
        }}
      />
      </div>
</div>
      
      );
}
 
export default Tweets;