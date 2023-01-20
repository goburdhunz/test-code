import React from 'react';
import { LaunchResponseData } from '../../types/types'
import Image from 'next/image';
import styles from './Cards.module.css';

const Cards = ({ name, date_utc, cores, payloads, success, failures, links: { patch: { small } } }: LaunchResponseData) => {
    const formattedUtcDate = date_utc?.split('T')?.[0]
    const showFailure = success ? "" : `Reason for Failure:${failures?.[0]?.reason}`
    return (
        <div className={styles.card}>
            <Image priority src={small} alt="rocketLogo" width={70} height={70} />
            <span>Name: {name}</span>
            <span>Core Serial: {cores?.[0]?.core}</span>
            <span>Date: {formattedUtcDate}</span>
            <span>Payload Id: {payloads?.[0]?.id}</span>
            <span>Payload type: {payloads?.[0]?.type}</span>
            <span>Successful Launch: {success ? 'Yes' : 'No'}</span>
            <span>{showFailure}</span>
        </div>
    )
}

export default Cards