import bullsEye from '../assets/bulls-eye.webp';
import thymbsUp from '../assets/thumbs-up.webp';
import meh from '../assets/meh.webp';
import { Image, ImageProps } from '@chakra-ui/react';

interface Props {
    rating : number ; 
}

export const Emoji = ({rating} : Props) => {
  
  const emojiMap :{ [key : number] : ImageProps }= {
    3 : { src : meh , alt : 'meh' , boxSize : '25px' },
    4 : { src : thymbsUp , alt : 'recommended' , boxSize : '25px' },
    5 : { src : bullsEye , alt : 'exceptional' , boxSize : '35px' },
  }
  return (
    // @ts-ignore
    <Image {...emojiMap[rating]} marginTop='12px'/>
  )
}