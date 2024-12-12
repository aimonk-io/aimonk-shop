import React from 'react';
import { Box, Card, Inset, Text } from '@radix-ui/themes';
import Image from 'next/image';

interface CardProps {
  imageSrc: string;
  imageAlt: string;
  description: string;
}

interface SectionProps {
  cols: number;
  cards: CardProps[];
}

const CardComponent: React.FC<CardProps> = ({ imageSrc, imageAlt, description }) => {
  return (
    <Box className="max-w-[340px] px-3 py-2">
      <Card size="2">
        <Inset clip="padding-box" side="top" pb="current">

            <Image src={imageSrc} alt={imageAlt} width={'300'} height={'400'}
              style={{
              display: 'block',
              objectFit: 'cover',
              backgroundColor: 'var(--gray-5)',
            }}/>
        </Inset>
        <Text as="p" size="3">  
            {description}
        </Text>
      </Card>
    </Box>
  );
};

const Section: React.FC<SectionProps> = ({ cols, cards }) => {
  return (
<div
  className="flex flex-wrap"
  style={{ gap: "1rem" }}
>
  {cards.map((card, index) => (
    <CardComponent
      key={index}
      imageSrc={card.imageSrc}
      imageAlt={card.imageAlt}
      description={card.description}
      style={{
        flex: `1 1 calc(100% / ${cols} - 1rem)`, // Calculate each card's width
        maxWidth: `calc(100% / ${cols} - 1rem)`, // Ensure max width aligns
      }}
    />
  ))}
</div>

  );
};

export default Section;

