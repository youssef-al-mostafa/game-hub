import { Badge } from '@chakra-ui/react';

interface Props {
    score: number;
}

export const CriticScore = ({ score }: Props) => {
    let color = score > 75 ? 'green' : score > 60 ? 'yellow' : ''
    return (
        /* @ts-ignore */
        <Badge fontSize='14px' 
               paddingX={2} 
               borderRadius='4px'
               colorScheme={color}
               marginInline='0px !important'>
            {score}
        </Badge>
    )
}
