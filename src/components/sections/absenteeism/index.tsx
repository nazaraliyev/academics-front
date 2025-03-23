'use client';
import React from 'react';
import { Button, Center, Flex, Grid, ScrollArea, Stack, Text } from '@mantine/core';
import Image from 'next/image';
import { ChevronIcon, StarIcon } from '@/assets/icons';

interface CardProps {
  img: string;
  title: string;
  description: string;
}

export default function SectionAbsenteeism() {
  return (
    <Stack gap={10}>
      <Text fz={32} fw={600}>
        Tədris sahələri
      </Text>
      <Grid>
        <Grid.Col span={5}>
          <Absenteeism />
        </Grid.Col>
        <Grid.Col span={7}>
          <Stack gap={24}>
            <Options {...{ selected: 1 }} />
            <Stack>
              {mock.map((item, index) => (
                <Card key={index} {...item} />
              ))}
            </Stack>
          </Stack>
        </Grid.Col>
      </Grid>
    </Stack>
  );
}

const Options = (props: { selected: number }) => {
  return (
    <ScrollArea flex={1} type="never" scrollbars="x">
      <Flex gap={10} pb={1}>
        {options.map((item, index) => (
          <Button key={index} h={40} px={14} color={props.selected === item.value ? 'var(--academic-grey-dark)' : 'var(--academic-grey)'} radius={20}>
            <Text span c={'var(--academic-text)'}>
              {item.label}
            </Text>
          </Button>
        ))}
      </Flex>
    </ScrollArea>
  );
};

const Absenteeism = () => {
  return (
    <Stack gap={0} className="radius--md overflow--hidden" h={'100%'}>
      <Stack flex={1} bg={'var(--academic-white)'}>
        <Stack align="center" justify="center" flex={1}>
          <Image src="/cup.png" alt="cup" width={100} height={100} className="image--contain" />
          <Text fz={28} fw={600}>
            24 gün!
          </Text>
        </Stack>
        <Flex gap={20} justify={'center'}>
          {days.map((item, index) => {
            const selected = index < 2;
            return (
              <Stack key={index} gap={10} pb={20}>
                <Center w={78} h={78} className="radius--full" bg={selected ? 'var(--academic-green)' : 'var(--academic-grey-light)'}>
                  <StarIcon key={index} width={30} height={30} color={selected ? "var(--academic-green-light)":"var(--academic-grey-dark)" }  />
                </Center>
                <Text ta={'center'} fw={600}>
                  {item}
                </Text>
              </Stack>
            );
          })}
        </Flex>
      </Stack>
      <Stack align="center" gap={5} py={40} justify="center" bg={'var(--academic-green-light)'}>
        <Text ta={'center'} fz={20} fw={600}>
          24-cü səviyyəyə çatdınız!
        </Text>
        <Text ta={'center'} fz={16} className="text--preline" c="var(--academic-text-secondary)">
          {`Daha bir mərhələni uğurla keçdiniz. Yeni biliklər\n və bacarıqlarla yolunuza davam edin! 🚀`}
        </Text>
      </Stack>
    </Stack>
  );
};

const Card = (props: CardProps) => {
  return (
    <Flex className="radius--md" gap={20} align={'center'} bg={'var(--academic-white)'} py={30} pl={48} pr={40}>
      <Image src={props.img} alt="icon" width={90} height={90} className="image--contain" />
      <Stack gap={4}>
        <Text fz={20} fw={600} c={'var(--academic-text)'}>
          {props.title}
        </Text>
        <Text fz={16} c={'var(--academic-text-secondary)'} pr={20}>
          {props.description}
        </Text>
      </Stack>
      <ChevronIcon className="flex--shrink rotate--270" width={30} height={30} color={'var(--academic-text-secondary)'} />
    </Flex>
  );
};

const options = [
  {
    label: 'Riyaziyyat',
    value: 1,
  },
  {
    label: 'Azərbaycan dili',
    value: 2,
  },
  {
    label: 'İngilis dili',
    value: 3,
  },
];

const mock = [
  {
    img: '/question.png',
    title: 'Günün sualı',
    description: 'Hər gün bir yeni sual ilə biliklərini yoxla və daha çox öyrən! Bu günün sualına cavab verməyə hazırsan?',
  },
  {
    img: '/cubic_circle.png',
    title: 'Öyrəndiklərini təkrarla',
    description: 'Məlumatı yadda saxlamağın ən yaxşı yolu onu təkrarlamaqdır. Öyrəndiklərimizi nəzərdən keçirək!',
  },
  {
    img: '/cubic_triangle.png',
    title: 'Dərsə davam et',
    description: 'Dayanma, öyrənməyə davam et və hədəflərinə bir addım da yaxınlaş!',
  },
];

const days = ['B.E', 'Ç.E', 'Ç.', 'C.A', 'C'];
