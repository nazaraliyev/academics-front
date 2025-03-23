'use client';
import React from 'react';
import { Page } from '@/components';
import { Box, Button, Collapse, Container, Flex, Progress, RingProgress, Stack, Text, Timeline } from '@mantine/core';
import { CalendarIcon, ChevronIcon } from '@/assets/icons';
import { useDisclosure } from '@mantine/hooks';

export default function RoadmapPage() {
  return (
    <Page>
      <Stack>
        <Flex align={'center'} justify={'space-between'}>
          <Text fz={20} fw={600}>
            Cari kurs
          </Text>
          <Button
            color="var(--academic-white)"
            radius={8}
            leftSection={<CalendarIcon />}
            rightSection={<ChevronIcon {...{ width: 16, height: 16, color: 'var(--academic-primary)' }} />}>
            <Text c={'var(--academic-primary)'}>Dərs cədvəli</Text>
          </Button>
        </Flex>
        <Container size={690}>
          <Stack>
            {mock.map((item, index) => (
              <Card key={index} {...item} />
            ))}
          </Stack>
        </Container>
      </Stack>
    </Page>
  );
}

interface ParagraphType {
  title: string;
  isChecked: boolean;
}
interface LessonType {
  id: number;
  section: string;
  paragraph: ParagraphType[];
}
interface CardProps {
  title: string;
  description: string;
  slug: string;
  finishRate: number;
  lessons: LessonType[];
}
const Card = (props: CardProps) => {
  // States
  const [opened, { toggle }] = useDisclosure(false);
  const [section, setSection] = React.useState<number | null>(null);

  return (
    <Stack gap={20} className="radius--md" bg={'var(--academic-white)'} p={20}>
      <Stack gap={0}>
        <Flex justify={'space-between'} align={'center'}>
          <Text fz={24} fw={500}>
            {props.title}
          </Text>
          <Flex gap={4} align={'center'}>
            <Text fz={12} c={'var(--academic-primary)'}>{props.finishRate}%</Text>
            <RingProgress size={20} sections={[{ value: 50, color: 'var(--academic-primary)' }]} thickness={3} />
          </Flex>
        </Flex>
        <Text fz={14} c={'var(--academic-text-secondary)'}>
          {props.description}
        </Text>
      </Stack>
      <Progress value={props.finishRate} color="var(--academic-primary)" radius={4} size={6} bg={'var(--academic-grey)'} />
      <Box pos={'relative'}>
        <Button color="var(--academic-primary)" radius={8} pos={'absolute'} right={0}>
          Davam et
        </Button>
        <Stack>
          <Button
            leftSection={<ChevronIcon {...{ width: 16, height: 16, color: 'var(--academic-primary)' }} />}
            variant="subtle"
            fw={500}
            onClick={toggle}
            className="width--min"
            color="var(--academic-primary)">
            Ətraflı bax
          </Button>
          <Collapse in={opened}>
            {props.lessons.map((item, index) => (
              <Stack key={index} gap={10} pl={20}>
                <Button
                  leftSection={<ChevronIcon {...{ width: 16, height: 16, color: 'var(--academic-text)' }} />}
                  variant="subtle"
                  fw={500}
                  className="width--min"
                  onClick={() => setSection(section === item.id ? null : item.id)}
                  color="var(--academic-text)">
                  {item.section}
                </Button>
                <Collapse in={item.id === section} pl={40}>
                  <Timeline lineWidth={1} bulletSize={10}>
                    {item.paragraph.map((paragraph, index) => (
                      <Timeline.Item key={index} title={paragraph.title} fz={12} fw={400} c={"var(--academic-text-secondary)"}/>
                    ))}
                  </Timeline>
                </Collapse>
              </Stack>
            ))}
          </Collapse>
        </Stack>
      </Box>
    </Stack>
  );
};

const mock = [
  {
    title: 'Riyaziyyat',
    description:
      'Dəqiqlik, məntiq və riyazi düşüncə – bunlar sizin ən güclü silahlarınızdır! Səviyyənizi artıraraq daha çətin məsələləri həll edə biləcəyinizə əmin olun.',
    finishRate: 58,
    slug: 'mathematics',
    lessons: [
      {
        id: 1,
        section: 'Natural ədədlər',
        paragraph: [
          {
            title: 'Natural ədədlər',
            isChecked: true,
          },
          {
            title: 'Natural ədədlər',
            isChecked: false,
          },
          {
            title: 'Natural ədədlər',
            isChecked: false,
          },
          {
            title: 'Natural ədədlər',
            isChecked: false,
          },
          {
            title: 'Natural ədədlər',
            isChecked: false,
          },
        ],
      },
      {
        id: 2,
        section: 'Natural ədədlər',
        paragraph: [
          {
            title: 'Natural ədədlər',
            isChecked: true,
          },
          {
            title: 'Natural ədədlər',
            isChecked: false,
          },
          {
            title: 'Natural ədədlər',
            isChecked: false,
          },
          {
            title: 'Natural ədədlər',
            isChecked: false,
          },
          {
            title: 'Natural ədədlər',
            isChecked: false,
          },
        ],
      },
      {
        id: 3,
        section: 'Natural ədədlər',
        paragraph: [
          {
            title: 'Natural ədədlər',
            isChecked: true,
          },
          {
            title: 'Natural ədədlər',
            isChecked: false,
          },
          {
            title: 'Natural ədədlər',
            isChecked: false,
          },
          {
            title: 'Natural ədədlər',
            isChecked: false,
          },
          {
            title: 'Natural ədədlər',
            isChecked: false,
          },
        ],
      },
      {
        id: 4,
        section: 'Natural ədədlər',
        paragraph: [
          {
            title: 'Natural ədədlər',
            isChecked: true,
          },
          {
            title: 'Natural ədədlər',
            isChecked: false,
          },
          {
            title: 'Natural ədədlər',
            isChecked: false,
          },
          {
            title: 'Natural ədədlər',
            isChecked: false,
          },
          {
            title: 'Natural ədədlər',
            isChecked: false,
          },
        ],
      },
      {
        id: 5,
        section: 'Natural ədədlər',
        paragraph: [
          {
            title: 'Natural ədədlər',
            isChecked: true,
          },
          {
            title: 'Natural ədədlər',
            isChecked: false,
          },
          {
            title: 'Natural ədədlər',
            isChecked: false,
          },
          {
            title: 'Natural ədədlər',
            isChecked: false,
          },
          {
            title: 'Natural ədədlər',
            isChecked: false,
          },
        ],
      },
    ],
  },
  {
    title: 'Azərbaycan dili',
    description:
      'Dəqiqlik, məntiq və riyazi düşüncə – bunlar sizin ən güclü silahlarınızdır! Səviyyənizi artıraraq daha çətin məsələləri həll edə biləcəyinizə əmin olun.',
    finishRate: 58,
    slug: 'mathematics',
    lessons: [
      {
        id: 1,
        section: 'Natural ədədlər',
        paragraph: [
          {
            title: 'Natural ədədlər',
            isChecked: true,
          },
          {
            title: 'Natural ədədlər',
            isChecked: false,
          },
          {
            title: 'Natural ədədlər',
            isChecked: false,
          },
          {
            title: 'Natural ədədlər',
            isChecked: false,
          },
          {
            title: 'Natural ədədlər',
            isChecked: false,
          },
        ],
      },
      {
        id: 2,
        section: 'Natural ədədlər',
        paragraph: [
          {
            title: 'Natural ədədlər',
            isChecked: true,
          },
          {
            title: 'Natural ədədlər',
            isChecked: false,
          },
          {
            title: 'Natural ədədlər',
            isChecked: false,
          },
          {
            title: 'Natural ədədlər',
            isChecked: false,
          },
          {
            title: 'Natural ədədlər',
            isChecked: false,
          },
        ],
      },
      {
        id: 3,
        section: 'Natural ədədlər',
        paragraph: [
          {
            title: 'Natural ədədlər',
            isChecked: true,
          },
          {
            title: 'Natural ədədlər',
            isChecked: false,
          },
          {
            title: 'Natural ədədlər',
            isChecked: false,
          },
          {
            title: 'Natural ədədlər',
            isChecked: false,
          },
          {
            title: 'Natural ədədlər',
            isChecked: false,
          },
        ],
      },
      {
        id: 4,
        section: 'Natural ədədlər',
        paragraph: [
          {
            title: 'Natural ədədlər',
            isChecked: true,
          },
          {
            title: 'Natural ədədlər',
            isChecked: false,
          },
          {
            title: 'Natural ədədlər',
            isChecked: false,
          },
          {
            title: 'Natural ədədlər',
            isChecked: false,
          },
          {
            title: 'Natural ədədlər',
            isChecked: false,
          },
        ],
      },
      {
        id: 5,
        section: 'Natural ədədlər',
        paragraph: [
          {
            title: 'Natural ədədlər',
            isChecked: true,
          },
          {
            title: 'Natural ədədlər',
            isChecked: false,
          },
          {
            title: 'Natural ədədlər',
            isChecked: false,
          },
          {
            title: 'Natural ədədlər',
            isChecked: false,
          },
          {
            title: 'Natural ədədlər',
            isChecked: false,
          },
        ],
      },
    ],
  },
  {
    title: 'İngilis dili',
    description:
      'Dəqiqlik, məntiq və riyazi düşüncə – bunlar sizin ən güclü silahlarınızdır! Səviyyənizi artıraraq daha çətin məsələləri həll edə biləcəyinizə əmin olun.',
    finishRate: 90,
    slug: 'mathematics',
    lessons: [
      {
        id: 1,
        section: 'Natural ədədlər',
        paragraph: [
          {
            title: 'Natural ədədlər',
            isChecked: true,
          },
          {
            title: 'Natural ədədlər',
            isChecked: false,
          },
          {
            title: 'Natural ədədlər',
            isChecked: false,
          },
          {
            title: 'Natural ədədlər',
            isChecked: false,
          },
          {
            title: 'Natural ədədlər',
            isChecked: false,
          },
        ],
      },
      {
        id: 2,
        section: 'Natural ədədlər',
        paragraph: [
          {
            title: 'Natural ədədlər',
            isChecked: true,
          },
          {
            title: 'Natural ədədlər',
            isChecked: false,
          },
          {
            title: 'Natural ədədlər',
            isChecked: false,
          },
          {
            title: 'Natural ədədlər',
            isChecked: false,
          },
          {
            title: 'Natural ədədlər',
            isChecked: false,
          },
        ],
      },
      {
        id: 3,
        section: 'Natural ədədlər',
        paragraph: [
          {
            title: 'Natural ədədlər',
            isChecked: true,
          },
          {
            title: 'Natural ədədlər',
            isChecked: false,
          },
          {
            title: 'Natural ədədlər',
            isChecked: false,
          },
          {
            title: 'Natural ədədlər',
            isChecked: false,
          },
          {
            title: 'Natural ədədlər',
            isChecked: false,
          },
        ],
      },
      {
        id: 4,
        section: 'Natural ədədlər',
        paragraph: [
          {
            title: 'Natural ədədlər',
            isChecked: true,
          },
          {
            title: 'Natural ədədlər',
            isChecked: false,
          },
          {
            title: 'Natural ədədlər',
            isChecked: false,
          },
          {
            title: 'Natural ədədlər',
            isChecked: false,
          },
          {
            title: 'Natural ədədlər',
            isChecked: false,
          },
        ],
      },
      {
        id: 5,
        section: 'Natural ədədlər',
        paragraph: [
          {
            title: 'Natural ədədlər',
            isChecked: true,
          },
          {
            title: 'Natural ədədlər',
            isChecked: false,
          },
          {
            title: 'Natural ədədlər',
            isChecked: false,
          },
          {
            title: 'Natural ədədlər',
            isChecked: false,
          },
          {
            title: 'Natural ədədlər',
            isChecked: false,
          },
        ],
      },
    ],
  },
];
