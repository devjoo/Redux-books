import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
    render(){
        if (!this.props.book){
            return <div>책을 선택하여 시작하세요</div>
        }

        return(
            <div>
                <h3>This detail is :</h3>
                <div>Title : {this.props.book.title}</div>
                <div>Pages : {this.props.book.pages}</div>
            </div>
        );
    }
}

// state를 props로 맵핑한다
function mapStateToProps(state) {
    return{
        book : state.activeBook
    }
}

export default connect(mapStateToProps)(BookDetail)