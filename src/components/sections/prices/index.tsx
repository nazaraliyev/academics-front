'use client';
import React from 'react';
import { Center, Flex, Grid, SegmentedControl, Stack, Text } from '@mantine/core';
import Image from 'next/image';
import * as motion from 'motion/react-client';

interface CardProps {
  id: number;
  title: string;
  currentPrice: number;
  previousPrice: number | null;
  tag: string | null;
  isFocus: boolean;
}

export default function SectionPrices() {
  // States
  const [selected, setSelected] = React.useState<'monthly' | 'yearly'>('monthly');

  // Memos
  const prices = React.useMemo(() => data[selected], [selected]);

  // Functions
  const onChange = (event: any) => () => setSelected(event);
  return (
    <Stack gap={10}>
      <Text fz={32} fw={600}>
        Qiymət təkliflərimiz
      </Text>
      <Stack p={32} gap={30} bg={'var(--academic-blue)'} className="radius--xl">
        <SegmentedControl
          data={options}
          onChange={onChange}
          w={200}
          radius={30}
          bg={'var(--academic-white)'}
          color="var(--academic-primary)"
        />
        <Grid>
          <Grid.Col span={6}>
            <Stack>
              {prices.map((item, index) => (
                <motion.div key={item.id} initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: (index+1) * 0.2 }}>
                  <Card key={index} {...item} />
                </motion.div>
              ))}
            </Stack>
          </Grid.Col>
          <Grid.Col span={6}>
            <Center h={'100%'}>
              <Image src={'/prices.png'} alt="price" width={400} height={400} className="image--contain" />
            </Center>
          </Grid.Col>
        </Grid>
      </Stack>
    </Stack>
  );
}

const Card = (props: CardProps) => {
  return (
    <Flex
      p={44}
      h={140}
      pos={'relative'}
      align={'center'}
      justify={'space-between'}
      className="radius--md"
      bd={props.isFocus ? '2px solid var(--academic-primary)' : 'none'}
      bg={'var(--academic-white)'}>
      <Text fw={500} fz={28}>
        {props.title}
      </Text>
      <Text pos={'relative'} fz={22} fw={500}>
        {props.currentPrice} AZN
        {props.previousPrice && (
          <Text span pos={'absolute'} td={'line-through'} fz={16} fw={500} top={-20} left={0} c={'var(--academic-text-disabled)'}>
            {props.previousPrice} AZN
          </Text>
        )}
      </Text>
      {props.tag && (
        <Text
          px={10}
          py={2}
          fz={12}
          pos={'absolute'}
          top={-10}
          right={40}
          className="radius--md"
          bg={'var(--academic-primary)'}
          c={'var(--academic-white)'}>
          {props.tag}
        </Text>
      )}
    </Flex>
  );
};

const options = [
  {
    label: 'Ayliq',
    value: 'monthly',
  },
  {
    label: 'İllik',
    value: 'yearly',
  },
];

const data = {
  monthly: [
    {
      id: 1,
      title: 'Ödənişsiz',
      currentPrice: 0,
      previousPrice: null,
      tag: null,
      isFocus: false,
    },
    {
      id: 2,
      title: 'Standart',
      currentPrice: 0,
      previousPrice: 32,
      tag: 'Popular',
      isFocus: true,
    },
    {
      id: 3,
      title: 'Premium',
      currentPrice: 52,
      previousPrice: 65,
      tag: null,
      isFocus: false,
    },
  ],
  yearly: [
    {
      id: 4,
      title: 'Ödənişsiz',
      currentPrice: 0,
      previousPrice: null,
      tag: null,
      isFocus: false,
    },
    {
      id: 5,
      title: 'Standart',
      currentPrice: 0,
      previousPrice: 32,
      tag: null,
      isFocus: false,
    },
    {
      id: 6,
      title: 'Premium',
      currentPrice: 52,
      previousPrice: 65,
      tag: 'Popular',
      isFocus: true,
    },
  ],
};
