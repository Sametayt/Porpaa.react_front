import React, { Component } from 'react';
import QuestionMistak       from '../../components/Moderators/QuestionMistake';
import SideBarModerator     from '../../components/Moderators/SideBarModerator';

class ModeratorNotification extends Component {
    constructor(props){
        super(props)
        this.state={
            index : 0,
            disabledNext:false,
            disabledrev:false,
            obj :[
                {description:"hello 1"},
                {description:"hello 2"},
                {description:"hello 3"}
              ]
        }
    }   
    changeStep = (currentIndex=0,type='next') =>{
        if (type == 'next'){
          let index = currentIndex + 1;
          if (index >= this.state.obj.length+1){
            this.setState({
              disabledNext:true
            });
          }else{
            this.setState({
              index: index,
              currentStep:this.state.obj[index-1]
            });
          }
      
        }else{
          let index = currentIndex -1;
          if ( index < this.state.obj.length-3){
            this.setState({
              disabledPrev:true
            });
          }else{
            this.setState({
              index:index,
              // disabledPrev:disabledPrev,
              currentStep:this.state.obj[index-1]
            });
          }
       
        }
      }
      render(){
          return(
              <div className="o-container">
                <div className="u-display-flex u-flex-row u-flex-column-sm u-flex-column-md">
                 <div className='o-col-lg-9 o-col-md-12 o-col-sm-12 o-col-xs-12'>
                    <QuestionMistak 
                    changeStep={this.changeStep} 
                    state={this.state} 
                    disabledNext={this.state.disabledNext} 
                    disabledPrev={this.state.disabledPrev}
                    />
                 </div>
                   <div className='c-mission_moderator-noti o-col-lg-3 o-col-md-12 o-col-sm-12 o-col-xs-12 u-medium-margin-top-sm'>
                      <SideBarModerator />
                  </div>
                 </div>
                </div>
          )
      }
}
export default ModeratorNotification;