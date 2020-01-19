import React,{Component} from 'react';
import { Tabs, Tab} from 'react-bootstrap';
import MissionsImage from '../../components/Profiles/MissionsImage';



class Profile extends component{
  render(){
    return(
      <div>
      <Tabs className="myClass" onSelect={this.handleSelect}>
         <Tab label>نقشه پیشرفته</Tab>
         <Tab label>نشان</Tab>
         <Tab label>نشان</Tab>
         <Tab label>نشان</Tab>
         <Tab label>چالش</Tab>
      </Tabs>
      </div>
    )
  }
}
export default Profile;