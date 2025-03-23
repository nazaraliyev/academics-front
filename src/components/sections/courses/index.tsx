'use client';
import React from 'react';
import { ArrowIcon, CapIcon, ClockIcon, LessonIcon, SaveIcon } from '@/assets/icons';
import { ActionIcon, Box, Button, Center, Flex, Grid, RingProgress, ScrollArea, Stack, Text } from '@mantine/core';
import * as motion from 'motion/react-client';

interface CardProps {
  title: string;
  userCompletionRate: number;
  description: string;
  studentCount: number;
  lessonCount: number;
  hour: number;
  isMainCourse?: boolean;
}
export default function SectionCourses() {
  return (
    <Stack gap={24}>
      <Stack gap={10}>
        <Text fz={32} fw={600}>
          Tədris sahələri
        </Text>
        <Options {...{ selected:-1 }} />
      </Stack>
      <Grid>
        {mock.map((item, index) => (
          <Grid.Col key={index} span={4}>
            <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: (index + 1) * 0.05 }}>
              <Card {...item} />
            </motion.div>
          </Grid.Col>
        ))}
      </Grid>
      <Flex justify={'center'}>
        <Button variant="outline" color="var(--academic-primary)" w={200} radius={8} h={44} fw={400}>
          Daha çox
        </Button>
      </Flex>
    </Stack>
  );
}

const Options = (props: { selected: number }) => {
  return (
    <Flex gap={80}>
      <ScrollArea flex={1} type="never" scrollbars="x">
        <Flex gap={10} pb={1}>
          {optionsMenu.map((item, index) => (
            <Button
              key={index}
              h={40}
              px={14}
              color={props.selected === item.value ? 'var(--academic-grey-dark)' : 'var(--academic-grey)'}
              radius={20}>
              <Text span c={'var(--academic-text)'}>
                {item.label}
              </Text>
            </Button>
          ))}
        </Flex>
      </ScrollArea>
      <Button
        pr={10}
        pl={15}
        h={40}
        radius={20}
        color="var(--academic-primary)"
        rightSection={
          <Center w={20} h={20} className="radius--full" bg={'var(--academic-white)'}>
            <ArrowIcon />
          </Center>
        }>
        Daha cox
      </Button>
    </Flex>
  );
};

const Card = (props: CardProps) => {
  return (
    <Box p={23} className="radius--md" bg={'var(--academic-white)'}>
      <Flex justify={'space-between'} align={'center'}>
        <Text fz={24} fw={500}>
          {props.title}
        </Text>
        <Flex gap={4} align={'center'}>
          <Text fz={12} fw={500} c={'var(--academic-primary)'}>
            {props.userCompletionRate}%
          </Text>
          <RingProgress size={20} sections={[{ value: 50, color: 'var(--academic-primary)' }]} thickness={3} />
        </Flex>
      </Flex>
      <Text fz={16} c={'var(--academic-text-tertiary)'}>
        {props.studentCount} şagird
      </Text>
      <Text c={'var(--academic-text-secondary)'} my={16} fz={14}>
        {props.description}
      </Text>
      <Flex gap={18}>
        <Flex gap={4} bg={'var(--academic-primary-light)'} px={10} py={6} className={'radius--sm'}>
          <CapIcon />
          <Text fz={12} fw={500} c={'var(--academic-primary)'}>
            {props.lessonCount} dərs
          </Text>
        </Flex>
        <Flex gap={4} bg={'var(--academic-orange-light)'} px={10} py={6} className={'radius--sm'}>
          <ClockIcon />
          <Text fz={12} fw={500} c={'var(--academic-orange)'}>
            {props.lessonCount} saat
          </Text>
        </Flex>
        {props.isMainCourse && (
          <Flex gap={4} bg={'var(--academic-green-light)'} px={10} py={6} className={'radius--sm'}>
            <LessonIcon />
            <Text fz={12} fw={500} c={'var(--academic-green)'}>
              Əsas fənn
            </Text>
          </Flex>
        )}
      </Flex>
      <Flex justify={'flex-end'}>
        <ActionIcon variant="transparent">
          <SaveIcon />
        </ActionIcon>
      </Flex>
    </Box>
  );
};

const optionsMenu = [
  {
    label: 'Bütün sahələr',
    value: -1,
  },
  {
    label: 'Buraxılış',
    value: 1,
  },
  {
    label: 'Riyaziyyat',
    value: 2,
  },
  {
    label: 'Azərbaycan dili',
    value: 3,
  },
  {
    label: 'İngilis dili',
    value: 4,
  },
  {
    label: 'Proqramlaşdırma',
    value: 5,
  },
  {
    label: 'Marketinq',
    value: 6,
  },
  {
    label: 'Dizayn',
    value: 7,
  },
];

const mock = [
  {
    title: 'Riyaziyyat',
    userCompletionRate: 53,
    description:
      'Dəqiqlik, məntiq və riyazi düşüncə – bunlar sizin ən güclü silahlarınızdır! Səviyyənizi artıraraq daha çətin məsələləri həll edə biləcəyinizə əmin olun.',
    studentCount: 123,
    lessonCount: 42,
    hour: 120,
    isMainCourse: true,
  },
  {
    title: 'Riyaziyyat',
    userCompletionRate: 53,
    description:
      'Dəqiqlik, məntiq və riyazi düşüncə – bunlar sizin ən güclü silahlarınızdır! Səviyyənizi artıraraq daha çətin məsələləri həll edə biləcəyinizə əmin olun.',
    studentCount: 123,
    lessonCount: 42,
    hour: 120,
    isMainCourse: true,
  },
  {
    title: 'Riyaziyyat',
    userCompletionRate: 53,
    description:
      'Dəqiqlik, məntiq və riyazi düşüncə – bunlar sizin ən güclü silahlarınızdır! Səviyyənizi artıraraq daha çətin məsələləri həll edə biləcəyinizə əmin olun.',
    studentCount: 123,
    lessonCount: 42,
    hour: 120,
    isMainCourse: true,
  },
  {
    title: 'Riyaziyyat',
    userCompletionRate: 53,
    description:
      'Dəqiqlik, məntiq və riyazi düşüncə – bunlar sizin ən güclü silahlarınızdır! Səviyyənizi artıraraq daha çətin məsələləri həll edə biləcəyinizə əmin olun.',
    studentCount: 123,
    lessonCount: 42,
    hour: 120,
    isMainCourse: true,
  },
  {
    title: 'Riyaziyyat',
    userCompletionRate: 53,
    description:
      'Dəqiqlik, məntiq və riyazi düşüncə – bunlar sizin ən güclü silahlarınızdır! Səviyyənizi artıraraq daha çətin məsələləri həll edə biləcəyinizə əmin olun.',
    studentCount: 123,
    lessonCount: 42,
    hour: 120,
    isMainCourse: true,
  },
  {
    title: 'Riyaziyyat',
    userCompletionRate: 53,
    description:
      'Dəqiqlik, məntiq və riyazi düşüncə – bunlar sizin ən güclü silahlarınızdır! Səviyyənizi artıraraq daha çətin məsələləri həll edə biləcəyinizə əmin olun.',
    studentCount: 123,
    lessonCount: 42,
    hour: 120,
    isMainCourse: true,
  },
  {
    title: 'Riyaziyyat',
    userCompletionRate: 53,
    description:
      'Dəqiqlik, məntiq və riyazi düşüncə – bunlar sizin ən güclü silahlarınızdır! Səviyyənizi artıraraq daha çətin məsələləri həll edə biləcəyinizə əmin olun.',
    studentCount: 123,
    lessonCount: 42,
    hour: 120,
    isMainCourse: true,
  },
  {
    title: 'Riyaziyyat',
    userCompletionRate: 53,
    description:
      'Dəqiqlik, məntiq və riyazi düşüncə – bunlar sizin ən güclü silahlarınızdır! Səviyyənizi artıraraq daha çətin məsələləri həll edə biləcəyinizə əmin olun.',
    studentCount: 123,
    lessonCount: 42,
    hour: 120,
    isMainCourse: true,
  },
  {
    title: 'Riyaziyyat',
    userCompletionRate: 53,
    description:
      'Dəqiqlik, məntiq və riyazi düşüncə – bunlar sizin ən güclü silahlarınızdır! Səviyyənizi artıraraq daha çətin məsələləri həll edə biləcəyinizə əmin olun.',
    studentCount: 123,
    lessonCount: 42,
    hour: 120,
    isMainCourse: true,
  },
];
