'use client';
import React from 'react';
import { Center, Divider, Flex, Grid, Stack, Text } from '@mantine/core';
import Link from 'next/link';
import { FacebookIcon, InstagramIcon, LinkedinIcon, TelegramIcon } from '@/assets/icons';
import Logo from '../../logo';

export default function PageFooter() {
  return (
    <Stack gap={20} className="radius--xl" bg={'var(--academic-white)'} mb={20} px={40} pt={60} pb={20}>
      <Grid columns={13}>
        <Grid.Col span={4}>
          <Logo />
          <Text mt={12} mb={42} fz={16} className='text--preline'>{`Bilik yolunda addımla,\n gələcək səninlə formalaşır!`}</Text>
          <Flex gap={20}>
            {socials.map((item, index) => (
              <Center key={index} component={Link} href={item.href} w={32} h={32} bg={'var(--academic-primary-light)'} className='radius--full'>
                {item.icon}
              </Center>
            ))}
          </Flex>
        </Grid.Col>
        {menu.map((item) => (
          <Grid.Col key={item.title} span={3}>
            <Text fw={500} fz={16}>
              {item.title}
            </Text>
            <Stack gap={8} mt={10}>
              {item.links.map((link) => (
                <Text key={link.title} component={Link} href={link.href} className="text--preline" c="var(--academic-text-secondary)">
                  {link.title}
                </Text>
              ))}
            </Stack>
          </Grid.Col>
        ))}
        <Grid.Col span={3}></Grid.Col>
        <Grid.Col span={3}></Grid.Col>
        <Grid.Col span={3}></Grid.Col>
      </Grid>
      <Divider color="var(--academic-grey)" />
      <Flex justify={'space-between'} align="center">
        <Text c="var(--academic-text)">© Akademik. Bütün hüquqlar qorunur.</Text>
        <Flex gap={40}>
          <Text component={Link} c="var(--academic-text)" href={'/'}>
            Gizlilik
          </Text>
          <Text component={Link} c="var(--academic-text)" href={'/'}>
            Qaydalar ve şərtlər 
          </Text>
        </Flex>
      </Flex>
    </Stack>
  );
}

const socials = [
  {
    icon: <FacebookIcon />,
    href: 'https://www.facebook.com/akademik.az/',
  },
  {
    icon: <InstagramIcon />,
    href: 'https://www.instagram.com/akademik.az/',
  },
  {
    icon: <TelegramIcon />,
    href: 'https://www.telegram.com/akademik.az/',
  },
  {
    icon: <LinkedinIcon />,
    href: 'https://www.linkedin.com/akademik.az/',
  },
];

const menu = [
  {
    title: 'Akademik',
    links: [
      {
        title: 'Haqqimizda',
        href: '/about',
      },
      {
        title: 'Karyera mərkəzi',
        href: '/careers',
      },
      {
        title: 'Məzunlarımız',
        href: '/graduates',
      },
    ],
  },
  {
    title: 'Təhsil sahələri',
    links: [
      {
        title: 'Kurslar',
        href: '/courses',
      },
      {
        title: 'İmtahan',
        href: '/exam',
      },
    ],
  },
  {
    title: 'Bizimlə əlaqə',
    links: [
      {
        title: '+994 51 678 52 78',
        href: 'tel:+994516785278',
      },
      {
        title: 'akademik@edu.az',
        href: 'mailto:akademik@edu.az',
      },
      {
        title: '25 Matbuat küç / Baku,\nAzərbaycan',
        href: 'https://www.google.com/maps/place/Baku/@40.3925123,49.8543256,12z/data=!3m1!4b1!4m5!3m4!1s0x40307d5a9b2a6f4d:0x1d9e8a2e1b3a1b3!8m2!3d40.3925123!4d49.8543256',
      },
    ],
  },
];
