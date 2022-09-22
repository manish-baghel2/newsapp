import React, { Component } from 'react'
import NewsItem from '../NewsItem'

export class News extends Component {
  articles = [
    {
      "source": {
        "id": "the-washington-post",
        "name": "The Washington Post"
      },
      "author": "Kate Woodsome",
      "title": "Why it’s not critical race theory to say Hitler admired U.S. racism",
      "description": "Filmmakers Ken Burns, Lynn Novick and Sarah Botstein open up about the chilling parallels they found between Nazi fascism and U.S. politics today.",
      "url": "https://www.washingtonpost.com/opinions/2022/09/21/ken-burns-holocaust-documentary-critical-race-theory/",
      "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://d1i4t8bqe7zgj6.cloudfront.net/09-20-2022/t_f5b75114be3c4609b8197e43df2f121f_name_Eugenics_still.jpg&w=1440",
      "publishedAt": "2022-09-21T13:53:50Z",
      "content": "Filmmaker Ken Burns says he and his co-directors Lynn Novick and Sarah Botstein are storytellers, not polemicists. But who gets to write history and when is inherently controversial. Their new docume… [+10767 chars]"
    },
    {
      "source": {
        "id": "newsweek",
        "name": "Newsweek"
      },
      "author": "Rabbi Yaakov Menken",
      "title": "Newsweek",
      "description": "Newsweek provides in-depth analysis, news and opinion about international issues, technology, business, culture and politics.",
      "url": "https://www.newsweek.com/",
      "urlToImage": "https://d.newsweek.com/en/full/2119646/vladimir-putin-gestures-tv-address.jpg",
      "publishedAt": "2022-09-21T13:37:32.6645207Z",
      "content": null
    },
    {
      "source": {
        "id": "newsweek",
        "name": "Newsweek"
      },
      "author": "Darragh Roche",
      "title": "GOP Expected to Thwart Biden's Plan to Go After 'Dark Money' in Politics",
      "description": "The legislation would require the identity of donors who give at least $10,000 to be disclosed but is likely to fail on Wednesday.",
      "url": "https://www.newsweek.com/gop-expected-thwart-biden-plan-go-after-dark-money-politics-1744847",
      "urlToImage": "https://d.newsweek.com/en/full/2119848/joe-biden-discusses-disclose-act.jpg",
      "publishedAt": "2022-09-21T12:05:20Z",
      "content": "Senate Republicans look set to thwart President Joe Biden's plan to bring greater transparency to so-called \"dark money\" in U.S. politics in a procedural vote on Wednesday.\r\nBiden has argued in favor… [+2927 chars]"
    },
    {
      "source": {
        "id": "wired",
        "name": "Wired"
      },
      "author": "Wired",
      "title": "This Dangerous Meme in US Politics Is Over a Century Old",
      "description": "Many associate the ‘America First’ movement with Trump, but its origins—and rebirth—are more complicated.",
      "url": "https://www.wired.com/story/america-first-meme-politics",
      "urlToImage": "https://media.wired.com/photos/632a55bc3c360bac53306190/191:100/w_1280,c_limit/dangerous-meme-america-first.jpg",
      "publishedAt": "2022-09-21T12:00:00Z",
      "content": "This incredible journey were on together has only just begun, former president Donald Trump told a rally in Ohio on September 17. In response, the crowd saluted him with a gesture unfamiliar to most … [+5428 chars]"
    },
    {
      "source": {
        "id": "the-washington-times",
        "name": "The Washington Times"
      },
      "author": "The Washington Times https://www.washingtontimes.com",
      "title": "Latest Quizzes",
      "description": "Take a break from the hard news of the day and enjoy a quiz on entertainment, sports, history and politics only from The Washington Times.",
      "url": "https://www.washingtontimes.com/quiz/",
      "urlToImage": null,
      "publishedAt": "2022-08-30T16:37:43.8583104Z",
      "content": "Featured Quizzes\r\nTake the challenge to learn about the life and career highlights of famed nonagenarian actress and comedian Betty White.\r\n Shares \r\nRead our synopsis and correctly identify a litera… [+32510 chars]"
    },
    {
      "source": {
        "id": "the-american-conservative",
        "name": "The American Conservative"
      },
      "author": null,
      "title": "Politics Archives - The American Conservative",
      "description": null,
      "url": "https://www.theamericanconservative.com/category/politics/",
      "urlToImage": null,
      "publishedAt": "2022-07-07T21:37:27.3936289Z",
      "content": null
    },
    {
      "source": {
        "id": "usa-today",
        "name": "USA Today"
      },
      "author": null,
      "title": "Daily Briefing",
      "description": "The day's top stories, from sports to movies to politics to world events.",
      "url": "https://profile.usatoday.com/newsletters/daily-briefing/",
      "urlToImage": "https://profile.usatoday.com/newsletters/resources/usat/property/usatoday/newsletter-thumbs/8872UT-E-NLETTER02@2x.jpg",
      "publishedAt": "2021-08-15T15:35:07+00:00",
      "content": "The day's top stories, from sports to movies to politics to world events."
    },
    {
      "source": {
        "id": "the-jerusalem-post",
        "name": "The Jerusalem Post"
      },
      "author": null,
      "title": "Congresswoman Nita Lowey: I am proud to stand with Israel",
      "description": "Gantz: Security of Israel is above politics; PA: This is a crime.",
      "url": "https://www.jpost.com/Arab-Israeli-Conflict/Gantz-Security-of-Israel-is-above-politics-Palestinians-This-is-a-crime-607595",
      "urlToImage": "https://images.jpost.com/image/upload/f_auto,fl_lossy/t_Article2016_ControlFaceDetect/448812",
      "publishedAt": "2019-11-13T04:41:00Z",
      "content": "US Ambassador David M. Friedman said the US stands “with our friend and ally Israel at this critical moment” on social media on Tuesday after roughly 170 rockets were fired on Israel from the Gaza St… [+6160 chars]"
    }
  ]
  constructor() {
    super();
    // console.log("hello i am a constructor from news component");
    this.state = {
      articles: this.articles,
      loading: false
    }
  }
  async componentDidMount() {
    console.log("cdm");
    let url = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=0cb0994a6753490699a14dca55b1fd35";
    let data = await fetch(url);
    let parsedata = await data.json();
    console.log(parsedata);
    this.setState({articles: parsedata.articles})
  }

  render() {
    console.log("render");
    return (
      <div className="container my-3">
        <h2>NewsMonkey</h2>

        <div className="row">
          {this.state.articles.map((elements) => {
            return <div className="col-md-4 my-3" key={elements.url}>
              <NewsItem title={elements.title?elements.title.slice(0,45):""} description={elements.description?elements.description.slice(0,80):""} imageUrl={elements.urlToImage} newsUrl={elements.url}></NewsItem>
            </div>
          })}
        </div>
      </div>
    )
  }
}

// fruits.slice(1, 3)

export default News


//  {/* if(title.length > 45){
//               title = title.slice(0,45);
//             }
//             if(description.length > 80){
//               description = description.slice(0,80);
//             } */}