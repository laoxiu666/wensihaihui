import { Calendar, Badge } from 'antd';
import React, { Component } from 'react';
import styles from './Calendar.css'
export default class CalendarHotel extends Component{
  constructor(props) {
    super(props)
    this.state = {
      
    }
  }
   
   getListData=(value)=> {
    let listData;
    switch (value.date()) {
      case 8:
        listData = [
          { type: 'warning', content: 'This is warning event.' },
          { type: 'success', content: 'This is usual event.' },
        ];
        break;
      case 10:
        listData = [
          { type: 'warning', content: 'This is warning event.' },
          { type: 'success', content: 'This is usual event.' },
          { type: 'error', content: 'This is error event.' },
        ];
        break;
      case 15:
        listData = [
          { type: 'warning', content: 'This is warning event' },
          { type: 'success', content: 'This is very long usual event。。....' },
          { type: 'error', content: 'This is error event 1.' },
          { type: 'error', content: 'This is error event 2.' },
          { type: 'error', content: 'This is error event 3.' },
          { type: 'error', content: 'This is error event 4.' },
        ];
        break;
      default:
    }
    return listData || [];
  }
  
   dateCellRender=(value)=> {
    const listData =this.getListData(value);
    return (
      <ul className="events">
        {listData.map(item => (
          <li key={item.content}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
      </ul>
    );
  }
  
   getMonthData=(value)=> {
    if (value.month() === 8) {
      return 1394;
    }
  }

   monthCellRender=(value)=> {
    const num = this.getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  }

  render(){
    return(
      <div className={styles.Calendar}>
        <Calendar dateCellRender={this.dateCellRender} monthCellRender={this.monthCellRender}  />
      </div>
    )
  }
}