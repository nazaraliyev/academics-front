'use client';
import React from 'react';
import styles from './styles.module.scss';
import cx from 'classnames';
import { Grid, Stack, Text } from '@mantine/core';
import * as motion from 'motion/react-client';
import Image from 'next/image';

interface DataType {
  id: string;
  img: string;
  title: string;
  color: string;
  bgColor: string;
}
export default function SectionGoal() {
  // States
  const [selected, setSelected] = React.useState<DataType | undefined>(undefined);

  // Refs
  const [height, setHeight] = React.useState(300);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      setHeight(window.innerHeight - 20 - 72 - 20 - 20);
    }
  }, []);

  // Functions
  const onMouseEnter = (event: string) => () => setSelected(data.find((item) => item.id === event));
  const onMouseLeave = () => setSelected(undefined);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} style={{ height }}>
      <Grid h={'100%'} p={20} bg={selected ? selected.bgColor : 'var(--academic-white)'} className={cx('radius--xl', styles.container)}>
        <Grid.Col span={7} h={'100%'}>
          <motion.div
            key={selected?.id}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={styles.motion}>
            {selected ? (
              <Image src={selected.img} alt={selected.title} width={400} height={400} className="img--contain" />
            ) : (
              <Text fw={600} fz={40} className="text--preline">
                {'Bilik sonsuzdur,\n bu gün hansını kəşf\n edəcəksən?'}
              </Text>
            )}
          </motion.div>
        </Grid.Col>
        <Grid.Col span={5} h={'100%'}>
          <Stack gap={24} h={'100%'}>
            {data.map((item, index) => (
              <Card key={index} {...{ ...item, selected: selected?.id, onMouseLeave, onMouseEnter: onMouseEnter(item.id) }} />
            ))}
          </Stack>
        </Grid.Col>
      </Grid>
    </motion.div>
  );
}

const Card = (props: DataType & { selected: string | undefined; onMouseEnter: VoidFunction; onMouseLeave: VoidFunction }) => {
  // Variables
  const isSelected = props.id === props.selected;

  return (
    <Stack
      flex={1}
      gap={0}
      py={20}
      bg={isSelected ? props.color : props.bgColor}
      align="center"
      justify="center"
      className={cx('radius--md cursor--pointer', styles.card, { [styles['card--active']]: props.id === props.selected })}
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}>
      <Image src={props.img} alt="icon" width={180} height={180} className={styles.card_image} />
      <Text ta={'center'} fw={600} fz={32} c={isSelected ? 'var(--academic-white)' : props.color}>
        {props.title}
      </Text>
    </Stack>
  );
};

const data: DataType[] = [
  {
    id: 'exam',
    img: '/cubic.png',
    title: 'Buraxılış imtahanı',
    color: 'var(--academic-primary)',
    bgColor: 'var(--academic-primary-light)',
  },
  {
    id: 'other',
    img: '/torus.png',
    title: 'Digər kurslar',
    color: 'var(--academic-orange)',
    bgColor: 'var(--academic-orange-light)',
  },
];
