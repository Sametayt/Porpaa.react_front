import React from 'react';
import FriendBoxProfile from '../Profiles/FriendBoxProfile';
import MissionBoxProfile from '../Profiles/MissionProfile';
import SideInfo from '../Profiles/SideInfo';

const SideBar = props => {
  if (!props.data.currentUser) {
    return null;
  }
  return (
    <div>
      <SideInfo data={props.data.currentUser} />
      <MissionBoxProfile missionCards={props.missionCards} />
      <FriendBoxProfile fetchUser={props.fetchUser} searchedUser={props.searchedUser} friends={props.friends} />
    </div>
  );
};
export default SideBar;
