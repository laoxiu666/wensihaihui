import MovieList from './MoviList'
import React, { Component } from 'react';

import { Layout, Menu} from 'antd';
// const { SubMenu } = Menu;
import{Link,Route} from 'react-router-dom'
const {  Content,  Sider } = Layout;

export default class MovieContainer extends Component{

       render(){
         return(
          <Layout style={{ padding: '24px 0', background: '#fff' }}>
          <Sider width={200} style={{ background: '#fff' }}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%' }}
            >
                <Menu.Item key="1"> <Link to='/movie/in_theaters/1'>正上演</Link></Menu.Item>
                <Menu.Item key="2"><Link to='/movie/coming_soon/1'>即将演</Link></Menu.Item>
                <Menu.Item key="3"><Link to='/movie/top250/1'>top260</Link></Menu.Item>
      
            </Menu>
          </Sider>
          <Content style={{ padding: '0 24px', minHeight: 280 }}>
          <Route path='/movie/:type/:currentPage' render={ (props)=> <MovieList {...props}/> }></Route>
          
          </Content>
        </Layout>
         )
       }

}