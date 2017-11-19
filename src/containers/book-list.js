import React, { Component } from 'react';
import { connect } from 'react-redux';
import selectBook from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component{
    renderList(){
        return(
            this.props.books.map((book, index) => {
                return <li key={index} className="list-group-item">{book.title}</li>
            })
        )
    }

    render(){
        console.log(this.props.books); // -> 리턴
        return(
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps(state) {
    // 무엇이라도 props로 리턴된다
    return{
        books: state.books
    };
    
}


// 이 함수로 반환받은 것이 북 리스트 컨테이너의 props로 연결될 것 이다
function mapDispatchToProps(dispatch) {
    // selectBook이 호출될때 마다 , 결과는 리듀서로 전달되어야만 한다
    return bindActionCreators({ selectBook : selectBook }, dispatch);
}

// 컴포넌트에서 컨테이너로 북리스트를 바꿔야 하는데 이는 새로운 dispatch 메소드인
// selectBook을 알아야 하고 이는 prop로 이용이 가능하다
export default connect(mapStateToProps, mapDispatchToProps)(BookList);



/*
* 컨테이너는 리덕스에 의해 만들어지는 스테이트를 직접 접근하 컴포넌트
 */