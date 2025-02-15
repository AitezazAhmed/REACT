import React from 'react'
import Card from './components/Card'

const user = [
  {
    "profile_name": "tech_guru99",
    "age": 27,
    "city": "San Francisco",
    "profession": "Software Engineer",
    "profile_img": "https://randomuser.me/api/portraits/men/1.jpg"
  },
  {
    "profile_name": "design_wiz",
    "age": 24,
    "city": "New York",
    "profession": "UI/UX Designer",
    "profile_img": "https://randomuser.me/api/portraits/women/2.jpg"
  },
  {
    "profile_name": "code_master",
    "age": 30,
    "city": "London",
    "profession": "Full Stack Developer",
    "profile_img": "https://randomuser.me/api/portraits/men/3.jpg"
  },
  {
    "profile_name": "data_geek",
    "age": 26,
    "city": "Berlin",
    "profession": "Data Scientist",
    "profile_img": "https://randomuser.me/api/portraits/women/4.jpg"
  },
  {
    "profile_name": "cyber_ninja",
    "age": 29,
    "city": "Tokyo",
    "profession": "Cybersecurity Analyst",
    "profile_img": "https://randomuser.me/api/portraits/men/5.jpg"
  },
  {
    "profile_name": "ai_whiz",
    "age": 28,
    "city": "Toronto",
    "profession": "AI Engineer",
    "profile_img": "https://randomuser.me/api/portraits/women/6.jpg"
  },
  {
    "profile_name": "frontend_queen",
    "age": 25,
    "city": "Paris",
    "profession": "Frontend Developer",
    "profile_img": "https://randomuser.me/api/portraits/women/7.jpg"
  },
  {
    "profile_name": "backend_pro",
    "age": 32,
    "city": "Sydney",
    "profession": "Backend Developer",
    "profile_img": "https://randomuser.me/api/portraits/men/8.jpg"
  },
  {
    "profile_name": "crypto_boss",
    "age": 31,
    "city": "Dubai",
    "profession": "Blockchain Developer",
    "profile_img": "https://randomuser.me/api/portraits/men/9.jpg"
  },
  {
    "profile_name": "startup_hustler",
    "age": 29,
    "city": "Los Angeles",
    "profession": "Entrepreneur",
    "profile_img": "https://randomuser.me/api/portraits/men/10.jpg"
  },
  {
    "profile_name": "python_wizard",
    "age": 23,
    "city": "Madrid",
    "profession": "Python Developer",
    "profile_img": "https://randomuser.me/api/portraits/men/11.jpg"
  },
  {
    "profile_name": "gaming_dev",
    "age": 26,
    "city": "Seoul",
    "profession": "Game Developer",
    "profile_img": "https://randomuser.me/api/portraits/men/12.jpg"
  },
  {
    "profile_name": "robotics_mind",
    "age": 34,
    "city": "Moscow",
    "profession": "Robotics Engineer",
    "profile_img": "https://randomuser.me/api/portraits/men/13.jpg"
  },
  {
    "profile_name": "ml_expert",
    "age": 27,
    "city": "Amsterdam",
    "profession": "Machine Learning Engineer",
    "profile_img": "https://randomuser.me/api/portraits/women/14.jpg"
  },
  {
    "profile_name": "quant_trader",
    "age": 30,
    "city": "Hong Kong",
    "profession": "Quantitative Analyst",
    "profile_img": "https://randomuser.me/api/portraits/men/15.jpg"
  },
  {
    "profile_name": "bio_coder",
    "age": 29,
    "city": "Boston",
    "profession": "Bioinformatics Scientist",
    "profile_img": "https://randomuser.me/api/portraits/women/16.jpg"
  },
  {
    "profile_name": "ethical_hacker",
    "age": 28,
    "city": "Chicago",
    "profession": "Ethical Hacker",
    "profile_img": "https://randomuser.me/api/portraits/men/17.jpg"
  },
  {
    "profile_name": "security_expert",
    "age": 31,
    "city": "Singapore",
    "profession": "Security Engineer",
    "profile_img": "https://randomuser.me/api/portraits/men/18.jpg"
  },
  {
    "profile_name": "cloud_master",
    "age": 33,
    "city": "Austin",
    "profession": "Cloud Architect",
    "profile_img": "https://randomuser.me/api/portraits/men/19.jpg"
  },
  {
    "profile_name": "network_guru",
    "age": 32,
    "city": "Vancouver",
    "profession": "Network Engineer",
    "profile_img": "https://randomuser.me/api/portraits/men/20.jpg"
  },
  {
    "profile_name": "devops_hero",
    "age": 27,
    "city": "Denver",
    "profession": "DevOps Engineer",
    "profile_img": "https://randomuser.me/api/portraits/men/21.jpg"
  },
  {
    "profile_name": "java_genius",
    "age": 29,
    "city": "Rome",
    "profession": "Java Developer",
    "profile_img": "https://randomuser.me/api/portraits/men/22.jpg"
  },
  {
    "profile_name": "ios_dev",
    "age": 25,
    "city": "Miami",
    "profession": "iOS Developer",
    "profile_img": "https://randomuser.me/api/portraits/women/23.jpg"
  },
  {
    "profile_name": "android_ninja",
    "age": 26,
    "city": "Melbourne",
    "profession": "Android Developer",
    "profile_img": "https://randomuser.me/api/portraits/men/24.jpg"
  },
  {
    "profile_name": "web_warrior",
    "age": 28,
    "city": "Oslo",
    "profession": "Web Developer",
    "profile_img": "https://randomuser.me/api/portraits/men/25.jpg"
  }

  
]

const App = () => {


  return (
    <div>
      <div className='flex flex-wrap'>
        {user.map((user, index) => {
          return <Card key={index} user={user.profile_name} profile={user.profile_img} city={user.city} profession={user.profession} age={user.age} />
        })}
      </div>
    </div>
  )

}

export default App