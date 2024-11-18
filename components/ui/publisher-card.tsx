import * as React from 'react';
import Image from 'next/image';

import { Card, CardHeader, CardContent, CardTitle } from './card';
import { cn } from '@/lib/utils';
import { PublisherProps } from 'app/(dashboard)/page';

const PublisherCard = function NumberButton(props: PublisherProps) {
  return (
    <Card
      className={cn(
        'rounded-lg border bg-card text-card-foreground shadow-sm w-full sm:w-1/2 md:w-1/3 lg:w-1/5 mr-4 mb-4 grow'
      )}
    >
      <CardHeader>
        <CardTitle>{props.name}</CardTitle>
        <Image
          src={props.image_url}
          width={400}
          height={200}
          alt={props.description}
          style={{ width: '100%', height: 'auto' }}
        />
      </CardHeader>
      <CardContent>
        <p>{props.description}</p>
      </CardContent>
    </Card>
  );
};

PublisherCard.displayName = 'PublisherCard';

export { PublisherCard };
