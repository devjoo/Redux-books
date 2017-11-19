import React, { Component } from 'react';

export default class BookList extends Component{
    renderList(){
        return(
            this.props.books.map((book, index)=>{
                return <li key={index} className="list-group-item">{book.title}</li>
            })
        )
    }

    render(){
        return(
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

/*
* 컨테이너는 리덕스에 의해 만들어지는 스테이트를 직접 접근하 컴포넌트
* */