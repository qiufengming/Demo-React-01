import React from 'react' // 先从当前文件夹去找react，当前文件夹里面没有才会去node_modules中去找
import { Row,Col } from 'antd'
import Header from './components/Header'
import Footer from './components/Footer'
import NavLeft from './components/NavLeft'
import './style/common.less'
import Home from './pages/home'

export default class Admin extends React.Component{ // class 最后编译成object对象
	render(){
		return (
			<Row className="container">
				<Col span="4" className="nav-left">
					<NavLeft />
				</Col>
				<Col span="20" className="main">
					<Header />
					<Row className="content">
						{/* <Home /> */}
						{ this.props.children }
					</Row>
					<Footer />
				</Col>
			</Row>
		);
	}
}