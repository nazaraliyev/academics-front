'use client';
import React from 'react';
import { ChevronIcon } from '@/assets/icons';
import { Page } from '@/components';
import { Anchor, Breadcrumbs, Button, Center, Flex, Grid, Stack, Tabs, Text } from '@mantine/core';
import Image from 'next/image';

export default function MaterialPage() {
  return (
    <Page>
      <Stack>
        <Breadcrumbs separator={<ChevronIcon {...{ width: 12, height: 12, color: 'var(--academic-text-disabled)' }} className="rotate--270" />}>
          <Anchor fz={12} href="/roadmap" c={'var(--academic-text-disabled)'}>
            Cari kurs
          </Anchor>
          <Text fz={12} fw={500}>
            Riyaziyyat
          </Text>
        </Breadcrumbs>

        <Text fw={600} fz={32} c={'var(--academic-text)'}>
          Riyaziyyat
        </Text>

        <Content />
        <Footer />
      </Stack>
    </Page>
  );
}

const Content = () => {
  // States
  const [paragraphs, setParagraphs] = React.useState<number>(1);

  return (
    <Grid bg={'var(--academic-white)'} className="radius--xl" p={28}>
      <Grid.Col span={3}>
        <Stack gap={10}>
          <Text fw={500}>Mühazirə başlıqları</Text>
          <Stack gap={0}>
            {p.map((item, index) => {
              const isSelected = item.value === paragraphs;
              return (
                <Button
                  key={index}
                  variant="subtle"
                  color={isSelected ? 'var(--academic-primary)' : 'var(--academic-text)'}
                  justify="flex-start"
                  fw={400}
                  style={isSelected ? { borderLeft: '4px solid var(--academic-primary)' } : undefined}
                  onClick={() => setParagraphs(item.value)}>
                  {item.label}
                </Button>
              );
            })}
          </Stack>
        </Stack>
      </Grid.Col>
      <Grid.Col span={9}>
        <Stack>
          <Tabs defaultValue={'text'}>
            <Tabs.List>
              <Tabs.Tab value="text">Mühazirə</Tabs.Tab>
              <Tabs.Tab value="video">Video</Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="text">
              <p style={{ fontSize: 14 }}>
                It has become quite challenging to come across websites that do not allow visitors to interact with them. These interactions can
                include sliders, web galleries, animations, or any other interactive event that appears upon pressing a button. These interactive
                behaviors are enabled by JavaScript, which helps process user input and send and receive data from servers. From simple clicks to
                complex functionalities in web pages and apps, JavaScript is the key technology that shapes our online experiences today.
              </p>
              <h5 style={{ fontWeight: 600, fontSize: 16, marginBottom: 0 }}>What is JavaScript</h5>
              <p style={{ fontSize: 14, marginTop: 0 }}>
                JavaScript (JS) is a widely-used programming language created by Brendan Eich in just ten days in 1995. You read it right—JavaScript
                was developed in just ten days!
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: 40, marginBottom: 40 }}>
                <Image src="/will_delete_3.png" alt="delete" width={233} height={233} />
              </div>
              <p style={{ fontSize: 14 }}>
                JavaScript is regarded as one of the most commonly-used programming language. It is used for both front-end and back-end development.
              </p>
              <p style={{ fontSize: 14 }}>
                For example, on the front-end side, along with technologies like HTML and CSS, JavaScript allows you to style and add animations to
                your web pages. Meanwhile, on the back-end side, JavaScript can also help manage user data, such as shopping cart information and
                payment processing, by working with databases and coordinating server-side tasks.
              </p>

              <h5 style={{ fontWeight: 600, fontSize: 16, marginBottom: 0 }}>Java vs. JavaScript</h5>
              <p style={{ fontSize: 14, marginTop: 0, whiteSpace: 'pre-line' }}>
                {`Both Java and JavaScript are programming languages, but they are completely different. They were developed separately, have different syntaxes, and are used for different purposes.
            The reason behind their similar names was, in fact, a marketing strategy. When JavaScript was initially released in 1995 as well, it was under the name Mocha. It was later renamed to LiveScript and then to JavaScript. The name 'JavaScript' was chosen to capitalize on Java's growing popularity in the programming community, since Java was developed first in 1995 and quickly became quite popular.
                `}
              </p>
              <p style={{ fontSize: 14, whiteSpace: 'pre-line' }}>
                {`Today, the two languages have continued to develop independently, each with its own community and ecosystem.
              To stay aligned with the latest features and improvements in web development, JavaScript follows a standard named ECMAScript (often abbreviated as ES). ECMAScript is the official standard that defines the JavaScript language. The latest version of this standard is ECMAScript 2023.
              The first program
              Programs written in this language are called scripts. Here is an example of a simple JS script that prints I am starting to learn JavaScript!:
              console.log("I am starting to learn JavaScript!");`}
              </p>
              <h5 style={{ fontWeight: 600, fontSize: 16, marginBottom: 0 }}>Explain code</h5>
              <p style={{ fontSize: 14, marginTop: 0, whiteSpace: 'pre-line' }}>
                {`All modern browsers have a built-in program allowing you to execute JS directly. Let's look at the result of our first program in the browser. To do this, press Ctrl+Shift+J or Ctrl+Shift+I on Windows/Linux, or Cmd+Option+J or Cmd+Option+I on Mac. Then, enter the JS code in the "Console" tab and press Enter.
              As you can see, the result of our first script was the line I am starting to learn JavaScript!
              Start practicing`}
              </p>
            </Tabs.Panel>
            <Tabs.Panel value="video">
              <Center h={300} className="radius--md" bg={'var(--academic-background)'} mt={20}>
                <Text fw={500} fz={20} c={'var(--academic-primary)'}>
                  video
                </Text>
              </Center>
            </Tabs.Panel>
          </Tabs>
          <Center>
            <Button color="var(--academic-primary)" h={44} w={250} radius={8}>
              Növbəti dərsə keçin
            </Button>
          </Center>
        </Stack>
      </Grid.Col>
    </Grid>
  );
};

const Footer = () => {
  return (
    <Stack bg={'var(--academic-white)'} className="radius--xl" p={28}>
      <Tabs defaultValue={'comment'}>
        <Tabs.List>
          <Tabs.Tab value="comment">Şərhlər</Tabs.Tab>
          <Tabs.Tab value="notes">Notes</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="comment">
          <Stack gap={20}>
            <Flex gap={20} mt={20}>
              <Image src={'/will_delete.png'} alt="delete" width={40} height={40} className="radius--full" />
              <Stack gap={4}>
                <Text fw={600} fz={16}>
                  Aygül Məmmədli
                </Text>
                <Text>I love how, in programming, every problem comes to an end in the same place: StackOverflow.</Text>
                <Flex gap={20} mt={6}>
                  <Text fz={12} c={'var(--academic-text-disabled)'}>
                    4g
                  </Text>
                  <Text fz={12} c={'var(--academic-text-disabled)'}>
                    Bəyən
                  </Text>
                  <Text fz={12} c={'var(--academic-text-disabled)'}>
                    Cavabla
                  </Text>
                </Flex>
              </Stack>
            </Flex>
            <Flex gap={20} mt={20}>
              <Image src={'/will_delete_1.png'} alt="delete" width={40} height={40} className="radius--full" />
              <Stack gap={4}>
                <Text fw={600} fz={16}>
                  Aygül Məmmədli
                </Text>
                <Text>I love how, in programming, every problem comes to an end in the same place: StackOverflow.</Text>
                <Flex gap={20} mt={6}>
                  <Text fz={12} c={'var(--academic-text-disabled)'}>
                    4g
                  </Text>
                  <Text fz={12} c={'var(--academic-text-disabled)'}>
                    Bəyən
                  </Text>
                  <Text fz={12} c={'var(--academic-text-disabled)'}>
                    Cavabla
                  </Text>
                </Flex>
              </Stack>
            </Flex>
          </Stack>
        </Tabs.Panel>
        <Tabs.Panel value="notes">No content</Tabs.Panel>
      </Tabs>
    </Stack>
  );
};

const p = [
  {
    label: 'Rəqəmlər',
    value: 1,
  },
  {
    label: 'Tək və cüt ədədlər',
    value: 2,
  },
  {
    label: 'Natural ədədlər',
    value: 3,
  },
  {
    label: 'RəqəmƏdədi bölənlər',
    value: 4,
  },
];
