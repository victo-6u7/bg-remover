import logo from './logo.svg'
import logo_icon from './logo_icon.svg'
import arrow_icon from './arrow_icon.svg'
import header_img from './header_img.png'
import remove_bg_icon from './remove_bg_icon.svg'
import upload_btn_icon from './upload_btn_icon.svg'
import upload_icon from './upload_icon.svg'
import download_icon from './download_icon.svg'
import image_w_bg from './image_w_bg.png'
import image_wo_bg from './image_wo_bg.png'
import facebook_icon from './facebook_icon.svg'
import google_plus_icon from './google_plus_icon.svg'
import twitter_icon from './twitter_icon.svg'
import profile_img_1 from './profile_img_1.png'
import profile_img_2 from './profile_img_2.png'
import credit_icon from './credit_icon.png'

export const assets = {
    logo,
    logo_icon,
    arrow_icon,
    header_img,
    remove_bg_icon,
    upload_icon,
    download_icon,
    image_w_bg,
    image_wo_bg,
    facebook_icon,
    google_plus_icon,
    twitter_icon,
    upload_btn_icon,
    credit_icon
}

export const testimonialsData = [
    {
        id: 1,
        text: "I've been using bg.remover for  1 year,and it has made my work much easier, also it is user-friendly.",
        author: "Collins Benard",
        image: profile_img_1,
        jobTitle:'Data analyst'
    },
    {
        id: 2,
        text: "I've been using bg.remover 8 months,The quality is good. I had a nice experience.  I encourage others to try this app.",
        author: "Steven Gerrad",
        image: profile_img_2,
        jobTitle:'Software engineer'
    },
];

export const plans = [
    {
      id: 'Basic',
      price: 15,
      credits: 120,
      desc: 'For personal purpose.'
    },
    {
      id: 'Primary',
      price: 60,
      credits: 600,
      desc: 'For business purpose.'
    },
    {
      id: 'Secondary',
      price: 270,
      credits: 5050,
      desc: 'For advanced business.'
    },
  ]