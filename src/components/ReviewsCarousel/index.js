import {Component} from 'react'
import './index.css'

const reviewsList = [
  {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/wade-warren-img.png',
    username: 'Wade Warren',
    companyName: 'Rang',

    description:
      'The most important thing I learnt is that nothing is a failure, but what we learn from that is a rich and rewarding experience.',
  },
  {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/adrian-williams-img.png',
    username: 'Adrian Williams',
    companyName: 'WheelO',
    description:
      'Coming to Startup School is the best thing that has happened to me. I wish every startup in the country should get this opportunity.',
  },
  {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/sherry-jhonson-img.png',
    username: 'Sherry Johnson',
    companyName: 'MedX',
    description:
      'I am glad to have such experienced mentors guiding us in every step through out the 4 weeks. I have improved personally and developed many interpersonal skills.',
  },
  {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/ronald-jones-img.png',
    username: 'Ronald Jones',
    companyName: 'Infinos Tech',
    description:
      'I am really loving the way how mentors are taking care of us, the way they are explaining big theories with lots of case studies and innovative methods.',
  },
]

class ReviewsCarousel extends Component {
  state = {count: 0}

  leftArrow = () => {
    const {count} = this.state
    if (count > 0) {
      this.setState(per => ({count: per.count - 1}))
    } else {
      this.setState({count: 0})
    }
  }

  rightArrow = () => {
    const {count} = this.state
    if (count < reviewsList.length - 1) {
      this.setState(per => ({count: per.count + 1}))
    } else {
      this.setState({count: reviewsList.length - 1})
    }
  }

  render() {
    const {count} = this.state

    return (
      <div className="container">
        <div className="con1">
          <button
            data-testid="leftArrow"
            onClick={this.leftArrow}
            className="btn"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png "
              className="left-arrow"
              alt="left arrow"
            />
          </button>
          <div className="sub">
            <h1 className="head">Reviews</h1>
            <img
              src={reviewsList[count].imgUrl}
              className="img-con"
              alt={reviewsList[count].username}
            />
            <p className="para">{reviewsList[count].username}</p>
            <p className="para">{reviewsList[count].companyName}</p>
            <p className="para1">{reviewsList[count].description}</p>
          </div>
          <button
            data-testid="rightArrow"
            onClick={this.rightArrow}
            className="btn"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png "
              className="left-arrow"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}
export default ReviewsCarousel
