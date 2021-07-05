import { IconType } from 'react-icons'
import { FaFacebookF, FaTwitter, FaGithubAlt, FaDribbble } from 'react-icons/fa'

interface IData {
  path: string
  label: string
}

interface ISocial {
  path: string
  Icon: IconType
}

export const data: IData[] = [
  {
    path: 'home',
    label: 'Home',
  },
  {
    path: 'feature',
    label: 'Features',
  },
  {
    path: 'pricing',
    label: 'Pricing',
  },
  {
    path: 'testimonial',
    label: 'Testimonial',
  },
]

export const social: ISocial[] = [
  {
    path: '/',
    Icon: FaFacebookF,
  },
  {
    path: '/',
    Icon: FaTwitter,
  },
  {
    path: '/',
    Icon: FaGithubAlt,
  },
  {
    path: '/',
    Icon: FaDribbble,
  },
]
