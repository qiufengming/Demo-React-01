import React from 'react'

export default class Child extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			count: 0
		};
	}
	componentWillMount(){
        console.log('will mount 组件初始化之前');
    }

    componentDidMount(){
        console.log('did mount  组件Dom插入完之后');
    }

    componentWillReceiveProps(newProps){
        console.log('will props' + newProps.name + '来自父组件属性的传递时调用的方法');
    }

    shouldComponentUpdate(){
        console.log('should upate 组件更新')
        return true;
    }

    componentWillUpdate(){
        console.log('will upate 组件更新之前')
    }

    componentDidUpdate(){
        console.log('did upate 组件更新之后')
    }

	render(){
		return <div>
			<p>这里是子组件，测试子组件的生命周期</p>
			<p>{ this.props.name }</p>
		</div>
	}
}