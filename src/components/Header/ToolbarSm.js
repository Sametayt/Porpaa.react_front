import  React            from   'react';
import HeaderToolbar     from   './HeaderToolbar';
import notification      from   '../../assets/img/Header/alert.png';
import video             from '../../assets/img/Header/video.png';
import baseline          from '../../assets/img/Question/baseline-outlined_flag-24px.svg';
import { Dropdown, Tab, Nav, ButtonToolbar, OverlayTrigger, Popover, Button } from 'react-bootstrap';


const ToolbarSm = (props) => {
    return (  
        <div className="">
    <ButtonToolbar>
          {['bottom'].map(placement => (
            <OverlayTrigger
              trigger="click"
              rootClose={true}
              key={placement}
              placement={placement}
              overlay={
                <Popover id={`popover-positioned-${placement}`}>
                  <Popover.Content>
                    <div className="u-small-padding-vertical u-small-padding-horizontal">
                      <div className="c-alert c-alert-secondary">
                        <div className=" u-justify-content-start u-small-margin-top">
                          {props.notifications.data ? (
                            props.notifications.data.map(item => {
                              if (item.seen === false) {
                                return (
                                  <div key={item._id} className="c-alert c-alert-secondary u-small-margin-vertical">
                                    <div className="u-display-flex u-flex-row u-justify-content-start u-small-margin-top">
                                      <img className="c-header__info-icon" src={baseline} width="20px" height="20px" />
                                      <p className="u-small-margin-right">
                                        <b>{item.message}</b>
                                      </p>
                                    </div>
                                  </div>
                                );
                              }
                            })
                          ) : (
                            <div className="c-alert c-alert-secondary u-small-margin-vertical">
                              <div className="u-display-flex u-flex-row u-justify-content-start u-small-margin-top">
                                <p className="u-small-margin-right">
                                  <b>پیامی برای نمایش ندارید</b>
                                </p>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                      <img src={video} width="240px" />
                    </div>
                  </Popover.Content>
                </Popover>
              }
            >
              <div className="u-display-flex u-flex-row u-justify-content-between">
                <a href="#" variant="secondary">
                  <img src={notification} height="30" />
                </a>
              </div>
            </OverlayTrigger>
          ))}
        </ButtonToolbar>
        </div>           
     );
}
export default ToolbarSm;