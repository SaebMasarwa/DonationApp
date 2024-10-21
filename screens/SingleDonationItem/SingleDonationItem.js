import React from 'react';

import style from './style';

import {useSelector} from 'react-redux';

const SingleDonationItem = () => {
  const donationItemInformation = useSelector(
    state => state.donations.selecetedDonationInformation,
  );
  console.log(donationItemInformation);

  return null;
};

export default SingleDonationItem;
