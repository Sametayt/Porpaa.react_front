import React from 'react';
import {Link} from 'react-router-dom';
import {Accordion,Card , Button} from 'react-bootstrap';



const PlayList = props => {
    let list = null;
    if (props.data && props.data.length > 0) {
        list = props.data.map((item,index) => {
            
            return(

                <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey={index}>
                       
                       <p className="u-display-flex u-h4-font-size u-primary-color u-decoration-none u-flex-row u-align-items-center u-justify-content-between u-full-width u-no-margin">
                            {item.title}  
                            <div className="u-flex-row u-display-flex u-align-items-center">     
                                <span className="u-primary-color u-small-font-size u-bold-weight">   
                                    تعداد سوالات ({item.questions.length}) 
                                </span>

                                <a className="fa fa-trash u-danger-color u-h4-font-size u-small-margin-right" onClick={() => props.removeList(item._id)}></a>
                            </div>      
                       </p> 
                    </Accordion.Toggle>
                    </Card.Header>
                    {
                        item.questions.length > 0

                        ?<Accordion.Collapse eventKey={index}>
                            <p>geloooooo</p>
                        </Accordion.Collapse>

                        :null
                    }
                    
                </Card>

            );
           
        });
    }
    return (
        <div className="o-container u-medium-padding-vertical">
            

            <Accordion>
                {list}
            </Accordion>
            {/* {queitionPro} */}
        </div>
    );
};

export default PlayList;
