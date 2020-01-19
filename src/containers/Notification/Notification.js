import React,{Component}    from 'react'
import SettingSidebar       from  '../../components/Setting/SettingSidebar'
import NotificationForm     from '../../components/Notification/NotificationForm'

class Notification extends Component {
    constructor(props){
         super(props);
    }
    render (){
        return (
            <div className="c-setting__content o-container u-display-flex u-flex-row u-medium-padding-vertical u-large-margin-vertical u-flex-column-md">
                <div className="o-col-lg-3 o-col-md-12 o-col-sm-12">
                    <SettingSidebar />
                </div>
                <div className="o-col-lg-9 o-col-md-12 o-col-sm-12 u-medium-margin-top-sm  u-medium-margin-top-md">
                    <NotificationForm />   
                </div>
            </div>
        )
    }
    
}
export default Notification;
