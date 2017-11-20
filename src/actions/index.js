// selectBook is an actionCreator!!! 이것은 액션 반환이 필요하다
// 타입 프로퍼트 오브젝트이다
export function selectBook(book) {
    return(
        {
            type : 'BOOK_SELECTED',
            payload : book
        }
    );
}