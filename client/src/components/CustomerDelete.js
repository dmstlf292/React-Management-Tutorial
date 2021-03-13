import React from 'react';

class CustomerDelete extends React.Component{

    //삭제 기능 api 함수 만들어주기
    deleteCustomer(id){
        // 예시 : /api/customers/7
        const url='/api/customers/' + id;
        fetch(url,{
            method: 'DELETE'
        });
        //삭제가 이루어지고 새롭게 바뀐 고객화면을 다시 화면에 출력하게 하기 
        this.props.stateRefresh();
    }


    render(){
        return(
            <button onClick ={(e) => {this.deleteCustomer(this.props.id)}}>삭제</button>
        )
    }
}

export default CustomerDelete;
