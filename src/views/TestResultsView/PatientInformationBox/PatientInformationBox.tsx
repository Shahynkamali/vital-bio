import React from 'react';
import { Box, Text } from '@components';
import type { FC } from 'react';
import { formatTime } from '@utils';
import styles from './PatientInformationBox.module.scss';

interface Patient {
  name: string;
  patientId: string;
  dateOfBirth: string;
  collectionTime: string;
}

interface Props {
  patient: Patient;
}

const PatientInformationBox: FC<Props> = ({ patient }) => {
  const { name, patientId, dateOfBirth, collectionTime } = patient;
  return (
    <Box>
      <Text color="light" variant="small" as="p">
        Review results for
      </Text>
      <Text variant="h2" className={styles['padding-bottom-extra-large']}>
        {name}
      </Text>
      <Text color="light" variant="body" as="p">
        Patient ID
      </Text>
      <Text variant="body" as="p" className={styles['padding-bottom-large']}>
        {patientId}
      </Text>
      <Text color="light" variant="body" as="p">
        DOB
      </Text>
      <Text variant="body" as="p" className={styles['padding-bottom-large']}>
        {dateOfBirth}
      </Text>
      <Text color="light" variant="body" as="p">
        Collection time
      </Text>
      <Text variant="body" as="p">
        {formatTime(new Date(collectionTime))}
      </Text>
    </Box>
  );
};

export { PatientInformationBox };
