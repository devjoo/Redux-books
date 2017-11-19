import React, { Component } from 'react';
import { connect } from 'react-redux';

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

export default connect(mapStateToProps)(BookList);



/*
* 컨테이너는 리덕스에 의해 만들어지는 스테이트를 직접 접근하 컴포넌트
 */